// course title
// Qualification
// institution / college school
// descripion
// Date

import TextField from './TextField';
import TextAreaField from './TextAreaField';
import DateField from './DateField';
import DeleteButton from './DeleteButton';

// prettier-ignore
export default function EducationItem(data, index) {
  console.log(data, index);
  return `
    <div data-item="education">
      ${TextField(
        {
          name: 'subject',
          label: 'Subject / Course',
          placeholder: 'Acting',
        },
        data,
        index,
      )}
      ${TextAreaField(
        {
          name: 'subject_description',
          label: 'Description',
          placeholder: 'Bachelor of Arts (Honours)',
          rows: '1',
          cols: '10',
        },
        data,
        index,
      )}
      ${TextField(
        {
          name: 'college',
          label: 'College / School',
          placeholder: 'California State University, Sacramento',
        },
        data,
        index,
      )}
      ${DateField(
        data,
        index
      )}
      ${DeleteButton()}
    </div>
  `;
}
