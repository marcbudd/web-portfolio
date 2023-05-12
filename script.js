console.log("hello world")

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT LOADED")
})


function addHobby() {
    var hobbyInput = document.getElementById('hobbyInput');
    var hobbiesList = document.getElementById('hobbiesList');

    if (hobbyInput.value !== '') {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(hobbyInput.value));
      hobbiesList.appendChild(li);
      hobbyInput.value = '';
    }
  }

  function addExperience() {
    var experienceInput = document.getElementById('experienceInput');
    var experiencesList = document.getElementById('experiencesList');

    if (experienceInput.value !== '') {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(experienceInput.value));
      experiencesList.appendChild(li);
      experienceInput.value = '';
    }
  }


  