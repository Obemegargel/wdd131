// example of object
import projects from "./projects";
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

function createStickyNote(projects){
    const stickynoteinfo = document.getElementById("p1");
    // let stickynotedetails = <p>${stick1.name}</p>
    document.getElementById("p1").innerText = sticky1.getInfo();
}
