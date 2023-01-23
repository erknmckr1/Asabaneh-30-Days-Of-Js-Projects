const populationBtn = document.querySelector(".populationBtn");
const languagesBtn = document.querySelector(".languagesBtn");
const tableDiv = document.getElementById("table");
const tableInfo = document.querySelector(".table_info");

// Ülkeleri populasyona göre Çoktan aza dogru sıraladık.
var sortedCountry = countries_data.sort(function (a, b) {
  return b.population - a.population;
});
// Sıralanmız dızının ılk 10 elemanını aldık.
var topTenCountries = sortedCountry.slice(0, 10);

// Total nüfus
let totalPopulation = countries_data.reduce((acc, curr) => {
  return acc + curr.population;
}, 0);

//LANGUAGES

// Her ülkenin dilini bir dizide topladık.Şimdi hangi dilden kaçta adet var onu bulalım.
let allLanguages = [];
countries_data.forEach((country) => {
  allLanguages.push(...country.languages);
});
console.log(allLanguages);

// Dıl ve sayılarını bır nesne de topladık
let languageCount = {};
allLanguages.forEach((language) => {
  if (languageCount[language]) {
    languageCount[language]++;
  } else {
    languageCount[language] = 1;
  }
});

// Şimdi sayıya gore buyukten kucuge sıralayıp slice metoduyla ilk 10'u alalım.
let sortLanguagesCount = Object.entries(languageCount).sort(function(a, b){
    return b[1] - a[1]
})

let topTenLang = sortLanguagesCount.slice(0,10)
console.log(topTenLang)


// show Population Table
const populationTable = () => {
  let worldRow = document.createElement("div");
  let worldPop = document.createElement("span");
  let worldProgres = document.createElement("div");
  let worldPopCount = document.createElement("span");
  worldRow.setAttribute("class", "Row");

  worldPop.innerHTML = "World";
  worldPop.setAttribute("class", "name");
  worldRow.appendChild(worldPop);

  worldProgres.setAttribute('max',100)
  worldProgres.setAttribute('value',100)
  worldProgres.setAttribute("class", "progress");
  worldRow.appendChild(worldProgres);

  worldPopCount.innerHTML = totalPopulation;
  worldPopCount.setAttribute("class", "name");
  worldRow.appendChild(worldPopCount);

  tableDiv.appendChild(worldRow);

  ///

  topTenCountries.forEach((country) => {
    let countryRow = document.createElement("div");
    let countryPop = document.createElement("span");
    let countryProgres = document.createElement("div");
    let countryName = document.createElement("span");
    countryRow.setAttribute("class", "Row");

    countryName.innerHTML = country.name;
    countryName.setAttribute("class", "name");
    countryRow.appendChild(countryName);

    countryProgres.setAttribute("class", "progress");
    countryProgres.setAttribute('max',100)
    countryProgres.setAttribute('value', Math.round(((country.population / totalPopulation) * 100)))
    countryRow.appendChild(countryProgres);

    countryPop.innerHTML = country.population;
    countryPop.setAttribute("class", "name");
    countryRow.appendChild(countryPop);

    tableDiv.appendChild(countryRow);
  });
};
//shor Language table
const languageTable = () => {
topTenLang.forEach(lang=>{
    let rowLang = document.createElement('div')
    let langName = document.createElement('span')
    let langProgress = document.createElement('div')
    let langCount = document.createElement('span')

    rowLang.setAttribute('class','Row')

    langName.innerHTML = lang[0];
    langName.setAttribute('class','name')
    rowLang.appendChild(langName)
    
    langProgress.setAttribute('max',100)
    langProgress.setAttribute('value',(lang[1] ))
    langProgress.setAttribute('class','progress')
    rowLang.appendChild(langProgress)

    langCount.innerHTML=lang[1]
    langCount.setAttribute('class','name')
    rowLang.appendChild(langCount)

    tableDiv.appendChild(rowLang)
})
};

const clearData = (e)=>{
  tableDiv.innerHTML="";
}
populationBtn.addEventListener('click',(e)=>{
  clearData()
  e.preventDefault()
  populationTable()
})
languagesBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  clearData()
  languageTable()
})