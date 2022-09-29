fetch('../../../secrets.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstname + ' ' + data[i].lastname + '.<br>' + 'Discord: ' + data[i].discord + '.<br>' + 'Github: ' + data[i].github + '.<br>' + 'Personality type: ' + data[i].personalityType + '.<br>' + 'Birth year: ' + data[i].birthYear + '.<br>' + 'Zodiac sign: ' + data[i].zodiac.name + '.';

    mainContainer.appendChild(div);
  }
}