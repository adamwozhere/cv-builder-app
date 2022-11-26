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

  saveData(formObj);

  cvOutput.innerHTML = `
  <h2>${formObj.name}</h2>
  <p>${formObj.subtitle}</p>
  `;
}

addJobBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const html = `
  <fieldset>
    <div class="input-group">
      <label for="job-date">Date</label>
      <input type="date" name="job-date" id="" />
    </div>
    <div class="input-group">
      <label for="job-title">Job title</label>
      <input type="text" name="job-title" />
    </div>
    <div class="input-group">
      <label for="job-desciption">Job description</label>
      <input type="text" name="job-desciption" />
    </div>
    <div class="input-group">
      <label for="company-name">Company name</label>
      <input type="text" name="company-name" />
    </div>
  </fieldset>
  `;
  document.getElementById('job-section').insertAdjacentHTML('beforeend', html);
});

function saveData(formData) {
  console.log('save-data');
  window.localStorage.setItem('cv-data', JSON.stringify(formData));
}

function loadData() {
  const data = window.localStorage.getItem('cv-data');
  if (data) return JSON.parse(data);
}

document.addEventListener('DOMContentLoaded', (e) => {
  const cached = loadData();
  console.log('load page', cached);
  if (cached) {
    document.getElementById('name-input').value = cached.name;
  }
});
