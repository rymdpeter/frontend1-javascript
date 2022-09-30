fetch('../../../secrets.json')
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("name").textContent = data.firstname + " " + data.lastname;
    document.getElementById("discord").textContent = data.discord;
    document.getElementById("github").textContent = data.github;
    document.getElementById("personalityType").textContent = data.personalityType;
    document.getElementById("birthYear").textContent = data.birthYear;
    document.getElementById("zodiac").textContent = data.zodiac.name + " " + data.zodiac.symbol;
  })
  .catch((err) => console.log(err));


// onödig knapp som visar ålder
let onClick = () => {
  let birthYear = document.getElementById("birthYear").textContent;
  let age = new Date().getFullYear() - birthYear;

  if (document.getElementById("age").textContent === "") {
    document.getElementById("age").textContent = age;
  } else {
    document.getElementById("age").textContent = "";
  }
};




