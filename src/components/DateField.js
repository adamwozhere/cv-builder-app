export default function DateField(data, index) {
  const today = new Date();
  const month = today.getMonth() + 1; // index starts at zero so increment by 1
  const year = today.getFullYear();
  console.log('passed index', index);

  // TODO: validate dates
  window.validate = (item) => {
    console.log('VALIDATE', item);
  };

  return `
    <div class="date-field">
      <!-- start date -->
      <fieldset class="field-col">
        <legend>Start Date</legend>
        <div class="field-row">

          <!-- month -->
          <div class="form-field">
            <label for="start-date-month-${index}">MONTH</label>
            <input type="number" name="start_date_month" id="start-date-month-${index}" min="1" max="12" placeholder="MM"
              value="${
                data['start_date_month'] !== ''
                  ? data['start_date_month']
                  : month
              }" data-input />
          </div>

          <!-- year -->
          <div class="form-field">
            <label for="start-date-year-${index}">YEAR</label>
            <input type="number" name="start_date_year" id="start-date-year-${index}" min="1900" max="9999" placeholder="YYYY"
              value="${
                data['start_date_month'] !== '' ? data['start_date_year'] : year
              }" data-input />
          </div>

        </div>
      </fieldset>

      <!-- end date -->
      <fieldset class="field-col">
        <legend>End Date</legend>
        <div class="field-row">

          <!-- month -->
          <div class="form-field">
            <label for="end-date-month-${index}">MONTH</label>
            <input type="number" name="end_date_month" id="end-date-month-${index}" min="1" max="12" placeholder="MM"
              value="${
                data['start_date_month'] !== '' ? data['end_date_month'] : month
              }" ${
    data['ongoing'] == true ? 'disabled' : ''
  } data-input="endDate" />
          </div>

          <!-- year-->
          <div class="form-field">
            <label for="end-date-year-${index}">YEAR</label>
            <input type="number" name="end_date_year" id="end-date-year-${index}" min="1900" max="9999" placeholder="YYYY"
              value="${
                data['start_date_month'] !== '' ? data['end_date_year'] : year
              }" ${
    data['ongoing'] == true ? 'disabled' : ''
  } data-input="endDate" />
          </div>

        </div>
      </fieldset>

      <!-- ongoing -->
      <div class="field-row-inline">
        <input type="checkbox" name="ongoing" id="ongoing-${index}"
          ${data['ongoing'] == true ? 'checked' : ''}
          data-input onchange="handleDateOngoing(this)"/>
        <label for="ongoing-${index}">Ongoing</label>
      </div>

    </div>
  `;
}

window.handleDateOngoing = function (checkbox) {
  console.log('closest', checkbox.closest('.date-field'));
  const inputs = checkbox
    .closest('.date-field')
    .querySelectorAll('[data-input="endDate"]');

  Array.from(inputs).map((input) => {
    input.disabled = checkbox.checked;
  });
};
