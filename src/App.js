import Store from './controllers/Store';
import Form from './components/Form';
import examplecv from './data/examplecv.json';

import './style/main.scss';

const App = () => {
  const cvdata = Store('mycvdata');
  const form = Form(document.querySelector('#app'), cvdata);

  const viewSaveBtn = document.querySelector('#view-cv-btn');
  viewSaveBtn.addEventListener('click', viewSave);

  const cvView = document.querySelector('#cv-view');
  function viewSave() {
    console.log('view/save');

    if (cvView.classList.contains('show')) {
      cvView.classList.remove('show');
      document.querySelector('#app').classList.remove('hide');
      document.querySelector('#cv-preview').classList.remove('hide');
      viewSaveBtn.textContent = 'View CV';
    } else {
      cvView.classList.add('show');
      document.querySelector('#app').classList.add('hide');
      document.querySelector('#cv-preview').classList.add('hide');
      viewSaveBtn.textContent = 'Back...';
      window.scrollTo(0, 0);
    }
  }

  const saveBtn = document.getElementById('save-btn');
  saveBtn.addEventListener('click', () => {
    alert("this doesn't work yet.... imaginary PDF here!");
  });

  const loadBtn = document.getElementById('load-btn');
  loadBtn.addEventListener('click', () => {
    renderForm(examplecv);
  });
};

document.addEventListener('DOMContentLoaded', App);
