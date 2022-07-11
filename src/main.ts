const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = [
  'pirmadienis',
  'antradienis',
  'trečiadienis',
  'ketvirtadienis',
  'penktadienis',
  'šeštadienis',
  'sekmadienis',
];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

  function lastArrElIndex(arr: any[]): void {
    console.log(arr.length - 1);
  }
  console.log('Numbers');
  lastArrElIndex(numbers);

  console.log('Words');
  lastArrElIndex(words);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(i);
  }
  console.log('Numbers');
  solution(numbers);
  console.log('Words');
  solution(words);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
  }
  console.log('Numbers');
  solution(numbers);
  console.log('Words');
  solution(words);
}
console.groupEnd();

console.group(
  '4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  '
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log([i], `=>`, arr[i]);
  }
  console.log('Numbers');
  solution(numbers);
  console.log('Words');
  solution(words);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function solution(arr: any[]): void {
    let newArr = arr.reverse();
    for (let i = 0; i < newArr.length; i++) console.log(arr[i]);
  }
  console.log('Numbers');
  solution(numbers);
  console.log('Words');
  solution(words);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function solution(arr: any[]): void {
    let oneLine = '';
    for (let i = 0; i < arr.length; i += 1) {
      oneLine += i + ' ';
    }
    console.log(oneLine);
  }
  //   function solution(arr: any[]): void {
  //     let oneLine = '';
  //     for (let i = 0; i < arr.length; i += 1, oneLine += i + ' ') console.log(oneLine);
  //   }
  console.log('Numbers');
  solution(numbers);
  console.log('Words');
  solution(words);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:'
);
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group(
  '16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
