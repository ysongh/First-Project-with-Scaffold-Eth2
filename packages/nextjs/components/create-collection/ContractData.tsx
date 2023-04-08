import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const router = useRouter();

  const { address } = useAccount();

  const { data: collections } = useScaffoldContractRead({
    contractName: "ParticipationFactory",
    functionName: "getCollection",
    args: [address],
  });

  console.log(collections);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw]">
      <h1 className="text-4xl mb-5">Your Collections</h1>
      <div className="">
        {collections?.map((c, i) => (
          <div key={i} className="bg-secondary border border-primary rounded-xl mb-3">
            <div
              className="text-xl min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree cursor-pointer"
              onClick={() => router.push(`/issue-nft/${c}`)}
            >
              <p>{c}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
