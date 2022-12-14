export default function URLField(options, data, id) {
  return `
    <div class="form-field">
      <label for="${options.name}-${id}">
        ${options.label}
      </label>
      <input 
        type="url"
        name="${options.name}" 
        id="${options.name}-${id}"
        placeholder="${options.placeholder}"  
        value="${data[options.name]}"
        oninput="handleURLField(this)"
        data-input 
      />
    </div>
  `;
}

window.handleURLField = function (field) {
  console.log('handle URL');
};
