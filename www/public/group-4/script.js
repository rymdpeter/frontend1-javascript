fetch('../../../secrets.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // appendData(data);   <--- behövs för koden som är bortkommenterad nedan
    document.getElementById("name").textContent = data[0].firstname + ' ' + data[0].lastname;
    document.getElementById("discord").textContent = data[0].discord;
    document.getElementById("github").textContent = data[0].github;
    document.getElementById("personalityType").textContent = data[0].personalityType;
    document.getElementById("birthYear").textContent = data[0].birthYear;
    document.getElementById("zodiac").textContent = data[0].zodiac.name + data[0].zodiac.symbol;
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

  // annan kod som går igenom loop.
// function appendData(data) {
//   var mainContainer = document.getElementById("myData");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].firstname + ' ' + data[i].lastname + '.<br>' + 'Discord: ' + data[i].discord + '.<br>' + 'Github: ' + data[i].github + '.<br>' + 'Personality type: ' + data[i].personalityType + '.<br>' + 'Birth year: ' + data[i].birthYear + '.<br>' + 'Zodiac sign: ' + data[i].zodiac.name + data[i].zodiac.symbol + '.';

//     mainContainer.appendChild(div);
//   }
// }