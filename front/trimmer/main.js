
//=====設定(加工前)=====//
const x = 20;//選択画像の描画開始位置X
const y = 20;//選択画像の描画開始位置Y


//=====トリミング用の変数定義=====//
const sX = 0;//トリミング開始の始点X
const sY = 0;//トリミング開始の始点Y
const sWidth = 200;//トリミングの幅
const sHeight = 200;//トリミングの高さ
const dX = 200;//トリミング加工したデータの描画開始始点X
const dY = 200;//トリミング加工したデータの描画開始始点Y
const dWdidth = 200;//トリミング加工したデータの描画サイズ幅
const dHeight = 200;//トリミング加工したデータの描画サイズ高さ


//=====トリムマーク用の変数定義=====//
const cx = x + sX;//断裁位置X
const cy = y + sY;//断裁位置Y
const tr = 20;//トリムマークの長さ


//=====cavas要素の初期設定=====//
// canvas要素を取得、cvsに代入
const cvs = document.getElementById('canvas');
//canvasのサイズを設定※これを設定しないと画像描画が変になる
cvs.width = 1000;
cvs.height = 1000;
//canvasのコンテキスト生成
const ctx = cvs.getContext('2d');


//=====ダウンロード用の変数=====//
const fileName = "test.jpg";
const download = document.getElementById('download')


//=====トリムマーク描画の関数定義=====//
function trim(ctx, cx, cy, tr, sWidth, sHeight, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;

    //左上
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy - tr);
    ctx.lineTo(cx, cx - tr);
    //右上
    ctx.moveTo(cx + sWidth, cy);
    ctx.lineTo(cx + sWidth, cy - tr);
    ctx.lineTo(cx + sWidth + tr, cy);
    //左下
    ctx.moveTo(cx, cy + sHeight);
    ctx.lineTo(cx, cy + sHeight + tr);
    ctx.lineTo(cx - tr, cy + sHeight);
    //右下
    ctx.moveTo(cx + sWidth, cy + sHeight);
    ctx.lineTo(cx + sWidth, cy + sHeight + tr);
    ctx.lineTo(cx + sWidth + tr, cy + sHeight);
    ctx.stroke();
}



//=====メイン：ファイル選択、トリミング、ダウンロード処理=====//
//ファイルを選択用の取得
const imgFile = document.getElementById('file');
//ファイルを選択からファイルが選択された時の処理//
imgFile.addEventListener('change', (e) => {

    //キャンバスの中身をクリア
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    // 選択されたファイルのMIMEがimegeか判定
    if (e.target.files[0].type.match('image.*')) {
        // 選択されたファイルをimgDataに格納
        const imgData = e.target.files[0];
        console.log(imgData)

        //FileReaderオブジェクトをインスタンス化
        const reader = new FileReader();
        //ファイル読込を実行
        reader.readAsDataURL(imgData);
        reader.onload = () => {
            //imgオブジェクトをインスタンス化：後ほど画像を出力する時に使用
            const img = new Image();
            //選択した画像をインスタンス化したimgのsrcに代入
            //srcに代入する前にimgDataをURLのメソッドでURLに変換
            img.src = reader.result;
            img.onload = () => {
                const imgW = img.width;
                const imgH = img.height;
                console.log(imgW, imgH)
                ctx.drawImage(img, x, y, imgW, imgH);
            }
        }
        //トリムマーク
        trim(ctx, cx, cy, tr, sWidth, sHeight, 1, "red");


        //ダウンロード処理
        download.addEventListener('click', () => {
            cvs.toBlob((blob) => {
                saveAs(blob, fileName);
            }, 'image/jpeg');
        })

    } else {
        alert('img画像を選択してください')
    }
});


// ファイル保存などをクロスブラウザ対応で実装するには大変なので解決策としてFileSaver.jsを使用する
// 特にIEだとaタグのdownload属性がない
// FileSaver.jsは、Blob形式のデータをクロスブラウザの実装を行うことができるライブラリ






