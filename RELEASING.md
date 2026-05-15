# リリースガイド

このドキュメントでは、パッケージのリリース手順を説明します。

## 概要

このリポジトリでは2段階のワークフローでリリースを管理しています：

- **release.yaml**: 正式リリース用（手動実行）
- **publish.yaml**: npm公開用（自動実行 + 手動実行）

## バージョン管理の流れ

```
正式リリース (3.0.1)
    ↓
alpha開発版 (3.0.2-alpha.0) ← 手動でpublish可能
    ↓
正式リリース (3.0.2)
```

## 操作一覧

| やりたいこと          | 操作                                    |
| --------------------- | --------------------------------------- |
| 正式リリース          | release.yaml を手動実行 → PRマージ      |
| alphaバージョンに更新 | alpha PRをマージ（npmには公開されない） |
| alphaをnpmに公開      | publish.yaml を手動実行                 |

## 正式リリースの手順

### 1. release.yaml を実行

1. GitHub Actions の [release.yaml](https://github.com/tuqulore/jumpu-ui/actions/workflows/release.yaml) を開く
2. 「Run workflow」をクリック
3. semver（`patch` / `minor` / `major`）を選択
4. 「Run workflow」を実行

これにより、以下が自動的に行われます：

- releaseブランチが作成される
- 指定したsemverでバージョンがバンプされる
- リリースPR（`chore(release): vX.X.X`）が作成される

### 2. リリースPRをマージ

PRをレビューし、マージします。

マージすると、publish.yaml が自動的に実行され：

- npmにパッケージが公開される
- リリースタグ（`vX.X.X`）が作成される
- 安定版ドキュメントブランチ（`vX`）が更新される（→ https://jumpu-ui.pages.dev/ に反映）
- 次のalphaバージョンにバンプされる
- alpha PR（`chore(alpha): vX.X.X-alpha.0`）が作成される

### 3. alpha PRをマージ

alpha PRをマージして、mainブランチをalphaバージョンに更新します。

**この時点ではnpmには公開されません。**

## alpha版の公開手順

開発中にalpha版をnpmに公開したい場合：

### 1. publish.yaml を手動実行

1. GitHub Actions の [publish.yaml](https://github.com/tuqulore/jumpu-ui/actions/workflows/publish.yaml) を開く
2. 「Run workflow」をクリック
3. 「Run workflow」を実行

これにより、以下が自動的に行われます：

- 現在のalphaバージョンがnpmに公開される
- alphaタグ（`vX.X.X-alpha.N`）が作成される
- 次のalphaバージョンにバンプされる
- 新しいalpha PR（`chore(alpha): vX.X.X-alpha.N+1`）が作成される

### 2. alpha PRをマージ

alpha PRをマージして、mainブランチを次のalphaバージョンに更新します。

## 運用例

### シナリオ: v3.0.0 から開発を始める場合

```
main: 3.0.0

① release.yaml 実行 (patch)
   → リリースPR: "chore(release): v3.0.1"

② リリースPRマージ
   → npm publish (3.0.1)
   → タグ: v3.0.1
   → alpha PR: "chore(alpha): v3.0.2-alpha.0"

③ alpha PRマージ（npmには公開されない）
   → main: 3.0.2-alpha.0

... 開発期間 ...

④ publish.yaml 手動実行
   → npm publish (3.0.2-alpha.0)
   → タグ: v3.0.2-alpha.0
   → alpha PR: "chore(alpha): v3.0.2-alpha.1"

⑤ alpha PRマージ（npmには公開されない）
   → main: 3.0.2-alpha.1

... 開発続行 ...

⑥ release.yaml 実行 (patch)
   → リリースPR: "chore(release): v3.0.2"

⑦ リリースPRマージ
   → npm publish (3.0.2)
   → タグ: v3.0.2
   → alpha PR: "chore(alpha): v3.0.3-alpha.0"

...
```

## ドキュメントのデプロイ

ドキュメント（`packages/docs`）は Cloudflare Pages の Git 連携で、ブランチごとに別プロジェクトとしてデプロイしています。

| URL                               | ビルド元ブランチ | 内容                         |
| --------------------------------- | ---------------- | ---------------------------- |
| https://jumpu-ui.pages.dev/       | `v3`             | 最新メジャーの安定版（本番） |
| https://jumpu-ui-alpha.pages.dev/ | `main`           | 開発中の alpha 版            |
| https://jumpu-ui-v2.pages.dev/    | `v2`             | v2 系（凍結）                |
| https://jumpu-ui-v1.pages.dev/    | `v1`             | v1 系（凍結）                |

### Cloudflare Pages の構成

各プロジェクトの本番ブランチとプレビュー対象は以下のとおりです。**どのブランチも必ず1プロジェクトでしかビルドされない** よう、`jumpu-ui-alpha` 側でメジャーブランチを ignore しています。

| Project          | Production | Preview pattern | Ignore            |
| ---------------- | ---------- | --------------- | ----------------- |
| `jumpu-ui`       | `v3`       | `v3*`           | —                 |
| `jumpu-ui-alpha` | `main`     | `*`             | `v1*` `v2*` `v3*` |
| `jumpu-ui-v2`    | `v2`       | `v2*`           | —                 |
| `jumpu-ui-v1`    | `v1`       | `v1*`           | —                 |

ビルド設定はすべてのプロジェクトで共通です（新規プロジェクト作成時は既存の `jumpu-ui` プロジェクトと同じ内容をコピーしてください）。

### 安定ブランチ（`v3` など）について

- `vX`（`v3` など）はメジャーごとの **安定版ドキュメント専用ブランチ** です。
- 正式リリース（publish.yaml）時に、CI がそのメジャーの `vX` ブランチを最新の安定版コミットへ自動更新します。
- **手動で push しないでください。** CI 管理専用のブランチです。
- alpha 公開（publish.yaml の手動実行）では更新されません。

### docs の修正フロー

修正対象によってフローが変わります。

#### 最新メジャー（`v3`）の docs を直したい

`main` ブランチに対して PR を作成・マージしてください。

- `main` への変更は `jumpu-ui-alpha.pages.dev` に即時反映されます。
- `jumpu-ui.pages.dev`（安定版）には **次の正式リリース時に自動反映** されます（CI が `main` を `v3` に上書き更新するため）。
- 安定版へ即時反映したい場合は、`release.yaml` (patch) を実行してパッチリリースを切ってください。`v3` ブランチへの直接 push は採用しません（CI に上書きされるため）。

#### 過去メジャー（`v1` / `v2`）の docs を直したい

該当ブランチ（`v1` / `v2`）に対して直接 PR を作成・マージしてください。

- v1/v2 は CI の自動更新対象外なので、push した内容がそのまま `jumpu-ui-v1.pages.dev` / `jumpu-ui-v2.pages.dev` に反映されます。
- npm パッケージのリリースは不要です（docs のみのため）。

#### 複数のメジャーに同じ修正を入れたい

手動で cherry-pick してください。

```bash
# 例: main に入った修正を v2 にも入れる
git fetch origin
git checkout -b backport/<topic> origin/v2
git cherry-pick <commit-on-main>
git push -u origin backport/<topic>
# v2 向けに PR を作成してマージ
```

頻度が増えてきたら、自動 backport ツール（例: `korthout/backport-action`）の導入を検討します。

### 新しいメジャーバージョンをリリースするとき

`release.yaml` を `major` で実行すると、CI が新メジャーの `vX+1` ブランチを自動的に作成します（旧 `vX` ブランチはそのまま凍結されます）。あわせて Cloudflare Pages と config 側で以下の作業を行ってください。

以下は **v3 → v4 への切り替え** を例にした手順です（他メジャーへの切り替え時はバージョン数字を読み替えてください）。

#### 1. 旧メジャー（v3）用プロジェクトを新規作成

Cloudflare Pages で `jumpu-ui-v3` を新規作成し、以下を設定する：

- Production branch: `v3`
- Preview branch pattern: `v3*`
- Build settings: 既存の `jumpu-ui` プロジェクトと同じ内容をコピー

これで `https://jumpu-ui-v3.pages.dev/` が立ち上がります。

#### 2. `jumpu-ui` プロジェクトを新メジャーに付け替え

旧 v3 を専用プロジェクトに移したので、`jumpu-ui` を新メジャー `v4` に向ける：

- Production branch: `v3` → `v4`
- Preview branch pattern: `v3*` → `v4*`

`https://jumpu-ui.pages.dev/` が v4 安定版のドキュメントになります。

#### 3. `jumpu-ui-alpha` の ignore 更新

メジャーブランチの重複ビルドを避けるため、`v4*` を ignore に追加する：

- Ignore branch patterns: `v1*` `v2*` `v3*` → `v1*` `v2*` `v3*` `v4*`

#### 4. `config.mts` の nav 更新

`packages/docs/.vitepress/config.mts` の `nav.items` に旧 v3 へのリンクを追加する（main への PR としてマージ）：

```js
{ text: "v3", link: "https://jumpu-ui-v3.pages.dev/" },
```

## 注意事項

### Trusted Publishing

このリポジトリではnpmのTrusted Publishingを使用しています。npmトークンは不要で、GitHub ActionsのOIDC認証によりパッケージを公開します。

npmjs.comで各パッケージにTrusted Publisherを設定する必要があります：

- Organization/User: `tuqulore`
- Repository: `jumpu-ui`
- Workflow filename: `publish.yaml`

### alpha PRの取り扱い

- alpha PRは**すぐにマージ**してください（長期間放置しない）
- alpha PRをマージしても、npmには公開されません
- alphaを公開したい場合のみ、publish.yaml を手動実行してください

### 正式リリース時の注意

正式リリース（release.yaml）を実行する前に、既存のalpha PRがある場合はクローズまたは削除してください。
