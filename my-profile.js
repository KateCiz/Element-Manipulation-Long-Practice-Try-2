function addUser (name, facts) {
  let fullName = document.createElement("h1");
  fullName.innerText = name;
  fullName.setAttribute("class", "name");
  document.body.appendChild(fullName);

  let funFacts = document.createElement("ul");
  funFacts.setAttribute("class", "myDetails");
  document.body.appendChild(funFacts);

  for (let i = 0; i < facts.length; i++) {
     let fact = document.createElement("li");
     fact.setAttribute("class", "detail");
     fact.innerText = facts[i];
    funFacts.appendChild(fact);
  }
}

addUser("Captain America", ["Can do this all day", "Likes his shield", "Leader"]);

window.addEventListener("DOMContentLoaded", event => {
  let clock = document.createElement("div")
  let ul = document.querySelector(".myDetails");

  ul.appendChild(clock);
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clock.innerHTML = `I live in Brooklyn New York, and it's currently ${hours + ':' + minutes + ':' + seconds} here.`;
  }

  setInterval(time, 1000);
});

function addProfilePic(img) {
  let profileDiv = document.createElement('div');
  // let image = document.createElement('img');

  profileDiv.setAttribute('class', 'profilePicDiv');
  // image.setAttribute('class', 'profilePic');
  // image.setAttribute('src', img);

  profileDiv.style.height = '100px';
  profileDiv.style.width = '100px';
  profileDiv.style.backgroundImage = `url(${img})`;

  profileDiv.style.backgroundPosition = "center center";
  profileDiv.style.backgroundSize = 'cover';
  profileDiv.style.backgroundRepeat = 'no-repeat';


  let title = document.body.querySelector('.name');
  title.appendChild(profileDiv);
  // profileDiv.appendChild(image);


}

addProfilePic('https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg');

function createList(listName, list) {
  let newList = document.createElement('ul');
  newList.setAttribute('class', listName);
  document.body.appendChild(newList);
  let listTitle = document.createElement('h2');
  listTitle.innerText = listName;
  newList.appendChild(listTitle);

  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    let listItem = document.createElement('li');
    listItem.innerText = item;
    newList.appendChild(listItem);
  }
}

createList('favorite restaraunts', ['schwarma place', 'baskin robbins', 'new york coffee shop'])
