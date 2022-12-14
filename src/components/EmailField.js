export default function EmailField(options, data, id) {
  return `
    <div class="form-field">
      <label for="${options.name}-${id}">
        ${options.label}
      </label>
      <input 
        type="email"
        name="${options.name}" 
        id="${options.name}-${id}"
        placeholder="${options.placeholder}"  
        value="${data[options.name]}"
        oninput="handleEmailField(this)"
        data-input 
      />
    </div>
  `;
}

window.handleEmailField = function (field) {
  console.log('handle email');
};
