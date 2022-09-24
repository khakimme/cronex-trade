import Head from "next/head";
import Tools from "../components/tools";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cronex Trade</title>
        <meta name="description" content="Cronex Trading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tools />
    </>
  );
}
