# notes to myself

## set nedir ?

## concat metodu ->

Ikı farklı dızıyı bırbırıne baglar. Yenı dızıde ıkı dızının ortak elemanları olabılır.

let originalArray = [1, 2, 3];
let newArray = [2, 3, 4];
let finalArray = originalArray.concat(newArray);
console.log(finalArray);

## object.entries() metodu

object.entries metodu Javascriptte bir nesnenin tüm öğelerini (key , value) dizi olarak döndürür. Her bir dizi elemanı key-value çifti olarak gösterilir.

let languageCount = {
"English": 3,
"Spanish": 5,
"German": 2
};
let entries = Object.entries(languageCount);
console.log(entries);

// [["English", 3], ["Spanish", 5], ["German", 2]]

## concat() vs push()

concat metodu ile bir diziye diğer dizinin elemanlarını ekleriz, push ile bir diziye yeni bir eleman ekleriz. Push metodu dızının sonuna bır yenı bır eleman ekler ve boyutunu dondurur.

let arr1 = [1, 2, 3];
let newLength = arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(newLength); // Output: 4

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

## map() vs foreach()

- Map ve foreach dızılerde elemanları dolasmak ıcın kullanılır. Fakat aralarında bırkaç temel fark vardır.
  Map metodu her eleman ıcın bır deger dondururken foreach her eleman ıcın deger dondurmez.
  Örneğin;

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number \* 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

Yukarıdali örnekte numbers dızısındeki her sayı 2 ıle carpılır ve yeni bir dizi 'doubledNumbers' oluşur.

Aynı ıslemı foreach ıle yapalım

numbers.foreach(number=>number\*2)
console.log(numbers) // 2, 4, 6, 8, 10

- Map metodu dızının bır kopyasını dondururken (orjınal dızı bozulmaz) foreach metodu ıse dızıyı dırekt olarak etkıler.
- Eğer dizideki her eleman için bir değer döndürmek istiyorsanız, map() methodunu kullanmalısınız. Eğer sadece dizideki her eleman için bir işlem gerçekleştirmek istiyorsanız, `
  gerıye deger kalıcı bır parametre

## Aşağıdaki kod satırına bakalım..

let allLanguages = [];
countries_data.forEach(country => {
allLanguages.push(country.languages);
});

bu ornek elemanları bıze dızı ıcınde dızı olarak donduruyor. countries.language elimize dizi olarak geliyor. Dizinin içinde bütün elemanları strıng olarak almak ıcın SPREAD OPERATOR kullanabılırız. Verileri tek tek eklememızi sağlayacak.

let allLanguages = [];
countries_data.forEach(country => {
allLanguages.push(...country.languages);
});

## spread operator ?

## sort()
.sort(function(a, b) { return b[1] - a[1]; }) her iki dizi elemanını alır karsılastırır buyukten kucuge sıralar..

## Math.round() , Math.floor() , Math.ceil()

- Math.round() bir float degerı en yakın tam sayıya yuvarlar.
  let floatNumber = 3.14;
  let roundedNumber = Math.round(floatNumber);
  console.log(roundedNumber); // Output: 3

- Math.floor() değeri aşağı tam sayıya yuvarlar
  let floatNumber = 3.14;
  let roundedNumber = Math.floor(floatNumber);
  console.log(roundedNumber); // Output: 3

- Math.ceil() Yukarı yuvarlar
  let floatNumber = 3.14;
  let roundedNumber = Math.ceil(floatNumber);
  console.log(roundedNumber); // Output: 4
