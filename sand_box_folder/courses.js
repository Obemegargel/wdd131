// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum){
        // aCourse.enrollStudent(1);// QUESTION(not researched 'nr'): in this case "this" is the same as aCourse, I don't know if I need to use 'this' still instead though.
        console.log(this.sections.findIndex(sectionNum));
    }
  };

// create function to use document.querySelector more easily (OPTIONAL)
function qs(query){
    return document.querySelector(query);
}

// create function to set the name and code of the object
function courseInfoUpdate(course){
    const courseName = qs('#courseName');
    const courseCode = qs('#courseName');

    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

// Create a function to output the sections into the table identified by #sections. 
// You should pass the sections you want rendered into the function.
// (1) make an outline for what a section is
function sectionsOutline(section){
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td> 
        <td>${section.days}</td> 
        <td>${section.instructor}</td>
    </tr>`
}
// (2) create a function to actually make it into a table
function sectionToTable(sections){
    const section = sections.maps(sectionsOutline); // NOTE: QUESTION: (not researched yet) figure out more what this does and how maps works, why was the const named html in the example, what is this saving to?
                                                    // NOTE: QUESTION: why can't I open the live version of this on the web browser to see what it looks like on the web?
    qs("#sections").innerHTML = section.join("");   // NOTE: QUESTION: research this whole later part to see more why it does what it does. I think I have a good idea but refresh.
}

courseInfoUpdate(aCourse);
sectionToTable(aCourse.sections);

