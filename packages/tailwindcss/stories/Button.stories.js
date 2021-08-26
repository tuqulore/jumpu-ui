import clsx from "clsx";

export default {
  title: "Button",
  argTypes: {
    label: { control: 'text' },
    text: { control: 'boolean' },
    rounded: { control: 'boolean' },
    stretched: { control: 'boolean' },
    twUtility: { control: 'text' }
  },
};

const DefaultTemplate = ({ label, text, rounded, stretched, twUtility, ...args }) => {
  return `<button type="button" class="${clsx(
    "button",
    { "button-text": text },
    { "is-rounded": rounded },
    { "is-stretched": stretched },
  )} ${twUtility}">${label}</button>`;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: "ボタン",
};

const OutlinedTemplate = ({ label, text, rounded, stretched, ...args }) => {
  return `<button type="button" class="${clsx(
    "button button-outlined",
    { "is-text": text },
    { "is-rounded": rounded },
    { "is-stretched": stretched },
  )}">${label}</button>`;
};

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  label: "アウトラインボタン",
};

const statusTemplate = ({ text, rounded, stretched, ...args }) => {
  return `
  <div class="grid grid-cols-3 ld:grid-cols-4 gap-4">
  <button type="button" class="button button-success">SUCCESS</button>
  <button type="button" class="button button-emphasis">EMPHASIS</button>
  <button type="button" class="button button-warning">WARNING</button>
  <button type="button" class="button button-danger">DANGER</button>
  <button type="button" class="button button-light">LIGHT</button>
  <button type="button" class="button button-dark">DARK</button>
  </div>
  `;
};

export const Status = statusTemplate.bind({});

const disabledTemplate = ({ text, rounded, stretched, ...args }) => {
  return `
  <button type="button" disabled class="button">DISABLED</button>
  `;
};

export const Disabled = disabledTemplate.bind({});