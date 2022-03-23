const createLi = (object) => {
  const coinUl = document.querySelector('#coin-list');
  const newLi = document.createElement('li');
  const listText = `${object.name}: U$${object.value}`;
  newLi.innerText = listText;
  coinUl.appendChild(newLi);
}

const cleanObj = (objArr) => {
  const cleanArr = objArr.map((coin) => ({ name: coin.name, value: coin.priceUsd }));
  const onlyTen = cleanArr.filter((elemento, index) => index < 10);
  onlyTen.forEach((coin) => createLi(coin));
}

const fetchCoins = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  const apiInfo = await fetch(url);
  const dataBase = await apiInfo.json();
  // console.log(dataBase.data[0]);
  cleanObj(dataBase.data);
}

fetchCoins();