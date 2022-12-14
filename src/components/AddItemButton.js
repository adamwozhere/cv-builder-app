import FormItem from './FormItem';
import defaultcv from '../data/defaultcv.json';

export default function AddItemButton(section) {
  if (section === 'profile') return '';

  return `
    <button data-add="${section}" onclick="addItemHandler(this)">+ Add new ${section} item</button>
  `;
}

window.addItemHandler = (button) => {
  const section = button.getAttribute('data-add');
  console.log('add item', button, defaultcv[section]);
  document
    .querySelector(`[data-content="${section}"]`)
    .insertAdjacentHTML('beforeend', FormItem(section, defaultcv[section][0]));

  scrollToNewItem(section);
};

// smooth scroll last item of section to centre screen
function scrollToNewItem(section) {
  document
    .querySelector(`[data-content=${section}]`)
    .lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
