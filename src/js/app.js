const form = document.getElementById('cv-form');

const defaultForm = {
  profile: {
    first_name: 'Tom',
    last_name: 'Hanks',
    occupation: 'Actor',
    email: 'tom@hanks.com',
  },
  work: [
    {
      title: 'job 1',
      description: 'description 1',
    },
    {
      title: 'job 2',
      description: 'description 2',
    },
  ],
  education: [
    {
      subject: 'subject 1',
      college: 'Portsmouth Uni',
      start_date: '2022-10',
      end_date: '2022-12',
    },
    {
      subject: 'subject 2',
      college: 'Bath Spa',
      start_date: '2022-10',
      end_date: '2022-12',
    },
  ],
};

form.addEventListener('input', (e) => {
  update();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const update = () => {
  let newState = {};
  const sections = Array.from(form.querySelectorAll('[data-section]'));
  console.log('sections', sections);

  for (let section of sections) {
    const sectionName = section.dataset.section;
    let obj = {};
    for (let input of Array.from(section.querySelectorAll('input'))) {
      obj[input.name] = input.value;
    }
    newState[sectionName] = obj;
  }

  console.log(newState);
  localStorage.setItem(
    'cvdata',
    JSON.stringify(Object.assign({}, defaultForm, newState))
  );
  // render(getState());
};

const getState = () => {
  const data = localStorage.getItem('cvdata');
  if (data) return JSON.parse(data);
  return defaultForm;
};

const render = (state) => {
  // clear form ( apparently faster than form.innerHTML = ''; )
  while (form.firstChild) form.removeChild(form.firstChild);

  console.log(state);
  console.log('render', Object.entries(state));
  let html = Object.entries(state)
    .map((section) => {
      console.log('section render', section[0]);
      return `
    <section data-section="${section[0]}">
    <h3>${section[0]}</h3>
      ${Object.entries(section[1])
        .map((input) => createInput(input))
        .join('')}
    </section>
    `;
    })
    .join('');
  console.log('html', html);
  form.innerHTML = html;
};

const createInput = (data) => {
  console.log('createInput', data);
  return `
  <div class="input-group">
    <label for="${data[0]}">${data[0]}</label>
    <input name="${data[0]}" value="${data[1]}"/>
  </div>
  `;
};

render(getState());

const buildForm = (state) => {
  // clear form ( apparently faster than form.innerHTML = ''; )
  while (form.firstChild) form.removeChild(form.firstChild);

  let html = '';
  html += Object.keys(state)
    .map((section) => {
      console.log(section);
      return build[section](state[section]);
    })
    .join('');
  console.log('html', html);

  form.innerHTML = html;
};

const profile = (data) => {
  console.log('build profile', data);
  return `
    <h2>Profile</h2>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" name="first_name" id="first-name" value=${data.first_name} />
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" name="last_name" id="last-name" value=${data.last_name} />
    </div>
    <div class="form-group">
      <label for="occupation">Occupation</label>
      <input type="text" name="occupation" id="occupation" value=${data.occupation} />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" value=${data.email} />
    </div>
  `;
};

const work = (data) => {
  return `
    <h2>Work</h2>
    ${data
      .map((work, index) => {
        return `
          <div class="form-group">
            <label for="work-title-${index}">Company Name</label>
            <input type="text" name="company-name" id="work-title-${index}" value="${work.title}" />
          <div>
          <div class="form-group">
            <label for="work-description-${index}">Description</label>
            <input type="text" name="work-description" id="work-description-${index}" value="${work.description}" />
          <div> 
      `;
      })
      .join('')} 
  `;
};

const education = (data) => {
  return `
    <h2>Education</h2>
    ${data
      .map((item, index) => {
        return `
        <div class="form-group">
          <label for="subject-${index}">Subject</label>
          <input type="text" name="subject" id="subject-${index}" value="${item.subject}" />
        </div>
        <div class="form-group">
          <label for="college-${index}">College</label>
          <input type="text" name="college" id="college-${index}" value="${item.college}" />
        </div>
        <div class="form-group">
          <label for="start-date">Start Date</label>
          <input type="month" name="start-date" id="start-date" value="${item.start_date}" />
        </div>
        <div class="form-group">
          <label for="end-date">End Date</label>
          <input type="month" name="end-date" id="end-date" value="${item.end_date}" />
        </div>
      `;
      })
      .join('')}
  `;
};

const build = {
  profile,
  work,
  education,
};

buildForm(defaultForm);
