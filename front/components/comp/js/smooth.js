

/////////スムーススクロール///////// 
/* ページ内のaタグの内、href属性の値が#から始まる要素を全件取得 */
/* a[href^="#"]のように=の前に^を付けるとhrefの値の先頭を「任意の値（下記では#を指定）から始まる」という指定ができる */
/* 注意：^="#"の「^」は厳密には正規表現ではなくCSSセレクタ */
const scrolllinks = document.querySelectorAll('a[href^="/#"]');
/* 取得した#から始まるaタグ全てにクリックイベント登録 */
scrolllinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        /* 要素のhref属性の値を取得 href="#hoge" → #hogeを取得 */
        /* scrollLink = クリックされた要素自身※全ての取得した#から始まるaタグに対しイベント登録しているため */
        const hrefLink = scrollLink.getAttribute('href');
        /* 移動したい先の要素を取得。ただgetElementByIdは引数にidの値、つまり#がついていないhogeだけが欲しいので加工する */
        /* 取得した#hogeをreplace()を使って、hogeにする replaceは指定した文字を任意の文字に置換できる */
        /* string.replase('対象の値', '置換したい文字') */
        const targetContent = document.getElementById(hrefLink.replace('#', ''));
        /* 移動先の要素の位置情報を取得。*/
        /*getBoundingClientRect().topでviewport(見えている画面)の上端から要素の上端までの距離を取得できる */
        /* 数値が0の場合は要素の上端が画面の（ページではない）上端にくっついてる状態。ーなら要素の上端が少し隠れている */
        const rectTop = targetContent.getBoundingClientRect().top;
        /* ページ上端から現在の位置のスクロール量を取得 */
        const positionY = window.scrollY;
        /* ビュポートから要素の上端までの距離とスクロール量を足すことで常にページの上端から要素までの位置を取得できる */
        /* .getBoundingClientRect().top;だけだと、スクロールした分ページ上端からの距離が短くなってしまう*/
        /* なのでスクロールした分を足すことによって常にページの上端から要素までの距離を固定で取得できる */
        /* .getBoundingClientRect().top;はブラウザ表示領域の上端からの距離だが=ページ上端から要素までの位置-スクロール量を計測*/
        const target = rectTop + positionY;
        /* windw.scrollToでスムーススクロールを実装 */
        /* topにてページ上部からどの位置に移動するか決める */
        /* ページの上端から要素までの距離が欲しかったためgetBoundingClientRect().top;とwindow.scrollYを使った */
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    });