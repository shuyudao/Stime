<template>

    <div id="article">
        <h2>基于本地数据库的 IP 地址查询 PHP 源码</h2>
        <p class="post-date">2019-8-9</p>
        <div id="content" class="post-body">
          <div id="content" class="entry-content">
            <h2>基本介绍</h2><ol><li>桥接模式（Bridge模式）是指：将现实与抽象放在两个不同的类层次中，使两个层次可以独立改变。</li><li>是一种结构型设计模式</li><li>Bridge模式基于类的最小设计原则，通过使用封装、聚合及继承等行为让不同的类承担不同的职责。它的主要特点是把抽象与行为实现分离开来，从而可以保持部分的独立性以及对应它们的功能扩展。</li></ol><p><strong>原理类图</strong></p><p><img src="https://i.loli.net/2019/09/30/2eCV5ziDrSuoUph.png" alt="683744-20160930102718453-1750189602.png" title="683744-20160930102718453-1750189602.png"></p><ol><li>Client类：桥接模式的调用者</li><li>抽象类（Abstraction）：维护了Implementor即它的实现类，二者是聚合关系，Abstraction充当桥接类</li><li>RefinedAbstraction：是Abstraction抽象类的子类</li><li>Implementor：行为实现类的接口</li><li>ConcreteImplementorA/B：行为的具体实现类</li></ol><p>此处的抽象类和接口是聚合的关系：调用与被调用关系</p><h3>实例代码</h3><p><strong>要求：</strong>现在要对不同手机类型的不同品牌实现操作编程（比如开机、关机、上网、打电话等），不同品牌的手机实现的方式不同。</p><p><img src="https://i.loli.net/2019/09/30/sAJBiwXkumo1UDI.png" alt="批注 2019-09-30 195325.png" title="批注 2019-09-30 195325.png"></p><p><strong>传统方式解决：</strong></p><p><img src="https://i.loli.net/2019/09/30/vOuN7AUP4XzhjML.png" alt="批注 2019-09-30 195652.png" title="批注 2019-09-30 195652.png"></p><p>传统的方式的缺陷很明显，随着手机种类或品牌的增加，要增加许多的实现类，造成“类爆炸”，所以，这里使用桥接模式，来改造解决这种问题。</p><p><strong>按照桥接模式改造的UML图</strong></p><p><img src="https://i.loli.net/2019/09/30/jH2qzMcxEiF7RAo.png" alt="批注 2019-09-30 200601.png" title="批注 2019-09-30 200601.png"></p><pre class="line-numbers  language-java"><code class="  language-java"><span class="token comment">//品牌接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Brand</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>

<span class="token comment">//具体品牌实现</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XiaoMi</span> <span class="token keyword">implements</span> <span class="token class-name">Brand</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xiaomi手机开机了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xiaomi手机关机了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Xiaomi手机打电话"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//...其他品牌按照如上类似实现</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><pre class="line-numbers  language-java"><code class="  language-java"><span class="token comment">//手机抽象类（桥接类）</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Brand</span> brand<span class="token punctuation">;</span> <span class="token comment">//组合品牌</span>
    <span class="token comment">//构造器</span>
    <span class="token keyword">public</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//close、call方法...</span>
<span class="token punctuation">}</span>

<span class="token comment">//继承自Phone的各个种类手机</span>
<span class="token comment">//折叠手机</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FoldedPhone</span> <span class="token keyword">extends</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    
    <span class="token comment">//构造器</span>
    <span class="token keyword">public</span> <span class="token class-name">FoldedPhone</span><span class="token punctuation">(</span><span class="token class-name">Brand</span> brand<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用父类</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用父类</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"折叠样式手机"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//其他种类...</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>用一用</p><pre class="line-numbers  language-java"><code class="  language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取折叠式手机（样式+品牌）</span>
        
        <span class="token class-name">Phone</span> phone1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FoldedPhone</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">XiaoMi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获得了一个折叠式的小米手机</span>
        phone1<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Xiaomi手机开机了</span>
        phone1<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Xiaomi手机关机了</span>
        
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>如果此时，多出来一种的手机，叫全面屏类型手机，那么我只需要增加一个Phone的实现类即可，同样多一种品牌手机只需要新增一个Brand的实现类即可。符合单一原则，也不会产生类爆炸的现象。</p><h3>注意事项和细节</h3><ol><li>实现了抽象和实现部分的分离，从而极大的提高了系统的灵活性，让抽象部分和实现部分独立开来，有助于系统进行分层设计，从而产生更好的结构化系统。</li><li>对于系统的高层部分，只需要知道抽象部分和实现部分的接口就可以了，其它的部分由具体的业务完成。</li><li>桥接模式代替多层继承方案，可以减少子类的个数，降低系统的管理和维护成本</li><li>桥接模式的引入增加了系统的理解和设计难度，由于聚合关系建立在抽象层，要求开发者针对抽象进行设计和编程</li><li>桥接模式要求正确识别出系统中两个独立变化的维度，因此其使用范围有一定的局限性，即需要由这样的应用场景。</li></ol><h3>应用场景</h3><blockquote><p>对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。</p></blockquote>        </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.15.0/plugins/line-numbers/prism-line-numbers.css");

#content{
    font-size:18px;
    padding-top: 24px;
}
#article{
    width: 860px;
    margin: 20px auto;
    font-family: 'Noto Serif SC', serif;
}
#article>h2{
    color: #000;
    font-size: 28px;
    padding-bottom:20px;
}
.post-body img{
  width: 100%;
}
.post-body ul,.post-body ol{
  padding-left: 20px;
}
.post-date{
  color: #A7ADBA;
}


