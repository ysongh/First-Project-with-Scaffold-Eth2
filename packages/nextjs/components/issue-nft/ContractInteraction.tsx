import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const router = useRouter();
  const { contractaddress } = router.query;

  const [toAddress, setToAddress] = useState("");

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "ParticipationFactory",
    functionName: "sendProofOfParticipation",
    args: [contractaddress as string, toAddress],
  });

  return (
    <div className="flex bg-base-300 relative pb-10" style={{ height: "600px" }}>
      <div className="flex flex-col w-full sm:mx-8 2xl:mx-20" style={{ maxWidth: "600px" }}>
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-6xl text-black">Issue Proof of Participation</span>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            <div>
              <input
                type="text"
                placeholder="Enter address to send"
                className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase mb-2"
                onChange={e => setToAddress(e.target.value)}
              />
            </div>
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                    isLoading ? "loading" : ""
                  }`}
                  onClick={writeAsync}
                >
                  {!isLoading && (
                    <>
                      Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
