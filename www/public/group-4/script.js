fetch('../../../secrets.json')
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("name").textContent = data.firstname + " " + data.lastname;
    document.getElementById("discord").textContent = data.discord;
    document.getElementById("github").textContent = data.github;
    document.getElementById("personalityType").textContent = data.personalityType;
    document.getElementById("birthYear").textContent = data.birthYear;
    document.getElementById("zodiac").textContent = data.zodiac.name + " " + data.zodiac.symbol;
  });