import info from "./cities.json";

let cities: [];
cities = info as [];


// const matchList = document.getElementById("match-list");
// const search = document.getElementById("search") as HTMLInputElement;
// console.log();

// search.addEventListener('input', () => searchCity(search.value));

// // Show suggestions in HTML
// const outputHTML = matches => {
//     if (matches.length > 0) {
//         const html = matches.map(match => `
//                 <div>
//                 <h4>${match.name}</h4>
//                 </div> 
//             `).join('');

//         matchList.innerHTML = html;
//     }
// }

// Search cities.json
// const searchCity = searchText => {
// const response = await fetch('./cities.json');
// console.log(response)
// const cities = await response.json();
// console.log(cities + " cities");

// Get matches to the text input
//     let matches = cities.filter(city => {
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         return city.name.match(regex) || city.abbr.match(regex);
//     });

//     if (searchText.length === 0) {
//         matches = [];
//     }

//     outputHTML(matches);
// };

const autoComplete = (element, list) => {
    let suggestion = document.createElement("div");
    document.getElementById('search').appendChild(suggestion);
    element.addEventListener("input", (e) => {
        var suggestions = [];
        // console.log(e.target);
        if (e.target.value) {
            suggestions = cities.filter((city: any) => {
                // console.log(city.name);
                city.name.toLowerCase().includes(e.target.value)
            }
            );
            let [one, two, three] = suggestions;
            suggestion.innerHTML = one + " " + two + " " + three;
        }
        // console.log(countries);
    });
};
let autocomplete = () => {
    autoComplete(document.getElementById("search"), cities);
}

export default autocomplete;