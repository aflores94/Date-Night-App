//jshint esversion:6 

/*----- constants -----*/

const dateResult = document.getElementById('dateResult');
const pick = document.getElementById('pick');
const indoor = document.getElementById('indoor');
const outdoor = document.getElementById('outdoor');
const short = document.getElementById('short');
const medium = document.getElementById('medium');
const long = document.getElementById('long');
const meal = document.getElementById('meal');
const outing = document.getElementById('outing');
const entertainment = document.getElementById('entertainment');
const drinks = document.getElementById('drinks');
const indoorOutdoor = document.getElementsByName('location');
const allLength = document.getElementsByName('length');


/*----- app's state (variables) -----*/

function Date(name, category, location, time) {
    this.name = name;
    this.category = category;
    this.location = location;
    this.time = time;
}

let dinner = new Date('dinner', 'Meal', 'Indoor', 'Short');
let movie = new Date('the movies', 'Outing', 'Indoor', 'Long');
let museum = new Date('a museum', 'Outing', 'Indoor', 'Medium');
let arboretum = new Date('the arboretum', 'Outing', 'Outdoor', 'Medium');

let dateOptions = [dinner, movie, museum, arboretum];

let specificOptions = [];

/*----- cached element references -----*/

/*----- event listeners -----*/

pick.addEventListener('click', pickDate);

/*----- functions -----*/
function handleLocation() {
    for (let i = 0; i < indoorOutdoor.length; i++) {
        if (indoorOutdoor[0].checked && indoorOutdoor[1].checked) {
            specificOptions = dateOptions;
            return;
        }
    }
    if (indoor.checked) {
        specificOptions = dateOptions.filter(function(element) { return (element.location === 'Indoor'); });
    } else if (outdoor.checked) {
        specificOptions = dateOptions.filter(function(element) { return (element.location === 'Outdoor'); });
    } 
}

function handleLength() {
    for (let i = 0; i < allLength.length; i++) {
        if (allLength[0].checked && allLength[1].checked && allLength[2].checked) {
            specificOptions = dateOptions;
            console.log('all clicked');
            return;
        } else if (allLength[0].checked && allLength[1].checked) {
            console.log('two clicked');
        } else if (allLength[0].checked && allLength[2].checked) {
            console.log('two clicked');
        } else if (allLength[1].checked && allLength[2].checked) {
            console.log('two clicked');
        }
    }
    if (short.checked) {
        specificOptions = dateOptions.filter(function(element) { return (element.time === 'Short'); });
        console.log(specificOptions);
    } else if (medium.checked) {
        specificOptions = dateOptions.filter(function(element) { return (element.time === 'Medium'); });
        console.log(specificOptions);
    } else if (long.checked) {
        specificOptions = dateOptions.filter(function(element) { return (element.time === 'Long'); });
        console.log(specificOptions);
    }
}


function pickDate() {
    let randomDate = specificOptions[Math.floor(Math.random() * specificOptions.length)];

    let dateString = "How about " + randomDate.name + "?";

    dateResult.innerHTML = dateString;

    console.log(allLength);
}