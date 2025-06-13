# Modal-Dialog

## Default

:::raw

<dialog id="dialog-1" class="jumpu-modal-dialog jumpu-card fixed top-1/2 left-1/2 -translate-1/2 " onclick="if(event.target !== document.querySelector('.dialog-content')){event.target.close()}">
  <button onclick="document.querySelector('#dialog-1').close()" class="jumpu-icon-button absolute top-2 right-2">✗</button>
  <div class="pt-10 min-h-64 px-8 py-4 dialog-content">
    <h2 class="mb-4 font-bold text-lg">モーダル・ダイアログ</h2>
    <p class="my-4">3年ほど前（2022年）になりますが、<a class="underline" href="https://github.com/tuqulore/jumpu-ui/issues/182">Modal Dialogコンポーネントの実装</a>で議論した結果、jumpu UI のコンポーネントとしては実装しないことになりました。ただ、Headless UI 等のフレームワークに依存するまでもなく、ツクロアのボイラープレートでもJSXが利用可能になることなど、当時と状況が変わってきているため、このコンポーネントは試験的に Jumpu UI として実装を試みています。</p>
    <p>このモーダルダイアログの背景はクールです。（<a class="underline" href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/dialog">MDNのサイト参照</a>）</p>
  </div>
</dialog>

<button onclick="document.querySelector('#dialog-1').showModal()" class="jumpu-button m-40">ダイアログを表示</button>

:::

```html
<dialog
  id="dialog-1"
  class="jumpu-modal-dialog jumpu-card -translate-1/2 fixed left-1/2 top-1/2"
  onclick="if(event.target !== document.querySelector('.dialog-content')){event.target.close()}"
>
  <button
    onclick="document.querySelector('#dialog-1').close()"
    class="jumpu-icon-button absolute right-2 top-2"
  >
    ✗
  </button>
  <div class="dialog-content min-h-64 px-8 py-4 pt-10">
    <p>このモーダルダイアログの背景はクールです</p>
  </div>
</dialog>

<button
  onclick="document.querySelector('#dialog-1').showModal()"
  class="jumpu-button m-40"
>
  ダイアログを表示
</button>
```
