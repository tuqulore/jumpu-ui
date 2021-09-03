export default {
  title: "Forms/Select",
};

const SelectTemplate = () => {
  return `
      <select>
        <option value="option-1">option-1</option>
        <option value="option-2">option-2</option>
        <option value="option-3">option-3</option>
      </select>
    `;
};
export const Select = SelectTemplate.bind({});

const SelectMultipleTemplate = () => {
  return `
      <select multiple>
        <option value="option-1">option-1</option>
        <option value="option-2">option-2</option>
        <option value="option-3">option-3</option>
      </select>
    `;
};
export const SelectMultiple = SelectMultipleTemplate.bind({});
