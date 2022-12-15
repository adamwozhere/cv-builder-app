import Store from './controllers/Store';
import Form from './components/Form';
import CVdocument from './components/CVdocument';

import './style/main.scss';

const App = () => {
  const cvdata = Store('mycvdata');

  const cv = CVdocument(document.querySelector('#cv'), cvdata);
  const form = Form(document.querySelector('#app'), cvdata);
  form.renderForm(cvdata.getState());

  cv.renderCV();

  function update() {
    console.log('updating from App.js');
    form.update();
  }
  return { cvdata };
};

document.addEventListener('DOMContentLoaded', App);
