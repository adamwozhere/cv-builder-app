export default function FormField(data) {
  return `
    <div class="form-field">
      <label for="${data.name}">${data.label}</label>
      <input type="${data.type}" name="${data.name}" value="${data.value}" />
    </div>
  `;
}
