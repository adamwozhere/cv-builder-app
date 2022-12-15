export default function DeleteButton() {
  return `
    <button data-delete onclick="handleDelete(this)">Delete</button>
  `;
}

window.handleDelete = function (button) {
  console.log('delete button');
  button.closest('[data-item]').classList.add('deleting');
  setTimeout(() => {
    button.closest('[data-item]').remove();
    update();
  }, 250);
};
