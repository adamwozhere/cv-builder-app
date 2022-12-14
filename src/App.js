import Store from './controllers/Store';
import Form from './components/Form';

import './style/main.scss';

const cvdata = new Store('mycvdata');

const form = new Form(document.querySelector('#app'), cvdata);
form.renderForm(cvdata.getState());
