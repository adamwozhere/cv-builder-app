import FormField from './FormField';

// export default function ProfileEntry(data) {
//   return `
//     <div data-item>
//       ${FormField({
//         name: 'first_name',
//         label: 'First Name',
//         type: 'text',
//         value: data.first_name,
//       })}
//       ${FormField({
//         name: 'last_name',
//         label: 'Last Name',
//         type: 'text',
//         value: data.last_name,
//       })}
//       ${FormField({
//         name: 'occupation',
//         label: 'Occupation',
//         type: 'text',
//         value: data.occupation,
//       })}
//       ${FormField({
//         name: 'email',
//         label: 'Email',
//         type: 'email',
//         value: data.email,
//       })}
//     </div>
//   `;
// }

import schema from '../schema.json';

export default function ProfileEntry(data) {
  return `
    <div data-item>
    ${Object.keys(schema.profile.fields)
      .map((key) => {
        console.log('key', key);
        return FormField(schema.profile.fields[key], data);
      })
      .join('')}
    </div>
  `;
}
