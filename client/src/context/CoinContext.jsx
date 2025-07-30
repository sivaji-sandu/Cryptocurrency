import  { createContext,useEffect,useState} from 'react';

export const CoinContest = createContext();

const CoinContestProvider =(props)=>{

    const [allCoin,setAllCoin] = useState([]);
    const [currency,setCurrency] = useState({
        name:"usd",
        symbol:"$"
    })

    const fetchAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Y6mvB1Qchvz8dR8KKsRF7ocj'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }


    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue = {
        allCoin, currency , setCurrency
    }

    return (
        <CoinContest.Provider value={contextValue}>
            {props.children}
        </CoinContest.Provider>
    )
}

export default CoinContestProvider;