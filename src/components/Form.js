import FormSection from './FormSection';
import defaultCV from '../data/defaultcv.json';
export default function Form(element, dataStore) {
  const form = element;
  const store = dataStore;

  // new form render
  const renderForm = (state) => {
    const data = state === null ? defaultCV : state;

    // delete form - apparently quicker than .innerHTML = '';
    while (form.firstChild) form.removeChild(form.firstChild);

    let html = '';
    html += Object.keys(data)
      .map((section) => FormSection(section, data[section]))
      .join('');

    console.log(html);
    form.innerHTML = html;
  };

  // update state from form inputs
  function update() {
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
  }

  form.addEventListener('input', update);

  return {
    renderForm,
  };
}
