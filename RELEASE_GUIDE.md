# リリースガイド

## これは何

Jumpu UI のパッケージをリリースしていくにあたりおこなう作業手順を示したものです。

## 手順

### Versionup ワークフローの実行

[ワークフローの手動実行](https://docs.github.com/ja/actions/using-workflows/manually-running-a-workflow)を参考に実施してください。実施するとリリース用プルリクエストが作成されます。

1. [Versionup ワークフロー](https://github.com/tuqulore/jumpu-ui/actions/workflows/versionup.yaml)にアクセスします
2. プルダウン "Run workflow" を選択します
3. "next semantic version(s) value" に適切な次期バージョンを選択します
4. ボタン "Run workflow" を選択します

### リリース用プルリクエストのマージ

1. [レビュー](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)を通してマージします

### リリースの作成

[リリースの作成](https://docs.github.com/ja/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)を参考に実施してください。実施すると npm パッケージが公開されます。

1. [リリースの下書き](https://github.com/tuqulore/jumpu-ui/releases/new)を開始します
2. プルダウン "Choose a tag" 背選択します
3. リリース用プルリクエストで反映したバージョンを入力します
4. 選択アイテム "Create a new tag" を選択します
5. ボタン "Generate release notes" を選択します
6. 必要に応じてリリースノートを編集します
7. 必要に応じてチェック "Set as a pre-release" を選択します
8. ボタン "Publish release" を選択します