///////////////////////
//以下、調査情報
///////////////////////
//=====機能=====//

//①選択した画像をTrim Beforeに表示✅
//②boforeに表示された画像に対しtrimMarkと余白、断裁位置を設定
//③trimボタンを押すと設定したプロパティでトリミングされる
//④トリミング後の画像をafterに表示
//⑤afterに表示された画像をダウンロード

//=====選択した画像をTrim begforeに描画=====//

// const before = document.querySelector('.js-before');
// const imgFile = document.querySelector('.js-imgFile');
// //canvas要素を取得
// const canvasEl = document.querySelector('.js-canvas');
// //canvasのコンテキストを用意
// const ctx = canvasEl.getContext('2d');

// //imgeオブジェクトを生成
// const image = new Image();
// const cvsWidth = 800;
// const cvsHeight = 800;

// canvasEl.width = cvsWidth;
// canvasEl.height = cvsHeight;


//loadLocalImg:ローカルの画像を読込む関数を定義
//引数に選択されたファイルオブジェクトが入る
// function loadLocalImg(e) {
//     //①こちらの関数の外でinput[file]がchangeしたときのイベント処理を記述しコールバックでこちらの関数を渡す
//     //②input[file]にて選択されたファイルの取得
//     //③選択されたファイルが正しい形式かチェック
//     //④ファイルを読み込むためのFILE APIをインスタンス化
//     //⑤選択されたファイルをインスタンス名.readAsDataURLで読み込む※読込結果はインスタンス名.resultに格納される
//     //⑥File Apiで読み込んだファイルを任意のイベントで処理をする。ここではonload(読み込んだら)したら各処理を行う
//     //⑦ブラウザがFile APIに対応しているかチェックする関数を作成し、その中でinput[file]のchangeイベントを発火させる


//     //引数に渡されたファイル情報を取得
//     //e.target/files[0]の中にimgの情報が入っている
//     let fileData = e.target.files[0];
//     console.log(fileData.type);

//     //画像ファイル以外はエラーを出す
//     //fileData.type→ファイルのMIMETYPEを返す。match('image.*')は選択されたファイルタイプがimageで始まるか判定する
//     if (!fileData.type.match('image.*')) {
//         alert('画像ファイルを選択してください');
//         return;
//     }

//     //FileReaderオブジェクトを使ってファイルを読み込み
//     const reader = new FileReader();
//     //ファイル読込を実行
//     reader.readAsDataURL(fileData);
//     //インスタンス名.reaadAs~が実行されると下記.onladが実行されresult等の値が取得できる
//     //onloadの他にエラーが発生した時用の.onerrorなどもある
//     reader.onload = function () {

//         //読み込んだファイル表示用のimgタグを生成
//         let img = document.createElement('img');
//         //imgタグのsrcに画像データを設定
//         img.src = reader.result;
//         //上記imgタグをbeforeの子要素に挿入
//         before.appendChild(img);
//     }
// }

//ブラウザがFIle APIに対応しているか確認※条件式内に判定したいブラウザAPI等の情報を入れることで判定できる
// if (window.File && window.FileReader && window.FileList && window.Blob) {
//     //input[file]にてファイルが選択されたときの処理
//     imgFile.addEventListener('change', loadLocalImg, false);
// } else {
//     imgFile.style.display = 'none'
//     before.innerHTML = 'File APIに対応したブラウザでご確認ください'
// }

