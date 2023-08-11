const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500Div = document.createElement("div");
const bornIn1500h3 = document.createElement("h3");
const bornIn1500 = inventors.filter((e) => e.year >= 1500 && e.year < 1600);
bornIn1500h3.textContent = `1. People born in the 1500's:`;
bornIn1500Div.appendChild(bornIn1500h3);
for (const person of bornIn1500) {
  const para = document.createElement("p");
  para.textContent += `${person.first} ${person.last}, born in ${person.year};`;
  bornIn1500Div.appendChild(para);
}
document.body.appendChild(bornIn1500Div);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsNamesDiv = document.createElement("div");
const inventorsNamesh3 = document.createElement("h3");
inventorsNamesh3.textContent = `2. All inventors names:`;
inventorsNamesDiv.appendChild(inventorsNamesh3);
const inventorsNames = inventors.map(
  (person) => person.first + " " + person.last
);
for (const person of inventorsNames) {
  const para = document.createElement("p");
  para.textContent += `${person}`;
  inventorsNamesDiv.appendChild(para);
}
document.body.appendChild(inventorsNamesDiv);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirthdateDiv = document.createElement("div");
const inventorsByBirthdateh3 = document.createElement("h3");
inventorsByBirthdateh3.textContent = `3. Sorted by birthdate:`;
inventorsByBirthdateDiv.appendChild(inventorsByBirthdateh3);
{
  const inventorsByBirthdate = inventors.sort((a, b) => a.year - b.year);
  for (const person of inventorsByBirthdate) {
    const para = document.createElement("p");
    para.textContent += `${person.first} ${person.last}: born ${person.year}`;
    inventorsByBirthdateDiv.appendChild(para);
  }
  document.body.appendChild(inventorsByBirthdateDiv);
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorsSumAgeDiv = document.createElement("div");
const inventorsSumAgeh3 = document.createElement("h3");
inventorsSumAgeh3.textContent = `4. Total years lived by all:`;
inventorsSumAgeDiv.appendChild(inventorsSumAgeh3);

{
  const para = document.createElement("p");
  para.textContent = inventors.reduce((sum, x) => sum + (x.passed - x.year), 0);
  inventorsSumAgeDiv.appendChild(para);
  document.body.appendChild(inventorsSumAgeDiv);
}
// 5. Sort the inventors by years lived
const inventorsByYearsLivedDiv = document.createElement("div");
const inventorsByYearsLivedh3 = document.createElement("h3");
inventorsByYearsLivedh3.textContent = `5. Inventors by years lived:`;
inventorsByYearsLivedDiv.appendChild(inventorsByYearsLivedh3);
{
  const inventorsByYearsLived = inventors.sort(
    (a, b) => a.passed - a.year - (b.passed - b.year)
  );
  for (const person of inventorsByYearsLived) {
    const para = document.createElement("p");
    para.textContent += `${person.first} ${person.last}: years lived - ${
      person.passed - person.year
    }`;
    inventorsByYearsLivedDiv.appendChild(para);
  }
  document.body.appendChild(inventorsByYearsLivedDiv);
}
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastNameDiv = document.createElement("div");
const peopleByLastNameh3 = document.createElement("h3");
peopleByLastNameh3.textContent = `6. People by last name:`;
peopleByLastNameDiv.appendChild(peopleByLastNameh3);
const peopleByLastName = people.sort((a, b) =>
  a.split(",")[0].localeCompare(b.split(",")[0])
);
{
  for (const person of peopleByLastName) {
    const para = document.createElement("p");
    para.textContent = `${person}`;
    peopleByLastNameDiv.appendChild(para);
  }
  document.body.appendChild(peopleByLastNameDiv);
}
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const countOfEachInstanceDiv = document.createElement("div");
const countOfEachInstanceh3 = document.createElement("h3");
countOfEachInstanceh3.textContent = `7. Count of each instance:`;
countOfEachInstanceDiv.appendChild(countOfEachInstanceh3);
const countOfEachInstance = data.reduce((sum, x) => {
  if (!sum[x]) {
    sum[x] = 0;
  }
  sum[x]++;
  return sum;
}, {});
for (const item in countOfEachInstance) {
  const para = document.createElement("p");
  const key = countOfEachInstance[item];
  para.textContent = `${item[0].toUpperCase()}${item.slice(1)}: ${key}`;
  countOfEachInstanceDiv.appendChild(para);
}
document.body.appendChild(countOfEachInstanceDiv);
