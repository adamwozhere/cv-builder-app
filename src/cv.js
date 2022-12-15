import Store from './controllers/Store';
const store = Store('cvdata');
const data = store.getState();
const element = document.getElementById('cv');

console.log('CV page');

element.innerHTML = `
      <div class="cv-inner">
        <p>Preview</p>
        <div class="cv-container">
          <h1>${data.profile[0].full_name}</h1>
          <p>${data.profile[0].job_title}</p>
          <ul>
            <li><a href="mailto:${data.profile[0].email}">${
  data.profile[0].email
}</a></li>
            <li><a href="${data.profile[0].website}" target="_blank">${
  data.profile[0].website
}</a></li>
            <li><a href="${data.profile[0].linkedin}" target="_blank">${
  data.profile[0].linkedin
}</a></li>
          </ul>
          <p>${data.profile[0].summary}</p>
          <h2>Work</h3>
          <ul>
            ${data.work
              .map((item) => {
                return `
                  <li>
                    <div class="row">
                    <p>${item.job_title}</p>
                    <p class="date">${item.start_date_month} / ${
                  item.start_date_year
                }  —  
                    ${
                      item.ongoing
                        ? 'Present'
                        : item.end_date_month + ' / ' + item.end_date_year
                    }
                    </p>
                    </div>
                    <p>${item.company_name}</p>
                    <p>${item.job_description}</p>
                  </li>
                `;
              })
              .join('')}
          </ul>
          <h2>Projects</h2>
          <ul>
            ${data.projects
              .map((item) => {
                return `
                  <li>
                    <div>
                      <p>${item.project_title}</p>
                      <p>${item.project_description}</p>
                      <a href="${item.github_link}" target="_blank">${item.github_link}</a>
                    </div>
                  </li>
                `;
              })
              .join('')}
          </ul>
          <h2>Education</h2>
          <ul>
              ${data.education
                .map((item) => {
                  return `
                  <li>
                    <div class="row">
                      <p>${item.subject}</p>
                      <p class="date">${item.start_date_month} / ${
                    item.start_date_year
                  }  —  ${
                    item.ongoing
                      ? 'Present'
                      : item.end_date_month + ' / ' + item.end_date_year
                  }
                    </div>
                    <p>${item.subject_description}</p>
                    <p>${item.college}</p>
                  </li>
                  `;
                })
                .join('')}
          </ul>
        </div>
      </div>
    `;
