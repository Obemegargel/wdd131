// example of object
import projects from "./projects.js";
// class stickynote {
//     constructor(type, name, languages, description, setup, imgURL) {
//         this.projectType = type;
//         this.projectName = name;
//         this.languages = languages;
//         this.Description = description;
//         this.Setup = setup;
//         this.imgURL = imgURL;
//     }
//     getInfo() {
//         return `${this.projectType} ${this.projectName} ${this.languages} ${this.Description} ${this.Setup} ${this.imgURL}`;
//     }
// };

// function stickynotehtml(project){
    // if project is not null
    // project.type, project.name etc...loop through project.languages array can use a seperate function for this (unit 5 activity has a good example of how to do this) saving these language values to ul as li
    // <div class="stickynote">
    //     <div>
    //         <u><p id=${idvariablename}>${projectvariablename}</p></u>
    //         <ul>
    //             <li>html</li>
    //             <li>css</li>
    //             <li>javascript</li>
    //         </ul>
    //     </div>
    //     <img src=${imageurlvariablename} alt="project" />  
    // </div>
    // if(project!=null){
    //     // create variables to populate htmlstring
    //     // loop through languages and populate the ul where each item is a li

    //     document.getElementById("") =`
    //         <div class="stickynote">
    //         <div>
    //             <u><p id=${project.type}>${project.name}</p></u>
    //             <ul>
    //                 <li>html</li>
    //                     <li>css</li>
    //                 <li>javascript</li>
    //             </ul>
    //         </div>
    //         <img src=${project.imgURL} alt="project" />  
    //     </div>`
    //     ;
    // }

// }
// const project_types = ["website","app","ai","video game"]
// const non_unique_types = projects.map((project) => { return project.type});
// console.log(`non unique types: ${non_unique_types}`)
// const unique_types = uniquify(non_unique_types)
// console.log(`unique types: ${unique_types}`)

// function uniquify(non_unique_types){
//     console.log(non_unique_types)
//     const unique_types = []
//     non_unique_types.forEach(type => {
//         console.log(type)
//         if(!unique_types.includes(type)){
//             unique_types.push(type)
//         }
//     })
//     console.log(unique_types)
//     console.log("uniquify produced this")
// }

// function createStickyNotes(projects){
//     var row = new Array();
//     // for each project in projects
//     projects.forEach(project => {
//         // call stickynotehtml function passing the whole project to this 
//         // function as a parameter which returns a string of the html markup
//         if(projects !=null){
//             var note = stickynotehtml(project)
//             // add these strings to an array.
//         }
//         if(project !=null){
//             row.push(note)
//         }

//     });
//     // Then join those strings to be one super string
//     row.join();
//     return row;
//     // returns a single string which is the array of html markups for each sticky note made in that row and we use .join to make it all one string this string is what is returned
// }

// function createrows(unique_types){
//     // given a list of project types: web,app,ai,videogame...etc.
//     // for each type create a stickynote-row (set could be useful here)
//     var row = [];
//     console.log(row)
//     unique_types.forEach(type=>{
//         // for each row call createStickyNotes function (this returns a string of sticky-note markups(html) elements) only send the filtered array of projects for the given row
//         console.log("lets start the createrows function loop")
//         var note = createStickyNotes(type)
//         if(note != null){
//             row.push(note)
//             console.log(note)
//         }
//         console.log(row)
//     });
//     // add the list to the dom
    
    
// }
//______________________________________________________________________________________________________________________________
// const project_types = ["website","app","ai","video game"]
const non_unique_types = projects.map((project) => { return project.type});
// console.log(`non unique types: ${non_unique_types}`)
const unique_types = uniquify(non_unique_types)
// console.log(`unique types: ${unique_types}`)

function uniquify(non_unique_types){
    // console.log(non_unique_types)
    const unique_types = []
    non_unique_types.forEach(type => {
        // console.log(type)
        if(!unique_types.includes(type)){
            unique_types.push(type)
        }
    })
    // console.log(unique_types)
    // console.log("uniquify produced this")
    projectmap(projects,unique_types)
}

// wrap my head around things and how they should work
// I have a list of objects saved in the list variable called: projects
// I want a row on the main page for every unique project.type in that list
// I want to populate each row with only the project objects that have that same type
// I want each project to be added to the row via a set html markup

