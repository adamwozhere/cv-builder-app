export default function TextField(options, data, id) {
  return `
    <div class="form-field">
      <label for="${options.name}-${id}">
        ${options.label}
      </label>
      <input 
        type="text"
        name="${options.name}" 
        id="${options.name}-${id}"
        placeholder="${options.placeholder}"  
        value="${data[options.name]}"
        oninput="handleTextField(this)"
        data-input 
      />
    </div>
  `;
}

window.handleTextField = function (field) {
  console.log('handle text field');
};
