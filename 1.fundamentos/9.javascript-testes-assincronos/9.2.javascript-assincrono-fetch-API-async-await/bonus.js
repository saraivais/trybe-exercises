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
  const coinUl = document.querySelector('#coin-list');
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