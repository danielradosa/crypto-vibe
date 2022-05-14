import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const MarketComp = () => {
  const { getBtcPrice, getEthPrice, getGrtPrice } = useContext(TransactionContext);

  const btc = getBtcPrice();
  const eth = getEthPrice();
  const grt = getGrtPrice();

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
      <div>1 BTC: </div>
      <div>1 ETH: </div>
      <div>1 GRT: </div>
    </div>
  );
};

export default MarketComp;
