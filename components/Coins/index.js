import styles from './Coins.module.css'
import Link from 'next/link';
/*
* README:
* This file changes the structue of the information to be displayed
* in the homepage for all the coins.
*/
const Coins = ({name, price, symbol, marketcap, volume, image, priceChange, id }) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a>
        <div className={styles.crypto_container}>
            <div className={styles.crypto_row}>
                <div className={styles.crypto}>
                    <img src={image} alt={name} className={styles.crypto_img}/>
                    <h1 className={styles.crypto_h1}>{name}</h1>
                    <p className={styles.crypto_symbol}>{symbol}</p>
                </div>
                <div className={styles.crypto_data}>
                    <p className={styles.crypto_price}>${price}</p>
                    <p className={styles.crypto_volume}>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className={styles.crypto_percent, styles.decrease_percentage}>
                            {priceChange.toFixed(2)}%
                        </p>
                    ): (
                        <p className={styles.crypto_percent, styles.increase_percentage}>
                            {priceChange.toFixed(2)}%
                        </p>
                    )}
                    <p className={styles.crypto_marketcap}>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        </a>
        </Link>
    )
}

export default Coins
