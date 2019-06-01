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

let dinner = new Date('dinner', 'Meal', 'Indoor', 'Any');
let movie = new Date('the movies', 'Outing', 'Indoor', 'Long');
let museum = new Date('a museum', 'Outing', 'Indoor', 'Medium');
let arboretum = new Date('the arboretum', 'Outing', 'Outdoor', 'Any');


/*----- cached element references -----*/

/*----- event listeners -----*/

pick.addEventListener('click', pickDate);

/*----- functions -----*/

function pickDate() {
    let dateOptions = [dinner, movie, museum, arboretum];

    let randomDate = dateOptions[Math.floor(Math.random() * dateOptions.length)];

    let dateString = "How about " + randomDate.name + " ?";

    dateResult.innerHTML = dateString;

    console.log(randomDate.name);
}


/* 
Se
Pick a date from the array 
Turn object into a string 
Take the name object from the string, turn it into a string, and pass it into the dateResult 
*/