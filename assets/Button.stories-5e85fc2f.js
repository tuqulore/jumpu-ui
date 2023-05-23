import{M as y,C as o,b as s}from"./chunk-PCJTTTQV-bd6487ea.js";import{h as n}from"./html-ce322a52.js";import{j as t}from"./jsx-runtime-39832fb2.js";import{u as a}from"./index-e4aed945.js";import"./iframe-a26cc13c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";import"./index-d37d4223.js";import"./index-f25de5ba.js";import"./index-356e4a49.js";function l(e){const u=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"Buttons/Button"}),`
`,t.jsx(u.h1,{id:"button",children:"Button"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Default",children:n` <button type="button" class="jumpu-button">ボタン</button> `})}),`
`,t.jsx(u.h2,{id:"stories",children:"Stories"}),`
`,t.jsx(u.h3,{id:"anchor",children:"Anchor"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Anchor",children:n` <a href="#" class="jumpu-button">リンクボタン</a> `})}),`
`,t.jsx(u.h3,{id:"other-element",children:"Other Element"}),`
`,t.jsx(u.p,{children:"button / a 要素以外でボタンを実現する場合は WAI-ARIA button ロールを使用してください。"}),`
`,`
`,t.jsx("blockquote",{cite:"https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role#sect1",children:t.jsx("p",{children:t.jsxs(u.p,{children:[t.jsx("strong",{children:"メモ:"})," 意味論的な ",t.jsx("code",{children:"<button>"})," や ",t.jsx("code",{children:'<input type="button">'}),' 要素の代わりに role="button" を使用する場合は、要素をフォーカス可能にし、ユーザーの入力を処理するためにクリック ( ',t.jsxs("code",{children:[" ",t.jsx("a",{href:"/ja/docs/Web/API/Element/click_event",title:"/ja/docs/Web/Reference/Events/click",children:" click "})," "]}),") イベントと ",t.jsx("kbd",{children:"Enter"})," キーと ",t.jsx("kbd",{children:"Space"})," キーを含むキーダウン (",t.jsxs("code",{children:[" ",t.jsx("a",{href:"/en-US/docs/Web/API/Element/keydown_event",title:"Currently only available in English (US)",class:"only-in-en-us",children:" keydown (en-US) "})," "]}),") イベントのイベントハンドラーを定義する必要があります。 ",t.jsx("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/button/button.html",class:"external",rel:" noopener",children:" 公式の WAI-ARIA サンプルコード "})," を参照してください。"]})})}),`
`,`
`,t.jsx(o,{children:t.jsx(s,{name:"[role=button]",children:n`
      <div class="jumpu-button" id="saveChanges" tabindex="0" role="button">
        ARIA: button ロール
      </div>
    `})}),`
`,t.jsx(u.h3,{id:"long-text",children:"Long Text"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Long Text",children:n`
      <button type="button" class="jumpu-button">利用規約に同意して登録</button>
    `})}),`
`,t.jsx(u.h3,{id:"size",children:"Size"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Size",children:n`
      <p class="mb-4">
        <button type="button" class="jumpu-button text-xs">極小のボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-sm">小さなボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-lg">大きなボタン</button>
      </p>
      <p>
        <button type="button" class="jumpu-button text-xl">
          もっと大きなボタン
        </button>
      </p>
    `})}),`
`,t.jsx(u.h3,{id:"full-width",children:"Full Width"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Full Width",children:n`
      <button type="button" class="jumpu-button w-full">
        横幅がいっぱいのボタン
      </button>
    `})}),`
`,t.jsx(u.h3,{id:"rounded",children:"Rounded"}),`
`,t.jsx(u.p,{children:"水平方向の余白が狭く見えてしまうときに px-6 など指定してみるとよい"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Rounded",children:n`
      <p class="mb-4">
        <button type="button" class="jumpu-button rounded-full">
          角丸のボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button rounded-full px-6">
          角丸のボタン
        </button>
      </p>
    `})}),`
`,t.jsx(u.h3,{id:"color",children:"Color"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Color",children:n`
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-success">
          成功しました
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-danger">削除します</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-warning text-black">
          下書き保存
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-gray-100 text-black">
          白いボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button bg-gray-700">
          黒いボタン
        </button>
      </p>
    `})}),`
`,t.jsx(u.h3,{id:"disabled",children:"Disabled"}),`
`,t.jsx(o,{children:t.jsx(s,{name:"Disabled",children:n`
      <button type="button" disabled class="jumpu-button">
        利用できないボタン
      </button>
    `})})]})}function g(e={}){const{wrapper:u}=Object.assign({},a(),e.components);return u?t.jsx(u,{...e,children:t.jsx(l,{...e})}):l(e)}const c=()=>n` <button type="button" class="jumpu-button">ボタン</button> `;c.storyName="Default";c.parameters={storySource:{source:'html` <button type="button" class="jumpu-button">ボタン</button> `'}};const p=()=>n` <a href="#" class="jumpu-button">リンクボタン</a> `;p.storyName="Anchor";p.parameters={storySource:{source:'html` <a href="#" class="jumpu-button">リンクボタン</a> `'}};const r=()=>n`
      <div class="jumpu-button" id="saveChanges" tabindex="0" role="button">
        ARIA: button ロール
      </div>
    `;r.storyName="[role=button]";r.parameters={storySource:{source:`html\`
      <div class="jumpu-button" id="saveChanges" tabindex="0" role="button">
        ARIA: button ロール
      </div>
    \``}};const m=()=>n`
      <button type="button" class="jumpu-button">利用規約に同意して登録</button>
    `;m.storyName="Long Text";m.parameters={storySource:{source:'html`\n      <button type="button" class="jumpu-button">利用規約に同意して登録</button>\n    `'}};const d=()=>n`
      <p class="mb-4">
        <button type="button" class="jumpu-button text-xs">極小のボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-sm">小さなボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-lg">大きなボタン</button>
      </p>
      <p>
        <button type="button" class="jumpu-button text-xl">
          もっと大きなボタン
        </button>
      </p>
    `;d.storyName="Size";d.parameters={storySource:{source:`html\`
      <p class="mb-4">
        <button type="button" class="jumpu-button text-xs">極小のボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-sm">小さなボタン</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button text-lg">大きなボタン</button>
      </p>
      <p>
        <button type="button" class="jumpu-button text-xl">
          もっと大きなボタン
        </button>
      </p>
    \``}};const i=()=>n`
      <button type="button" class="jumpu-button w-full">
        横幅がいっぱいのボタン
      </button>
    `;i.storyName="Full Width";i.parameters={storySource:{source:`html\`
      <button type="button" class="jumpu-button w-full">
        横幅がいっぱいのボタン
      </button>
    \``}};const j=()=>n`
      <p class="mb-4">
        <button type="button" class="jumpu-button rounded-full">
          角丸のボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button rounded-full px-6">
          角丸のボタン
        </button>
      </p>
    `;j.storyName="Rounded";j.parameters={storySource:{source:`html\`
      <p class="mb-4">
        <button type="button" class="jumpu-button rounded-full">
          角丸のボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button rounded-full px-6">
          角丸のボタン
        </button>
      </p>
    \``}};const h=()=>n`
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-success">
          成功しました
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-danger">削除します</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-warning text-black">
          下書き保存
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-gray-100 text-black">
          白いボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button bg-gray-700">
          黒いボタン
        </button>
      </p>
    `;h.storyName="Color";h.parameters={storySource:{source:`html\`
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-success">
          成功しました
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-danger">削除します</button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-warning text-black">
          下書き保存
        </button>
      </p>
      <p class="mb-4">
        <button type="button" class="jumpu-button bg-gray-100 text-black">
          白いボタン
        </button>
      </p>
      <p>
        <button type="button" class="jumpu-button bg-gray-700">
          黒いボタン
        </button>
      </p>
    \``}};const x=()=>n`
      <button type="button" disabled class="jumpu-button">
        利用できないボタン
      </button>
    `;x.storyName="Disabled";x.parameters={storySource:{source:`html\`
      <button type="button" disabled class="jumpu-button">
        利用できないボタン
      </button>
    \``}};const b={title:"Buttons/Button",tags:["stories-mdx"],includeStories:["defaultStory","anchor","roleButton","longText","size","fullWidth","rounded","color","disabled"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:g};const N=["defaultStory","anchor","roleButton","longText","size","fullWidth","rounded","color","disabled"];export{N as __namedExportsOrder,p as anchor,h as color,b as default,c as defaultStory,x as disabled,i as fullWidth,m as longText,r as roleButton,j as rounded,d as size};
//# sourceMappingURL=Button.stories-5e85fc2f.js.map
