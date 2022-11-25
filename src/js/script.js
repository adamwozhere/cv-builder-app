const form = document.getElementById('cv-form');
const jsonLog = document.getElementById('json-log');
const cvOutput = document.getElementById('cv-output');
const addJobBtn = document.getElementById('add-job-btn');
let formObj;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submitted');
  const formData = new FormData(e.target);

  console.log(Object.fromEntries(formData));
  formObj = Object.fromEntries(formData);
  jsonLog.innerHTML = JSON.stringify(formObj, null, 2);
  buildCV();
});

function buildCV() {
  const entries = Object.entries(formObj);
  entries.forEach((e) => console.log(e));

  cvOutput.innerHTML = `
  <h2>${formObj.name}</h2>
  <p>${formObj.subtitle}</p>
  `;
}
