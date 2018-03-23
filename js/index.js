/******************
  Market
  - CO : Coinone
  - KK : Kraken
  - PO : Poloniex
  - BX : BX
******************/

const getCOData = (suffix) => {
    return fetch(`https://api.coinone.co.kr/orderbook/?currency=${suffix}&format=json`);
}

const getKKData = (suffix) => {
    return fetch(`https://api.kraken.com/0/public/Depth?pair=${suffix}`);
}

const getPOData = (suffix) => {
    return fetch(`https://poloniex.com/public?command=returnOrderBook&currencyPair=${suffix}&depth=30`);
}

 const getBXData = (suffix) => {
     return fetch(`https://bx.in.th/api/orderbook/?pairing=${suffix}`);
 }

const getBFData = (suffix) => {
     return fetch(`https://api.bitfinex.com/v1/book/${suffix}`);
 }

const getBTData = (suffix) => {
     return fetch(`https://bittrex.com/api/v1.1/public/getorderbook?market=${suffix}&type=both`);
 }

 const getBSData = (suffix) => {
     return fetch(`https://www.bitstamp.net/api/v2/order_book/${suffix}`);
 }

 // const getHBData = (suffix) => {
 //     return fetch(`http://api.huobi.pro/market/depth?symbol=${suffix}&type=step1`);
 // }

 const getBNData = (suffix) => {
     return fetch(`https://api.binance.com/api/v1/depth?symbol=${suffix}`);
 }

 const getQNData = (suffix) => {
     return fetch(`https://api.quoine.com/products/${suffix}/price_levels`);
 }

 const getKBData = (suffix) => {
     return fetch(`https://api.korbit.co.kr/v1/orderbook?currency_pair=${suffix}`);
 }


 const getfxrate = (suffix) => {
     return fetch(`https://api.fixer.io/latest?base=${suffix}`);
 }

