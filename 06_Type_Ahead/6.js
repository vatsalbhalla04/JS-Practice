const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
// console.log(cities);

function findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numWithCommas(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    // console.table(matchArray);

    const html = matchArray.map(place => {
        // creating a regex which will map the city name, and the regex will replace the word that it matches while searching just with a span of class='hl' / highlight
        const regex = new RegExp(this.value, 'gi'); // "g" means global and "i" means case-insensitive (match letters regardless of case: 'A' == 'a').

        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;b
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);