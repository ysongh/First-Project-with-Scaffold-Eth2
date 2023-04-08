import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ViewColumnsIcon, WalletIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Proof of Participation App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Proof of Participation</span>
          </h1>
          <p className="text-center text-lg">Participation as NFTs</p>
          <p className="text-center text-lg">Show everyone that you participate in events</p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <ViewColumnsIcon className="h-8 w-8 fill-secondary" />
              <p>Create your Collection</p>
              <button
                className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => router.push(`/create-collection`)}
              >
                Create
              </button>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <WalletIcon className="h-8 w-8 fill-secondary" />
              <p>See your Participation NFTs</p>
              <button
                className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                onClick={() => router.push(`/my-nft`)}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
