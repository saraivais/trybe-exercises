let header = document.querySelector("#header-container");
header.style.backgroundColor = 'green';

let headerText = document.querySelector("#header-container h1");
headerText.style.color = 'white';

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = 'rgb(6, 50, 100)';

let footerText = document.querySelector("#footer-container div");
footerText.style.color = 'white';

let urgentTasks = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < urgentTasks.length; i += 1) {
    urgentTasks[i].style.backgroundColor = 'rgb(227, 133, 104)';
}

let nonUrgentTasks = document.getElementsByClassName('no-emergency-tasks');
for (let j = 0; j < nonUrgentTasks.length; j += 1) {
    nonUrgentTasks[j].style.backgroundColor = 'rgb(231, 215, 123)';
}

let urgentText = document.querySelectorAll('.emergency-tasks div h3');
for (let banner of urgentText) {
    banner.style.backgroundColor = 'rgb(142, 43, 235)';
    banner.style.color = 'white';
}

let nonUrgentText = document.querySelectorAll('.no-emergency-tasks div h3');
for (let banner of nonUrgentText) {
    banner.style.backgroundColor = 'rgb(17, 17, 17)';
    banner.style.color = 'white';
}

const corpo = document.getElementById('container');
corpo.style.backgroundColor = 'rgb(199, 199, 199)';