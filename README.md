# load.md.js

HTML上にmarkdown文書を挿入するためのJavaScriptプログラムです。

## Usage

- `module.js`をモジュールとして読みこみます
- `data-load-md-js`属性を持つ`article`要素のtextContentがmarkdown文書とみなされてHTMLに自動変換されます
    - 要素内に直接確保化に、`data-load-md-js`属性の値にパスを指定することで、外部ファイルを読み込むこともできます
        - (この場合要素のtextContentは無視されます)
- [highlight.js](https://highlightjs.org/)を使用したシンタックスハイライトも自動で適用されます
    - `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/default.min.css`などを読み込むとハイライトが適用されます

## License

copyright (c) 2024- Ayasaka-Koto, All rights reserved.  

私に不利益が生じたり、公序良俗に反したりしない限り、基本的には自由に使用していただいて構いません。  
私が使用を許可したくない場合はその旨ご連絡いたします。その際は速やかに使用を中止していただきますようお願いいたします。  
使った際は、私の名前(綾坂こと)をどこかに記載していただけると嬉しいです。