// methodology:
// function 1 projectmap(the list of objects) outputs a map where the key is unique object.type values found in the list and the values to those keys are lists of objects containing objects with that object.type
// I will create a map of listsof type object that starts out as empty
// I will sort through the objects list i started with.
     // for each object, I will check if the new list already has a key that matches the current object's type value.
     // if the list does not already have a mapped list to this value I will add a key of the unique type and the value assigned will be an empty list.
     // I will immediately add this current object to the list.
     // if the type already exists in the map as a key, I will simply add the object to that key's list.
function projectmap(projects, unique_types){
    // displaylist(projects)
    // console.log(`projects:${projects}`)
    // console.log(`unique_types:${unique_types}`)
    var map = new Map();
    for (const type of unique_types){
        map.set(type,[])
    }
    for(const project of projects){
        // displayproject(project)
        if (map.has(project.type)){
            map.get(project.type).push(project);
            // console.log(map)
        }
        else{
            console.warn(`Type "${project.type}" not found in unique_types.`);
        }
    }
    

    // return map
    // displaymap(map)
    onerowatatime(map) // instead of returning map I am just passing it straight to next function
}

// function 2 onerowatatime(the map provided by projectmap) this returns nothing
// it loops through the map.
// for each key it calls populaterows() function providing as parameter the key and the value to that key which is a list of objects with that same key
function onerowatatime(map){
    for(var item of map){
        // console.log(item)
        populaterow(item)// passes {key, List<object>} to populaterows function
    }
}

// function 3 populaterows(key, list of objects) output is a long string of html markup for that row
// for each object in that key's value I will add that object's information to the html as a stickynote to the row's html
// First I will add a div to the html that will have the id that I will access and add to later. this id will be the same value as the type
// to do this I will create an empty list of strings 
// I will then loop through the list of objects provided as a parameter
// for each object I will call a function to convert that object's information into an html markup
// I will add that output's string to the list
// once the list is finished I will join all the list values of this new list I created and added to to make one long string
function populaterow(keyandvalue){
    var rowlist = [];
    document.getElementById("addprojects").innerHTML = `
        <div id="${keyandvalue[0]}">
            <h3>${keyandvalue[0]} Row:</h3>
            
        </div>`;
    for(var object of keyandvalue[1]){
        var htmlstring = htmlify(object);
        rowlist.push(htmlstring);
    }
    var rowlistasstring = rowlist.join();
    return rowlistasstring;
}

// function 4 htmlify(object passed from populaterows) it returns the html markup in string form for one object at a time
// you do not combine the strings here you give that to populate rows and it takes care of the applying it to a list and then
// adding that joined list to the id for the new column
function htmlify(object){
    // console.log(object.type)
    // console.log(object.name)
    // console.log(object.imgURL)
    // console.log(object.languages)
    document.getElementById(`${object.type}`).innerHTML = `
            <div class="stickynote">
                <div>
                    <u><p id="${object.type}paragraph">
                    <a href="/obediahportfolio/details.html">
                    ${object.name}
                    </a>
                    
                    </p></u>
                    <ul id="${object.type}languages"></ul>
                </div>
                
                <img src="images/stickynotes/stickynoteorangenobackground.png" alt="${object.name}" height="206"/> 
            </div>`;
    languagelooper(object.languages,object.type);
}

// function 5 languagelooper(objectlanguages)htmlify will call this function that adds values to the ul by looping through the languages
function languagelooper(languages, type){
    var ul = document.getElementById(`${type}languages`);
    for (var language of languages){
        var li = document.createElement("li");
        li.textContent = language;
        ul.appendChild(li)
    };
}

// function 6 display map
function displaymap(map){
    console.log("displaying map")
    
    map.forEach((key,value) => {console.log((key,value))})
}
// function displayproject(project){
//     console.log("display project")
//     project.forEach(item => {console.log(item)})
// }
function displaylist(list){
    console.log("displaylist:")
    list.forEach(item => {console.log(item)})
}



// call functions as needed


// when the screen is skinny, the sticky notes will go up and down in one column
// when the screen gets bigger, I will make the rows go until the end and then start back over right below it 
// just like google docs once your paragraph is longer than the paper is wide.

// DETAILS PAGE
