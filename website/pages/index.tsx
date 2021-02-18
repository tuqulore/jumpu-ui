import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>tailwindcss-tuqulore</title>
      </Head>
      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-16">Tailwind CSS tuqulore plugin</h1>
        <h2 className="mb-8">Typography</h2>
        <div>
          <h1>こんにちは、私のパートナー！</h1>
          <h2>こんにちは、私のパートナー！</h2>
          <h3>こんにちは、私のパートナー！</h3>
          <h4>こんにちは、私のパートナー！</h4>
          <h5>こんにちは、私のパートナー！</h5>
          <p>こんにちは、私のパートナー！</p>
          <small className="block mb-8">こんにちは、私のパートナー！</small>
        </div>
        <h2 className="mb-8">Button</h2>
        <h3>Default</h3>
        <button className="btn mr-4 mb-4">ボタン</button>
        <button className="btn mr-4 mb-4" disabled>
          ボタン
        </button>
        <h3>Outlined</h3>
        <button className="btn is-outlined mr-4 mb-4">ボタン</button>
        <button className="btn is-outlined mr-4 mb-4" disabled>
          ボタン
        </button>
        <h3>Text</h3>
        <button className="btn is-text mr-4 mb-4">ボタン</button>
        <button className="btn is-text mr-4 mb-4" disabled>
          ボタン
        </button>
        <h3>Rounded</h3>
        <button className="btn is-rounded mr-4 mb-4">ボタン</button>
        <button className="btn is-rounded mr-4 mb-4" disabled>
          ボタン
        </button>
        <h3>Stretched</h3>
        <button className="btn is-stretched mb-4">ボタン</button>
        <button className="btn is-stretched mb-8" disabled>
          ボタン
        </button>
        <h2 className="mb-8">Input</h2>
        <label>
          <span className="label block">LABEL</span>
          <input className="input" type="text" placeholder="お名前" />
        </label>
      </div>
    </>
  );
}

export default Index;
