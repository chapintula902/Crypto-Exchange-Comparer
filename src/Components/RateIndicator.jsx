import React from "react";

const RateIndicator = (props) => {
  
  return (
    <>
      {props.binanceBTC &&
      props.binanceETH &&
      props.coinbaseBTC &&
      props.coinbaseETH &&
      props.binanceExchangeLogo &&
      props.coinbaseExchangeLogo ? (
        <div className="row text-white d-flex justify-content-center">
          <div className="col-md-6 text-center p-2">
            <div className="exchangeHeading w-75">
            <span>
                &nbsp;
                <img
                  src={props.binanceExchangeLogo}
                  alt="EXCHANGE LOGO"
                  width="60"
                />
              </span>
              {props.binanceBTC.market.name}
          
            </div>
            <br />
            <div className="exchangeHeadingInner w-sm-25 mt-5">
            <img src={props.coins[0].image}
                      alt="BTC LOGO"
                      width ="40"/> {" "}
              {props.binanceBTC.base} 
            </div>
            <div className="priceIndicator mt-4">{"$"}{props.binanceBTC.last}</div>

            <div className="exchangeHeadingInner w-sm-25 mt-5">
            <img src={props.coins[1].image} 
                      alt="BTC LOGO"
                      width ="50" /> {" "}
              {props.binanceETH.base}
            </div>
            <div className="priceIndicator mt-4">
             {"$"}{props.binanceETH.last}</div>
          </div>
          <div className="col-md-6 text-center p-2">
            <div className="exchangeHeading w-75">
            <span>
                &nbsp;
                <img
                  src={props.coinbaseExchangeLogo}
                  alt="EXCHANGE LOGO"
                  width="60"/> 
              </span> {" "}
              {props.coinbaseBTC.market.name} 
           
            </div>
            <br />
            <div className="exchangeHeadingInner w-sm-25 mt-5"> 
            <img src={props.coins[0].image}
                      alt="BTC LOGO"
                      width ="40"/> {"  "}
              {props.coinbaseBTC.base} 
            </div>

            <div className="priceIndicator mt-4">{"$"}{props.coinbaseBTC.last}</div>
            <div className="exchangeHeadingInner w-sm-25 mt-5"> 
            <img src={props.coins[1].image}
                      alt="BTC LOGO"
                      width ="50"/> {" "}
              {props.coinbaseETH.base}
            </div>
            <div className="priceIndicator mt-4">{"$"}{props.coinbaseETH.last}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RateIndicator;
