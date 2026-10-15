# アクセシビリティ方針

コンポーネントのマークアップは、[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) の仕様と [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)（APG）のパターンに従います。

各コンポーネントが対応するパターンは次のとおりです。
逸脱している箇所は、それぞれのコンポーネントのページに記載しています。

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

## 利用側に委ねること

次の 2 つはコンポーネントでは実現できません。
利用側で対応してください。

- `role="button"` を使う場合の、フォーカス可能にすることと Enter / Space キーへの対応
- フォームの入力欄と `label` の関連づけ

## 検証

自動検査だけでは足りません。
キーボードだけで操作できるか、支援技術で読み上げたときに意味が通るかを、実際に確認してください。
