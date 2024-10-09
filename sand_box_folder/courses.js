// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ]
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

    qs("#sections").innerHTML()
}

courseInfoUpdate(aCourse);
sectionToTable(aCourse.sections);

