import Coins from './Coins';
/*
* README:
* This file allows you to pick specific information from the cryptocurrency website
*/
export default function CoinList({ specifiedCoins }) {
  return (
    <>
      {specifiedCoins.map(coin => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}