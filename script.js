let cardData = null;

//fetches data from the json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    cardData = data;

    //gets id from url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id == null) return;

    //finds studiekaart with matching id
    const studiekaart = cardData.studiekaarten.find((card) => card.id === id);

    document.title = "Study You - " + studiekaart.name;

    //finds all stellingskaarten from this studiekaart
    const stellingskaarten = cardData.stellingskaarten.filter(
      (s) => s.studiekaart_id === id
    );

    //finds all objectkaarten from this studiekaart
    const objectkaarten = cardData.objectkaarten.filter(
      (o) => o.studiekaart_id === id
    );

    //puts them in list
    const cards = [...stellingskaarten, ...objectkaarten];

    //fills cards with data
    for (let card of cards) {
      populateCard(card);
    }

    //sets contents of page
    document.getElementById("name").textContent = studiekaart.name;
    document.getElementById("description").textContent =
      studiekaart.description;
    for (let feature of studiekaart.features) {
      const li = document.createElement("li");
      li.textContent = feature;
      document.getElementById("features").appendChild(li);
    }

    //extra data
    if (studiekaart.extra) {
      for (item of studiekaart.extra) {
        if (typeof item == "string") {
          p = document.createElement("p");
          p.textContent = item;
          document.getElementById("info").appendChild(p);
        } else {
          ul = document.createElement("ul");
          for (i of item) {
            li = document.createElement("li");
            li.textContent = i;
            ul.appendChild(li);
          }
          document.getElementById("info").appendChild(ul);
        }
      }
    }

    //sets color of studiekaart as solution
    const span = document.getElementById("solution");
    span.style.color = studiekaart.color;
    span.textContent = studiekaart.colorName;
    const elel = document.getElementById("antwoord");
    elel.textContent =
      "🎯 Antwoorden spel: je koos [x] keer voor " + studiekaart.name;
  })
  .catch((error) => console.error("Error loading JSON:", error));

const populateCard = (carddata) => {
  //creates card, front & back
  const card = document.createElement("div");
  card.className = "card";

  const front = document.createElement("div");
  front.className = "front face";

  const back = document.createElement("div");
  back.className = "back face";

  back.style.backgroundImage = "url(" + carddata.image + ")";

  carddata.description
    ? (front.style.backgroundImage =
        "url(images/objectkaarten/Objectkaart_back.png)")
    : (front.style.backgroundImage =
        "url(images/stellingskaarten/Stellingskaart_back.png)");

  // //if card has text it is stellingskaart
  // if (carddata.text) {
  //   front.style.backgroundImage =
  //     "url(images/objectkaarten/Objectkaart_back.png)";
  //   back.innerHTML = carddata.text;
  // }
  // //otherwise it's an objectkaart, has extra image
  // else {
  //   front.style.backgroundImage =
  //     "url(images/stellingskaarten/Stellingskaart_back.png)";
  //   back.innerHTML = carddata.description;
  //   const img = document.createElement("img");
  //   img.src = carddata.image
  //     ? carddata.image
  //     : "https://placecats.com/g/200/100";
  //   back.appendChild(img);
  // }

  //adds card to card-container
  card.appendChild(front);
  card.appendChild(back);
  document.getElementById("cards-container").appendChild(card);
};
