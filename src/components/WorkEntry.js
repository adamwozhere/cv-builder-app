import FormField from './FormField';

export default function WorkEntry(
  data = { title: 'Job entry', description: 'Job description' }
) {
  return `
    <div data-item>
      ${FormField({
        name: 'title',
        label: 'Company Name',
        type: 'text',
        value: data.title,
      })}
      ${FormField({
        name: 'description',
        label: 'Description',
        type: 'text',
        value: data.description,
      })}
      <button data-delete>Delete</delete>
    </div>
  `;
}
