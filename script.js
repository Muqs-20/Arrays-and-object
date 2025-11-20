let students = [];

let form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    let studentObj = {
        name: name,
        age: age,
        grade: grade
    };

    students.push(studentObj);

    displayStudents();

    form.reset();
});

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((stud, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${stud.name} — Age: ${stud.age} — Grade: ${stud.grade}`;
        list.appendChild(li);
    });
}
