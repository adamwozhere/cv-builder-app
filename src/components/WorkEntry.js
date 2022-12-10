import FormField from './FormField';
import schema from '../schema.json';

export default function WorkEntry(
  data = { title: 'Job entry', description: 'Job description' }
) {
  return `
    <div data-item>
     ${Object.keys(schema.work.fields)
       .map((key) => {
         return FormField(schema.work.fields[key], data);
       })
       .join('')}
       <button data-delete>Delete</delete>
    </div>
  `;
}
