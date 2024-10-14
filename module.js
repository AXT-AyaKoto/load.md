/** ================================================================================================
 * テンプレート
================================================================================================= */

/**
 * ページのロード完了を待つ
 */
await Promise.race([
    // ページのロード完了を待つ
    new Promise((resolve) => { window.addEventListener("DOMContentLoaded", resolve, { once: true }); }),
    // document.readyStateがinteractiveになるのを待つ(1秒ごとに確認)
    new Promise((resolve) => {
        const check = () => { if (document.readyState === "interactive") { resolve(); } else { setTimeout(check, 1000); } };
        check();
    }),
]);


/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => Array.from(document.querySelectorAll(selector));

/** ================================================================================================
 * モジュールの読み込み
================================================================================================= */

/** @description - marked : markdown → HTML */
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

/** @description - highlight.js : コードブロックのシンタックスハイライト */
import hljs from "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/es/highlight.min.js";

/** ================================================================================================
 * 以下、本体
================================================================================================= */

$$("article[data-load-md-js]").forEach(async article => {
    const attrValue = article.getAttribute("data-load-md-js");
    // markdownを取得
    let markdown = attrValue ? await (await fetch(attrValue)).text() : article.textContent;
    // markdown → HTML
    article.innerHTML = marked.parse(markdown, { "breaks": true });
    // コードブロックのシンタックスハイライト
    article.querySelectorAll("pre code").forEach(block => { hljs.highlightElement(block); });
});
