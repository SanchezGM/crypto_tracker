
import React from 'react';
import styles from './Search.module.css';


      
let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/"); {/* Gets the current date */}

const SearchCryptoBar = ({...rest}) => {
    return (
        <div className= {styles.crypto_subheader}>
            <div className= {styles.crypto_search}>
          
                <h1>Top 25 Crytocurrencies </h1> {/* Title */}
                <br/>
                <h2> Date: { month + '/' + date + "/" + year }</h2> {/* Current date */}
                
               
            </div>
            <div className= {styles.crypto_search}>
                <input class={styles.crypto_input}{...rest}/>                          
            </div>            
        </div>
    )
}

export default SearchCryptoBar
