export default function TextAreaField(options, data, id) {
  return `
    <div class="form-field">
      <label for="${options.name}-${id}">
        ${options.label}
      </label>
      <textarea 
        name="${options.name}" 
        id="${options.name}-${id}"
        placeholder="${options.placeholder}" 
        rows="${options.rows}" 
        cols="${options.cols}" 
        oninput="handleTextAreaField(this)"
        data-input 
      >${data[options.name]}</textarea>
    </div>
  `;
}

window.handleTextAreaField = function (field) {
  console.log('handle textarea field');
};
