// Full Name
// Job Title
// Email
// Website
// LinkedIn
// Personal Summary

import TextAreaField from './TextAreaField';
import EmailField from './EmailField';
import TextField from './TextField';
import URLField from './URLField';

// prettier-ignore
export default function ProfileItem(data, index) {
  return `
    <div data-item="profile">
      ${TextField(
        {
          name: 'full_name',
          label: 'Full Name',
          placeholder: 'Tom Hanks',
        },
        data,
        index
      )}
      ${TextField(
        {
          name: 'job_title',
          label: 'Job Title',
          placeholder: 'Actor',
        },
        data,
        index
      )}
      ${EmailField(
        {
          name: 'email',
          label: 'Email',
          placeholder: 'tom@hanks.com',
        },
        data,
        index
      )}
      ${URLField(
        {
          name: 'website',
          label: 'Website',
          placeholder: 'tomhanks.com',
        },
        data,
        index
      )}
      ${URLField(
        {
          name: 'linkedin',
          label: 'LinkedIn',
          placeholder: 'linkedin.com/tomhanks',
        },
        data,
        index
      )}
      ${TextAreaField(
        {
          name: 'summary',
          label: 'Personal Summary',
          placeholder: 'Life is like a box of chocolates...',
          rows: '4',
          cols: '30',
        },
        data,
        index
      )}
    </div>
  `;
}
