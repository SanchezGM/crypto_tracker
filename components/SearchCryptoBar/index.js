
import React from 'react';
import styles from './Search.module.css';


      
let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");

const SearchCryptoBar = ({...rest}) => {
    return (
        <div className= {styles.crypto_subheader}>
            <div className= {styles.crypto_search}>
          
                <h1>Top 25 Crytocurrencies - { month + '/' + date + "/" + year } </h1>
               
            </div>
            <div className= {styles.crypto_search}>
                <input class={styles.crypto_input}{...rest}/>                          
            </div>            
        </div>
    )
}

export default SearchCryptoBar
