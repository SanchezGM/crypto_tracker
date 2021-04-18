
import styles from './Search.module.css';

const SearchBar = ({...rest}) => {
    return (
        <div className= {styles.coin_subheader}>
            <div className= {styles.coin_search}>
                <h1>Top 25 Crytocurrencies - *Add Date Here*</h1>
            </div>
            <div className= {styles.coin_search}>
                <input class={styles.coin_input}{...rest}/>                          
            </div>
            
        </div>
    )
}

export default SearchBar
