import FormItem from './FormItem';
import AddItemButton from './AddItemButton';

// custom defined headings for displaying in HTML (if different from section names)
const headings = {
  profile: 'Profile',
  work: 'Work History',
  projects: 'Projects',
  education: 'Education History',
};

export default function FormSection(section, data) {
  console.log('FormSection', section, data);
  return `
    <section data-section="${section}">
      <h2>${headings[section]}</h2>
      <div data-content="${section}">
        ${data.map((item) => FormItem(section, item)).join('')}
      </div>
      ${AddItemButton(section)}
    </section>
  `;
}
