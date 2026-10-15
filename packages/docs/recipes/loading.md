# 読み込み中

内容がまだ表示できないことを、待っている利用者に伝える場面です。

## 設計の指針

**何を待っているのか**を文字でも伝えます。
回転する印だけでは、処理中なのか壊れているのかが区別できません。

[Spinner](/components/spinner) には `role="status"` と `aria-label` を与えてください。
支援技術には、回転そのものは何も伝えません。

読み込みが終わったら、内容に置き換えます。
印を出したまま内容を足さないでください。

## 例

### 印だけ

```html preview
<div class="jumpu-card mx-auto flex h-48 w-96 items-center justify-center">
  <div class="jumpu-spinner">
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</div>
```

### 文字を添える

```html preview
<div
  class="jumpu-card mx-auto flex h-48 w-96 flex-col items-center justify-center"
>
  <div class="mb-4 font-bold">読み込み中です</div>
  <div class="jumpu-spinner">
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</div>
```
