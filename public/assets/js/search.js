import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, child, get, set, remove } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import {firebaseConfig} from './config.js';

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const dbRef = ref(getDatabase());

let courseNumber = document.getElementById("courseNum").value;
let department = document.getElementById("department-name").value;
let departmentFull = document.getElementById("department-name").innerText;

function searchData() {
    courseNumber = document.getElementById("courseNum").value;
    department = document.getElementById("department-name").value;
    departmentFull = document.getElementById("department-name").innerText;

    get(child(dbRef, `groups/${department}/${courseNumber}`)).then((snapshot) => {
        let results = document.getElementById("results-field");

        if (snapshot.exists() && courseNumber > 0) {
            let items = snapshot.val();

            for (let i = 0; i < items.length; i++) {
                let container = document.createElement("div");
                container.classList.add("container");
                results.appendChild(container);

                let name = document.createElement("p");
                name.innerText = departmentFull + " " + courseNumber + " | " + items[i].name;
                container.appendChild(name);

                let row = document.createElement("div");
                row.classList.add("row");
                container.appendChild(row);

                let col_2 = document.createElement("div");
                col_2.classList.add("col-2");
                col_2.innerText = "Section: " + items[i].section;
                row.appendChild(col_2);

                let col_10 = document.createElement("div");
                col_10.classList.add("col-10");
                row.appendChild(col_10);

                let link = document.createElement("a");
                link.href = items[i].link;
                link.innerText = items[i].link;
                col_10.appendChild(link);

                document.getElementById("results-wrap").style.overflowY = "scroll";
            }
        } else {

            let container = document.createElement("div");
            container.classList.add("container");
            results.appendChild(container);

            let row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);

            let col_8 = document.createElement("div");
            col_8.classList.add("col-8");
            row.appendChild(col_8);

            let col_4 = document.createElement("div");
            col_4.classList.add("col-4");
            row.appendChild(col_4);

            let not_found = document.createElement("p");
            not_found.innerText = "We don't currently have any GroupMe or Discord links for this course.";
            col_8.appendChild(not_found);

            let contact = document.createElement("small");
            contact.innerText = "If you have a link to add, please login or create account."
            col_8.appendChild(contact);

            let register = document.createElement("button");
            register.innerText = "Register"
            register.classList.add("btn-login")
            register.setAttribute('id', 'btn-register')
            col_4.appendChild(register);

            let login = document.createElement("button");
            login.innerText = "Login"
            login.classList.add("btn-login")
            login.setAttribute('id', 'btn-login')
            col_4.appendChild(login);

            document.getElementById("results-wrap").style.overflowY = "hidden";
        }
    }).catch((error) => {
        console.error(error);
    });
}

$(function() {
    $('#search').click(function() {
        document.getElementById("form").style.display = "none"
        document.getElementById("results").style.display = "flex"
        document.getElementById("btn-new").style.display = "block"

        courseNumber = document.getElementById("courseNum").value;
        department = document.getElementById("department-name").value;
        departmentFull = document.getElementById("department-name").innerText;

        searchData()
    });

    $('#btn-new').click(function() {
        document.getElementById("form").style.display = "flex"
        document.getElementById("results").style.display = "none"
        document.getElementById("btn-new").style.display = "none"

        let e = document.getElementById("results-field");
        let first = e.firstElementChild;
        while (first) {
            first.remove();
            first = e.firstElementChild;
        }
    });
});