export default function CVdocument(element, dataStore) {
  const cv = element;
  const store = dataStore;

  function renderCV() {
    const data = store.getState();

    cv.innerHTML = `
      <div class="cv-inner">
        CV WORKING??



        dfsf
        sf
        sf
        sdf
        
      </div>
    `;
  }
  return { renderCV };
}
