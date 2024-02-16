const getQuery = (el) => {
    return document.querySelector(el);
}
const getId = (el) => {
    return document.getElementById(el);
}


const canvas = () => {
    const canvasEL = getQuery('.js-canvas');
    const cvsWidth = 800;
    const cvsHeight = 800;

    canvasEL.width = cvsWidth;
    canvasEL.height = cvsHeight;

    if (canvasEL.getContext) {
        //canvasの初期化
        const cvs = canvasEL.getContext('2d');
        //canvasに画像を表示するためのクラスをインスタンス化
        const cvsImg = new Image();
        //画像ファイルのパスを設定
        cvsImg.src = "https://www.tam-tam.co.jp/tipsnote/wpdata/wp-content/uploads/2017/10/canvas_image.jpg";
        //画像が読み込まれたら描画の処理を行う
        cvsImg.onload = function () {
            //drawImageで表示する画像の情報を設定
            //1:表示する画像のオブジェクト,2:X（横方向の開始位置）,3:Y(縦方向の開始位置),4:表示する画像の横幅,5:表示する画像の縦の高さ
            cvs.drawImage(cvsImg, 0, 0, this.width, this.height);
            console.log('imgWidth', this.width, 'imgHeight', this.height);
        }
    }
}

canvas();



