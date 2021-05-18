
import {useState} from 'react'
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchCryptoBar';
import Layout from '../components/Layout';


export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('')

  const listAllCoins = filteredCoins.filter( coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())

  )

  const changeHandler = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }
  
  return (
    <Layout>
      
      <div className='crypto_tracker'>
      <SearchBar type='text' placeholder='Search' onChange={changeHandler}/>   {/* For the search bar */ }
      <h1 className="chartHeader">NAME | TICKER | PRICE | VOLUME | PERCENT | MARKT CAP</h1>
      <CoinList specifiedCoins={listAllCoins}/>  {/* Displays the list of coints */ }
      </div>
    </Layout>
  );
};

/* Uses server side props because crypto changes often */
export const getServerSideProps = async () => {
  
  /* The API key  */
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false') 
 
  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  };
}