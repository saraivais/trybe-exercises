const fetchCoinTranslate = async () => {
  const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`;
  const endpoint = `/currencies/usd.min.json`;
  const url = baseUrl.concat(endpoint);

  const apiInfo = await fetch(url);
  const dataBase = await apiInfo.json();
  const dolarToReal = dataBase.usd.brl;
  return dolarToReal;
}

const createLi = async (object) => {
  const coinUl = document.querySelector('#coins-list');
  const newLi = document.createElement('li');
  const real = await fetchCoinTranslate();
  const realValue = parseInt(object.value, 10) * parseInt(real, 10);
  const listText = `${object.name}: U$${realValue}`;
  newLi.innerText = listText;
  coinUl.appendChild(newLi);
}

const cleanObj = (objArr) => {
  const cleanArr = objArr.map((coin) => ({ name: coin.name, value: coin.priceUsd }));
  const onlyTen = cleanArr.filter((elemento, index) => index < 10);
  onlyTen.forEach((coin) => createLi(coin));
}

const fetchCoins = async () => {
  url = `https://api.coincap.io/v2/assets`;
  const apiInfo = await fetch(url);
  const dataBase = await apiInfo.json();
  // console.log(dataBase.data[0]);
  cleanObj(dataBase.data);
}

fetchCoins();

// BONUS

//   baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`,
//   endpoint: `/currencies/usd.min.json`

// const url = `${URLObj.baseUrl}${URLObj.endpoint}`;

// refazer na mentoria~

// ----------------------------------------------------------------------------------------- GABARITO
// api.js
// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   return coins;
// };

// const fetchUsdCurrencies = async () => {
//   const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
//   const usdEndpoint = '/currencies/usd.min.json'
//   const url = baseUrl.concat(usdEndpoint);

//   const usdCurrencies = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.usd)
//     .catch((error) => error.toString());

//   return usdCurrencies;
// };

// const setCoins = async () => {
//   const coins = await fetchCoins();
//   const usdCurrencies = await fetchUsdCurrencies();

//   const coinsList = document.getElementById('coins-list');

//   coins
//     .filter((coin) => Number(coin.rank) <= 10)
//     .forEach((coin) => {
//       const newLi = document.createElement('li');
//       const usdPrice = Number(coin.priceUsd);
//       const brlPrice = usdPrice * usdCurrencies.brl;

//       newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

//       coinsList.appendChild(newLi);
//     });
// };

// window.onload = () => setCoins();