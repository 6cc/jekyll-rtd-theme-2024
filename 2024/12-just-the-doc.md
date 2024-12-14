
>　　　　　　　　6//?r=⭐　&d=2024/12/14 17:05:07　&b=m4nybjpj
## 搜索 | Just the Docs
https://docs.rubyist.cn/just-the-docs/docs/search/
|

搜索

>　　　　　　　　6//?r=⭐　&d=2024/12/14 17:05:49　&b=m4nycgjb
## The Korean keyword cannot be searched in the search function. · Issue #1047 · just-the-docs/just-the-docs
https://github.com/just-the-docs/just-the-docs/issues/1047
|

https://github.com/turbobit/lunr-languages

>　　　　　　　　6//?r=⭐　&d=2024/12/14 21:33:20　&b=m4o7whh1
## MihaiValentin/lunr-languages: A collection of languages stemmers and stopwords for Lunr Javascript library
https://github.com/MihaiValentin/lunr-languages
|

lunr-languages

>　　　　　　　　6//?r=⭐　&d=2024/12/14 17:16:58　&b=m4nyqs8m
## CAN NOT support Chinese search · Issue #452 · just-the-docs/just-the-docs
https://github.com/just-the-docs/just-the-docs/issues/452
|

CAN NOT support Chinese search

_includes/head.html
{% if site.search_enabled != false %}
  <script src="{{ '/assets/js/vendor/lunr.min.js' | relative_url }}"></script>
  <script src="{{ '/assets/js/vendor/lunr.stemmer.support.js' | relative_url }}"></script>
  <script src="{{ '/assets/js/vendor/lunr.zh.js' | relative_url }}"></script>
  <script>
    var idx = lunr(function () {
    this.use(lunr.zh);
    this.field('title', { boost: 10 });
    this.field('body');
    });
  </script>

{% endif %}
