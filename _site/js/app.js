// クエリ優先
var query = {};
location.search.replace( /[A-Z0-9]+?=(\w*)/gi, function(a) {
    query[ a.split('=').shift() ] = a.split('=').pop();
} );

// Reveal を初期化
Reveal.initialize({
    // 画面右下にある十字キーみたいなやつの表示/非表示(false)
    controls: (query.controls) ? (query.controls=="true") : true,

    // 画面下にあるページ進行状態を表すバーの表示/非表示(false)
    progress: (query.progress) ? (query.progress=="true") : true,

    // ハッシュタグ(url の #~)でページ位置を記憶するかどうかのフラグ(false)
    history: (query.history) ? (query.history=="true") : true,

    // transition の変化の感じ
    transition: query.transition || "fade",  // default/concave/linear/cube/page

    // テーマ切り替え
    theme: query.theme || "serif",    // default/neon

    // リンク(aタグ)にマウスを乗っけた時に 3D 演出をするかどうかのフラグ(true)
    rollingLinks: (query.rollingLinks) ? (query.rollingLinks=="true") : true,
});

// コードハイライト
hljs.initHighlightingOnLoad();
