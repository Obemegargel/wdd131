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

function stickynotehtml(project){
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
    if(project!=null){
        // create variables to populate htmlstring
        // loop through languages and populate the ul where each item is a li

        let htmlstring =`
            <div class="stickynote">
            <div>
                <u><p id=${project.type}>${project.name}</p></u>
                <ul>
                    <li>html</li>
                        <li>css</li>
                    <li>javascript</li>
                </ul>
            </div>
            <img src=${project.imgURL} alt="project" />  
        </div>`
        ;
    }

}
// const project_types = ["website","app","ai","video game"]
const non_unique_types = projects.map((project) => { return project.type});
const unique_types = uniquify(non_unique_types)

function uniquify(non_unique_types){
    console.log(non_unique_types)
    const unique_types = []
    non_unique_types.forEach(type => {
        console.log(type)
        if(!unique_types.includes(type)){
            unique_types.push(type)
        }
    })
    console.log(unique_types)
    console.log("uniquify produced this")
}

function createStickyNotes(projects){
    var row = new Array();
    // for each project in projects
    projects.forEach(project => {
        // call stickynotehtml function passing the whole project to this 
        // function as a parameter which returns a string of the html markup
        if(projects !=null){
            var note = stickynotehtml(project)
            // add these strings to an array.
        }
        if(project !=null){
            row.push(note)
        }

    });
    // Then join those strings to be one super string
    row.join();
    return row;
    // returns a single string which is the array of html markups for each sticky note made in that row and we use .join to make it all one string this string is what is returned
}

function createrows(unique_types){
    // given a list of project types: web,app,ai,videogame...etc.
    // for each type create a stickynote-row (set could be useful here)
    var row = [];
    console.log(row)
    unique_types.forEach(type=>{
        // for each row call createStickyNotes function (this returns a string of sticky-note markups(html) elements) only send the filtered array of projects for the given row
        console.log("lets start the createrows function loop")
        var note = createStickyNotes(type)
        if(note != null){
            row.push(note)
            console.log(note)
        }
        console.log(row)
    });
    // add the list to the dom
    
    
}
