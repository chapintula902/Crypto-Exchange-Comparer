import React, { useState } from "react";

const Suggestion = (props) => {
  return (
    <>
      {props.BTCSuggestion && props.ETHSuggestion ? (
        <div className="text-white pb-5">
          <div className="d-flex justify-content-center mt-5 text-white text-center">
            <div className="suggestionHeading w-50">SUGGESTION</div>
          </div>
          <div className="mt-4 fs-4 text-center">
            <b>
              <em id="BTCSugg"> {props.BTCSuggestion} </em>
            </b>
            has the best Bitcoin price to buy! Click below  <br />
            <button className="secondary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.BTCSuggestion === "Coinbase Exchange"
                    ? 'https://www.coinbase.com/price/bitcoin'
                    : "https://www.binance.com/en/trade/BTC_USDT"
                }
                target="_blank" rel="noreferrer">
                Buy
              </a>
            </button>
             
            <button className="primary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.BTCSuggestion === "Coinbase Exchange"
                    ? "https://www.binance.com/en/trade/BTC_USDT"
                    :  'https://www.coinbase.com/price/bitcoin'
                }
                target="_blank" rel="noreferrer" >
                Sell
              </a>
            </button>
          </div>
          <div className="mt-4 fs-4 text-center">
            <b>
              <em>{props.ETHSuggestion} </em>
            </b>{" "}
            Has a the best Etherum price to buy! Click below  <br />
            <button className="secondary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.ETHSuggestion === "Coinbase Exchange"
                    ? 'https://www.coinbase.com/price/ethereum'
                    : "https://www.binance.com/en/trade/ETH_USDT"
                }
                target="_blank" rel="noreferrer">              
                Buy
              </a>
            </button>
            <button className="primary-button">
              <a
                className="text-white text-decoration-none"
                href={
                  props.BTCSuggestion === "Coinbase Exchange"
                    ? "https://www.binance.com/en/trade/ETH_USDT"
                    :  'https://www.coinbase.com/price/ethereum'
                }
                target="_blank" rel="noreferrer">
                Sell
              </a>
            </button>
          </div>
          <div className="mt-4 fs-4 text-center">
          </div>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Suggestion;
