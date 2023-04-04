import { useScaffoldContractRead, useScaffoldEventSubscriber } from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const { data: totalCounter } = useScaffoldContractRead({
    contractName: "ProofParticipation",
    functionName: "totalParticipation",
  });

  useScaffoldEventSubscriber({
    contractName: "ProofParticipation",
    eventName: "ProofOfParticipationCreated",
    listener: (to, cid, date) => {
      console.log(to, cid, date);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
      <div className="bg-secondary border border-primary rounded-xl flex">
        <div className="p-2 py-1 border-r border-primary flex items-end">Total count</div>
        <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
          {totalCounter?.toString() || "0"}
        </div>
      </div>
    </div>
  );
};
