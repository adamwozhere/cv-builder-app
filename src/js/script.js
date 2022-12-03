const form = document.getElementById('cv-form');
const jsonLog = document.getElementById('json-log');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

let state = {
  jobs: [
    {
      title: 'my new job title',
      description: 'my new job description',
    },
    {
      title: '2nd Job title',
      description: '2nd Job description',
    },
  ],
};

const jobSection = document.getElementById('job-section');
const addJobBtn = document.getElementById('add-job-btn');

addJobBtn.addEventListener('click', (e) => {
  jobSection.insertAdjacentHTML(
    'beforeend',
    Job({ title: '', description: '' })
  );
  updateState();
  render(getState());
});

jobSection.addEventListener('click', (e) => {
  console.log(e);
  if (e.target.nodeName !== 'BUTTON') return;
  console.log('click');
  e.target.closest('fieldset').remove();
  updateState();
  render(getState());
});

jobSection.addEventListener('input', (e) => {
  updateState();
  // render(getState());
  e.target.focus();
});
function Job(data) {
  return `
  <div class="droppable">
  <fieldset class="draggable" draggable="true">
    <div class="input-group">
      <label for="job-title">Job Title</label>
      <input type="text" name="title" value="${data.title}"/>
    </div>
    <div class="input-group">
      <label for="job-desciption">Job Description</label>
      <input type="text" name="description" value="${data.description}"/>
    </div>
    <div>
      <button>Delete</button>
    </div>
  </fieldset>
  </div>
  `;
}

function render(state) {
  clear();
  jobSection.innerHTML = state.jobs.map((state) => Job(state)).join('');
  addDragListeners();
}

function clear() {
  // faster than .innerHTML = '';
  while (jobSection.firstChild) jobSection.removeChild(jobSection.firstChild);
}

function updateState() {
  let stateUpdate = [];
  const fieldsets = jobSection.querySelectorAll('fieldset');
  fieldsets.forEach((fs) => {
    let obj = {};
    console.log(fs);
    inputs = fs.querySelectorAll('input');
    inputs.forEach((i) => {
      obj[i.name] = i.value;
    });
    stateUpdate.push(obj);
    console.log(JSON.stringify(stateUpdate, null, 2));
  });

  localStorage.setItem(
    'state',
    JSON.stringify(Object.assign({}, state, { jobs: stateUpdate }))
    // JSON.stringify(Object.assign({}, state, state.jobs, stateUpdate))
  );
  // Object.assign({}, state, stateUpdate);

  console.log(JSON.stringify(getState(), null, 2));
}

function getState() {
  jsonLog.innerHTML = JSON.parse(localStorage.getItem('state'), null, 2);
  return JSON.parse(localStorage.getItem('state'));
}

function addDragListeners() {
  const draggables = jobSection.querySelectorAll('.draggable');
  const droppables = jobSection.querySelectorAll('.droppable');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  droppables.forEach((droppable) => {
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('drop', dragDrop);
    droppable.addEventListener('dragenter', dragEnter);
    droppable.addEventListener('dragleave', dragLeave);
  });
}

let startIndex;

function dragStart() {
  const draggables = jobSection.querySelectorAll('.draggable');
  startIndex = Array.from(draggables).indexOf(this);
  console.log(draggables);
  console.log('dragStart', startIndex);
}
function dragOver(e) {
  console.log('dragOver');
  e.preventDefault();
  this.classList.add('over');
}
function dragDrop() {
  const droppables = jobSection.querySelectorAll('.droppable');
  const endIndex = Array.from(droppables).indexOf(this);
  console.log('dragDrop', endIndex);

  this.classList.remove('over');
  swapItems(startIndex, endIndex);
}
function dragEnter() {
  console.log('dragEnter');
}
function dragLeave() {
  console.log('dragLeave');
  this.classList.remove('over');
}

function swapItems(start, end) {
  const first = Array.from(jobSection.querySelectorAll('.draggable'))[end];
  const last = Array.from(jobSection.querySelectorAll('.draggable'))[start];

  console.log(first, last);
  const droppables = Array.from(jobSection.querySelectorAll('.droppable'));
  console.log(droppables[start], droppables[end]);
  droppables[start].appendChild(first);
  droppables[end].appendChild(last);

  updateState();
}

render(getState());
