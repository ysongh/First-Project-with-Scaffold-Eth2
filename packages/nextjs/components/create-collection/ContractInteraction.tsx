import { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { ViewColumnsIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [url, setURL] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "ParticipationFactory",
    functionName: "createCollection",
    args: [url, name, symbol],
  });

  return (
    <div className="flex bg-base-300 relative pb-10 pt-5">
      <ViewColumnsIcon className="absolute top-24 w-20 opacity-25" />
      <WalletIcon className="absolute top-1 right-24 w-20 opacity-25" />
      <WalletIcon className="absolute bottom-0 left-36 w-20 opacity-25" />
      <ViewColumnsIcon className="absolute right-10 bottom-24 w-20 opacity-25" />
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20" style={{ maxWidth: "600px" }}>
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-6xl text-black">Create Collection</span>
          <div className="mt-8">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter URL for Collection"
                className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase mb-1"
                onChange={e => setURL(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Name for Collection"
                className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase mb-1"
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Symbol for Collection"
                className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
                onChange={e => setSymbol(e.target.value)}
              />
            </div>
            <button
              className={`btn btn-primary rounded-full capitalize font-normal font-white flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                isLoading ? "loading" : ""
              }`}
              onClick={writeAsync}
            >
              {!isLoading && (
                <>
                  Create <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
