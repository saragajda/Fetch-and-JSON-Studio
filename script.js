window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      return response.json();
        }).then(function(json){
            let astronauts = '';
            for(astronaut of json){
                astronauts += 
                `<div class="astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
                </div>`;
            }
            let container = document.getElementById("container");
            container.innerHTML = astronauts;
    });
  });