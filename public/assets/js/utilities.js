let numChildren = document.getElementById("departments").childElementCount;
let count = document.getElementsByClassName("tab-content")[0].childElementCount;

let departmentName;
let departmentShort;
let courseNum;
let submit;

// Course Selection
for (let i = 0; i < numChildren; i++) {
    document.getElementsByClassName("list-person__item")[i].style.cursor = "pointer";

    document.getElementsByClassName("list-person__item")[i].getElementsByClassName("name")[0].addEventListener('click', function handleClick(event) {
        departmentName = event.target.innerText;
        departmentShort = event.target.id;

        document.getElementById('info').innerText = departmentName;
        document.getElementById('info').style.color = '#666666';
    });
}

// Search Clicked
for (let i = 0; i < count; i++) {
    document.getElementsByClassName("btn-submit")[i].addEventListener('click', function handleClick(event) {
        courseNum = document.getElementById('courseID').value;
        submit = i;
        console.log(submit);

        document.getElementById('courseID').value = "";
        document.getElementById('info').innerText = "...";

        window.location.replace('./results.html');
    });
}