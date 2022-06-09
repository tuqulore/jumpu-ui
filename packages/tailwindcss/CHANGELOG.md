# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.1-alpha.4](https://github.com/tuqulore/jumpu-ui/compare/v1.0.1-alpha.3...v1.0.1-alpha.4) (2022-04-06)

**Note:** Version bump only for package @jumpu-ui/tailwindcss

## [1.0.1-alpha.3](https://github.com/tuqulore/jumpu-ui/compare/v1.0.1-alpha.1...v1.0.1-alpha.3) (2022-03-25)

### Bug Fixes

- **Tabs:** theme function returns undefined ([2bec635](https://github.com/tuqulore/jumpu-ui/commit/2bec63576f86ac9076bbda17fd0877ae663f1e10))

### Features

- `outline: "none"` を取り除く ([ae3b044](https://github.com/tuqulore/jumpu-ui/commit/ae3b0448b6993779439e59290e3ce3095e43bf0b))
- add `jumpu.prefix` option ([2a8e895](https://github.com/tuqulore/jumpu-ui/commit/2a8e8956ba7e394ff02a6fafe3d13d68c68e4de2))
- drop status ([a0f1e9b](https://github.com/tuqulore/jumpu-ui/commit/a0f1e9b49605b3d5751dbfbd5a54767ef11ee08c))
- **Input:** apply style withoute type attribute ([c31cdb1](https://github.com/tuqulore/jumpu-ui/commit/c31cdb130450f6a51fd0a2347c3d627c4c739afb))
- jumpu.prefix への追従 ([93a10cd](https://github.com/tuqulore/jumpu-ui/commit/93a10cd6f04ec4e4b15a7fbf7818a3d0c30a78bc))
- require class name when use input, select, textarea ([387d0d0](https://github.com/tuqulore/jumpu-ui/commit/387d0d01d5b8a39458a5f90de1fb5d01da4c45e0))

### BREAKING CHANGES

- please apply `.jumpu-input` `.jumpu-select` `.jumpu-textarea` classes when already in use input, select, textarea elements
- if you want without prefix, please configure like `theme: { jumpu: { prefix: "" } }`

## [1.0.1-alpha.2](https://github.com/tuqulore/jumpu-ui/compare/v1.0.1-alpha.1...v1.0.1-alpha.2) (2022-03-15)

### BREAKING CHANGE

- **deps:** update whole packages ([a2f7b40](https://github.com/tuqulore/jumpu-ui/commit/a2f7b404b5049f2b950a986209f6b407088ee1a1))
  - including major version update of tailwindcss to v3

### Bug Fixes

- **tailwindcss:** theme function returns undefined ([d0653f6](https://github.com/tuqulore/jumpu-ui/commit/d0653f620b98e342983fff7473d8921370ab93a3))

## [1.0.1-alpha.1](https://github.com/tuqulore/jumpu-ui/compare/v1.0.1-alpha.0...v1.0.1-alpha.1) (2022-03-14)

### Bug Fixes

- missing dependencies mini-svg-data-uri ([00f0e4c](https://github.com/tuqulore/jumpu-ui/commit/00f0e4cdba5a1abaebff76bdde4056133f493492))

## 1.0.1-alpha.0 (2022-03-11)

### Bug Fixes

- eslint error ([586408d](https://github.com/tuqulore/jumpu-ui/commit/586408d3e64f4181588cf1fbdaa560d867b78e36))
- **html.js:** cjs で esm の定義をしている&適切に変数展開されない ([36d2ea0](https://github.com/tuqulore/jumpu-ui/commit/36d2ea06b0ca1419aceddde798201ffad3b9388f))
- **Introduction:** 表示時にエラーと警告が発生する ([5202efd](https://github.com/tuqulore/jumpu-ui/commit/5202efd43c9dcfa5417c0011d23388ef8425aab2))
- no-undef ([060afd0](https://github.com/tuqulore/jumpu-ui/commit/060afd0536105c06225b3c1f04a92a31cdd45b37))
- role 属性がない ([b282891](https://github.com/tuqulore/jumpu-ui/commit/b282891926269b276fc1cb5911f037f508862607))
- RooundedFull を RoundedFull に（タイポ） ([f6c7845](https://github.com/tuqulore/jumpu-ui/commit/f6c7845c550f6b40dd42b9309fd5ce264f085283))
- UppercamelCase になっている ([77d6de8](https://github.com/tuqulore/jumpu-ui/commit/77d6de85f748bfdd52393f74794cb3be76f0afca))
- あやまったパスを require している ([c04acc8](https://github.com/tuqulore/jumpu-ui/commit/c04acc880ab86ffa451ac9d5079786deb47f67a0))
- カラー: primary.500 -> 700 に関する修正漏れ ([46da717](https://github.com/tuqulore/jumpu-ui/commit/46da7179e1f9054d26a911f8b2b47f1e7f2a5764))
- ファイル名が lowerCamelCase になっていない ([935c4b4](https://github.com/tuqulore/jumpu-ui/commit/935c4b4b4c8c6327259ed01ffd86e4ff762d9be6))
- 意図しないファイルの復活 ([c1de083](https://github.com/tuqulore/jumpu-ui/commit/c1de083a4d64f7e84f9c9b3f889806b89815ab9a)), closes [#30](https://github.com/tuqulore/jumpu-ui/issues/30)

### Features

- Accordion を追加 ([7441518](https://github.com/tuqulore/jumpu-ui/commit/7441518580b02cf4632ef160ae7cdd9476181522))
- Anchor を入れ忘れていた ([0d690fa](https://github.com/tuqulore/jumpu-ui/commit/0d690faff25018b109dbd53a8adc8b7d34d98eca))
- Avatar を作成 ([3c7f841](https://github.com/tuqulore/jumpu-ui/commit/3c7f841b61b34d29840842894572cd72a4f2647e))
- Avater のバリエーションスタイル追加と a タグに対応 ([e19fb6a](https://github.com/tuqulore/jumpu-ui/commit/e19fb6afdb6008ec1b6747010cb6be254e0d7810))
- a タグに type 属性が入っていたので修正 ([ab987a4](https://github.com/tuqulore/jumpu-ui/commit/ab987a44beee40736a28321bb0a9f351755db9ca))
- Badge を追加 ([c20b11f](https://github.com/tuqulore/jumpu-ui/commit/c20b11fac91ae8ab85126e58eec0a43115dc1d29))
- BoxedTab に a タグを追加 ([4c68051](https://github.com/tuqulore/jumpu-ui/commit/4c68051ce53d197c623e276500e9aa98670df4bd))
- button に a タグを追加 ([b83a512](https://github.com/tuqulore/jumpu-ui/commit/b83a51257a83d4d634331ec518da0de9f9e3e01a))
- Button のデフォルトにも disabled を追加 ([933dea0](https://github.com/tuqulore/jumpu-ui/commit/933dea0862e4d7e80f553e5ba8151a0b52b4b051))
- card が a タグになることで display:block に対応させた ([2a0ffde](https://github.com/tuqulore/jumpu-ui/commit/2a0ffde27e82c53f3c576fac929de5c13464369b))
- Card コンポーネントの出来上がり ([f1333a9](https://github.com/tuqulore/jumpu-ui/commit/f1333a9a20e1a323586adcd787d5ce4b38446824))
- card に a タグを追加 ([73970c8](https://github.com/tuqulore/jumpu-ui/commit/73970c85f0ce388ff397406d8b117278053b5516))
- Card を構造化 ([241fb16](https://github.com/tuqulore/jumpu-ui/commit/241fb164152938b183d7440d91a0318341092276))
- Chat から Balloon のみ抽出 ([9c671d1](https://github.com/tuqulore/jumpu-ui/commit/9c671d14fe9bf7c4b6fcaca3d60e6e68edc92496))
- Chat に必要な日付のコンポーネントを追加 ([db4efee](https://github.com/tuqulore/jumpu-ui/commit/db4efeec69c833201bfb4a7831f59eb1e07db8ee))
- Chat を作成 ([952d6ee](https://github.com/tuqulore/jumpu-ui/commit/952d6ee926668f003e507b2b921b8d4507a47ee0))
- checkbox の indeterminate 属性に関する JS の処理 ([50bdcf5](https://github.com/tuqulore/jumpu-ui/commit/50bdcf51e77a0d9ea0ef008d288a448e9a16dab2))
- filldedtag に a タグを追加（Close Button に関しては別途対応する） ([b88545f](https://github.com/tuqulore/jumpu-ui/commit/b88545ffb4d5210dfb4d82566c39bfd9feb78df0))
- Form の一部を追加 ([e791efb](https://github.com/tuqulore/jumpu-ui/commit/e791efb6a175955e0a90d4b6bb9077047d5a1e2f))
- form 関連のカテゴライズ ([c81a5ec](https://github.com/tuqulore/jumpu-ui/commit/c81a5ec5af9701e55a3a7b2141fdfc346fbe50c6))
- Galleries の修正、及びスタイル不要なので js ファイル削除 ([80b04cd](https://github.com/tuqulore/jumpu-ui/commit/80b04cdb7f900d2560a19028f1dff66607ae3876))
- Galleries を作成開始、まずは ProfileCard を作成 ([5849101](https://github.com/tuqulore/jumpu-ui/commit/5849101231ae587385716773fb632a3b73f4f65f))
- head 要素に FontAwesome CDN のリンクを入れる ([d368b76](https://github.com/tuqulore/jumpu-ui/commit/d368b7650fa73e1f344623b9cc71583b45012f3b))
- iconbutton に a タグを追加 ([caac75b](https://github.com/tuqulore/jumpu-ui/commit/caac75bea4ae9faaab5442cad61f140b3df29f95))
- IconButton を作成 ([9c3d738](https://github.com/tuqulore/jumpu-ui/commit/9c3d738d357092ffcd6662cc2f8c39b3f8cb5598))
- Icon 付きのバリエーションをつくってみた ([33688f7](https://github.com/tuqulore/jumpu-ui/commit/33688f7e539e311dfed78d3070c4e5dd7c463d22))
- issue-57 に対応 ([b5cb35f](https://github.com/tuqulore/jumpu-ui/commit/b5cb35f22a488e3c971e9f463871650e2976b8d0))
- label 要素の中の div を span に変更（2） ([70cd734](https://github.com/tuqulore/jumpu-ui/commit/70cd734ca0bfc934ecc3afce8f89d85ea0b3d79a))
- LikeButton を作成 ([d0366bf](https://github.com/tuqulore/jumpu-ui/commit/d0366bf608791a202cb3a69cb010f187ca3efb96))
- mini-svg-data-uri を導入 ([4dc17a1](https://github.com/tuqulore/jumpu-ui/commit/4dc17a17af6e21e6b5c81cdbba8948b73fa23f60))
- OGP シェアしたときの見せ方 ([c8ffccd](https://github.com/tuqulore/jumpu-ui/commit/c8ffccd686547d919252a198165ba9549bcba32a))
- outlinedbutton に a タグを追加 ([347a8e1](https://github.com/tuqulore/jumpu-ui/commit/347a8e13ae78558622d88e43f5742819839f7fac))
- Outlined が不具合を起こしていたので修正 ([65de4dd](https://github.com/tuqulore/jumpu-ui/commit/65de4dd984278380303f659c0034884c2feb6b14))
- Overview/Introduction ページを mdx 形式で作り始める ([32743c7](https://github.com/tuqulore/jumpu-ui/commit/32743c723fed5832e948978259b41ad8dc128cb3))
- Overview を作成 ([930fbd8](https://github.com/tuqulore/jumpu-ui/commit/930fbd8f86b52ffec893cca584ad195397105f7d))
- Primary Color を Tailwind CSS の Blue に指定 ([ab3656b](https://github.com/tuqulore/jumpu-ui/commit/ab3656ba79c7a9c188377cb3109cd903904dd336))
- ring のバリアントを追加 ([d8ce7da](https://github.com/tuqulore/jumpu-ui/commit/d8ce7da9a16a9d4141dead2b358b5d21b4fa7fe4))
- ShadowedCard が不要と判断したので削除 ([f719b84](https://github.com/tuqulore/jumpu-ui/commit/f719b84fd2e5e0617c568c1e47c86f0d1bf2f4ec))
- shadow を必須から外す ([fca0a7d](https://github.com/tuqulore/jumpu-ui/commit/fca0a7de597ca41a98a53d5f6cbd7e83c4f38044))
- Spinner にサイズを指定できるように ([9556869](https://github.com/tuqulore/jumpu-ui/commit/95568692f1332fd699c3b3a138847749f2a5718a))
- Spinner を追加 ([aa42a15](https://github.com/tuqulore/jumpu-ui/commit/aa42a152b47122f6aa80edb69196da1e7f09ac85))
- **stories/\*.mdx:** html 整形 ([ab1cf6c](https://github.com/tuqulore/jumpu-ui/commit/ab1cf6c13157d2d8709c11f31d6e15e3676a99b6))
- Switch(toggle)の実装 ([e972a8e](https://github.com/tuqulore/jumpu-ui/commit/e972a8ea02c61169018ef786feae6028f8302dff))
- tab に a タグを追加 ([286a4b9](https://github.com/tuqulore/jumpu-ui/commit/286a4b9abddb6134706ba0ae71be8c0228046de9))
- Tab の不具合修正 ([38e980d](https://github.com/tuqulore/jumpu-ui/commit/38e980de13f7520ebbace840330625cba0ca41f8))
- Tab を追加 ([57059fe](https://github.com/tuqulore/jumpu-ui/commit/57059fe946c939e64ef9a5acbb005916a38c7ba5))
- tag から filledTag を派生させた ([dd01e64](https://github.com/tuqulore/jumpu-ui/commit/dd01e649bccf40ac323359ac1edbb083a71979c5))
- tag に a タグを追加 ([8213ef3](https://github.com/tuqulore/jumpu-ui/commit/8213ef3ddb7b1285ed3fbb6100a13488e2c26221))
- Tag を追加 ([5b83eb1](https://github.com/tuqulore/jumpu-ui/commit/5b83eb18fc5d3266c380b05b7074a2065da16a52))
- tailwindcss plugin のスタイルシートで Story が書けるように ([faa12a4](https://github.com/tuqulore/jumpu-ui/commit/faa12a41fce9cd6c537f904c6fda1e7fd3598602))
- Textarea の label を削除 ([d952a3f](https://github.com/tuqulore/jumpu-ui/commit/d952a3faf60d7802db654c77895873fd48c184c9))
- TextedButton を追加、一部 Disabled の定義を変更 ([6bc9d53](https://github.com/tuqulore/jumpu-ui/commit/6bc9d53d1fd47cba921e53a41eefc12a79c3066a))
- toggleSwitch の small バリエーションを追加 ([a95957e](https://github.com/tuqulore/jumpu-ui/commit/a95957ea789817a250a1c9570f6a87cb977657d5))
- ToggleSwitch のインデント修正 ([6e9afb5](https://github.com/tuqulore/jumpu-ui/commit/6e9afb56994e97821234a34db8d972f3f6443f5e))
- use tailwindcss in storybook ([83fead0](https://github.com/tuqulore/jumpu-ui/commit/83fead0dca0fd76452bb993380dd2a5ae72f0cc4))
- wai-area 化する ([57cae42](https://github.com/tuqulore/jumpu-ui/commit/57cae420dc2c1c97cc7e82601a392317c68be036))
- ギャラリーに loading 追加 ([906c124](https://github.com/tuqulore/jumpu-ui/commit/906c1248d0ff6fff748ce961062ee87bc78931af))
- ギャラリーにチャットを追加 ([4213a1a](https://github.com/tuqulore/jumpu-ui/commit/4213a1a674b5d2b07f960cd30bf9ff5de4c3dc82))
- サンプルコメントを考えて掲載 ([d0d6cbd](https://github.com/tuqulore/jumpu-ui/commit/d0d6cbd3f0ed207bffb8fa7925b203f7785c9253))
- スタイリッシュに近づける ([ef22adf](https://github.com/tuqulore/jumpu-ui/commit/ef22adf829a20240d0b5d5061d95a8bf2ee5913c))
- すべての stories の js を mdx に変更 ([772c90c](https://github.com/tuqulore/jumpu-ui/commit/772c90c3faa53639f996236549fc607755d15a04))
- テーマカラーを新しいものにした ([0198c3e](https://github.com/tuqulore/jumpu-ui/commit/0198c3edb66335c821abec3768a8b7fb903d620e))
- フォントサイズに xxs（10px）を追加 ([312157b](https://github.com/tuqulore/jumpu-ui/commit/312157b8e894e5e7e1ddd3fc696e1c8024171403))
- プレースホルダーでのアイコンの使用をとりやめる ([057cb95](https://github.com/tuqulore/jumpu-ui/commit/057cb95fe740d8a9f680dbec3a130f6d49d59337))
- ボタンのバリエーションを試作 ([2a76e72](https://github.com/tuqulore/jumpu-ui/commit/2a76e72782a3d4058fafe1950ff17e647f63d7b3))
- ボタンの大きさや色などのバリエーションを並べた ([954c9e2](https://github.com/tuqulore/jumpu-ui/commit/954c9e210fbb28eba5fbd28a5861397b4b083b07))
- ボタンは rounded.full ではなく rounded.md ([321477b](https://github.com/tuqulore/jumpu-ui/commit/321477b4f590a59d07dbd8fc51cc545f3bbf3507))
- ログイン画面を作成 ([8829b52](https://github.com/tuqulore/jumpu-ui/commit/8829b52456713f4e51e28169b887f637d984760d))
- 各コンポーネントにおけるアクティブカラーの CSS 指定を primary500 から 700 へ ([50343e4](https://github.com/tuqulore/jumpu-ui/commit/50343e4b774ab8962087a5ba4fffa6b3bf7ec68e))
- 写真の提供元 URL を記載 ([0a320ea](https://github.com/tuqulore/jumpu-ui/commit/0a320ea5ff3320f3f78a42e8f401b536fec9a4a7))
- 色は別に定義する、カラーパレットは一旦ここでは削除 ([53556c6](https://github.com/tuqulore/jumpu-ui/commit/53556c674dea8f1359843c8957ad38f9c1bf9a74))
- 新規登録画面を作成 ([809a3a1](https://github.com/tuqulore/jumpu-ui/commit/809a3a1f425d17fcab42b10f4972d285fd749a54))
- 相対フォントサイズのスケールを定義 ([912fcb6](https://github.com/tuqulore/jumpu-ui/commit/912fcb6304cfee233c20d085d972d0fa5513ae25))