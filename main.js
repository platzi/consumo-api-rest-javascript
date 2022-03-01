console.log('Hello, world')

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

async function reload() {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data)
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}

reload();
