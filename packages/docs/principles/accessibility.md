# アクセシビリティ方針

コンポーネントのマークアップは、[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) の仕様と [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)（APG）のパターンに従います。

ただし、従いきれていないものがあります。
このページは、どのパターンに対応し、どこが逸脱しているのかを記載します。

## パターンとの対応

| コンポーネント                                                                                                                                     | APG のパターン | 状態                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :--------------------- |
| [Button](/components/button)                                                                                                                       | Button         | 準拠                   |
| [Tabs](/components/tabs)、[BoxedTabs](/components/boxed-tabs)                                                                                      | Tabs           | 準拠                   |
| [Tag](/components/tag)、[FilledTag](/components/filled-tag) の閉じる操作                                                                           | Button         | 準拠                   |
| [Accordion](/components/accordion)                                                                                                                 | Accordion      | 逸脱あり               |
| [IconButton](/components/icon-button) のツールチップ                                                                                               | Tooltip        | 逸脱あり               |
| [ToggleSwitch](/components/toggle-switch)                                                                                                          | Switch         | 採用せず               |
| [Input](/components/input)、[Select](/components/select)、[Textarea](/components/textarea)                                                         | 該当なし       | ネイティブ要素に委ねる |
| [Avatar](/components/avatar)、[Badge](/components/badge)、[Balloon](/components/balloon)、[Card](/components/card)、[Spinner](/components/spinner) | 該当なし       | 表示のみ               |

## 逸脱している箇所

### Accordion

APG のパターンは、開閉するボタンを見出し要素（`h2` など）で包むことと、パネルを `hidden` 属性で隠すことを示しています。

Jumpu UI の Accordion は、ボタンを見出しで包まず、パネルを `aria-hidden` で隠します。
CSS が `[aria-hidden]` をセレクターに使っているためです。

見出しで包むと、`button` がルートの直下でなくなり、スタイルが当たらなくなります。
CSS が直下の子だけを対象にしているためです。
**現在の実装では、APG の構造に合わせることと見た目を保つことを両立できません。**

パネルの隠し方も、変更にはコンポーネントの構造の変更を伴います。

### IconButton のツールチップ

ツールチップは `:hover` でのみ表示されます。
キーボードでフォーカスしたときには表示されません。

APG の Tooltip パターンは、フォーカス時にも表示することを求めています。
ツールチップの内容を `aria-describedby` で参照しているため、支援技術には伝わりますが、目で見て操作する利用者には届きません。

### ToggleSwitch

APG の Switch パターン（`role="switch"` と `aria-checked`）を採らず、`input[type="checkbox"]` を使っています。

ネイティブ要素のほうがブラウザと支援技術の対応が安定しているため、この選択自体は意図的なものです。
ただし現在のサンプルは `label` にテキストを持たないため、アクセシブルな名前がありません。

## 利用側に委ねること

次の 2 つはコンポーネントでは実現できません。
利用側で対応してください。

- `role="button"` を使う場合の、フォーカス可能にすることと Enter / Space キーへの対応
- フォームの入力欄と `label` の関連づけ

## 検証

自動検査だけでは足りません。
キーボードだけで操作できるか、支援技術で読み上げたときに意味が通るかを、実際に確認してください。
