# リリースガイド

## これは何

Jumpu UI のパッケージをリリースしていくにあたりおこなう作業手順を示したものです

## 不安定版リリース

1. `main` ブランチに移動し最新の状態にします `git swtich main; git pull origin main`
2. リリース作業用のブランチを作成します `git switch -c chore-release`
3. ローカルでバージョニングのためのタスクを実行します `yarn versionup prerelease`
4. 差分をコミットします `git add .; git commit -m "chore(release): <v + lerna.jsonに記載のあるversion>"`
5. `chore-release` ブランチをリモートにプッシュします `git push origin chore-release`
6. `chore-release` ブランチでプルリクエストを作成します
   - マージ先は `main` ブランチに指定します
7. レビューを通してプルリクエストをマージします
8. `main` ブランチに移動し最新の状態にします `git switch main; git pull origin main`
9. タグを作成します `git tag -a <v + lerna.jsonに記載のあるversion> -m <v + lerna.jsonに記載のあるversion>`
10. タグをリモートにプッシュします `git push origin <lerna.jsonに記載のあるversion>`
11. GitHub Release を作成します
    - 本文に `CHANGELOG.md` の当該バージョンのセクションを含めます
    - `This is a pre-release` にチェックを入れます

## 安定版リリース

1. `main` ブランチに移動し最新の状態にします `git swtich main; git pull origin main`
2. リリース作業用のブランチを作成します `git switch -c chore-release`
3. ローカルでバージョニングのためのタスクを実行します `yarn versionup prerelease --conventional-graduate`
4. 差分をコミットします `git add .; git commit -m "chore(release): <v + lerna.jsonに記載のあるversion>"`
5. `chore-release` ブランチをリモートにプッシュします `git push origin chore-release`
6. `chore-release` ブランチでプルリクエストを作成します
   - マージ先は `main` ブランチに指定します
7. レビューを通してプルリクエストをマージします
8. `main` ブランチに移動し最新の状態にします `git switch main; git pull origin main`
9. タグを作成します `git tag -a <v + lerna.jsonに記載のあるversion> -m <v + lerna.jsonに記載のあるversion>`
10. タグをリモートにプッシュします `git push origin <lerna.jsonに記載のあるversion>`
11. GitHub Release を作成します
    - 本文に `CHANGELOG.md` の当該バージョンのセクションを含めます
