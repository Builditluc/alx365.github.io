var jsonFile;

function fetchDB() {
  // fetches the json database with the themes stored in it
    fetch("themes.json")
    .then(function (response) {
      return response.json();
    }).then(function (data) {
        // Then processes the returned data in another function
        appendData(data);
      })
    .catch(function (err) {
      console.log(err);
    });
}

function appendData(data) {
    
    var mainContainer = document.getElementById("myData");
    // For the lenght 
    for (var i = 0; i < data.themes.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 
      'Name: ' + data.themes[i].name;
      div.style.backgroundColor = "black"
      mainContainer.appendChild(div);
    }
  }