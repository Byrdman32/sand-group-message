let select = document.getElementById('department-name');
select.addEventListener('change', function() {
    if (document.getElementById('department-name').value === "Campus") {
        document.getElementById('courseNum').disabled = true;
        document.getElementById('courseNum').placeholder = "No Course Number Required for Selection";
        document.getElementById('courseNum').style.cursor = "not-allowed";
    } else {
        document.getElementById('courseNum').disabled = false;
        document.getElementById('courseNum').placeholder = "ex: 1200, 1113, 1310";
        document.getElementById('courseNum').style.cursor = "text";
    }
})

$(function() {
    if (document.getElementById('department-name').value === "Campus") {
        document.getElementById('courseNum').disabled = true;
        document.getElementById('courseNum').placeholder = "No Course Number Required for Selection";
        document.getElementById('courseNum').style.cursor = "not-allowed";
    } else {
        document.getElementById('courseNum').disabled = false;
        document.getElementById('courseNum').placeholder = "ex: 1200, 1113, 1310";
        document.getElementById('courseNum').style.cursor = "text";
    }
});