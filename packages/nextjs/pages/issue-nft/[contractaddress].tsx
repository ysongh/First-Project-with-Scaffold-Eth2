import Head from "next/head";
import type { NextPage } from "next";
import { ContractInteraction } from "~~/components/issue-nft/ContractInteraction";

const IssueNFT: NextPage = () => {
  return (
    <>
      <Head>
        <title>Issue NFT</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div data-theme="exampleUi">
        <ContractInteraction />
      </div>
    </>
  );
};

export default IssueNFT;
