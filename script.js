console.log("hello world");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT LOADED");

    document.getElementById('addHobbyButton').addEventListener('click', addHobby);
    document.getElementById('addExperienceButton').addEventListener('click', addExperience);

});


function addHobby() {
    let hobbyInput = document.getElementById('hobbyInput');
    let hobbiesList = document.getElementById('hobbiesList');

    if (hobbyInput.value !== '') {
      let listElement = document.createElement('li');
      listElement.textContent = hobbyInput.value;
      hobbiesList.appendChild(listElement);
      hobbyInput.value = '';
    }
  }

  function addExperience() {
    let experienceInput = document.getElementById('experienceInput');
    let experiencesList = document.getElementById('experiencesList');

    if (experienceInput.value !== '') {
      let listElement = document.createElement('li');
      listElement.textContent = experienceInput.value;
      experiencesList.appendChild(listElement);
      experienceInput.value = '';
    }
  }

