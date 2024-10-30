// example of object
import projects from "./projects.js";

// get list of types in projects each value in this list is a string
const non_unique_types = projects.map((project) => { return project.type});
// call the function to filter to only have a list of unique strings

// need this
uniquify(non_unique_types)



// funciton to filter out duplicates of the list
function uniquify(non_unique_types){
    // console.log(non_unique_types)
    const unique_types = []
    non_unique_types.forEach(type => {
        // console.log(type)
        if(!unique_types.includes(type)){
            unique_types.push(type);
        }
    })
    // call the function to make rows
    createrowplaceholders(unique_types);
}

 // function to create a spot for a row for each unique string in the list
 function createrowplaceholders(unique_types){
    if(unique_types !=null){
        var addprojectsDiv = document.getElementById("addprojects");
       if (addprojectsDiv) 
        { // Check if the element exists
            for (var type of unique_types)
            {
                if(type != null)
                {
                    document.getElementById("addprojects").innerHTML += `
                        <div id="${type}-row">
                        <h3>${type} row:</h3>
                        </div>`;
                    // call function to populate this new row div we made
                    // addhtmltorowidinaddprojects(type);
                    populaterow(type); 

                }
                
            }  
       }
    }
	
 }

 // function to populate the row div in the html
 function populaterow(projecttype){
    var rowprojectlist = [];
    for(var project of projects){
        if(project.type == projecttype){
            // call the function to turn project into an html markup string
            // console.log(projects)
            rowprojectlist.push(projecttohtml(project));
        }
    }
    document.getElementById(`${projecttype}-row`).innerHTML += rowprojectlist.join();// might delete the +
    
 }

 // function to turn a project into an html markup string
 function projecttohtml(project){
    // languagelooper(project.languages,project.type)
    var html = `
            <div class="stickynote">
                <div>
                    <u><p id="${project.type}paragraph">
                    <a class ="listendlink" href="wdd131/obediahportfolio/details.html">
                    ${project.name}
                    </a>
                    
                    </p></u>
                    <ul id="${project.type}languages">` 

    var languagepoints = languagelooper(project.languages, project.type) // returns the li parts of the html string
                    
    var htmlend =   `</ul>
                </div>
                
                <img src="images/stickynotes/stickynoteorangenobackground.png" alt="${project.name}" height="206"/> 
            </div>`;
    var finalhtml = html + languagepoints + htmlend
    // console.log(finalhtml)
    return finalhtml
 }

 // this function populates the ul of the sticky note (not finished yet currently there is a problem with some stuff plus it is not called yet)
 function languagelooper(languages, type){
    var li = ""
    for (var language of languages){
        li += `
        <li>${language}</li>`
    }
    return li
}

// unsure if I need these below
//_________________________________________________________________________________________________
//add an event listener to every item in index.html that has a particular class called listendlink
// document.addEventListener('DOMContentLoaded', () => 
// {
    // document.querySelectorAll('listendlink').forEach(element => 
    // {
    //         element.addEventListener('click', function() 
    //         {
    //             console.log('Element clicked:', this.textContent);
    //         });
    // });
// });

// wait for things to be displayed on html before you try to access it
// document.addEventListener('DOMContentLoaded', () => 
// {
//     uniquify(non_unique_types)
// })
