# Input

## Default

:::raw

<input class="jumpu-input" placeholder="名前" />

:::

```html
<input class="jumpu-input" placeholder="名前" />
```

## Number

:::raw

<input type="number" class="jumpu-input" placeholder="0" />

:::

```html
<input type="number" class="jumpu-input" placeholder="0" />
```

## Email

:::raw

<input type="email" class="jumpu-input" placeholder="email@example.com" />

:::

```html
<input type="email" class="jumpu-input" placeholder="email@example.com" />
```

## Date

:::raw

<input type="date" class="jumpu-input" />

:::

```html
<input type="date" class="jumpu-input" />
```

## Radio

:::raw

<input type="radio" class="jumpu-input mr-1" name="radio-sample" value="radio-1" checked />
<input type="radio" class="jumpu-input" name="radio-sample" value="radio-2" />

:::

```html
<input
  type="radio"
  class="jumpu-input mr-1"
  name="radio-sample"
  value="radio-1"
  checked
/>
<input type="radio" class="jumpu-input" name="radio-sample" value="radio-2" />
```

## Checkbox

<script setup>
import { useTemplateRef, onMounted } from "vue";
const checkbox = useTemplateRef("checkbox");
onMounted(() => {
  checkbox.value.indeterminate = true;
});
</script>

:::raw

<div id="checkbox">
  <input
    type="checkbox"
    class="jumpu-input mr-1"
    value="checkbox-1"
    checked
  />
  <input
    type="checkbox"
    class="jumpu-input mr-1"
    value="checkbox-2"
  />
  <input type="checkbox" class="jumpu-input" value="checkbox-3" ref="checkbox" />
</div>

:::

## File

:::raw

<input type="file" class="jumpu-input" />

:::

```html
<input type="file" class="jumpu-input" />
```
