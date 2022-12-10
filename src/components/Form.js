import WorkEntry from './WorkEntry';
import ProfileEntry from './ProfileEntry';
import EducationEntry from './EducationEntry';
import defaultForm from '../form.json';

export default function Form(element, dataStore) {
  const form = element;
  const store = dataStore;

  function buildForm(state) {
    const data = state === null ? defaultForm : state;

    // delete form - apparently quicker than .innerHTML = '';
    while (form.firstChild) form.removeChild(form.firstChild);

    let html = '';
    html += Object.keys(data)
      .map((section) => {
        console.log(section);
        let newHtml = build[section](data[section]);
        // let newHtml = FormSection(data[section])

        // console.log(newHtml);
        return newHtml;
      })
      .join('');

    console.log(html);
    form.innerHTML = html;
  }

  const profile = (data) => {
    console.log(data);
    return `
    <section data-section="profile">
      <h2>Profile</h2>
        ${data
          .map((item) => {
            return ProfileEntry(item);
          })
          .join('')}
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
        .map((item) => {
          return WorkEntry(item);
        })
        .join('')} 
    </section>
    `;
  };

  const education = (data) => {
    console.log(data);
    return `
    <section data-section="education">
      <h2>Education</h2>
      <button data-add="education">Add</button>
      ${data
        .map((item) => {
          return EducationEntry(item);
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

  const createEntry = {
    profile: ProfileEntry,
    work: WorkEntry,
    education: EducationEntry,
  };

  const update = () => {
    let newState = {};
    const sections = Array.from(form.querySelectorAll('[data-section]'));

    for (let section of sections) {
      const sectionName = section.dataset.section;
      let obj = [];
      for (let item of Array.from(section.querySelectorAll('[data-item]'))) {
        let subObj = {};
        for (let input of Array.from(item.querySelectorAll('input'))) {
          subObj[input.name] = input.value;
        }
        obj.push(subObj);
      }
      newState[sectionName] = obj;
      console.log('new state', newState);
    }
    store.setState(newState);
  };

  form.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.hasAttribute('data-delete')) {
      e.target.closest('[data-item]').remove();
      update();
    } else if (e.target.hasAttribute('data-add')) {
      const entry = e.target.getAttribute('data-add');

      document
        .querySelector(`[data-section=${entry}]`)
        .insertAdjacentHTML('beforeend', createEntry[entry]());
    }
  });

  form.addEventListener('input', (e) => {
    update();
  });

  return {
    buildForm,
  };
}