// //画像のパスをsrcに設定
// image.src = reader.result;
// // image.src = "https://www.tam-tam.co.jp/tipsnote/wpdata/wp-content/uploads/2017/10/canvas_image.jpg";
// //imge.srcに渡した画像が読み込まれてから処理するため、実行したい関数をimage.onloadに渡す
// image.onload = function () {
//     //drawImageの引数
//     //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
//     // ①image - トリミングしてブラウザに表示する画像自体。
//     // ②sx（ソース画像の x 軸）-このパラメーターは、x 軸から画像を切り抜くまたは切り抜きを開始する場所を示します。
//     // ③sy（ソース画像の y 軸）-このパラメーターは、y 軸から画像を切り抜くまたは切り抜きを開始する場所を示します。
//     // ④sWidth - sx から始まる画像の幅。
//     // ⑤sHeight - sy から始まる画像の高さ。
//     // ⑥dx - x 軸から画面に画像を描画し始めるポイント。
//     // ⑦dy - 画面上で y 軸から画像の描画を開始するポイント。
//     // ⑧dWidth - 画面に表示する必要のある画像の長さ。
//     // ⑨dHeight - 画面に表示する必要のある画像の高さ。
//     ctx.drawImage(image, 50, 100, 100, 100, 0, 0, 100, 100);
// }


//=====Blobの生成、FILE API読み込み、createObjectAPIの活用======//
//Blobの生成とFileAPIによる読み込み、createObjectURLにてデータのURL生成でダウンロードデータ生成
// const name = '小沼邦明';
// const a = document.getElementById('a')
// console.log(a)
// const blob = new Blob([name], { type: 'taxt/plain' });
// console.log(blob)
// const reader = new FileReader();
// reader.addEventListener('load', () => {
//     console.log(reader.result);
// })
// reader.readAsText(blob);

// a.href = window.URL.createObjectURL(blob);

// //canvasの画像のダウンロード方法
// const canvas = document.getElementById('imgArea');
// const a = document.getElementById('a')
// const ctx2 = canvas.getContext('2d');

// ctx2.fillStyle = "blue";
// ctx2.fillRect(10, 20, 100, 100);



////blobにはcanvasで作成したオブジェクトが入ってくるので定義の必要なし。※イベントオブジェクトのようなもの
// canvas.toBlob((blob) => {
//     a.href = window.URL.createObjectURL(blob);

// })

//Blobの文字をbase64に変換する方法
// const str = '小沼　邦明';
// const blob = new Blob([str], { type: 'text/plan' });

// const reader = new FileReader();
// let b64 = '';
// reader.onload = () => {
//     b64 = reader.result;

// }

// reader.readAsDataURL(blob)
//base64のデータは,より右側のデータを使用しないとエラーが起こるため取り除く
// const result = window.atob(b64.replace(/^.*,/, ''));

// console.log(result);

//===== FileSaver.jsの使用======//
//ファイル保存などをクロスブラウザ対応で実装するには大変なので解決策としてFileSaver.jsを使用する
//特にIEだとaタグのdownload属性がない
// FileSaver.jsは、Blob形式のデータをクロスブラウザの実装を行うことができるライブラリ






// const fileName = "test.jpg";
// canvas2.toBlob((blob) => {
//     saveAs(blob, fileName);
// }, 'image/jpeg');

//=====ファイルダウンロード用の関数定義=====//



//=====トリミング処理用の関数定義=====//
//トリミング関数：hoge.drawImage(要素,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight)
//要素(トリミング用の要素)
// sx      (元画像の切り抜き始点X)
// sy      (元画像の切り抜き始点Y)
// sWidth  (元画像の切り抜きサイズ：横幅)
// sHeight (元画像の切り抜きサイズ：高さ)
// dx      (Canvasの描画開始位置X)
// dy      (Canvasの描画開始位置Y)
// dWidth  (Canvasの描画サイズ：横幅)
// dHeight (Canvasの描画サイズ：高さ)
// trim = (el, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) => {
//     el.drawImage(
//         chara,
//         150,  // sx      (元画像の切り抜き始点X)
//         130,  // sy      (元画像の切り抜き始点Y)
//         130,  // sWidth  (元画像の切り抜きサイズ：横幅)
//         180,  // sHeight (元画像の切り抜きサイズ：高さ)
//         0,  // dx      (Canvasの描画開始位置X)
//         0,  // dy      (Canvasの描画開始位置Y)
//         480,  // dWidth  (Canvasの描画サイズ：横幅)
//         680   // dHeight (Canvasの描画サイズ：高さ)
//     )
// }

