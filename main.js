//jshint esversion:6 

/*----- constants -----*/

const dateResult = document.getElementById('dateResult');
const pick = document.getElementById('pick');

/*----- app's state (variables) -----*/

function Date(name, category, location, time) {
    this.name = name;
    this.category = category;
    this.location = location;
    this.time = time;
}

let dinner = new Date('Dinner', 'Meal', 'Indoor', 'Any');
let movie = new Date('Movies', 'Outing', 'Indoor', 'Long');
let museum = new Date('Museum', 'Outing', 'Indoor', 'Medium');
let arboretum = new Date('Arboretum', 'Outing', 'Outdoor', 'Any');


/*----- cached element references -----*/

/*----- event listeners -----*/

pick.addEventListener('click', pickDate);

/*----- functions -----*/

function pickDate() {
    let dateOptions = [dinner, movie, museum, arboretum];

    let randomDate = dateOptions[Math.floor(Math.random() * dateOptions.length)];

    let dateString = "How about" + randomDate + " ?";

    dateResult.innerHTML = dateString;
}