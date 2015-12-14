// クエリ優先
var query = {};
location.search.replace( /[A-Z0-9]+?=(\w*)/gi, function(a) {
    query[ a.split('=').shift() ] = a.split('=').pop();
} );

// Reveal を初期化
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: query.theme || "simple",    // default/neon
  transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

  dependencies: [
    { src: '/vendor/lib/js/markdown/marked.js', condition: function() { return !document.body.classList; } },
    { src: '/vendor/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/vendor/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/vendor/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: '/vendor/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: '/vendor/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});
