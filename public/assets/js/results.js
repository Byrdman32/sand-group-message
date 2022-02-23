let results = document.getElementById("results-field");
let links = [];

// Exit Clicked
document.getElementById("exit-header").addEventListener('click', function handleClick(event) {
    window.location.replace('./');
});

// Redirect Clicked
for (let i = 0; i < links.length; i++) {
    document.getElementsByClassName("fa-external-link")[i].addEventListener('click', function handleClick(event) {
        if (confirm(`You will be redirected to ${links[i]}.`)) {
            window.location.href = links[i];
        }
    });
}

// Copy Clicked
for (let i = 0; i < links.length; i++) {
    document.getElementsByClassName("fa-copy")[i].addEventListener('click', function handleClick(event) {
        navigator.clipboard.writeText(links[i]);
        alert(`${links[i]} copied to clipboard.`);
    });
}