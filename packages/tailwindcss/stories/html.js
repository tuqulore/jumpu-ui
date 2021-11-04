/* テンプレート文字列のマークアップを整形する際に使用するタグ関数
 * See: https://prettier.io/blog/2020/08/24/2.1.0.html#add---embedded-language-formattingautooff-option-7875httpsgithubcomprettierprettierpull7875-by-bakkothttpsgithubcombakkot-8825httpsgithubcomprettierprettierpull8825-by-fiskerhttpsgithubcomfisker
 */
const html = (strings, ...args) =>
  strings.reduce(
    (previous, current, index) => previous + args[index - 1] + current
  );

export default html;
