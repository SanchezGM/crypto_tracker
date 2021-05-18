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
            key={coin.id} /* Crypto ID */
            name={coin.name} /** Crypto name*/
            id={coin.id} /** Crypto ID */
            price={coin.current_price}
            symbol={coin.symbol} /** Crypto symbol */
            marketcap={coin.total_volume} /** Crypto volume */
            volume={coin.market_cap} /** Crypto market cap */
            image={coin.image} /** Crypto image */
            priceChange={coin.price_change_percentage_24h} /** Crypto percentage */
          />
        );
      })}
    </>
  );
}