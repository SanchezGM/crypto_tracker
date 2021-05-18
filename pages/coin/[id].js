
import Layout from '../../components/Layout';
import styles from './Coin.module.css';

/**
 * README:
 * This file is for when you click on a crypto to see more information
 * 
 */

const Coin = ({coin}) => {
    return (
        <Layout>
           <div className={styles.crypto_page}>
               <div className={styles.crypto_container}>
                    <img src={coin.image.large} alt={coin.name} className={styles.crypto_image} /> {/* For crypto image*/}
                    <h1 className={styles.crypto_name}>{coin.name}</h1> {/* For crypto name*/}
                    <p className={styles.crypto_ticker}>{coin.symbol}</p> {/* For crypto symbol*/}
                    <p className={styles.crypto_current}>${coin.market_data.current_price.usd}</p> {/* For crypto price*/}
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
