import{M as l,C as r,b as a}from"./chunk-HLWAVYOI-2a3fe10e.js";import{h as o}from"./html-ce322a52.js";import{j as t}from"./jsx-runtime-cb8d4007.js";import{u as c}from"./index-87610f67.js";import"./iframe-80f30750.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./index-11d98b33.js";import"./index-ee85f255.js";import"./index-356e4a49.js";function u(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3"},c(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Buttons/TextButton"}),`
`,t.jsx(e.h1,{id:"textbutton",children:"TextButton"}),`
`,t.jsx(r,{children:t.jsx(a,{name:"Default",children:o`
      <button type="button" class="jumpu-text-button">テキストボタン</button>
    `})}),`
`,t.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,t.jsx(e.h3,{id:"anchor",children:"Anchor"}),`
`,t.jsx(r,{children:t.jsx(a,{name:"Anchor",children:o` <a href="#" class="jumpu-text-button">テキストボタン</a> `})}),`
`,t.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,t.jsx(r,{children:t.jsx(a,{name:"Disabled",children:o`
      <button type="button" disabled class="jumpu-text-button">
        テキストボタン
      </button>
    `})})]})}function b(n={}){const{wrapper:e}=Object.assign({},c(),n.components);return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}const m=()=>o`
      <button type="button" class="jumpu-text-button">テキストボタン</button>
    `;m.storyName="Default";m.parameters={storySource:{source:'html`\n      <button type="button" class="jumpu-text-button">テキストボタン</button>\n    `'}};const i=()=>o` <a href="#" class="jumpu-text-button">テキストボタン</a> `;i.storyName="Anchor";i.parameters={storySource:{source:'html` <a href="#" class="jumpu-text-button">テキストボタン</a> `'}};const d=()=>o`
      <button type="button" disabled class="jumpu-text-button">
        テキストボタン
      </button>
    `;d.storyName="Disabled";d.parameters={storySource:{source:`html\`
      <button type="button" disabled class="jumpu-text-button">
        テキストボタン
      </button>
    \``}};const s={title:"Buttons/TextButton",tags:["stories-mdx"],includeStories:["defaultStory","anchor","disabled"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const B=["defaultStory","anchor","disabled"];export{B as __namedExportsOrder,i as anchor,s as default,m as defaultStory,d as disabled};