/* 基本文章排版 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

figcaption,
figure,
main { /* 1 */
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */

figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

a:active,
a:hover {
  outline-width: 0;
}

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */

dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */

mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Change the border, margin, and padding in all browsers (opinionated).
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */

details, /* 1 */
menu {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

canvas {
  display: inline-block;
}

/**
 * Add the correct display in IE.
 */

template {
  display: none;
}

/* Hidden
   ========================================================================== */

/**
 * Add the correct display in IE 10-.
 */

[hidden] {
  display: none;
}

html {
  font-family: 'Noto Serif SC', serif;
  font-size: 16px;
}

blockquote {
  margin: 0;
  color: #65737E;
  border-left: 4px solid #A7ADBA;
  padding-left: 2em;
}

hr {
  border: 0;
  border-bottom: 1px solid #A7ADBA;
  margin-bottom: 4em;
  margin-top: 4em;
}

blockquote p {
  margin-bottom: 1em !important;
}

iframe {
  width: 498px;
  height: 510px;
  max-width: 100%;
  border: none;
  margin: 0 auto;
  display: block;
}

.spotify {
  height: 380px;
}

/*pre {
  overflow: auto;
  background-color: #D8DEE9;
  color: #65737E;
  padding: 1em;

}

code {
  font-family: "Fira Mono", "DejaVu Sans Mono", "Lucida Console", monospace;
}*/

body {
  margin: 0;
}

twitterwidget {
  margin: 0 auto;
}

a {
  text-decoration: underline;
  color: #343D46;
  /*color: #6699CC;*/
}

a:hover {
  text-decoration: underline;
}

.music-gallery img {
  width: 100%;
}

.music-gallery ul {
  list-style-type: none;
  padding: 0;
}

.music-gallery li {
  margin-bottom: .5em;
}

.twitter {
  color: #0C9DF2;
}

.zhihu {
  color: #0767c8;
}

.weibo {
  color: #E80025;
}

.github {
  color: #333333;
}

.medium {
  color: #00ab6b;
}

.email {
  color: #4285F4;
}

.telegram {
  color: #179cde;
}

.non-style-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.description {
  text-align: center;
  margin-top: 4em;
}

.description img{
  border-radius: 50%;
  max-width: 128px;
}

.description .name {
  font-weight: bold;
}

.description .desc {
  color: #65737E;
}

nav .nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

nav .nav {
  padding: 2em;
}

nav .nav .nav-item {
  display: inline-block;
  margin-right: .5em;
}

.container {
  width: 640px;
  margin: 0 auto;
}

.post-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.post-list-item {
  margin-bottom: .5em;
}

.skill-list {

}

.talk-list-item, .skill-list-item {
  margin-top: .2em;
}

.hr {
  height: 0;
  font-size: 1em;
  line-height: 0;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid #A7ADBA;
  margin-top: 3em;
  margin-bottom: 1.2em;
  cursor: default;
  user-select: none;
}

.hr span {
  background-color: #fff;
  padding-left: .5em;
  padding-right: .5em;
  color: #A7ADBA;
}

.post-body {
  width: 960px;
  margin: 0 auto;
  line-height: 1.8em;
}

.post-body .title {
}

.post-body .date {
  color: #A7ADBA;
  margin-bottom: 2em;  
}

.post-body p {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.post-content img {
  max-width: 100%;
  margin: 0 auto;
  display: block;
}

.post-body video {
  max-width: 100%;
}

.post-footer {
  text-align: center;
  color: #65737E;
}

.post-footer p {
  margin-top: .5em;
  margin-bottom: .5em;
}

#footer {
  margin-top: 2em;
  padding: 1em;
  background-color: #fafafa;
  text-align: center;
  color: #C0C5CE;
}

#footer a {
  color: #C0C5CE;
}

.timeline ul li {
  margin-bottom: 1em;
}



img.small {
  width: 400px;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }

  .bmc {
    max-width: 60% !important;
  }

  .post-body {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }

  .post-body img {
    width: 100%;
  }


  .signature {
    max-width: 128px !important;
  }

  .description .desc {
    padding-left: 2em;
    padding-right: 2em;
  }

  iframe {
    width: 100%;
    height: 280px;
  }

  .spotify {
    display: none;
    height: 380px;
  }
  
}


.bmc {
  max-width: 30%;
}

code {
  padding: 1rem !important;
}

p code {
  padding: 0.2em 0.4em !important;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27,31,35,0.05);
  border-radius: 3px;
}

strong {
  background: #efefef;
}

</style>