function viewDashboard() {
    document.getElementById("login-view").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("eagles").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("navTitle").innerText = "Dashboard";
    document.getElementById("dashboardNav").classList.add("active");
    document.getElementById("eaglesNav").classList.remove("active");
    document.getElementById("newsNav").classList.remove("active");
}

function viewEagles() {
    document.getElementById("login-view").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("eagles").style.display = "block";
    document.getElementById("news").style.display = "none";
    document.getElementById("navTitle").innerText = "Eagles";
    document.getElementById("dashboardNav").classList.remove("active");
    document.getElementById("eaglesNav").classList.add("active");
    document.getElementById("newsNav").classList.remove("active");
}

function viewNews() {
    document.getElementById("login-view").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("eagles").style.display = "none";
    document.getElementById("news").style.display = "block";
    document.getElementById("navTitle").innerText = "News";
    document.getElementById("dashboardNav").classList.remove("active");
    document.getElementById("eaglesNav").classList.remove("active");
    document.getElementById("newsNav").classList.add("active");
}