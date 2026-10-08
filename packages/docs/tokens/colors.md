# Colors

色の尺度と、色に与えた役割を定めます。

## Primary

主要な操作と、選択されている状態に使います。
既定値は Tailwind CSS の blue で、`--color-primary-*` はその別名です。

<div class="flex flex-wrap gap-1 my-4">
  <span class="inline-flex rounded bg-primary-50 text-black text-xs px-2 py-1">50</span>
  <span class="inline-flex rounded bg-primary-100 text-black text-xs px-2 py-1">100</span>
  <span class="inline-flex rounded bg-primary-200 text-black text-xs px-2 py-1">200</span>
  <span class="inline-flex rounded bg-primary-300 text-black text-xs px-2 py-1">300</span>
  <span class="inline-flex rounded bg-primary-400 text-black text-xs px-2 py-1">400</span>
  <span class="inline-flex rounded bg-primary-500 text-white text-xs px-2 py-1">500</span>
  <span class="inline-flex rounded bg-primary-600 text-white text-xs px-2 py-1">600</span>
  <span class="inline-flex rounded bg-primary-700 text-white text-xs px-2 py-1">700</span>
  <span class="inline-flex rounded bg-primary-800 text-white text-xs px-2 py-1">800</span>
  <span class="inline-flex rounded bg-primary-900 text-white text-xs px-2 py-1">900</span>
  <span class="inline-flex rounded bg-primary-950 text-white text-xs px-2 py-1">950</span>
</div>

11 段階を配布していますが、コンポーネントが使うのは 3 段階だけです。

| 段階          | コンポーネントでの使われ方                             |
| :------------ | :----------------------------------------------------- |
| `primary-700` | ボタンの塗り、選択中のタブ、入力欄のフォーカス時の境界 |
| `primary-800` | Tabs のホバー時の文字色                                |
| `primary-100` | OutlinedButton / TextButton のホバー時の背景           |

残りの 8 段階は、利用側が自分の UI を組むための尺度です。

### 差し替えるときの制約

`.jumpu-button` は `primary-700` の上に白い文字を載せます。
明るい色に差し替えると文字が読めなくなるため、**白文字とのコントラスト比が確保できる明度を選んでください**。

`primary-100` はホバー時の背景として黒に近い文字と組み合わされます。
こちらは逆に、暗い色に差し替えると読めなくなります。

## Gray

境界と、押せることを示す背景に使います。
Tailwind CSS の gray をそのまま使い、Jumpu UI では定義していません。

| 段階                    | コンポーネントでの使われ方                                   |
| :---------------------- | :----------------------------------------------------------- |
| `gray-300`              | 境界の既定色。無効状態の塗り                                 |
| `gray-50`               | ホバー時の背景（Accordion、IconButton、Tabs のアクティブ時） |
| `gray-100` / `gray-200` | アクティブ時の背景                                           |
| `gray-400`              | Tabs のホバー時の境界                                        |

境界は `gray-300` の 1px が既定です。
役割としての「境界色」を表す変数は用意していないため、変更するには各コンポーネントを上書きする必要があります。

## ステータス

状態の通知に使います。
コントラストの関係上、原則として白抜きもしくは黒抜きで用いなければなりません。

<span class="inline-flex rounded-full bg-success text-white text-sm px-3 py-0.5">#15803D</span> **Success**：操作が正常に完了したときに使います。

<span class="inline-flex rounded-full bg-warning text-black text-sm px-3 py-0.5">#FACC15</span> **Warning**：これからおこなう操作に注意を払う必要があるときに使います。

<span class="inline-flex rounded-full bg-danger text-white text-sm px-3 py-0.5">#B80000</span> **Danger**：取り消せない操作など、最大限の注意を払う必要があるときに使います。

この 3 色はコンポーネントの内部では使っていません。
利用側が組み立てる場面のための色です。
使っている例は [Recipes](/recipes/login) にあります。
