import{M as h,C as d,b as t}from"./chunk-S4VUQJ4A-c25b676b.js";import{h as e}from"./html-ce322a52.js";import{j as r}from"./jsx-runtime-d101a049.js";import{u as n}from"./index-8aff50c8.js";import"./iframe-90113845.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./index-d37d4223.js";import"./index-ee85f255.js";import"./index-356e4a49.js";function c(a){const s=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code"},n(),a.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{title:"Card/Card"}),`
`,r.jsx(s.h1,{id:"card",children:"Card"}),`
`,r.jsx(d,{children:r.jsx(t,{name:"Default",children:e` <div class="jumpu-card px-4 py-3 mb-4">カード</div> `})}),`
`,r.jsx(s.h2,{id:"stories",children:"Stories"}),`
`,r.jsx(s.h3,{id:"anchor",children:"Anchor"}),`
`,r.jsxs(s.p,{children:[r.jsx(s.code,{children:"jumpu-card"})," クラスは display プロパティを指定していません。つまり、どの HTML 要素を使用するかによって見た目が変化します。a 要素のカードを div 要素のカードと同じように表示したい場合は、 ",r.jsx(s.code,{children:"block"})," クラスを付与するなど、明示的に display プロパティを指定する必要があります。"]}),`
`,r.jsx(d,{children:r.jsx(t,{name:"Anchor",children:e`
      <a href="#" class="jumpu-card px-4 py-3 mb-4 block">リンクカード</a>
    `})}),`
`,r.jsx(s.h3,{id:"shadowed",children:"Shadowed"}),`
`,r.jsx(d,{children:r.jsx(t,{name:"Shadowed",children:e`
      <div class="jumpu-card px-4 py-3 border-0 shadow-lg">影付きカード</div>
    `})})]})}function l(a={}){const{wrapper:s}=Object.assign({},n(),a.components);return s?r.jsx(s,{...a,children:r.jsx(c,{...a})}):c(a)}const i=()=>e` <div class="jumpu-card px-4 py-3 mb-4">カード</div> `;i.storyName="Default";i.parameters={storySource:{source:'html` <div class="jumpu-card px-4 py-3 mb-4">カード</div> `'}};const m=()=>e`
      <a href="#" class="jumpu-card px-4 py-3 mb-4 block">リンクカード</a>
    `;m.storyName="Anchor";m.parameters={storySource:{source:'html`\n      <a href="#" class="jumpu-card px-4 py-3 mb-4 block">リンクカード</a>\n    `'}};const p=()=>e`
      <div class="jumpu-card px-4 py-3 border-0 shadow-lg">影付きカード</div>
    `;p.storyName="Shadowed";p.parameters={storySource:{source:'html`\n      <div class="jumpu-card px-4 py-3 border-0 shadow-lg">影付きカード</div>\n    `'}};const o={title:"Card/Card",tags:["stories-mdx"],includeStories:["defaultStory","anchor","shadowed"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const g=["defaultStory","anchor","shadowed"];export{g as __namedExportsOrder,m as anchor,o as default,i as defaultStory,p as shadowed};
//# sourceMappingURL=Card.stories-6b1829e1.js.map
