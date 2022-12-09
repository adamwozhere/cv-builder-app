import Store from './controllers/Store';
import Form from './components/Form';

import './style/reset.css';
import './style/main.css';

let cvdata = new Store('mycvdata');

let form = new Form(document.querySelector('#app'), cvdata);
form.buildForm(cvdata.getState());
