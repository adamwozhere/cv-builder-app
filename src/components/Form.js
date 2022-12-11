import FormEntry from './FormEntry';
import defaultForm from '../form.json';
import schema from '../schema.json';

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
        // let newHtml = build[section](data[section]);
        let newHtml = buildSection(section, data[section]);

        // console.log(newHtml);
        return newHtml;
      })
      .join('');

    console.log(html);
    form.innerHTML = html;
  }

  function buildSection(section, data) {
    return `
      <section data-section="${section}">
        <h2>${schema[section].heading}</h2>
        <div data-content>
          ${data
            .map((item) => {
              return FormEntry(section, item);
            })
            .join('')}
        </div>
        ${
          schema[section].instanced === 'true'
            ? `<button data-add="${section}">Add</button>`
            : ''
        }
      </section>
    `;
  }

  const update = () => {
    let newState = {};
    const sections = Array.from(form.querySelectorAll('[data-section]'));

    for (let section of sections) {
      const sectionName = section.dataset.section;
      let obj = [];
      for (let item of Array.from(section.querySelectorAll('[data-item]'))) {
        let subObj = {};
        for (let input of Array.from(item.querySelectorAll('[data-input]'))) {
          console.log(input.type);
          if (input.type === 'checkbox') {
            console.log('updating checkbox');
            subObj[input.name] = input.checked;
          } else {
            subObj[input.name] = input.value;
          }
        }
        obj.push(subObj);
      }
      newState[sectionName] = obj;
      console.log('new state', newState);
    }
    store.setState(newState);
  };

  form.addEventListener('click', (e) => {
    // e.preventDefault();

    console.log(e.target);

    if (e.target.type === 'checkbox') toggleCheckbox(e);

    if (e.target.hasAttribute('data-delete')) {
      e.target.closest('[data-item]').classList.add('deleting');
      setTimeout(() => {
        e.target.closest('[data-item]').remove();
        update();
      }, 200);
    } else if (e.target.hasAttribute('data-add')) {
      const entry = e.target.getAttribute('data-add');

      document
        .querySelector(`[data-section=${entry}] [data-content]`)
        .insertAdjacentHTML('beforeend', FormEntry(entry));

      document
        .querySelector(`[data-section=${entry}] [data-content]`)
        .lastElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
    }
  });

  form.addEventListener('input', (e) => {
    update();
  });

  form.addEventListener('change', (e) => {
    console.log('target', e.target);
    // update();
  });

  function toggleCheckbox(e) {
    console.log('closest', e.target.closest('.row'));
    const row = e.target.closest('.row');

    const inputs = row.querySelectorAll('[data-input]');
    console.log(inputs);
    Array.from(inputs).map((input) => {
      input.disabled = e.target.checked;
      if (!input.enabled) {
        input.value = null;
        update();
      }
    });
  }

  return {
    buildForm,
  };
}
