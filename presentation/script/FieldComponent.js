// example text field component

export default function FieldComponent(props, data, id) {
  return `
    <div class="field">

      <label for="${props.name}-${id}">
        ${props.label}
      </label>

      <input
        type="text" 
        id="${props.name}-${id}" 
        name="${props.name}" 
        value="${data[props.name]}"
        oninput="handleInput(this)"
      />

    </div>
  `;
}

window.handleInput = (field) => {
  // custom handler in here if needed
};
