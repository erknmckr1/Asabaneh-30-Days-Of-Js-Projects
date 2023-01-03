const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
const countriesDiv = document.querySelector('.countryRow')
const searchInfo = document.querySelector('.searchInfo')
//buttons
const startingWord = document.querySelector('.startingWord')
const searchWithAny = document.querySelector('.searchWithAny')
const sortButton = document.querySelector('.sort')
// input
const input = document.querySelector('.input')

// inputa girilen karaktere göre ülkeleri filtreleyip tutacak dizi
let searchedCountry = [];
let checkedBtn = "";



const displayCountryDiv = () => {
  let display = searchedCountry.map(country => {
    return `
    <div class="col-md-2 mt-5 colBg  ">
    <div class="countryDisp"> 
    <h4 class="countryText" > ${country} </h4>
    </div>
    </div>`

  }).join("");
  countriesDiv.innerHTML = display;
  
}

function searchInfoo (){
  searchInfo.textContent=`Countries containing ${input.value} are ${searchedCountry.length}`
}

input.addEventListener('input', () => {
  if(checkedBtn && checkedBtn==='startingWord'){
    startWithWord()
  }
  if(checkedBtn && checkedBtn ==='searchWithAny'){
    searchWithAnyWord()
  }
})
// startbtn
startingWord.addEventListener('click', (e) => {
  startingWord.classList.toggle('clickBtn')
  checkedBtn = 'startingWord';
  console.log('start calıstı')
  console.log(checkedBtn)
})
//search with any btn
searchWithAny.addEventListener('click', (e) => {
  searchWithAny.classList.toggle('clickBtn')
  checkedBtn = 'searchWithAny';
  console.log('searcwith calıstı')
  console.log(checkedBtn)
})
// sort btn
sortButton.addEventListener('click',(e)=>{
  searchedCountry.reverse()
  displayCountryDiv()
})
//inputa gırdıgımız degere gore country dızısınde arama yaptık. Dizi elemanları buyuk harf oldugu ıcın buyuk harfe cevırdık. Inputa gırdıgımız karakterlerle bastan sırayla eslesen ülkeleri listeleyecek fonksıyonu olusturduk.
function startWithWord() {
  let sliceCountry = "";
  searchedCountry = [];
  countries.forEach(country => {
    sliceCountry = country.slice(0, input.value.length);
    if (sliceCountry.toUpperCase() == input.value.toUpperCase()) {
      searchedCountry.push(country.toUpperCase())
    }


  })
  displayCountryDiv()
  searchInfoo()
}

// Inputa gırdıgımız karakterleri hangi ülke içeriyorsa o ülkeleri searchenCountry dızısıne pushlayıp countryRow içerisinde listeliyoruz.
function searchWithAnyWord() {
  searchedCountry = [];
  countries.forEach(country => {
    if (country.toUpperCase().includes(input.value.toUpperCase())) {
      searchedCountry.push(country.toUpperCase())
    }
  })
  displayCountryDiv()
  searchInfoo()
}




