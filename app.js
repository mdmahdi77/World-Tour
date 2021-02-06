fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    //*********************first part */
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
        // const h3 = document.createElement('h3');       
        // h3.innerText = country.name;

        // const p = document.createElement('p');
        // p.innerText = country.capital;

        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);
        // countriesDiv.appendChild(countryDiv);


    //*********************second part */
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country'

    //     const countryInfo = `
    //         <h3 class='country-name'>${country.name}</h3>
    //         <p class='capital'> ${country.capital} </p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }


    //*********************third part */
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital">${country.capital}</p>
            <button onClick="displayCountryDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo; //displayCountryDetails er modde double coutation rekhe,,,andorra er modde single cotation dite hobe nahole error khabe
        countriesDiv.appendChild(countryDiv);
    });

}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}` //ekhane dynamically korar jonno $ dite hobe
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    // console.log(country)
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">

    `
}