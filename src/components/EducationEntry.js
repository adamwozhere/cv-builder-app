import FormField from './FormField';
import schema from '../schema.json';

export default function EducationEntry(
  data = {
    subject: 'your subject',
    college: 'your college',
    start_date: '',
    end_date: '',
  }
) {
  return `
    <div data-item>
      ${Object.keys(schema.education.fields)
        .map((key) => {
          return FormField(schema.education.fields[key], data);
        })
        .join('')}
      <button data-delete>Delete</delete>
    </div>
  `;
}
