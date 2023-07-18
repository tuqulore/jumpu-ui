import{M as y,C as s,b as a}from"./chunk-S4VUQJ4A-b75dce8a.js";import{h as t}from"./html-ce322a52.js";import{j as e}from"./jsx-runtime-337f9cf6.js";import{u as p}from"./index-2f97f2e8.js";import"./iframe-53293f60.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-f25de5ba.js";import"./index-356e4a49.js";const{useEffect:f}=__STORYBOOK_MODULE_CLIENT_API__,r=()=>(f(()=>{document.querySelector("#checkbox input:nth-child(3)").indeterminate=!0}),t`
    <div id="checkbox">
      <input
        type="checkbox"
        class="jumpu-input"
        value="checkbox-1"
        class="mr-4"
        checked
      />
      <input
        type="checkbox"
        class="jumpu-input"
        value="checkbox-2"
        class="mr-4"
      />
      <input type="checkbox" class="jumpu-input" value="checkbox-3" />
    </div>
  `);function l(c){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3"},p(),c.components);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Forms/Input"}),`
`,e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"Text",children:t` <input type="text" class="jumpu-input" placeholder="名前" /> `})}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"texticon",children:"TextIcon"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"TextIcon",children:t`
      <p class="mb-4">Font Awesome 5を使った例です</p>
      <div class="mt-4">
        <label class="mb-1 block" for="search-input"
          ><i class="fas fa-search"></i> 検索</label
        >
        <input
          type="text"
          class="jumpu-input"
          placeholder="タイトル、著者、etc."
          id="search-input"
        />
      </div>
      <div class="mt-4">
        <label class="mb-1 block" for="search-email"
          ><i class="fas fa-envelope"></i> メール</label
        >
        <input
          type="email"
          class="jumpu-input"
          placeholder="user@example.com"
          id="search-email"
        />
      </div>
    `})}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"Number",children:t` <input type="number" class="jumpu-input" placeholder="0" /> `})}),`
`,e.jsx(n.h3,{id:"email",children:"Email"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"Email",children:t`
      <input type="email" class="jumpu-input" placeholder="example@hoge.com" />
    `})}),`
`,e.jsx(n.h3,{id:"date",children:"Date"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"Date",children:t` <input type="date" class="jumpu-input" /> `})}),`
`,e.jsx(n.h3,{id:"radio",children:"Radio"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"Radio",children:t`
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-1"
        class="mr-4"
        checked
      />
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-2"
      />
    `})}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,`
`,e.jsx(s,{children:e.jsx(a,{name:"Checkbox",children:r.bind({})})}),`
`,e.jsx(n.h3,{id:"file",children:"File"}),`
`,e.jsx(s,{children:e.jsx(a,{name:"File",children:t` <input type="file" class="jumpu-input" /> `})})]})}function k(c={}){const{wrapper:n}=Object.assign({},p(),c.components);return n?e.jsx(n,{...c,children:e.jsx(l,{...c})}):l(c)}const u=()=>t` <input type="text" class="jumpu-input" placeholder="名前" /> `;u.storyName="Text";u.parameters={storySource:{source:'html` <input type="text" class="jumpu-input" placeholder="名前" /> `'}};const o=()=>t`
      <p class="mb-4">Font Awesome 5を使った例です</p>
      <div class="mt-4">
        <label class="mb-1 block" for="search-input"
          ><i class="fas fa-search"></i> 検索</label
        >
        <input
          type="text"
          class="jumpu-input"
          placeholder="タイトル、著者、etc."
          id="search-input"
        />
      </div>
      <div class="mt-4">
        <label class="mb-1 block" for="search-email"
          ><i class="fas fa-envelope"></i> メール</label
        >
        <input
          type="email"
          class="jumpu-input"
          placeholder="user@example.com"
          id="search-email"
        />
      </div>
    `;o.storyName="TextIcon";o.parameters={storySource:{source:`html\`
      <p class="mb-4">Font Awesome 5を使った例です</p>
      <div class="mt-4">
        <label class="mb-1 block" for="search-input"
          ><i class="fas fa-search"></i> 検索</label
        >
        <input
          type="text"
          class="jumpu-input"
          placeholder="タイトル、著者、etc."
          id="search-input"
        />
      </div>
      <div class="mt-4">
        <label class="mb-1 block" for="search-email"
          ><i class="fas fa-envelope"></i> メール</label
        >
        <input
          type="email"
          class="jumpu-input"
          placeholder="user@example.com"
          id="search-email"
        />
      </div>
    \``}};const m=()=>t` <input type="number" class="jumpu-input" placeholder="0" /> `;m.storyName="Number";m.parameters={storySource:{source:'html` <input type="number" class="jumpu-input" placeholder="0" /> `'}};const d=()=>t`
      <input type="email" class="jumpu-input" placeholder="example@hoge.com" />
    `;d.storyName="Email";d.parameters={storySource:{source:'html`\n      <input type="email" class="jumpu-input" placeholder="example@hoge.com" />\n    `'}};const h=()=>t` <input type="date" class="jumpu-input" /> `;h.storyName="Date";h.parameters={storySource:{source:'html` <input type="date" class="jumpu-input" /> `'}};const x=()=>t`
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-1"
        class="mr-4"
        checked
      />
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-2"
      />
    `;x.storyName="Radio";x.parameters={storySource:{source:`html\`
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-1"
        class="mr-4"
        checked
      />
      <input
        type="radio"
        class="jumpu-input"
        name="radio-sample"
        value="radio-2"
      />
    \``}};const b=r.bind({});b.storyName="Checkbox";b.parameters={storySource:{source:`() => {
  useEffect(() => {
    document.querySelector("#checkbox input:nth-child(3)").indeterminate = true;
  });
  return html\`
    <div id="checkbox">
      <input
        type="checkbox"
        class="jumpu-input"
        value="checkbox-1"
        class="mr-4"
        checked
      />
      <input
        type="checkbox"
        class="jumpu-input"
        value="checkbox-2"
        class="mr-4"
      />
      <input type="checkbox" class="jumpu-input" value="checkbox-3" />
    </div>
  \`;
}`}};const j=()=>t` <input type="file" class="jumpu-input" /> `;j.storyName="File";j.parameters={storySource:{source:'html` <input type="file" class="jumpu-input" /> `'}};const i={title:"Forms/Input",tags:["stories-mdx"],includeStories:["text","textIcon","number","email","date","radio","checkbox","file"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:k};const D=["CheckboxTemplate","text","textIcon","number","email","date","radio","checkbox","file"];export{r as CheckboxTemplate,D as __namedExportsOrder,b as checkbox,h as date,i as default,d as email,j as file,m as number,x as radio,u as text,o as textIcon};
//# sourceMappingURL=Input.stories-fa0450bb.js.map
