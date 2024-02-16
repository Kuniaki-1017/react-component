
//=====ユーザー定義関数=====//
//セレクタから取得
const getQuery = (el) => {
    return document.querySelector(el);
}
//idから取得
const getId = (el) => {
    return document.getElementById(el);
}


//=====canvas+Imageクラスにて画像を表示=====//
// const canvas = () => {
//     const canvasEL = getQuery('.js-canvas');
//     const cvsWidth = 800;
//     const cvsHeight = 800;

//     canvasEL.width = cvsWidth;
//     canvasEL.height = cvsHeight;

//     if (canvasEL.getContext) {
//         //canvasの初期化
//         const cvs = canvasEL.getContext('2d');
//         //canvasに画像を表示するためのクラスをインスタンス化
//         const cvsImg = new Image();
//         //画像ファイルのパスを設定
//         cvsImg.src = "https://www.tam-tam.co.jp/tipsnote/wpdata/wp-content/uploads/2017/10/canvas_image.jpg";
//         //画像が読み込まれたら描画の処理を行う
//         cvsImg.onload = function () {
//             //drawImageメソッドで表示する画像の情報を設定しcanvas内に画像（cvsImg）を表示
//             //1:表示する画像のオブジェクト,2:X（横方向の開始位置）,3:Y(縦方向の開始位置),4:表示する画像の横幅,5:表示する画像の縦の高さ
//             cvs.drawImage(cvsImg, 0, 0, this.width, this.height);
//             console.log('imgWidth', this.width, 'imgHeight', this.height);
//         }
//     }
// }
// canvas();

//=====File APIにて画像のアップロードと表示=====//
const result = getQuery('.js-result');
const imgFile = getQuery('.js-imgFile');
console.log(result);
console.log(imgFile);

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
    console.log('選択されたファイル:', fileData);
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
        console.log('File API Result', reader.result)
        //imgタグのsrcに画像データを設定
        img.src = reader.result;
        //上記imgタグをresultクラスがついたタグに子要素に挿入
        result.appendChild(img);
    }
}



//ブラウザがFIle APIに対応しているか確認※条件式内に判定したいブラウザAPI等の情報を入れることで判定できる
if (window.File && window.FileReader && window.FileList && window.Blob) {
    //input[file]にてファイルが選択されたときの処理
    imgFile.addEventListener('change', loadLocalImg, false);
} else {
    imgFile.style.display = 'none'
    result.innerHTML = 'File APIに対応したブラウザでご確認ください'
}



