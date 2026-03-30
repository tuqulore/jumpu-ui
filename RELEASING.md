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
