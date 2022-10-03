fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    let next = document.getElementById("next");
    let i = 0;
  
    next.addEventListener("click", () => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      }
      fetch('./data.json')
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("name").textContent = data[i].firstname + " " + data[i].lastname;
          document.getElementById("discord").textContent = data[i].discord;
          document.getElementById("github").textContent = data[i].github;
          document.getElementById("personalityType").textContent = data[i].personalityType;
          document.getElementById("favoritmat").textContent = data[i].mat;
          document.getElementById("birthYear").textContent = data[i].birthYear;
          document.getElementById("zodiac").textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
  })
  .catch((err) => console.log(err));
});
});