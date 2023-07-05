import{M as j,C as s,b as l}from"./chunk-PCJTTTQV-d912b297.js";import{h as t}from"./html-ce322a52.js";import{j as a}from"./jsx-runtime-361364a0.js";import{u as i}from"./index-23f2b291.js";import"./iframe-2d152616.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-f25de5ba.js";import"./index-356e4a49.js";function n(d){const u=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},i(),d.components);return a.jsxs(a.Fragment,{children:[a.jsx(j,{title:"Status/Tag"}),`
`,a.jsx(u.h1,{id:"tag",children:"Tag"}),`
`,a.jsx(u.p,{children:'デフォルトではクリッカブルにしない設計になっています。何かクリック等のアクションを受け入れるのであれば、 a 要素、 button 要素、 [role="button"] 属性などを採用します。'}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Default",children:t`
      <div class="jumpu-tag ">デフォルト</div>
      <div class="jumpu-tag bg-green-100">検討中</div>
      <div class="jumpu-tag bg-red-100">着手</div>
      <div class="jumpu-tag bg-yellow-100">作業済</div>
      <div class="jumpu-tag bg-pink-100">確認中</div>
      <div class="jumpu-tag bg-gray-100">ペンディング</div>
      <div class="jumpu-tag bg-blue-100">TypeScript</div>
      <div class="jumpu-tag bg-indigo-100">Git</div>
      <div class="jumpu-tag bg-purple-100">Design</div>
    `})}),`
`,a.jsx(u.h2,{id:"stories",children:"Stories"}),`
`,a.jsx(u.h3,{id:"rounded",children:"Rounded"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Rounded",children:t`
      <div class="jumpu-tag rounded-full ">デフォルト</div>
      <div class="jumpu-tag rounded-full bg-green-100">検討中</div>
      <div class="jumpu-tag rounded-full bg-red-100">着手</div>
      <div class="jumpu-tag rounded-full bg-yellow-100">作業済</div>
      <div class="jumpu-tag rounded-full bg-pink-100">確認中</div>
      <div class="jumpu-tag rounded-full bg-gray-100">ペンディング</div>
      <div class="jumpu-tag rounded-full bg-blue-100">TypeScript</div>
      <div class="jumpu-tag rounded-full bg-indigo-100">Git</div>
      <div class="jumpu-tag rounded-full bg-purple-100">Design</div>
    `})}),`
`,a.jsx(u.h3,{id:"anchor",children:"Anchor"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Anchor",children:t`
    <a href="#" class="jumpu-tag">デフォルト</a>
  `})}),`
`,a.jsx(u.h3,{id:"button",children:"Button"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Button",children:t`
    <button class="jumpu-tag">デフォルト</button>
  `})}),`
`,a.jsx(u.h3,{id:"aria-button-role",children:"ARIA button role"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"ARIA button role",children:t`
    <div class="jumpu-tag" tabindex="0" role="button">デフォルト</div>
  `})}),`
`,a.jsx(u.h3,{id:"closable",children:"Closable"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Closable",children:t`
      <div class="jumpu-tag">
        デフォルト
        <div role="button" aria-label="閉じる" />
      </div>
    `})}),`
`,a.jsx(u.h3,{id:"anchorwithclose",children:"AnchorWithClose"}),`
`,a.jsx(u.p,{children:"a 要素を用いる場合、通常はユーザーを異なるページへ移動させる目的があります。閉じるボタンによる削除という取り消せない操作で、異なるページへ移動できなくなる振る舞いは、まちがいなくユーザーを混乱させることでしょう。したがって、a 要素のタグにおいて閉じるボタンを用意することは推奨されません。"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"AnchorWithClose",children:t`
      <a href="#" class="jumpu-tag">
        a 要素と閉じるアクションの競合
        <div role="button" aria-label="閉じる"></div>
      </a>
    `})}),`
`,a.jsx(u.h3,{id:"buttonwithclose",children:"ButtonWithClose"}),`
`,a.jsx(u.p,{children:"これはボタンの中にボタンがあります、混乱の元となり推奨できません。"}),`
`,a.jsx(s,{children:a.jsx(l,{name:"Closable Button",children:t`
      <button class="jumpu-tag">
        ボタン同士の競合
        <div role="button" aria-label="閉じる" />
      </button>
    `})})]})}function h(d={}){const{wrapper:u}=Object.assign({},i(),d.components);return u?a.jsx(u,{...d,children:a.jsx(n,{...d})}):n(d)}const o=()=>t`
      <div class="jumpu-tag ">デフォルト</div>
      <div class="jumpu-tag bg-green-100">検討中</div>
      <div class="jumpu-tag bg-red-100">着手</div>
      <div class="jumpu-tag bg-yellow-100">作業済</div>
      <div class="jumpu-tag bg-pink-100">確認中</div>
      <div class="jumpu-tag bg-gray-100">ペンディング</div>
      <div class="jumpu-tag bg-blue-100">TypeScript</div>
      <div class="jumpu-tag bg-indigo-100">Git</div>
      <div class="jumpu-tag bg-purple-100">Design</div>
    `;o.storyName="Default";o.parameters={storySource:{source:`html\`
      <div class="jumpu-tag ">デフォルト</div>
      <div class="jumpu-tag bg-green-100">検討中</div>
      <div class="jumpu-tag bg-red-100">着手</div>
      <div class="jumpu-tag bg-yellow-100">作業済</div>
      <div class="jumpu-tag bg-pink-100">確認中</div>
      <div class="jumpu-tag bg-gray-100">ペンディング</div>
      <div class="jumpu-tag bg-blue-100">TypeScript</div>
      <div class="jumpu-tag bg-indigo-100">Git</div>
      <div class="jumpu-tag bg-purple-100">Design</div>
    \``}};const r=()=>t`
      <div class="jumpu-tag rounded-full ">デフォルト</div>
      <div class="jumpu-tag rounded-full bg-green-100">検討中</div>
      <div class="jumpu-tag rounded-full bg-red-100">着手</div>
      <div class="jumpu-tag rounded-full bg-yellow-100">作業済</div>
      <div class="jumpu-tag rounded-full bg-pink-100">確認中</div>
      <div class="jumpu-tag rounded-full bg-gray-100">ペンディング</div>
      <div class="jumpu-tag rounded-full bg-blue-100">TypeScript</div>
      <div class="jumpu-tag rounded-full bg-indigo-100">Git</div>
      <div class="jumpu-tag rounded-full bg-purple-100">Design</div>
    `;r.storyName="Rounded";r.parameters={storySource:{source:`html\`
      <div class="jumpu-tag rounded-full ">デフォルト</div>
      <div class="jumpu-tag rounded-full bg-green-100">検討中</div>
      <div class="jumpu-tag rounded-full bg-red-100">着手</div>
      <div class="jumpu-tag rounded-full bg-yellow-100">作業済</div>
      <div class="jumpu-tag rounded-full bg-pink-100">確認中</div>
      <div class="jumpu-tag rounded-full bg-gray-100">ペンディング</div>
      <div class="jumpu-tag rounded-full bg-blue-100">TypeScript</div>
      <div class="jumpu-tag rounded-full bg-indigo-100">Git</div>
      <div class="jumpu-tag rounded-full bg-purple-100">Design</div>
    \``}};const c=()=>t`
    <a href="#" class="jumpu-tag">デフォルト</a>
  `;c.storyName="Anchor";c.parameters={storySource:{source:'html`\n    <a href="#" class="jumpu-tag">デフォルト</a>\n  `'}};const g=()=>t`
    <button class="jumpu-tag">デフォルト</button>
  `;g.storyName="Button";g.parameters={storySource:{source:'html`\n    <button class="jumpu-tag">デフォルト</button>\n  `'}};const p=()=>t`
    <div class="jumpu-tag" tabindex="0" role="button">デフォルト</div>
  `;p.storyName="ARIA button role";p.parameters={storySource:{source:'html`\n    <div class="jumpu-tag" tabindex="0" role="button">デフォルト</div>\n  `'}};const m=()=>t`
      <div class="jumpu-tag">
        デフォルト
        <div role="button" aria-label="閉じる" />
      </div>
    `;m.storyName="Closable";m.parameters={storySource:{source:`html\`
      <div class="jumpu-tag">
        デフォルト
        <div role="button" aria-label="閉じる" />
      </div>
    \``}};const v=()=>t`
      <a href="#" class="jumpu-tag">
        a 要素と閉じるアクションの競合
        <div role="button" aria-label="閉じる"></div>
      </a>
    `;v.storyName="AnchorWithClose";v.parameters={storySource:{source:`html\`
      <a href="#" class="jumpu-tag">
        a 要素と閉じるアクションの競合
        <div role="button" aria-label="閉じる"></div>
      </a>
    \``}};const b=()=>t`
      <button class="jumpu-tag">
        ボタン同士の競合
        <div role="button" aria-label="閉じる" />
      </button>
    `;b.storyName="Closable Button";b.parameters={storySource:{source:`html\`
      <button class="jumpu-tag">
        ボタン同士の競合
        <div role="button" aria-label="閉じる" />
      </button>
    \``}};const e={title:"Status/Tag",tags:["stories-mdx"],includeStories:["defaultStory","rounded","anchor","button","ariaButtonRole","closable","anchorWithClose","closableButton"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:h};const N=["defaultStory","rounded","anchor","button","ariaButtonRole","closable","anchorWithClose","closableButton"];export{N as __namedExportsOrder,c as anchor,v as anchorWithClose,p as ariaButtonRole,g as button,m as closable,b as closableButton,e as default,o as defaultStory,r as rounded};
//# sourceMappingURL=Tag.stories-6098580d.js.map
