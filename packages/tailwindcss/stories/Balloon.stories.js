export default {
  title: "Communications/Balloon",
};

const Template = () => {
  return `
        <div class="balloon">
        あっという間の時間でしたが困難の多かった東京オリンピックの一番最後の式典で選手の方々、関係者の方々の労をねぎらう役目を頂けて光栄でした
        </div>
    `;
};
export const Default = Template.bind({});

const SmallTemplate = () => {
  return `
          <div class="balloon text-sm">
          あっという間の時間でしたが困難の多かった東京オリンピックの一番最後の式典で選手の方々、関係者の方々の労をねぎらう役目を頂けて光栄でした
          </div>
      `;
};
export const Small = SmallTemplate.bind({});

const BackgroundNoneTemplate = () => {
  return `
            <div class="balloon bg-transparent">
            あっという間の時間でしたが困難の多かった東京オリンピックの一番最後の式典で選手の方々、関係者の方々の労をねぎらう役目を頂けて光栄でした
            </div>
        `;
};
export const BackgroundNone = BackgroundNoneTemplate.bind({});
