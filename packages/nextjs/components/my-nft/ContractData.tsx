import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const { address } = useAccount();

  const { data: proofNFTs } = useScaffoldContractRead({
    contractName: "ProofParticipation",
    functionName: "getProofOfParticipation",
    args: [address],
  });

  return (
    <div
      className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw]"
      style={{ minHeight: "80vh" }}
    >
      <div className="grid lg:grid-cols-3 gap-4 flex-grow">
        {proofNFTs?.map((p, i) => (
          <div key={i} className="bg-secondary border border-primary rounded-xl flex">
            <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
              <img className="w-80" src={p} alt="Participation" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
