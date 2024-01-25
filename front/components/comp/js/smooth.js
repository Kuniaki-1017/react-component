// スムーススクロール
/* ページ内のaタグの内、href属性の値が#から始まる要素を全件取得 */
/* a[href^="#"]のように=の前に^を付けるとhrefの値の先頭を「任意の値（下記では#を指定）から始まる」という指定ができる */
/* 注意：^="#"の「^」は厳密には正規表現ではなくCSSセレクタ */
const scrolllinks = document.querySelectorAll('a[href^="/#"]');
let headerH = document.getElementsByTagName('header')[0].offsetHeight;

// let headerH = document.getElementsByTagName('header')[0].offsetHeight;


/* 取得した#から始まるaタグ全てにクリックイベント登録 */
scrolllinks.forEach((scrollLink) => {

    scrollLink.addEventListener('click', (e) => {

        console.log(headerH)
        e.preventDefault();
        /* ヘッダーの高さを取得※TagNameは配列で返されるため[0]を忘れずに */

        /* 要素のhref属性の値を取得 href="#hoge" → #hogeを取得 */
        /* scrollLink = クリックされた要素自身※全ての取得した#から始まるaタグに対しイベント登録しているため */
        const hrefLink = scrollLink.getAttribute('href');
        /* 取得した#hogeをreplace()を使って、hogeにする replaceは指定した文字を任意の文字に置換できる */
        /* string.replase('対象の値', '置換したい文字') */
        const newHash = hrefLink.replace('/#', '')
        /* 移動したい先の要素を取得。*/
        const targetContent = document.getElementById(newHash);
        console.log('targetContent', targetContent)
        /* 移動先の要素の位置情報を取得。*/
        /*getBoundingClientRect().topでviewport(見えている画面)の上端から要素の上端までの距離を取得できる */
        /* 数値が0の場合は要素の上端が画面の（ページではない）上端にくっついてる状態。ーなら要素の上端が少し隠れている */
        const rectTop = targetContent.getBoundingClientRect().top;

        console.log(newHash)
        /* marginによる要素位置がおかしなところのみmarginTopを取得 */
        /*関数の外でmarginTopを定義しないと後で使えない */
        let marginTop = 0;
        if (newHash === 'info') {
            //style.hogeだとインラインスタイルしか取得できないためgetComputedStyleを使用
            // 計算されたスタイルを取得※.getComputedStyle(targetContent);にてオブジェクトを生成しないと使用できない
            const computedStyle = window.getComputedStyle(targetContent);
            // 上下左右の margin を取得
            marginTop = computedStyle.getPropertyValue('margin-top').replace('px', '');
        }
        console.log("marrgin", marginTop)
        // console.log(computedMt)
        /* ページ上端から現在の位置のスクロール量を取得 */
        const positionY = window.scrollY;
        /* ビュポートから要素の上端までの距離とスクロール量を足すことで常にページの上端から要素までの位置を取得できる */
        /* .getBoundingClientRect().top;だけだと、スクロールした分ページ上端からの距離が短くなってしまう*/
        /* なのでスクロールした分を足すことによって常にページの上端から要素までの距離を固定で取得できる */
        /* .getBoundingClientRect().top;はブラウザ表示領域の上端からの距離だが=ページ上端から要素までの位置-スクロール量を計測*/
        /* ヘッダー分位置調整：ヘッダーの高さの分引いてあげることでその分スクロール量は減る+調整分 */
        /* 三項演算子でmarginTopがあった場合、その分スクロール量を減らす処理 */
        const target = marginTop ? rectTop + positionY - 160 - headerH : rectTop + positionY - headerH;
        /* windw.scrollToでスムーススクロールを実装 */
        /* topにてページ上部からどの位置に移動するか決める */
        /* ページの上端から要素までの距離が欲しかったためgetBoundingClientRect().top;とwindow.scrollYを使った */
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    });



});


// 別ページ遷移後のスムーススクロール
/* 現在表示されているページのhashを取得 */
/*http://hhoge.com/company/#info というページの場合は#infoが取得される*/
const urlHash = window.location.hash;

/* urlHashが存在した場合の処理 */
if (urlHash) {
    /* 取得したhashの文字列をsliceの文字列操作で2番目以降を取得。例：#info → info */
    const newHash = urlHash.slice(1)
    const target = document.getElementById(newHash);
    if (target) {
        // ページトップから開始（ブラウザ差異を考慮して併用）
        /*ページを読み込むときに#値がついたままだとスムーススクロールしてしまうためそれを防いでる */
        /*history.replaceState(null, '', window.location.pathname)でスムーススクロールが実行される前に、ブラウザの履歴が変更*/
        /*ページの履歴が更新されます。これにより、ユーザーが戻るボタンを使用した際に、スムーススクロールが発生しないようになります。 */
        /* window.location.pathnameは現在表示されているURLのドメインとクエリ文字列を除いた値を取得できる*/
        /* つまりhttp://hhoge.com/company/#infoの場合　→ /company/が取得される*/
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo(0, 0);

        console.log(target)
        /* 遅延読み込み対策をする際は下記emoveLazyLoad()を作って対策：現在不要のため未作成 */
        // removeLazyLoad();

        /* loadイベントでページが完全に読み込まれた後の処理を記述 */
        window.addEventListener("load", () => {


            /* marginによる要素位置がおかしなところのみmarginTopを取得 */
            /*関数の外でmarginTopを定義しないと後で使えない */
            let marginTop = 0;
            if (newHash === 'info') {
                console.log('haddddd')
                //style.hogeだとインラインスタイルしか取得できないためgetComputedStyleを使用
                // 計算されたスタイルを取得※.getComputedStyle(targetContent);にてオブジェクトを生成しないと使用できない
                const computedStyle = window.getComputedStyle(target);
                // 上下左右の margin を取得
                marginTop = computedStyle.getPropertyValue('margin-top').replace('px', '');
            }

            /*   const target = document.getElementById(urlHash.slice(1));で取得した値と */
            /* 現在のスクロール量とヘッダーの高さを計算してスムーススクロールの量を算出 */
            const position = marginTop ? target.getBoundingClientRect().top + window.scrollY - marginTop - headerH : target.getBoundingClientRect().top + window.scrollY - headerH;
            /* window.scrollToでスクロールアニメーションを実行 */
            window.scrollTo({
                top: position,
                behavior: "smooth",
            });

            // ハッシュを再設定
            /* つまりhttp://hhoge.com/company/#infoに戻すような感じ */
            history.replaceState(null, '', window.location.pathname + urlHash);
        });
    }
}
