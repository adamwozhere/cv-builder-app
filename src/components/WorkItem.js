// Date
// Job Title
// Job Description
// Company Name

import TextField from './TextField';
import DateField from './DateField';
import DeleteButton from './DeleteButton';

// prettier-ignore
export default function WorkItem(data, index) {
  return `
    <div data-item="work">
      ${TextField(
        { 
          name: 'job_title',
          label: 'Job Title',
          placeholder: 'Actor',
        },
        data,
        index
      )}
      ${TextField(
        {
          name: 'company_name',
          label: 'Company Name',
          placeholder: 'e.g. Apple',
        },
        data,
        index
      )}
      ${TextField(
        {
          name: 'job_description',
          label: 'Job Description',
          placeholder: 'Job description...',
        },
        data,
        index
      )}
      ${DateField(
        data, 
        index
      )}
      ${DeleteButton()}
    </div>
  `;
}
