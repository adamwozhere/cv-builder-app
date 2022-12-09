import FormField from './FormField';

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
      ${FormField({
        name: 'subject',
        label: 'Subject',
        type: 'text',
        value: data.subject,
      })}
      ${FormField({
        name: 'college',
        label: 'College',
        type: 'text',
        value: data.college,
      })}
      ${FormField({
        name: 'start_date',
        label: 'Start Date',
        type: 'month',
        value: data.start_date,
      })}
      ${FormField({
        name: 'end_date',
        label: 'End Date',
        type: 'month',
        value: data.end_date,
      })}
      <button data-delete>Delete</delete>
    </div>
  `;
}
