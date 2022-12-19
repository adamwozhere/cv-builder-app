// example item component

export default function ItemComponent(data, id) {
  return `
    <div data-item>
      ${FieldComponent(
        {
          name: 'project_name',
          label: 'Project Name',
        },
        data,
        id
      )}
  
      <button onclick="handleDelete(this)">Delete</button>
    </div>
  `;
}

window.handleDelete = function (button) {
  button.closest('[data-item]').remove();
};
