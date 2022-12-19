import FormSection from './FormSection';
import defaultCV from '../data/defaultcv.json';
import CVdocument from './CVdocument';

export default function Form(element, dataStore) {
  const form = element;
  const store = dataStore;
  const cvDocument = CVdocument();

  // new form render
  window.renderForm = (state) => {
    const data = state === null ? defaultCV : state;

    // delete form - apparently quicker than .innerHTML = '';
    while (form.firstChild) form.removeChild(form.firstChild);

    let html = '';
    html += Object.keys(data)
      .map((section) => FormSection(section, data[section]))
      .join('');

    console.log(html);
    form.innerHTML = html;
    cvDocument.render(document.querySelector('#cv-view'), data);
    cvDocument.render(document.querySelector('#cv-preview'), data);
  };

  // update state from form inputs
  window.update = function () {
    let newState = {};
    const sections = Array.from(form.querySelectorAll('[data-section]'));

    for (let section of sections) {
      const sectionName = section.dataset.section;
      let obj = [];
      for (let item of Array.from(section.querySelectorAll('[data-item]'))) {
        let subObj = {};
        for (let input of Array.from(item.querySelectorAll('[data-input]'))) {
          subObj[input.name] =
            input.type === 'checkbox' ? input.checked : input.value;
        }
        obj.push(subObj);
      }
      newState[sectionName] = obj;
      // console.log('new state', newState);
    }
    store.setState(newState);
    cvDocument.render(document.querySelector('#cv-view'), newState);
    cvDocument.render(document.querySelector('#cv-preview'), newState);
  };

  form.addEventListener('input', update);

  renderForm(store.getState());
}
