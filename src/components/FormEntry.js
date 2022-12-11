import FormField from './FormField';
import schema from '../schema.json';

export default function FormEntry(section, data) {
  return `
    <div data-item>
      ${Object.keys(schema[section].fields)
        .map((key) => {
          return FormField(schema[section].fields[key], data);
        })
        .join('')}
      ${
        schema[section].instanced === 'true'
          ? `<button data-delete>Delete</button>`
          : ''
      }
    </div>
  `;
}
