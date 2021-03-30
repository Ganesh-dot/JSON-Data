const petsData = [
  {
    name: "Pussloud",
    species: "Cat",
    favFoods: ["Wet food", "Dry food", "<strong>Any</strong> foods"],
    birthYear: 2021,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Teffy",
    species: "Dog",
    favFoods: ["Wet food", "Dry food", "<strong>Any</strong> foods"],
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
  {
    name: "Polak",
    species: "Cat",
    favFoods: ["Wet food", "Dry food", "<strong>Any</strong> foods"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
];

function age(birthYear) {
  let calculateAge = new Date().getFullYear() - birthYear;
  if (calculateAge == 1) {
    return "1 Year old";
  } else if (calculateAge == 0) {
    return "baby";
  } else {
    return `${calculateAge} Years old`;
  }
}
function food(foods) {
  return `<h4>Favorite Foods</h4>
            <ul class="foods-list">
            ${foods.map((food) => `<li>${food}</li>`).join("")}</ul>`;
}
function petTemplate(pet) {
  return ` <div class="animal">
                <img class="pet-photo" src="${pet.photo}">
                <h2 class="pet-name">${pet.name} <span class="species">(${
    pet.species
  })</span></h2>
                <p><strong>Age:</strong> ${age(pet.birthYear)} </p>
                    ${pet.favFoods ? food(pet.favFoods) : ""}         
             </div>
             
             `;
}
document.getElementById("app").innerHTML = `
         <h1 class="app-title">Pets ${petsData.length}</h1>
         ${petsData.map(petTemplate).join("")}
         <p class="footer">These ${
           petsData.length
         } pets were added recently.Check back soon for update.</p>
         `;

let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(obj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squad   Name"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + obj["homeTown"] + " // Formed: " + obj["formed"];
  header.appendChild(myPara);
}
function showHeroes(obj) {
  const heroes = obj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
