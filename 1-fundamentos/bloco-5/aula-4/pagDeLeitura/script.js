const buttonSave = document.querySelector('#buttonSave');
const fontSize = document.querySelector('#change-font-size');
const textColor = document.querySelector('#change-text-color');
const fontFamily = document.querySelector('#change-font-family');
const spaceLines = document.querySelector('#change-space-lines');
const backgroundColor = document.querySelector('#change-background-color');

const content = document.querySelectorAll('.content');

function save(name, value) {
  localStorage[name] = value;
}

function localStoragePush(event) {
  const name = event.target.name;
  const value = event.target.value;
  event.target.value = '';

  save(name, value);
}

fontSize.addEventListener('change', localStoragePush);
textColor.addEventListener('change', localStoragePush);
fontFamily.addEventListener('change', localStoragePush);
spaceLines.addEventListener('change', localStoragePush);
backgroundColor.addEventListener('change', localStoragePush);

function applyChanges() {
  content.forEach((items) => {
    const item = items;
    item.style.color = localStorage.color;
    item.style.fontFamily = localStorage.fontFamily;
    item.style.lineHeight = localStorage.spaceLines;
    item.style.fontSize = `${localStorage.fontSize}px`;
    item.style.backgroundColor = localStorage.backgroundColor;
  });
}

buttonSave.addEventListener('click', applyChanges);
window.onload = applyChanges();
