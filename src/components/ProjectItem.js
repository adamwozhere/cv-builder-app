// Project Title
// Project description
// Github Link

import TextField from './TextField';
import URLField from './URLField';
import DeleteButton from './DeleteButton';

// prettier-ignore
export default function ProjectItem (data, index) {
  return `
    <div data-item="project">
      ${TextField(
        {
          name: 'project_title',
          label: 'Project Title',
          placeholder: 'Project X'
        },
        data,
        index
      )}
      ${TextField(
        {
          name: 'project_description',
          label: 'Description',
          placeholder: 'Top secret...',
        },
        data,
        index
      )}
      ${URLField(
        {
          name: 'github_link',
          label: 'GitHub',
          placeholder: 'github.com/projectx',
        },
        data,
        index
      )}
      ${DeleteButton()}
    </div>
  `;
}
