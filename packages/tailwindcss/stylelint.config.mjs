/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["theme"] }],
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-empty-line-before": null,
    "declaration-property-value-no-unknown": [
      true,
      {
        propertiesSyntax: {
          "background-position":
            "| [ center | [ left | right ] [ <length-percentage> | <--spacing()> ]? ] && [ center | [ top | bottom ] [ <length-percentage> | <--spacing()> ]? ]",
          "background-size": "| <--spacing()>",
          "margin-block": "| <--spacing()>",
          "margin-block-end": "| <--spacing()>",
          "margin-block-start": "| <--spacing()>",
          "margin-bottom": "| <--spacing()>",
          "margin-inline": "| <--spacing()>",
          "margin-inline-end": "| <--spacing()>",
          "margin-inline-start": "| <--spacing()>",
          "margin-left": "| <--spacing()>",
          "margin-right": "| <--spacing()>",
          "margin-top": "| <--spacing()>",
          "padding-block": "| <--spacing()>",
          "padding-block-end": "| <--spacing()>",
          "padding-block-start": "| <--spacing()>",
          "padding-bottom": "| <--spacing()>",
          "padding-inline": "| <--spacing()>",
          "padding-inline-end": "| <--spacing()>",
          "padding-inline-start": "| <--spacing()>",
          "padding-left": "| <--spacing()>",
          "padding-right": "| <--spacing()>",
          "padding-top": "| <--spacing()>",
          gap: "| <--spacing()>",
          height: "| <--spacing()>",
          margin: "| <--spacing()>",
          padding: "| <--spacing()>",
          width: "| <--spacing()>",
        },
        typesSyntax: { "--spacing()": "--spacing( <number> )" },
      },
    ],
    "import-notation": null,
    "rule-empty-line-before": null,
  },
};
