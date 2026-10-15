# プロフィールの表示 {class="!mb-8"}

人物の情報をひとまとまりとして見せる場面です。

## 設計の指針

[Avatar](/components/avatar) の `alt` には**誰であるか**を書きます。
名前が隣に表示されているなら `alt=""` にして、同じ内容を二度読み上げさせないようにします。

肩書きや所属は [Tag](/components/tag) で示せますが、数が増えると読みにくくなります。
重要なものだけを残してください。

カード全体をリンクにしないでください。
読み上げたときに、カード内のすべての文字がリンクの名前になります。

## 例

```html preview
<div class="flex">
  <div class="jumpu-card mr-4 w-80">
    <div class="h-32 bg-[url(/bg.example.jpg)] bg-cover bg-center"></div>
    <div class="align-center relative flex justify-end px-4 py-2">
      <div
        class="jumpu-avatar absolute -top-10 left-4 h-20 w-20 border-4 border-white"
      >
        <img src="../assets/avatar-1.jpg" alt="城田 亜利沙" />
      </div>
      <div class="align-center flex gap-2">
        <button
          type="button"
          class="jumpu-icon-button"
          aria-describedby="tooltip-envelope"
        >
          <i class="fas fa-envelope"></i>
          <span id="tooltip-envelope" role="tooltip">メール</span>
        </button>
        <button
          type="button"
          class="jumpu-icon-button"
          aria-describedby="tooltip-etc"
        >
          <i class="fas fa-ellipsis-h"></i>
          <span id="tooltip-etc" role="tooltip">その他</span>
        </button>
      </div>
    </div>
    <div class="flex items-end justify-between px-4">
      <div>
        城田 亜利沙
        <div class="text-xxs text-gray-600">@shirota_arisa</div>
      </div>
      <div class="flex">
        <div class="mr-4 text-center text-sm">
          1480
          <div class="text-xxs text-gray-600">フォロワー</div>
        </div>
        <div class="text-center text-sm">
          80
          <div class="text-xxs text-gray-600">フォロー</div>
        </div>
      </div>
    </div>
    <div class="px-4 py-4 text-sm">
      元ファッションモデル。都内でウォーキンレッスンのインストラクターをしています。お仕事のご依頼はDMまで。
    </div>
    <div class="mb-4 flex px-4">
      <a href="#" class="jumpu-avatar h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
    </div>
    <div class="mb-4 px-4 text-xs text-gray-500">
      marieさん、DLOさん、Kateさん…他3人がフォロー中
    </div>
  </div>
  <div class="jumpu-card w-80">
    <div
      class="h-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-cover bg-center"
    ></div>
    <div class="align-center relative flex justify-end px-4 py-2">
      <div
        class="jumpu-avatar absolute -top-10 left-4 h-20 w-20 border-4 border-white"
      >
        <img src="../assets/avatar-2.jpg" alt="秋葉 秀樹" />
      </div>
      <div class="align-center flex gap-2">
        <button
          type="button"
          class="jumpu-icon-button"
          aria-describedby="tooltip-envelope"
        >
          <i class="fas fa-envelope"></i>
          <span id="tooltip-envelope" role="tooltip">メール</span>
        </button>
        <button
          type="button"
          class="jumpu-icon-button"
          aria-describedby="tooltip-etc"
        >
          <i class="fas fa-ellipsis-h"></i>
          <span id="tooltip-etc" role="tooltip">その他</span>
        </button>
      </div>
    </div>
    <div class="flex items-end justify-between px-4">
      <div>
        秋葉 秀樹
        <div class="text-xxs text-gray-600">@hidetaro7</div>
      </div>
      <div class="flex">
        <div class="mr-4 text-center text-sm">
          1480
          <div class="text-xxs text-gray-600">フォロワー</div>
        </div>
        <div class="text-center text-sm">
          80
          <div class="text-xxs text-gray-600">フォロー</div>
        </div>
      </div>
    </div>
    <div class="px-4 py-4 text-sm">
      クリエイター・デザイナー。アングラな音楽ユニット、ニューロナのサウンドクリエイター。本業はUX・UI、デザインエンジニアですが仕事関係は
      @tuqulore にて。
    </div>
    <div class="mb-4 flex px-4">
      <a href="#" class="jumpu-avatar h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
      <a href="#" class="jumpu-avatar -ml-2 h-10 w-10 border-2 border-white">
        <img src="../assets/avatar-1.jpg" alt="フォロワー" />
      </a>
    </div>
    <div class="mb-4 px-4 text-xs text-gray-500">
      marieさん、DLOさん、Kateさん…他3人がフォロー中
    </div>
  </div>
</div>
```
