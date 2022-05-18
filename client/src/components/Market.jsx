import React from "react";

const Market = () => {
  // Fetch bitcoin price from the API
  const [priceBtc, setPrice] = React.useState(0);
  const [priceEth, setPriceEth] = React.useState(0);
  const [priceGrt, setPriceGrt] = React.useState(0);
  const [priceGrlc, setPriceGrlc] = React.useState(0);

  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      setPrice(data.bpi.USD.rate);
    };
    fetchPrice();
  }, [priceBtc]);

  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://api.intotheblock.com/ETH/financial/price"
      );
      const data = await response.json();
      setPriceEth(data.bpi.USD.rate);
    };
    fetchPrice();
  }, [priceEth]);

  return (
    <div className="flex justify-center mt-20">
      <div>
        <img
          src="https://www.cryptocompare.com/media/19633/btc.png"
          className="w-1/3"
          alt=""
        />
        <div className="text-white mt-5">1 BTC is <b>${priceBtc}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/37746238/eth.png"
          className="w-1/3"
          alt=""
        />
        <div className="text-white mt-5">1 ETH is <b>${priceEth}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/37747239/grt.png"
          className="w-1/3"
          alt=""
        />
        <div className="text-white mt-5">1 GRT is </div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/38553751/grlc.png"
          className="w-1/3"
          alt=""
        />
        <div className="text-white mt-5">1 GRLC is </div>
      </div>
    </div>
  );
};

export default Market;
