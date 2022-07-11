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

// VARIANTAS ar geras ?
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

// PASIKLAUSTI
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function solutionInlineValues(arr: any[]): void {
    const oneLineValue = arr.reverse().join(' ');
    console.log(oneLineValue);
  }

  console.log('Numbers');
  solutionInlineValues(numbers);
  console.log('Words');
  solutionInlineValues(words);
}
console.groupEnd();

console.group(
  '8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:'
);
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  function InlineValuesWithIndex(arr: any[]): void {
    const oneLineValueIndex = arr.map((value, i) => `[${i}]=>${value}`).join(' ');
    console.log(oneLineValueIndex);
  }

  console.log('Numbers');
  InlineValuesWithIndex(numbers);
  console.log('Words');
  InlineValuesWithIndex(words);
}
console.groupEnd();

console.group(
  '9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2'
);
{
  function doubleNumArr(arr: number[]): number[] {
    return arr.map((value) => value * 2);
  }
  console.log('Numbers');
  const ats = doubleNumArr(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu'
);
{
  function squareNumArr(arr: number[]): number[] {
    return arr.map((value) => value ** 2);
  }
  console.log('Numbers');
  const ats = squareNumArr(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos'
);
{
  function indexNumMultiply(arr: number[]): number[] {
    return arr.map((value, i) => value * i);
  }
  console.log('Numbers');
  const ats = indexNumMultiply(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų'
);
{
  function onlyPositiveNum(arr: number[]): number[] {
    return arr.filter((value) => value > 0);
  }
  console.log('Numbers');
  const ats = onlyPositiveNum(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų'
);
{
  function onlyNegativeNum(arr: number[]): number[] {
    return arr.filter((value) => value < 0);
  }
  console.log('Numbers');
  const ats = onlyNegativeNum(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų'
);
{
  function onlyLiginiai(arr: number[]): number[] {
    return arr.filter((value) => value % 2 === 0);
  }
  console.log('Numbers');
  const ats = onlyLiginiai(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų'
);
{
  function onlyNeliginiai(arr: number[]): number[] {
    return arr.filter((value) => value % 2 !== 0);
  }
  console.log('Numbers');
  const ats = onlyNeliginiai(numbers);
  console.log(ats);
}
console.groupEnd();

console.group(
  '16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų'
);
{
  function changedToPositives(arr: number[]): number[] {
    return arr.map((value) => (value < 0 ? -value : value));
  }
  console.log('Numbers');
  const ats = changedToPositives(numbers);
  console.log(ats);
}
console.groupEnd();
