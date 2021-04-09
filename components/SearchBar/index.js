
import styles from './Search.module.css';

const SearchBar = ({...rest}) => {
    return (
        <div className= {styles.coin_search}>
            <input class={styles.coin_input}{...rest}/>
        </div>
    )
}

export default SearchBar