window.setInterval( () => {
  Promise.all([
                getCOData('btc'), getCOData('eth'), getCOData('xrp'), getCOData('etc'), getCOData('ltc'),
                getKKData('XXBTZUSD'), getKKData('XETHZUSD'), getKKData('XXRPZUSD'), getKKData('XETCZUSD'),getKKData('XLTCZUSD'),
                getPOData('USDT_BTC'), getPOData('USDT_ETH'), getPOData('USDT_XRP'), getPOData('USDT_ETC'), getPOData('USDT_LTC'),
                getBXData('1'), getBXData('21'), getBXData('25'), getBXData('30'),
                getBFData('BTCUSD'), getBFData('ETHUSD'), getBFData('XRPUSD'), getBFData('ETCUSD'), getBFData('LTCUSD'),
                getBTData('USDT-BTC'), getBTData('USDT-ETH'), getBTData('USDT-XRP'), getBTData('USDT-ETC'),getBTData('USDT-LTC'),
                getBSData('btcusd'), getBSData('ethusd'), getBSData('xrpusd'), getBSData('ltcusd'),
                // getHBData('btcusdt'), getHBData('ethusdt'), getHBData('xrpusdt'), getHBData('etcusdt'), getHBData('ltcusdt'),
                getBNData('BTCUSDT'), getBNData('ETHUSDT'), getBNData('LTCUSDT'),
                getQNData('1'), getQNData('27'),
                getKBData('btc_krw'), getKBData('eth_krw'), getKBData('xrp_krw'), getKBData('etc_krw'),
                getfxrate('USD'), getfxrate('KRW'), getfxrate('THB')

              ])
  .then((data) => {
    Promise.all([
                  data[0].json(), data[1].json(), data[2].json(), data[3].json(), data[4].json(),
                  data[5].json(), data[6].json(), data[7].json(),data[8].json(), data[9].json(),
                  data[10].json(), data[11].json(), data[12].json(), data[13].json(), data[14].json(),
                  data[15].json(), data[16].json(), data[17].json(), data[18].json(),
                  data[19].json(), data[20].json(), data[21].json(), data[22].json(), data[23].json(),
                  data[24].json(), data[25].json(), data[26].json(), data[27].json(), data[28].json(),
                  data[29].json(), data[30].json(), data[31].json(), data[32].json(),
                  // data[32].json(), data[33].json(), data[34].json(), data[35].json(), data[36].json(),
                  data[33].json(), data[34].json(), data[35].json(),
                  data[36].json(), data[37].json(),
                  data[38].json(), data[39].json(), data[40].json(), data[41].json(),
                  data[42].json(), data[43].json(), data[44].json()
                ])
    .then((data) => {

      // Setup

      var market1 = ['CO','KK','PO','BX','BF','BT','BS','BN','QN','KB'];
      var market = ['CO','KK','PO','BN'];
      var currency = ['BTC','ETH','XRP','ETC','LTC'];

      // Fund

      var fundAmountKK = 10000;
      var pointKK = 0;

      var fundAmountCO = 10700000;
      var pointCO = 0;

      var fundAmountPO = 10000;
      var pointPO = 0;

      var fundAmountBX = 312200;
      var pointBX = 0;

      var fundAmountBF = 10000;
      var pointBF = 0;

      var fundAmountBT = 10000;
      var pointBT = 0;

      var fundAmountBS = 10000;
      var pointBS = 0;

      // var fundAmountHB = 10000;
      // var pointHB = 0;

      var fundAmountBN = 10000;
      var pointBN = 0;

       var fundAmountQN = 10000;
      var pointQN = 0;

      var fundAmountKB = 10700000;
      var pointKB = 0;

      // JSON

      var btc_CO = data[0];
      var eth_CO = data[1];
      var xrp_CO = data[2];
      var etc_CO = data[3];
      var ltc_CO = data[4];


      var btc_KK = data[5];
      var eth_KK = data[6];
      var xrp_KK = data[7];
      var etc_KK = data[8];
      var ltc_KK = data[9];

      var btc_PO = data[10];
      var eth_PO = data[11];
      var xrp_PO = data[12];
      var etc_PO = data[13];
      var ltc_PO = data[14];

      var btc_BX = data[15];
      var eth_BX = data[16];
      var xrp_BX = data[17];
      var ltc_BX = data[18];

      var btc_BF = data[19];
      var eth_BF = data[20];
      var xrp_BF = data[21];
      var etc_BF = data[22];
      var ltc_BF = data[23];

      var btc_BT = data[24];
      var eth_BT = data[25];
      var xrp_BT = data[26];
      var etc_BT = data[27];
      var ltc_BT = data[28];

      var btc_BS = data[29];
      var eth_BS = data[30];
      var xrp_BS = data[31];
      var ltc_BS = data[32];


      // var btc_HB = data[32];
      // var eth_HB = data[33];
      // var xrp_HB = data[34];
      // var etc_HB = data[35];
      // var ltc_HB = data[36];

      var btc_BN = data[33];
      var eth_BN = data[34];
      var ltc_BN = data[35];

      var btc_QN = data[36];
      var eth_QN = data[37];

      var btc_KB = data[38];
      var eth_KB = data[39];
      var xrp_KB = data[40];
      var etc_KB = data[41];

      var usd = data[42];
      var krw = data[43];
      var baht = data[44];

      var baht_usd = usd.rates.THB;
      var krw_usd = usd.rates.KRW;

      var usd_krw = krw.rates.USD;

      var krw_baht = baht.rates.KRW;


      // Price CO

      var buyBTC_CO = btc_CO.ask[0].price;
      var sellBTC_CO = btc_CO.bid[0].price;

      var buyETH_CO = eth_CO.ask[0].price;
      var sellETH_CO = eth_CO.bid[0].price;

      var buyXRP_CO = xrp_CO.ask[0].price;
      var sellXRP_CO = xrp_CO.bid[0].price;

      var buyETC_CO = etc_CO.ask[0].price;
      var sellETC_CO = etc_CO.bid[0].price;

      var buyLTC_CO = ltc_CO.ask[0].price;
      var sellLTC_CO = ltc_CO.bid[0].price;


      // Price KK

      var buyBTC_KK = btc_KK.result.XXBTZUSD.asks[0][0];
      var sellBTC_KK = btc_KK.result.XXBTZUSD.bids[0][0];

      var buyETH_KK = eth_KK.result.XETHZUSD.asks[0][0];
      var sellETH_KK = eth_KK.result.XETHZUSD.bids[0][0];

      var buyXRP_KK = xrp_KK.result.XXRPZUSD.asks[0][0];
      var sellXRP_KK = xrp_KK.result.XXRPZUSD.bids[0][0];

      var buyETC_KK = etc_KK.result.XETCZUSD.asks[0][0];
      var sellETC_KK = etc_KK.result.XETCZUSD.bids[0][0];

      var buyLTC_KK = ltc_KK.result.XLTCZUSD.asks[0][0];
      var sellLTC_KK = ltc_KK.result.XLTCZUSD.bids[0][0];

      // Price PO

      var buyBTC_PO = btc_PO.asks[0][0];
      var sellBTC_PO = btc_PO.bids[0][0];

      var buyETH_PO = eth_PO.asks[0][0];
      var sellETH_PO = eth_PO.bids[0][0];

      var buyXRP_PO = xrp_PO.asks[0][0];
      var sellXRP_PO = xrp_PO.bids[0][0];

      var buyETC_PO = etc_PO.asks[0][0];
      var sellETC_PO = etc_PO.bids[0][0];

      var buyLTC_PO = ltc_PO.asks[0][0];
      var sellLTC_PO = ltc_PO.bids[0][0];

      // Price BX

       var buyBTC_BX = btc_BX.asks[0][0];
       var sellBTC_BX = btc_BX.bids[0][0];

       var buyETH_BX = eth_BX.asks[0][0];
       var sellETH_BX = eth_BX.bids[0][0];

       var buyXRP_BX = xrp_BX.asks[0][0];
       var sellXRP_BX = xrp_BX.bids[0][0];

       var buyLTC_BX = ltc_BX.asks[0][0];
       var sellLTC_BX = ltc_BX.bids[0][0];


       // Price BF

      var buyBTC_BF = btc_BF.asks[0].price;
      var sellBTC_BF = btc_BF.bids[0].price;

      var buyETH_BF = eth_BF.asks[0].price;
      var sellETH_BF = eth_BF.bids[0].price;

      var buyXRP_BF = xrp_BF.asks[0].price;
      var sellXRP_BF = xrp_BF.bids[0].price;

      var buyETC_BF = etc_BF.asks[0].price;
      var sellETC_BF = etc_BF.bids[0].price;

      var buyLTC_BF = ltc_BF.asks[0].price;
      var sellLTC_BF = ltc_BF.bids[0].price;

      // Price BT

      var buyBTC_BT = btc_BT.result.sell[0].Rate;
      var sellBTC_BT = btc_BT.result.buy[0].Rate;

      var buyETH_BT = eth_BT.result.sell[0].Rate;
      var sellETH_BT = eth_BT.result.buy[0].Rate;

      var buyXRP_BT = xrp_BT.result.sell[0].Rate;
      var sellXRP_BT = xrp_BT.result.buy[0].Rate;

      var buyETC_BT = etc_BT.result.sell[0].Rate;
      var sellETC_BT = etc_BT.result.buy[0].Rate;

      var buyLTC_BT = ltc_BT.result.sell[0].Rate;
      var sellLTC_BT = ltc_BT.result.buy[0].Rate;

      // Price BS

      var buyBTC_BS = btc_BS.asks[0][0];
      var sellBTC_BS = btc_BS.bids[0][0];

      var buyETH_BS = eth_BS.asks[0][0];
      var sellETH_BS = eth_BS.bids[0][0];

      var buyXRP_BS = xrp_BS.asks[0][0];
      var sellXRP_BS = xrp_BS.bids[0][0];

      var buyLTC_BS = ltc_BS.asks[0][0];
      var sellLTC_BS = ltc_BS.bids[0][0];

       // Price HB

      // var buyBTC_HB = btc_HB.tick.asks[0][0];
      // var sellBTC_HB = btc_HB.tick.bids[0][0];

      // var buyETH_HB = eth_HB.tick.asks[0][0];
      // var sellETH_HB = eth_HB.tick.bids[0][0];

      // var buyXRP_HB = xrp_HB.tick.asks[0][0];
      // var sellXRP_HB = xrp_HB.tick.bids[0][0];

      // var buyETC_HB = etc_HB.tick.asks[0][0];
      // var sellETC_HB = etc_HB.tick.bids[0][0];

      // var buyLTC_HB = ltc_HB.tick.asks[0][0];
      // var sellLTC_HB = ltc_HB.tick.bids[0][0];

      // Price BN

      var buyBTC_BN= btc_BN.asks[0][0];
      var sellBTC_BN= btc_BN.bids[0][0];

      var buyETH_BN= eth_BN.asks[0][0];
      var sellETH_BN= eth_BN.bids[0][0];

      var buyLTC_BN= ltc_BN.asks[0][0];
      var sellLTC_BN= ltc_BN.bids[0][0];

      // Price QN

      var buyBTC_QN= btc_QN.sell_price_levels[0][0];
      var sellBTC_QN= btc_QN.buy_price_levels[0][0];

      var buyETH_QN= eth_QN.sell_price_levels[0][0];
      var sellETH_QN= eth_QN.buy_price_levels[0][0];

      // Price KB

      var buyBTC_KB = btc_KB.asks[0][0];
      var sellBTC_KB = btc_KB.bids[0][0];

      var buyETH_KB = eth_KB.asks[0][0];;
      var sellETH_KB = eth_KB.bids[0][0];

      var buyXRP_KB = xrp_KB.asks[0][0];;
      var sellXRP_KB = xrp_KB.bids[0][0];

      var buyETC_KB = etc_KB.asks[0][0];;
      var sellETC_KB = etc_KB.bids[0][0];


      // Display

      for (var i = 0; i < market1.length; i++) {
        for (var j = 0; j < currency.length; j++) {
          if(market1[i] == 'BX' && currency[j] == 'ETC') continue;
          if(market1[i] == 'QN' && currency[j] == 'XRP') continue;
          if(market1[i] == 'QN' && currency[j] == 'ETC') continue;
          if(market1[i] == 'QN' && currency[j] == 'LTC') continue;
          if(market1[i] == 'BN' && currency[j] == 'XRP') continue;
          if(market1[i] == 'BN' && currency[j] == 'ETC') continue;
          if(market1[i] == 'BS' && currency[j] == 'ETC') continue;
          if(market1[i] == 'KB' && currency[j] == 'LTC') continue;
          else if (market1[i] == 'BX'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "฿ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "฿ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
          }
          else if (market1[i] == 'CO' && currency[j] == 'XRP'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else if (market1[i] == 'KB' && currency[j] == 'XRP'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else if (currency[j] == 'XRP'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "$ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(4));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "$ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(4));');
          }
          else if(market1[i] == 'CO'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else if(market1[i] == 'KB'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else {
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "$ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "$ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
          }
        }
      }

      // feeKK

      var feeBuySell_KK = 0.0026;
      var feeBS_KK = 1 - feeBuySell_KK;
      var feeWD_BTC_KK = 0.001
      var feeWD_ETH_KK = 0.005
      var feeWD_ETC_KK = 0.005
      var feeWD_XRP_KK = 0.02
      var feeWD_LTC_KK = 0.02

      // feeCO

      var feeBuySell_CO = 0.001;
      var feeBS_CO = 1 - feeBuySell_CO;
      var feeWD_BTC_CO = 0.0005
      var feeWD_ETH_CO = 0.01
      var feeWD_ETC_CO = 0.01
      var feeWD_XRP_CO = 0.01
      var feeWD_LTC_CO = 0.01

      // feePO

      var feeBuySell_PO = 0.0025;
      var feeBS_PO = 1 - feeBuySell_PO;
      var feeWD_BTC_PO = 0.0001
      var feeWD_ETH_PO = 0.005
      var feeWD_ETC_PO = 0.01
      var feeWD_XRP_PO = 0.15
      var feeWD_LTC_PO = 0.001

      // feeBF

      var feeBuySell_BF = 0.0025;
      var feeBS_BF = 1 - feeBuySell_BF;
      var feeWD_BTC_BF = 0.0001
      var feeWD_ETH_BF = 0.005
      var feeWD_ETC_BF = 0.01
      var feeWD_XRP_BF = 0.15
      var feeWD_LTC_BF = 0.001

      // feeBT

      var feeBuySell_BT = 0.0025;
      var feeBS_BT = 1 - feeBuySell_BT;
      var feeWD_BTC_BT = 0.0001
      var feeWD_ETH_BT = 0.005
      var feeWD_ETC_BT = 0.01
      var feeWD_XRP_BT = 0.15
      var feeWD_LTC_BT = 0.005

      // // feeBX

       var feeBuySell_BX = 0.0025;
       var feeBS_BX = 1 - feeBuySell_BX;
       var feeWD_BTC_BX = 0.001
       var feeWD_ETH_BX = 0.005
       var feeWD_XRP_BX = 0.01
       var feeWD_LTC_BX = 0.005

       // // feeBS

       var feeBuySell_BS = 0.0025;
       var feeBS_BS = 1 - feeBuySell_BS;
       var feeWD_BTC_BS = 0.001
       var feeWD_ETH_BS = 0
       var feeWD_XRP_BS = 0
       var feeWD_LTC_BS = 0

       // feeHB

      // var feeBuySell_HB = 0.0025;
      // var feeBS_HB = 1 - feeBuySell_HB;
      // var feeWD_BTC_HB = 0.0001
      // var feeWD_ETH_HB = 0.005
      // var feeWD_ETC_HB = 0.01
      // var feeWD_XRP_HB = 0.15
      // var feeWD_LTC_HB = 0.01

      // feeBN

      var feeBuySell_BN = 0.001;
      var feeBS_BN = 1 - feeBuySell_BN;
      var feeWD_BTC_BN = 0.0001
      var feeWD_ETH_BN = 0.01
      // var feeWD_ETC_BN = 0.01
      // var feeWD_XRP_BN = 0.15
      var feeWD_LTC_BN = 0.01

      // feeQN

      var feeBuySell_QN = 0.001;
      var feeBS_QN = 1 - feeBuySell_QN;
      var feeWD_BTC_QN = 0.0001
      var feeWD_ETH_QN = 0.01
      // var feeWD_ETC_QN = 0.01
      // var feeWD_XRP_QN = 0.15
      var feeWD_LTC_QN = 0.01

      // feeKB

      var feeBuySell_KB = 0.0025;
      var feeBS_KB = 1 - feeBuySell_KB;
      var feeWD_BTC_KB = 0.0001
      var feeWD_ETH_KB = 0.005
      var feeWD_ETC_KB = 0.01
      var feeWD_XRP_KB = 0.15




      // Price Fee

      for (var i = 0; i < market1.length; i++) {
        for (var j = 0; j < currency.length; j++) {
          if (market1[i] == 'BX' && currency[j] == 'ETC') continue;
          if (market1[i] == 'QN' && currency[j] == 'XRP') continue;
          if (market1[i] == 'QN' && currency[j] == 'ETC') continue;
          if (market1[i] == 'QN' && currency[j] == 'LTC') continue;
          if (market1[i] == 'BN' && currency[j] == 'XRP') continue;
          if (market1[i] == 'BN' && currency[j] == 'ETC') continue;
          if (market1[i] == 'BS' && currency[j] == 'ETC') continue;
          if (market1[i] == 'KB' && currency[j] == 'LTC') continue;
          else {
            eval("var buy" + currency[j] + "_" + market1[i] + "_fee = buy"
             + currency[j] + "_" + market1[i] + " / feeBS_" + market1[i]);
            eval("var sell" + currency[j] + "_" + market1[i] + "_fee = sell"
             + currency[j] + "_" + market1[i] + " * feeBS_" + market1[i]);
          }
        }
      }

      //// One Way
      //KK-CO

      document.getElementById("KK-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_CO_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_CO_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_CO_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_CO_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      //KK-PO

      document.getElementById("KK-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      // //KK-BX

       document.getElementById("KK-BX_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BX_fee) - (fundAmountKK * baht_usd)) / (fundAmountKK * baht_usd)) * 100 ).toFixed(2);

       document.getElementById("KK-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BX_fee) - (fundAmountKK * baht_usd)) / (fundAmountKK * baht_usd)) * 100 ).toFixed(2);

       document.getElementById("KK-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BX_fee) - (fundAmountKK * baht_usd)) / (fundAmountKK * baht_usd)) * 100 ).toFixed(2);

        document.getElementById("KK-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_BX_fee) - (fundAmountKK * baht_usd)) / (fundAmountKK * baht_usd)) * 100 ).toFixed(2);

      //KK-BF

      document.getElementById("KK-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);


      //KK-BT

      document.getElementById("KK-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

     //KK-BS

      document.getElementById("KK-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      //KK-HB

      // document.getElementById("KK-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_HB_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      // document.getElementById("KK-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_HB_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      // document.getElementById("KK-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_HB_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      // document.getElementById("KK-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_HB_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      // document.getElementById("KK-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_HB_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      //KK-BN

      document.getElementById("KK-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

/*      document.getElementById("KK-BN_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-BN_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_BN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);
*/
      document.getElementById("KK-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyLTC_KK_fee)- feeWD_LTC_KK ) * sellLTC_BN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

//KK-QN

      document.getElementById("KK-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_QN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

      document.getElementById("KK-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_QN_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);

//KK-KB

      document.getElementById("KK-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_KB_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_KB_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_KB_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("KK-KB_ETC_oneWay").innerHTML=

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_KB_fee) - (fundAmountKK * krw_usd)) / (fundAmountKK * krw_usd)) * 100 ).toFixed(2);


      //  //CO-KK

      document.getElementById("CO-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_KK_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_KK_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_KK_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_KK_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_KK_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);


      //  //CO-PO

      document.getElementById("CO-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_PO_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_PO_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_PO_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_PO_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_PO_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // //CO-BX

       document.getElementById("CO-BX_BTC_oneWay").innerHTML=

                   ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BX_fee) - (fundAmountCO / krw_baht )) / (fundAmountCO / krw_baht )) * 100 ).toFixed(2);

       document.getElementById("CO-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BX_fee) - (fundAmountCO / krw_baht )) / (fundAmountCO / krw_baht )) * 100 ).toFixed(2);

      document.getElementById("CO-BX_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BX_fee) - (fundAmountCO / krw_baht )) / (fundAmountCO / krw_baht )) * 100 ).toFixed(2);

      document.getElementById("CO-BX_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_BX_fee) - (fundAmountCO / krw_baht )) / (fundAmountCO / krw_baht )) * 100 ).toFixed(2);


      //  //CO-BF

      document.getElementById("CO-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BF_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BF_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BF_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_BF_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_BF_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      //  //CO-BT

      document.getElementById("CO-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BT_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BT_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BT_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_BT_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_BT_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      //  //CO-BS

      document.getElementById("CO-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BS_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BS_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BS_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_BS_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

       //CO-HB

      // document.getElementById("CO-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_HB_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_HB_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_HB_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_HB_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_HB_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

        //CO-BN

      document.getElementById("CO-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-BN_XRP_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("CO-BN_ETC_oneWay").innerHTML=

      //             ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_BN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyLTC_CO_fee)- feeWD_LTC_CO ) * sellLTC_BN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);


 //CO-QN

      document.getElementById("CO-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_QN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("CO-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_QN_fee) - (fundAmountCO * usd_krw)) / (fundAmountCO * usd_krw)) * 100 ).toFixed(2);


//CO-KB

      document.getElementById("CO-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_KB_fee) - (fundAmountCO )) / (fundAmountCO)) * 100 ).toFixed(2);

      document.getElementById("CO-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_KB_fee) - (fundAmountCO)) / (fundAmountCO)) * 100 ).toFixed(2);

      document.getElementById("CO-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_KB_fee) - (fundAmountCO)) / (fundAmountCO)) * 100 ).toFixed(2);

      document.getElementById("CO-KB_ETC_oneWay").innerHTML=

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_KB_fee) - (fundAmountCO)) / (fundAmountCO)) * 100 ).toFixed(2);


      //PO-KK

      document.getElementById("PO-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

                  //  //PO-CO

      document.getElementById("PO-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_CO_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_CO_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_CO_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_CO_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_CO_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

                  // //PO-BX

       document.getElementById("PO-BX_BTC_oneWay").innerHTML=

                 ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BX_fee) - (fundAmountPO * baht_usd)) / (fundAmountPO * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BX_fee) - (fundAmountPO * baht_usd)) / (fundAmountPO * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BX_fee) - (fundAmountPO * baht_usd)) / (fundAmountPO * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_BX_fee) - (fundAmountPO * baht_usd)) / (fundAmountPO * baht_usd)) * 100 ).toFixed(2);
 //PO-BF

      document.getElementById("PO-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

//PO-BT

      document.getElementById("PO-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

 //PO-BS

      document.getElementById("PO-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

     //PO-HB

      // document.getElementById("PO-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_HB_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      // document.getElementById("PO-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_HB_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      // document.getElementById("PO-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_HB_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      // document.getElementById("PO-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_HB_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      // document.getElementById("PO-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_HB_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      //PO-BN

      document.getElementById("PO-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

/*      document.getElementById("PO-BN_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-BN_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_BN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);
*/
  document.getElementById("PO-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyLTC_PO_fee)- feeWD_LTC_PO ) * sellLTC_BN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

//PO-QN

      document.getElementById("PO-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_QN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

      document.getElementById("PO-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_QN_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);

  //  //PO-KB

      document.getElementById("PO-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_KB_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_KB_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_KB_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("PO-KB_ETC_oneWay").innerHTML=

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_KB_fee) - (fundAmountPO * krw_usd)) / (fundAmountPO * krw_usd)) * 100 ).toFixed(2);



      // // //BX-KK

       document.getElementById("BX-KK_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_KK_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-KK_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_KK_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-KK_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_KK_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

        document.getElementById("BX-KK_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_KK_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);




      //BX-CO

       document.getElementById("BX-CO_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_CO_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

       document.getElementById("BX-CO_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_CO_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

       document.getElementById("BX-CO_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_CO_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

        document.getElementById("BX-CO_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_CO_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

      //BX-PO

       document.getElementById("BX-PO_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_PO_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-PO_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_PO_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-PO_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_PO_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BX-PO_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_PO_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

        //BX-BF

       document.getElementById("BX-BF_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BF_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BF_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BF_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BF_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BF_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

        document.getElementById("BX-BF_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_BF_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      //BX-BT

       document.getElementById("BX-BT_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BT_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BT_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BT_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BT_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BT_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BX-BT_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_BT_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      //BX-BS

       document.getElementById("BX-BS_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BS_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BS_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BS_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BS_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BS_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

        document.getElementById("BX-BS_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_BS_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      //BX-HB

       // document.getElementById("BX-HB_BTC_oneWay").innerHTML=

       //             ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_HB_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       // document.getElementById("BX-HB_ETH_oneWay").innerHTML=

       //             ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_HB_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       // document.getElementById("BX-HB_XRP_oneWay").innerHTML=

       //             ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_HB_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      //BX-BN

       document.getElementById("BX-BN_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-BN_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BX-BN_LTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyLTC_BX_fee)- feeWD_LTC_BX ) * sellLTC_BN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

/*       document.getElementById("BX-BN_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);
*/
//BX-QN

       document.getElementById("BX-QN_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_QN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BX-QN_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_QN_fee) - (fundAmountBX / baht_usd)) / (fundAmountBX / baht_usd)) * 100 ).toFixed(2);
  //BX-KB

       document.getElementById("BX-KB_BTC_oneWay").innerHTML=

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_KB_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

       document.getElementById("BX-KB_ETH_oneWay").innerHTML=

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_KB_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);

       document.getElementById("BX-KB_XRP_oneWay").innerHTML=

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_KB_fee) - (fundAmountBX * krw_baht )) / (fundAmountBX * krw_baht )) * 100 ).toFixed(2);



      //BF-KK

      document.getElementById("BF-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);



      //BF-CO

      document.getElementById("BF-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_CO_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_CO_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_CO_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_CO_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_CO_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      //BF-PO

      document.getElementById("BF-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

       //BF-BX

       document.getElementById("BF-BX_BTC_oneWay").innerHTML=

                 ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BX_fee) - (fundAmountBF * baht_usd)) / (fundAmountBF * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BX_fee) - (fundAmountBF * baht_usd)) / (fundAmountBF * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BX_fee) - (fundAmountBF * baht_usd)) / (fundAmountBF * baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BF-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_BX_fee) - (fundAmountBF * baht_usd)) / (fundAmountBF * baht_usd)) * 100 ).toFixed(2);

        //BF-BT

      document.getElementById("BF-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      //BF-BS

      document.getElementById("BF-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      //BF-HB

      // document.getElementById("BF-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_HB_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      // document.getElementById("BF-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_HB_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      // document.getElementById("BF-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_HB_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      // document.getElementById("BF-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_HB_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      // document.getElementById("BF-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_HB_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      //BF-BN

      document.getElementById("BF-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

/*      document.getElementById("BF-BN_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-BN_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_BN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);
*/
      document.getElementById("BF-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyLTC_BF_fee)- feeWD_LTC_BF ) * sellLTC_BN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);


//BF-QN

      document.getElementById("BF-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_QN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);

      document.getElementById("BF-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_QN_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);


//BF-KB

      document.getElementById("BF-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_KB_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_KB_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_KB_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BF-KB_ETC_oneWay").innerHTML=

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_KB_fee) - (fundAmountBF * krw_usd)) / (fundAmountBF * krw_usd)) * 100 ).toFixed(2);


      //BT-KK

      document.getElementById("BT-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);


      //BT-CO

      document.getElementById("BT-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_CO_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_CO_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_CO_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_CO_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_CO_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      //BT-PO

      document.getElementById("BT-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

       //BT-BX

       document.getElementById("BT-BX_BTC_oneWay").innerHTML=

                 ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BX_fee) - (fundAmountBT * baht_usd)) / (fundAmountBT * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BX_fee) - (fundAmountBT * baht_usd)) / (fundAmountBT * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BX_fee) - (fundAmountBT * baht_usd)) / (fundAmountBT * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_BX_fee) - (fundAmountBT * baht_usd)) / (fundAmountBT * baht_usd)) * 100 ).toFixed(2);

      //BT-BF

      document.getElementById("BT-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      //BT-BS

      document.getElementById("BT-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      //BT-HB

      // document.getElementById("BT-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_HB_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      // document.getElementById("BT-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_HB_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      // document.getElementById("BT-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_HB_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      // document.getElementById("BT-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_HB_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      // document.getElementById("BT-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_HB_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      //BT-BN

      document.getElementById("BT-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

/*      document.getElementById("BT-BN_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-BN_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_BN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);
*/
      document.getElementById("BT-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyLTC_BT_fee)- feeWD_LTC_BT ) * sellLTC_BN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);


    ///BT-BN

      document.getElementById("BT-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_QN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);

      document.getElementById("BT-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_QN_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);



      //BT-KB

      document.getElementById("BT-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_KB_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_KB_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_KB_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BT-KB_ETC_oneWay").innerHTML=

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_KB_fee) - (fundAmountBT * krw_usd)) / (fundAmountBT * krw_usd)) * 100 ).toFixed(2);

     //BS-KK

      document.getElementById("BS-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);




      //BS-CO

      document.getElementById("BS-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_CO_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_CO_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_CO_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_CO_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);


      //BS-PO

      document.getElementById("BS-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);


       //BS-BX

      document.getElementById("BS-BX_BTC_oneWay").innerHTML=

                 ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BX_fee) - (fundAmountBS * baht_usd)) / (fundAmountBS * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BX_fee) - (fundAmountBS * baht_usd)) / (fundAmountBS * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BX_fee) - (fundAmountBS * baht_usd)) / (fundAmountBS * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_BX_fee) - (fundAmountBS * baht_usd)) / (fundAmountBS * baht_usd)) * 100 ).toFixed(2);


      //BS-BF

      document.getElementById("BS-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      //BS-BT

      document.getElementById("BS-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      //BS-HB

      // document.getElementById("BS-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_HB_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      // document.getElementById("BS-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_HB_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      // document.getElementById("BS-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_HB_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      // document.getElementById("BS-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_HB_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      //BS-BN

      document.getElementById("BS-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

/*      document.getElementById("BS-BN_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);
*/
      document.getElementById("BS-BN_LTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyLTC_BS_fee)- feeWD_LTC_BS ) * sellLTC_BN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);



      //BS-QN

      document.getElementById("BS-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_QN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

      document.getElementById("BS-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_QN_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);

//BS-KB

      document.getElementById("BS-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_KB_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_KB_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BS-KB_XRP_oneWay").innerHTML=

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_KB_fee) - (fundAmountBS * krw_usd)) / (fundAmountBS * krw_usd)) * 100 ).toFixed(2);


      //HB-KK

      // document.getElementById("HB-KK_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_KK_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-KK_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_KK_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-KK_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_KK_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-KK_ETC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETC_HB_fee)- feeWD_ETC_HB ) * sellETC_KK_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-KK_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_KK_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);



      //HB-CO

      // document.getElementById("HB-CO_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_CO_fee) - (fundAmountHB * krw_usd)) / (fundAmountHB * krw_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-CO_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_CO_fee) - (fundAmountHB * krw_usd)) / (fundAmountHB * krw_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-CO_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_CO_fee) - (fundAmountHB * krw_usd)) / (fundAmountHB * krw_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-CO_ETC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETC_HB_fee)- feeWD_ETC_HB ) * sellETC_CO_fee) - (fundAmountHB * krw_usd)) / (fundAmountHB * krw_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-CO_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_CO_fee) - (fundAmountHB * krw_usd)) / (fundAmountHB * krw_usd)) * 100 ).toFixed(2);

      //HB-PO

      // document.getElementById("HB-PO_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_PO_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-PO_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_PO_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-PO_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_PO_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-PO_ETC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETC_HB_fee)- feeWD_ETC_HB ) * sellETC_PO_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-PO_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_PO_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      //HB-BX

      //  document.getElementById("HB-BX_BTC_oneWay").innerHTML=

      //            ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_BX_fee) - (fundAmountHB * baht_usd)) / (fundAmountHB * baht_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-BX_ETH_oneWay").innerHTML=

      //              ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_BX_fee) - (fundAmountHB * baht_usd)) / (fundAmountHB * baht_usd)) * 100 ).toFixed(2);

      // document.getElementById("HB-BX_XRP_oneWay").innerHTML=

      //              ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_BX_fee) - (fundAmountHB * baht_usd)) / (fundAmountHB * baht_usd)) * 100 ).toFixed(2);

      //HB-BF

      // document.getElementById("HB-BF_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_BF_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BF_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_BF_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BF_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_BF_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BF_ETC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETC_HB_fee)- feeWD_ETC_HB ) * sellETC_BF_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BF_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_BF_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);


      //HB-BT

      // document.getElementById("HB-BT_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_BT_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BT_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_BT_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BT_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_BT_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BT_ETC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETC_HB_fee)- feeWD_ETC_HB ) * sellETC_BT_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BT_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_BT_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      //HB-BS

      // document.getElementById("HB-BS_BTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_BS_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BS_ETH_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_BS_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BS_XRP_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_BS_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      // document.getElementById("HB-BS_LTC_oneWay").innerHTML=

      //             ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_BS_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

      //HB-BN

//       document.getElementById("HB-BN_BTC_oneWay").innerHTML=

//                   ((((((fundAmountHB/buyBTC_HB_fee)- feeWD_BTC_HB ) * sellBTC_BN_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

//       document.getElementById("HB-BN_ETH_oneWay").innerHTML=

//                   ((((((fundAmountHB/buyETH_HB_fee)- feeWD_ETH_HB ) * sellETH_BN_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);

// /*      document.getElementById("HB-BN_XRP_oneWay").innerHTML=

//                   ((((((fundAmountHB/buyXRP_HB_fee)- feeWD_XRP_HB ) * sellXRP_BN_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);
// */
//       document.getElementById("HB-BN_LTC_oneWay").innerHTML=

//                   ((((((fundAmountHB/buyLTC_HB_fee)- feeWD_LTC_HB ) * sellLTC_BN_fee) - (fundAmountHB)) / (fundAmountHB)) * 100 ).toFixed(2);


      //BN-CO

      document.getElementById("BN-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_CO_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BN-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_CO_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);

/*      document.getElementById("BN-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_CO_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BN-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_CO_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-CO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_CO_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);

      //BN-PO

      document.getElementById("BN-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_PO_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_PO_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_PO_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_PO_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-PO_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_PO_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      // //BN-BX

       document.getElementById("BN-BX_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_BX_fee) - (fundAmountBN * baht_usd)) / (fundAmountBN * baht_usd)) * 100 ).toFixed(2);

       document.getElementById("BN-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_BX_fee) - (fundAmountBN * baht_usd)) / (fundAmountBN * baht_usd)) * 100 ).toFixed(2);

        document.getElementById("BN-BX_LTC_oneWay").innerHTML=

                   ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_BX_fee) - (fundAmountBN * baht_usd)) / (fundAmountBN * baht_usd)) * 100 ).toFixed(2);

/*       document.getElementById("BN-BX_XRP_oneWay").innerHTML=

                   ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_BX_fee) - (fundAmountBN * baht_usd)) / (fundAmountBN * baht_usd)) * 100 ).toFixed(2);
*/
      //BN-BF

      document.getElementById("BN-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_BF_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_BF_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_BF_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_BF_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-BF_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_BF_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);


      //BN-BT

      document.getElementById("BN-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_BT_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_BT_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_BT_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_BT_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-BT_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_BT_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

     //BN-BS

      document.getElementById("BN-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_BS_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_BS_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_BS_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-BS_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_BS_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      //BN-HB

      // document.getElementById("BN-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_HB_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      // document.getElementById("BN-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_HB_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-HB_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_HB_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-HB_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_HB_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      // document.getElementById("BN-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_HB_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

     //BN-KK

      document.getElementById("BN-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_KK_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_KK_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

/*      document.getElementById("BN-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountBN/buyXRP_BN_fee)- feeWD_XRP_BN ) * sellXRP_KK_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETC_BN_fee)- feeWD_ETC_BN ) * sellETC_KK_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);
*/
      document.getElementById("BN-KK_LTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyLTC_BN_fee)- feeWD_LTC_BN ) * sellLTC_KK_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      //BN-QN

      document.getElementById("BN-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_QN_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

      document.getElementById("BN-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_QN_fee) - (fundAmountBN)) / (fundAmountBN)) * 100 ).toFixed(2);

//BN-KB

      document.getElementById("BN-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountBN/buyBTC_BN_fee)- feeWD_BTC_BN ) * sellBTC_KB_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("BN-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountBN/buyETH_BN_fee)- feeWD_ETH_BN ) * sellETH_KB_fee) - (fundAmountBN * krw_usd)) / (fundAmountBN * krw_usd)) * 100 ).toFixed(2);



      //QN-KK

      document.getElementById("QN-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_KK_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_KK_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);



      //QN-CO

      document.getElementById("QN-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_CO_fee) - (fundAmountQN * krw_usd)) / (fundAmountQN * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("QN-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_CO_fee) - (fundAmountQN * krw_usd)) / (fundAmountQN * krw_usd)) * 100 ).toFixed(2);


      //QN-PO

      document.getElementById("QN-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_PO_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_PO_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);


       //QN-BX

       document.getElementById("QN-BX_BTC_oneWay").innerHTML=

                 ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_BX_fee) - (fundAmountQN * baht_usd)) / (fundAmountQN * baht_usd)) * 100 ).toFixed(2);

      document.getElementById("QN-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_BX_fee) - (fundAmountQN * baht_usd)) / (fundAmountQN * baht_usd)) * 100 ).toFixed(2);

      //QN-BF

      document.getElementById("QN-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_BF_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_BF_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);



        //QN-BT

      document.getElementById("QN-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_BT_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_BT_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);


      //QN-BS

      document.getElementById("QN-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_BS_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_BS_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);



      //QN-BN

      document.getElementById("QN-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_BN_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      document.getElementById("QN-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_BN_fee) - (fundAmountQN)) / (fundAmountQN)) * 100 ).toFixed(2);

      //QN-KB

      document.getElementById("QN-KB_BTC_oneWay").innerHTML=

                  ((((((fundAmountQN/buyBTC_QN_fee)- feeWD_BTC_QN ) * sellBTC_KB_fee) - (fundAmountQN * krw_usd)) / (fundAmountQN * krw_usd)) * 100 ).toFixed(2);

      document.getElementById("QN-KB_ETH_oneWay").innerHTML=

                  ((((((fundAmountQN/buyETH_QN_fee)- feeWD_ETH_QN ) * sellETH_KB_fee) - (fundAmountQN * krw_usd)) / (fundAmountQN * krw_usd)) * 100 ).toFixed(2);

//  //KB-KK

      document.getElementById("KB-KK_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_KK_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-KK_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_KK_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-KK_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_KK_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-KK_ETC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_KK_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);



      //  //KB-PO

      document.getElementById("KB-PO_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_PO_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-PO_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_PO_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-PO_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_PO_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-PO_ETC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_PO_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);


      // //KB-BX

       document.getElementById("KB-BX_BTC_oneWay").innerHTML=

                   ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_BX_fee) - (fundAmountKB / krw_baht )) / (fundAmountKB / krw_baht )) * 100 ).toFixed(2);

       document.getElementById("KB-BX_ETH_oneWay").innerHTML=

                   ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_BX_fee) - (fundAmountKB / krw_baht )) / (fundAmountKB / krw_baht )) * 100 ).toFixed(2);

      document.getElementById("KB-BX_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_BX_fee) - (fundAmountKB / krw_baht )) / (fundAmountKB / krw_baht )) * 100 ).toFixed(2);



      //  //KB-BF

      document.getElementById("KB-BF_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_BF_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BF_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_BF_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BF_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_BF_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BF_ETC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_BF_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      //  //KB-BT

      document.getElementById("KB-BT_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_BT_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BT_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_BT_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BT_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_BT_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BT_ETC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_BT_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);


      //  //KB-BS

      document.getElementById("KB-BS_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_BS_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BS_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_BS_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BS_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_BS_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);


       //KB-HB

      // document.getElementById("KB-HB_BTC_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_HB_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-HB_ETH_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_HB_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-HB_XRP_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_HB_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-HB_ETC_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_HB_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-HB_LTC_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyLTC_KB_fee)- feeWD_LTC_KB ) * sellLTC_HB_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

        //KB-BN

      document.getElementById("KB-BN_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_BN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-BN_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_BN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-BN_XRP_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_BN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      // document.getElementById("KB-BN_ETC_oneWay").innerHTML=

      //             ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_BN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);



 //KB-QN

      document.getElementById("KB-QN_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_QN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);

      document.getElementById("KB-QN_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_QN_fee) - (fundAmountKB * usd_krw)) / (fundAmountKB * usd_krw)) * 100 ).toFixed(2);


//KB-CO

      document.getElementById("KB-CO_BTC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyBTC_KB_fee)- feeWD_BTC_KB ) * sellBTC_CO_fee) - (fundAmountKB )) / (fundAmountKB)) * 100 ).toFixed(2);

      document.getElementById("KB-CO_ETH_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETH_KB_fee)- feeWD_ETH_KB ) * sellETH_CO_fee) - (fundAmountKB)) / (fundAmountKB)) * 100 ).toFixed(2);

      document.getElementById("KB-CO_XRP_oneWay").innerHTML=

                  ((((((fundAmountKB/buyXRP_KB_fee)- feeWD_XRP_KB ) * sellXRP_CO_fee) - (fundAmountKB)) / (fundAmountKB)) * 100 ).toFixed(2);

      document.getElementById("KB-CO_ETC_oneWay").innerHTML=

                  ((((((fundAmountKB/buyETC_KB_fee)- feeWD_ETC_KB ) * sellETC_CO_fee) - (fundAmountKB)) / (fundAmountKB)) * 100 ).toFixed(2);



    });
  });
} , 20000);
