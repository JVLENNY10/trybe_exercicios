document.getElementById('header-container').style.backgroundColor = 'green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';

let emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksH3.length; index += 1) {
  emergencyTasksH3[index].style.backgroundColor = 'purple';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

let noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noEmergencyTasksH3.length; index += 1) {
  noEmergencyTasksH3[index].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = '#004200'