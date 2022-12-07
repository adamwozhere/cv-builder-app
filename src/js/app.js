const form = document.getElementById('cv-form');

const defaultForm = {
  profile: [
    {
      first_name: 'Tom',
      last_name: 'Hanks',
      occupation: 'Actor',
      email: 'tom@hanks.com',
    },
  ],
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
    {
      subject: 'subject 3',
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

form.addEventListener('click', (e) => {
  console.log(e.target.dataset);
  if (e.target.hasAttribute('data-delete')) {
    console.log('delete');
    e.target.closest('[data-item]').remove();
    update();
  } else if (e.target.hasAttribute('data-add')) {
    if (e.target.getAttribute('data-add') === 'work') {
      console.log('is data-add');
      form.querySelector('[data-section="work"]').insertAdjacentHTML(
        'beforeend',
        `
      <div data-item>
      <div class="form-group">
        <label for="work-title">Company Name</label>
        <input type="text" name="title" id="work-title" value="" />
      </div>
      <div class="form-group">
        <label for="work-description">Description</label>
        <input type="text" name="description" id="work-description" value="" />
      </div>
      <button data-delete>Delete</button>
    </div>
      `
      );
    } else if (e.target.getAttribute('data-add') === 'education') {
      form.querySelector('[data-section="education"').insertAdjacentHTML(
        'beforeend',
        `
      <div data-item>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject" value="" />
      </div>
      <div class="form-group">
        <label for="college">College</label>
        <input type="text" name="college" id="college" value="" />
      </div>
      <div class="form-group">
        <label for="start-date">Start Date</label>
        <input type="month" name="start_date" id="start-date" value="" />
      </div>
      <div class="form-group">
        <label for="end-date">End Date</label>
        <input type="month" name="end_date" id="end-date" value="" />
      </div>
      <button data-delete>Delete</button>
    </div>
      `
      );
    }
  }
});

const update = () => {
  let newState = {};
  const sections = Array.from(form.querySelectorAll('[data-section]'));
  console.log('sections', sections);

  for (let section of sections) {
    const sectionName = section.dataset.section;
    let obj = [];
    for (let item of Array.from(section.querySelectorAll('[data-item'))) {
      let subObj = {};
      for (let input of Array.from(item.querySelectorAll('input'))) {
        console.log('input-name:', input.name, 'input-value:', input.value);
        subObj[input.name] = input.value;
      }
      console.log('subObj', subObj);
      // obj.push(Object.assign({}, subObj));
      obj.push(subObj);
      console.log('obj[sectionName]', obj[sectionName]);
    }
    // for (let input of Array.from(section.querySelectorAll('input'))) {
    //   obj[input.name] = input.value;
    // }
    newState[sectionName] = obj;
  }

  console.log('newState', newState);
  localStorage.setItem(
    'cvdata',
    JSON.stringify(Object.assign({}, defaultForm, newState))
  );
  //buildForm(getState());
};

const getState = () => {
  const data = localStorage.getItem('cvdata');
  if (data) return JSON.parse(data);
  return defaultForm;
};

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

  form.innerHTML = html;
};

const profile = (data) => {
  return `
  <section data-section="profile">
    <h2>Profile</h2>
    <div data-item>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" name="first_name" id="first-name" value=${data[0].first_name} />
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" name="last_name" id="last-name" value=${data[0].last_name} />
    </div>
    <div class="form-group">
      <label for="occupation">Occupation</label>
      <input type="text" name="occupation" id="occupation" value=${data[0].occupation} />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" value=${data[0].email} />
    </div>
    </div>
  </section>
  `;
};

const work = (data) => {
  console.log('data', data);
  return `
  <section data-section="work">
    <h2>Work</h2>
    <button data-add="work">Add</button>
    ${data
      .map((item, index) => {
        return `
        <div data-item>
          <div class="form-group">
            <label for="work-title-${index}">Company Name</label>
            <input type="text" name="title" id="work-title-${index}" value="${item.title}" />
          </div>
          <div class="form-group">
            <label for="work-description-${index}">Description</label>
            <input type="text" name="description" id="work-description-${index}" value="${item.description}" />
          </div>
          <button data-delete>Delete</button>
        </div>
      `;
      })
      .join('')} 
  </section>
  `;
};

const education = (data) => {
  return `
  <section data-section="education">
    <h2>Education</h2>
    <button data-add="education">Add</button>
    ${data
      .map((item, index) => {
        return `
        <div data-item>
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
            <input type="month" name="start_date" id="start-date" value="${item.start_date}" />
          </div>
          <div class="form-group">
            <label for="end-date">End Date</label>
            <input type="month" name="end_date" id="end-date" value="${item.end_date}" />
          </div>
          <button data-delete>Delete</button>
        </div>
      `;
      })
      .join('')}
  </section>
  `;
};

const build = {
  profile,
  work,
  education,
};

buildForm(getState());
