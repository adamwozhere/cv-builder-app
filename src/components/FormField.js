// export default function FormField(data) {
//   return `
//     <div class="form-field">
//       <label for="${data.name}">${data.label}</label>
//       <input type="${data.type}" name="${data.name}" value="${data.value}" />
//     </div>
//   `;
// }
export default function FormField(schema, data) {
  console.log('schema', schema, 'data', data);
  return `
    <div class="form-field">
      <label for="${schema.name}">${schema.label}</label>
      <input type="${schema.type}" name="${schema.name}" value="${
    data[schema.name]
  }" />
    </div>
  `;
}
