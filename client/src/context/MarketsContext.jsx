export const MarketContext = () => {
  const [priceBtc, setPrice] = React.useState(0);
  const [priceEth, setPriceEth] = React.useState(0);
  const [priceGrt, setPriceGrt] = React.useState(0);
  const [priceGrlc, setPriceGrlc] = React.useState(0);

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

  return (
    priceBtc,
    priceEth,
    priceGrt,
    priceGrlc
  )
};