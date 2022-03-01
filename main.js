const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';

const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

loadRandomMichis();
loadFavoritesMichis();
