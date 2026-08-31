# Avatar

人や組織を表す小さな画像です。

## いつ使うか

**誰のものかを示す**ときに使います。
発言、コメント、アカウントの表示が該当します。

画像そのものを見せたい場合には使いません。
切り抜かれて円になるため、内容が欠けます。

## 例

### 基本

:::raw

<div class="jumpu-avatar">
  <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
</div>

:::

```html
<div class="jumpu-avatar">
  <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
</div>
```

### リンクとして使う

`a` 要素で使うと `display: block` になります。

:::raw

<a href="#" class="jumpu-avatar">
  <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
</a>

:::

```html
<a href="#" class="jumpu-avatar">
  <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
</a>
```

## ユーティリティによる調整

| 調整したいこと | 書き方                     | 備考                                        |
| :------------- | :------------------------- | :------------------------------------------ |
| 大きさ         | `w-8 h-8`                  | 既定は `w-16 h-16` 相当。縦横を同じにします |
| 角の形         | `rounded-none` / `rounded` | 既定は円                                    |

:::raw

<div class="flex items-end gap-2">
  <div class="jumpu-avatar w-8 h-8">
    <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
  </div>
  <div class="jumpu-avatar rounded-none">
    <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
  </div>
  <div class="jumpu-avatar rounded">
    <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
  </div>
</div>

:::

```html
<div class="jumpu-avatar h-8 w-8">…</div>
<div class="jumpu-avatar rounded-none">…</div>
<div class="jumpu-avatar rounded">…</div>
```

大きさは `--spacing(n)` で組まれているため、文字サイズには追従しません。

## マークアップ規約

| 位置       | 要素 / 属性            | 要否 | 効果                                       |
| :--------- | :--------------------- | :--- | :----------------------------------------- |
| ルート     | 任意の要素             | 必須 | `a` の場合のみ `display: block` になります |
| ルート     | `class="jumpu-avatar"` | 必須 |                                            |
| ルート直下 | `img`                  | 必須 | 幅と高さがルートいっぱいに広がります       |

## 状態

状態に応じた見た目を持ちません。

リンクとして使う場合、押せることが視覚的に伝わりません。
`hover:opacity-80` などのユーティリティで補ってください。

## アクセシビリティ

対応する APG のパターンはありません。

`img` の `alt` には**誰であるか**を書きます。
「アバター」「プロフィール画像」のような、種類を述べる文字列は書きません。

隣に名前が表示されていて画像が装飾でしかない場合は、`alt=""` にして読み上げの対象から外します。
