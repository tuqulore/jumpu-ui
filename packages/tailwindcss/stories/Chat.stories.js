export default {
  title: "Chat",
};

const Template = () => {
  return `
    <div class="chat">
        <div class="message-content">
        あっという間の時間でしたが困難の多かった東京オリンピックの一番最後の式典で選手の方々、関係者の方々の労をねぎらう役目を頂けて光栄でした
        </div>
    </div>
    `;
};
export const Default = Template.bind({});

const RightTemplate = () => {
  return `
      <div class="chat align-right">
          <div class="message-content">
          あっという間の時間でしたが困難の多かった東京オリンピックの一番最後の式典で選手の方々、関係者の方々の労をねぎらう役目を頂けて光栄でした
          </div>
      </div>
      `;
};
export const Right = RightTemplate.bind({});

const ShareTemplate = () => {
  return `
      <div class="chat">
          <div class="message-share">
            <img src="https://tuqulore.com/image/ogp.png" alt="株式会社 ツクロア" />
            <div class="message-share__content">
                <div class="message-share__title">
                   <a href="https://tuqulore.com/">つくり・つたえるUIデザイン | 株式会社ツクロア</a>
                </div>
                <div class="message-share__description">業務: 行動デザインとUIデザイン, 所在地: バーチャルオフィス, 業態: リモートワーク, メッセージ: 人の行動を理解しUIデザインを行う、プロジェクトを成功に近づけビジネスに貢献する</div>
                <div class="message-share__url">tuqulore.com</div>
            </div>
          </div>
      </div>
      `;
};
export const Share = ShareTemplate.bind({});

const DateTemplate = () => {
  return `
      <div class="chat-date">
          3日前
      </div>
      `;
};
export const Date = DateTemplate.bind({});
