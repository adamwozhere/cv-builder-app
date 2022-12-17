import webIcon from '../icons/websiteIcon';
import emailIcon from '../icons/emailIcon';
import linkedinIcon from '../icons/linkedinIcon';
import linkIcon from '../icons/linkIcon';

export default function CVdocument() {
  function render(element, data) {
    let html = `
      <div class="page">
      <div class="container">
        <section class="header">
          <h1>${data.profile[0].full_name}</h1>
          <span class="occupation">${data.profile[0].job_title}</span>
        </section>
        <section class="profile">
          <ul>
            <li>
              <span class="icon">${emailIcon()}</span> <a href="mailto:${
      data.profile[0].email
    }">${data.profile[0].email}</a>
            </li>
            <li>
              <span class="icon">${webIcon()}</span> <a href="${
      data.profile[0].website
    }" target="_blank">${data.profile[0].website}</a>
            </li>
            <li>
              <span class="icon">${linkedinIcon()}</span> <a href="${
      data.profile[0].linkedin
    }" target="_blank">${data.profile[0].linkedin}</a>
            </li>
          </ul>
          <div class="summary">
            <p>${data.profile[0].summary}</p>
          </div>
        </section>
        <section class="work">
          <h2>Employment</h2>
          <ul>
            ${data.work
              .map((item) => {
                return `
                <li>
                  <span class="date">${item.start_date_month}/${
                  item.start_date_year
                } — ${
                  item.ongoing
                    ? 'Present'
                    : item.end_date_month + '/' + item.end_date_year
                }</span>
                  <h3 class="job-title">${item.job_title}</h3>
                  <span class="company">${item.company_name}</span>
                  <p class="description">${item.job_description}</p>
                </li>
              `;
              })
              .join('')}
          </ul>
        </section>
        <section class="projects">
          <h2>Projects</h2>
          <ul>
            ${data.projects
              .map((item) => {
                return `
                <li>
                  <h3>${item.project_title}</h3>
                  <p class="description">${item.project_description}</p>
                  <span class="icon">${linkIcon()}</span> <a href="${
                  item.github_link
                }" target="_blank">${item.github_link}</a>
                </li>
              `;
              })
              .join('')}
          </ul>
        </section>
        <section class="education">
          <h2>Education</h2>
          <ul>
            ${data.education
              .map((item) => {
                return `
                <li>
                  <span class="date">${item.start_date_month}/${
                  item.start_date_year
                } — ${
                  item.ongoing
                    ? 'Present'
                    : item.end_date_month + '/' + item.end_date_year
                }</span>
                  <h3>${item.subject}</h3>
                  <span>${item.college}</span>
                  <p class="description>${item.subject_description}</p>
                </li>
              `;
              })
              .join('')}
          </ul>
        </section>
        </div>
      </div>
    `;
    element.innerHTML = html;
  }

  return {
    render,
  };
}
