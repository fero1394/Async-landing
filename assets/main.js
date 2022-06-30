const API = 'https://binance43.p.rapidapi.com/avgPrice?symbol=ADAUSDT';
const API2 = 'https://binance43.p.rapidapi.com/avgPrice?symbol=CAKEUSDT';
const API3 = 'https://binance43.p.rapidapi.com/avgPrice?symbol=BTCUSDT';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '254d796d58msh0a4491b231987d5p17f7ddjsnf48b4fbf9154',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}



(async () => {
    try {
        const precioAda = await fetchData(API);
        const precioCake = await fetchData(API2);
        const precioBtc = await fetchData(API3);

        let view = `

        <div class="group relative">
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ADA
            </h3>
          </div>
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <h2>${precioAda.price}</h2>
          </div>

          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              CAKE
            </h3>
          </div>
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <h2>${precioCake.price}</h2>
          </div>

          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              BTC
            </h3>
          </div>
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <h2>${precioBtc.price}</h2>
          </div>
          
        </div>
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();