export default function FormField(schema, data) {
  console.log('schema', schema, 'data', data);

  if (schema.type === 'textarea') {
    return `
      <div class="form-field">
        <label for="${schema.name}">${schema.label}</label>
        <textarea name="${schema.name}" rows="4" cols="30" data-input>${
      data ? data[schema.name] : schema.placeholder
    }</textarea>
      </div>
    `;
  }

  if (schema.type === 'month') {
    return `
    <div class="form-field">
      <label for="${schema.name}">${schema.label}</label>
      <input type="${schema.type}" name="${schema.name}" data-input value="${
      data ? data[schema.name] : new Date().toISOString().substr(0, 7)
    }" />
    </div>
  `;
  }

  if (schema.type === 'customdate') {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();

    // console.log('date', parseInt(data[schema.name.toString() + '_month']));
    return `
      <div class="form-field date-field">
        <fieldset>
          <legend>Start Date</legend>
          <div class="row">
            <div class="form-field">
             
              <input type="number" name="start_date_month" min="1" max="12" placeholder="MM" value="${
                data ? data['start_date_month'] : ''
              }" data-input />
            </div>
            <div class="form-field">
              
              <input type="number" name="start_date_year" min="1900" max="9999" placeholder="YYYY" value="${
                data ? data['start_date_year'] : ''
              }" data-input />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>End Date</legend>
          <div class="row">
            <div class="form-field">
             
              <input type="number" name="end_date_month" min="1" max="12" placeholder="MM" value="${
                data ? data['end_date_month'] : ''
              }" data-input />
            </div>
            <div class="form-field">
             
              <input type="number" name="end_date_year" min="1900" max="9999" placeholder="YYYY" value="${
                data ? data['end_date_year'] : ''
              }" data-input />
              
            </div>
            <div class="align-bottom">
          <input type="checkbox" value="ongoing" />
          <label for="ongoing">Ongoing</label>
        </div>
          </div>
          
        </fieldset>
        
      </div>
    `;
  }

  return `
    <div class="form-field">
      <label for="${schema.name}">${schema.label}</label>
      <input type="${schema.type}" name="${schema.name}" data-input value="${
    data ? data[schema.name] : schema.placeholder
  }" />
    </div>
  `;
}
