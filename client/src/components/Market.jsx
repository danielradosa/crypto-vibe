import React from "react";

const Market = () => {
  const [priceBtc, setPrice] = React.useState(0);
  const [priceEth, setPriceEth] = React.useState(0);
  const [priceGrt, setPriceGrt] = React.useState(0);
  const [priceGrlc, setPriceGrlc] = React.useState(0);
  const [priceLink, setPriceLink] = React.useState(0);

  // Fetch bitcoin price from the API
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

  // Fetch Ethereum price from the API
  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
      );
      const data = await response.json();
      setPriceEth(data.USD);
    };
    fetchPrice();
  }, [priceEth]);

  // Fetch Grt price from the API
  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=GRT&tsyms=USD"
      );
      const data = await response.json();
      setPriceGrt(data.USD);
    };
    fetchPrice();
  }, [priceGrt]);

  // Fetch Grlc price from the API
  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=GRLC&tsyms=USD"
      );
      const data = await response.json();
      setPriceGrlc(data.USD);
    };
    fetchPrice();
  }, [priceGrlc]);

  // Fetch Link price from the API
  React.useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD"
      );
      const data = await response.json();
      setPriceLink(data.USD);
    };
    fetchPrice();
  }, [priceLink]);

  return (
    <div className="flex justify-center mt-20 align-middle">
      <div>
        <img
          src="https://www.cryptocompare.com/media/19633/btc.png"
          className="w-1/3 align-middle justify-center image-market"
          alt=""
        />
        <div className="text-white mt-5 text-center">1 BTC is <b>${priceBtc}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/37746238/eth.png"
          className="w-1/3 image-market"
          alt=""
        />
        <div className="text-white mt-5 text-center">1 ETH is <b>${priceEth}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/37747239/grt.png"
          className="w-1/3 image-market"
          alt=""
        />
        <div className="text-white mt-5 text-center">1 GRT is <b>${priceGrt}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/38553751/grlc.png"
          className="w-1/3 image-market"
          alt=""
        />
        <div className="text-white mt-5 text-center">1 GRLC is <b>${priceGrlc}</b></div>
      </div>
      <div>
        <img
          src="https://www.cryptocompare.com/media/37746242/link.png"
          className="w-1/3 image-market"
          alt=""
        />
        <div className="text-white mt-5 text-center">1 LINK is <b>${priceLink}</b></div>
      </div>
    </div>
  );
};

export default Market;
