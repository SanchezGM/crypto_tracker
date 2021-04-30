
import Layout from '../../components/Layout';
import styles from './Coin.module.css';

/**
 * README:
 * This file is for when you click on a crypto to see more information
 * Currently does not work because of code line 34
 */

const Coin = ({coin}) => {
    return (
        <Layout>
           <div className={styles.crypto_page}>
               <div className={styles.crypto_container}>
                    <img src={coin.image.large} alt={coin.name} className={styles.crypto_image} />
                    <h1 className={styles.crypto_name}>{coin.name}</h1>
                    <p className={styles.crypto_ticker}>{coin.symbol}</p>
                    <p className={styles.crypto_current}>{coin.market_data.current_price.usd}</p>
               </div>
           </div>
        </Layout>
    )
}

export default Coin;


export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  
    const data = await res.json()
  
    return {
      props: {
        coin: data
      }
    };
  }
