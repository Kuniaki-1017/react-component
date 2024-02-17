
//=====機能=====//

//①選択した画像をTrim Beforeに表示✅
//②boforeに表示された画像に対しtrimMarkと余白、断裁位置を設定
//③trimボタンを押すと設定したプロパティでトリミングされる
//④トリミング後の画像をafterに表示
//⑤afterに表示された画像をダウンロード

//=====選択した画像をTrim begforeに描画=====//

const before = document.querySelector('.js-before');
const imgFile = document.querySelector('.js-imgFile');
//canvas要素を取得
const canvasEl = document.querySelector('.js-canvas');
//canvasのコンテキストを用意
const ctx = canvasEl.getContext('2d');

//imgeオブジェクトを生成
const image = new Image();
const cvsWidth = 800;
const cvsHeight = 800;

canvasEl.width = cvsWidth;
canvasEl.height = cvsHeight;



//loadLocalImg:ローカルの画像を読込む関数を定義
//引数に選択されたファイルオブジェクトが入る
function loadLocalImg(e) {
    //①こちらの関数の外でinput[file]がchangeしたときのイベント処理を記述しコールバックでこちらの関数を渡す
    //②input[file]にて選択されたファイルの取得
    //③選択されたファイルが正しい形式かチェック
    //④ファイルを読み込むためのFILE APIをインスタンス化
    //⑤選択されたファイルをインスタンス名.readAsDataURLで読み込む※読込結果はインスタンス名.resultに格納される
    //⑥File Apiで読み込んだファイルを任意のイベントで処理をする。ここではonload(読み込んだら)したら各処理を行う
    //⑦ブラウザがFile APIに対応しているかチェックする関数を作成し、その中でinput[file]のchangeイベントを発火させる


    //引数に渡されたファイル情報を取得
    //e.target/files[0]の中にimgの情報が入っている
    let fileData = e.target.files[0];
    console.log(fileData.type);

    //画像ファイル以外はエラーを出す
    //fileData.type→ファイルのMIMETYPEを返す。match('image.*')は選択されたファイルタイプがimageで始まるか判定する
    if (!fileData.type.match('image.*')) {
        alert('画像ファイルを選択してください');
        return;
    }

    //FileReaderオブジェクトを使ってファイルを読み込み
    const reader = new FileReader();
    //ファイル読込を実行
    reader.readAsDataURL(fileData);
    //インスタンス名.reaadAs~が実行されると下記.onladが実行されresult等の値が取得できる
    //onloadの他にエラーが発生した時用の.onerrorなどもある
    reader.onload = function () {

        //読み込んだファイル表示用のimgタグを生成
        let img = document.createElement('img');
        //imgタグのsrcに画像データを設定
        img.src = reader.result;
        //上記imgタグをbeforeの子要素に挿入
        before.appendChild(img);
    }
}



//ブラウザがFIle APIに対応しているか確認※条件式内に判定したいブラウザAPI等の情報を入れることで判定できる
if (window.File && window.FileReader && window.FileList && window.Blob) {
    //input[file]にてファイルが選択されたときの処理
    imgFile.addEventListener('change', loadLocalImg, false);
} else {
    imgFile.style.display = 'none'
    before.innerHTML = 'File APIに対応したブラウザでご確認ください'
}



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

//canvasの画像のダウンロード方法
const canvas = document.getElementById('imgArea');
const a = document.getElementById('a')
const ctx2 = canvas.getContext('2d');

ctx2.fillStyle = "blue";
ctx2.fillRect(10, 20, 100, 100);

//blobにはcanvasで作成したオブジェクトが入ってくるので定義の必要なし。※イベントオブジェクトのようなもの
canvas.toBlob((blob) => {
    a.href = window.URL.createObjectURL(blob);
})

//Blobの文字をbase64に変換する方法
// const str = '小沼　邦明';
// const blob = new Blob([str], { type: 'text/plan' });

// const reader = new FileReader();
// let b64 = '';
// reader.onload = () => {
//     b64 = reader.result;

// }

// reader.readAsDataURL(blob)

// const result = window.atob(b64.replace(/^.*,/, ''));

// console.log(result);


