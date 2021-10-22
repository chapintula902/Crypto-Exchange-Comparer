import './App.css';
import TopHeading from './Components/topHeading';
import Layout from './Components/layout';
import RateIndicator from './Components/RateIndicator';
import Suggestion from './Components/suggestion';
import { useEffect, useState } from 'react';

function App() {
  const [binanceExchangeLogo, setbinanceExchangeLogo] = useState();
  const [coinbaseExchangeLogo, setCoinbaseExchangeLogo] = useState();
  const [binanceBitcoin, setBinanceBitcoin] = useState();
  const [binanceEthereum, setBinanceEthereum] = useState();
  const [coinbaseBitcoin, setCoinbaseBitcoin] = useState();
  const [coinbaseEthereum, setCoinbaseEthereum] = useState();
  const [BTCSuggestion, setBTCSuggestion] = useState();
  const [ETHSuggestion, setETHSuggestion] = useState();
  const [coins, setCoinLogo] = useState();



  useEffect(() => {
    const reqHandler = setTimeout(() => {

      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false').then((responseData) => {
        return responseData.json();
      }).then((data) => {
        
        setCoinLogo(data);
   
        
        
      }).catch(err => console.log());



      fetch('https://api.coingecko.com/api/v3/exchanges/binance').then((responseData) => {
        return responseData.json();
      }).then((data) => {
        setbinanceExchangeLogo(data['image']);
        const binBTC = data['tickers'].find((element) => {
          if (element['base'] === 'BTC') {
            return true;
          }
          return false;
        });
        setBinanceBitcoin(binBTC)
      }).catch(err => console.log());

      fetch('https://api.coingecko.com/api/v3/exchanges/binance').then((responseData) => {
        return responseData.json();
      }).then((data) => {
        const binBTC = data['tickers'].find((element) => {
          if (element['base'] === 'ETH') {
            return true;
          }
          return false;
        });
        setBinanceEthereum(binBTC)
      }).catch(err => console.log());


      fetch('https://api.coingecko.com/api/v3/exchanges/gdax').then((responseData) => {
        return responseData.json();
      }).then((data) => {
        setCoinbaseExchangeLogo(data['image']);
        const cbBTC = data['tickers'].find((element) => {
          if (element['base'] === 'BTC') {
            return true;
          }
          return false;
        });
        setCoinbaseBitcoin(cbBTC)
      }).catch(err => console.log());

      fetch('https://api.coingecko.com/api/v3/exchanges/gdax').then((responseData) => {
        return responseData.json();
      }).then((data) => {
        const cbETH = data['tickers'].find((element) => {
          if (element['base'] === 'ETH') {
            return true;
          }
          return false;
        });
        setCoinbaseEthereum(cbETH);
      }).catch(err => console.log(err));
      if (binanceBitcoin && binanceEthereum && coinbaseBitcoin && coinbaseEthereum) {
        if (binanceBitcoin.last > coinbaseBitcoin.last) {
          setBTCSuggestion("Coinbase Exchange");
        
        } else {
          setBTCSuggestion("Binance");
          
        }
        if (binanceEthereum.last > coinbaseEthereum.last) {
          setETHSuggestion("Coinbase Exchange");
          
        } else {
          setETHSuggestion("Binance");
          
        }
      }
    }, 5000);
    return () => {
      clearTimeout(reqHandler);
    }
  }, [binanceBitcoin, binanceEthereum, coinbaseBitcoin, coinbaseEthereum]);
  return (
    <>
      <Layout>
        <div className="pt-3">
          <TopHeading />
          {(binanceBitcoin && binanceEthereum && coinbaseBitcoin && coinbaseEthereum) ? <RateIndicator coinbaseExchangeLogo={coinbaseExchangeLogo} binanceExchangeLogo={binanceExchangeLogo} binanceBTC={binanceBitcoin} binanceETH={binanceEthereum} coinbaseBTC={coinbaseBitcoin} coinbaseETH={coinbaseEthereum} coins={coins}/> : <h3 className="text-white text-center">Loading Data...</h3>}
          {(BTCSuggestion && ETHSuggestion) ? <Suggestion BTCSuggestion={BTCSuggestion} ETHSuggestion={ETHSuggestion}/> : <h3 className="text-white text-center">Loading Data...</h3>}
        </div>
      </Layout>
    </>
  );
}

export default App;
