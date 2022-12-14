import ProfileItem from './ProfileItem';
import WorkItem from './WorkItem';
import ProjectItem from './ProjectItem';
import EducationItem from './EducationItem';

// IIFE allows creating a unique ID
// https://stackoverflow.com/questions/1535631/static-variables-in-javascript
// https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
const UID = (() => {
  let index = 0;
  return () => index++;
})();

const build = {
  profile: ProfileItem,
  work: WorkItem,
  projects: ProjectItem,
  education: EducationItem,
};

export default function FormItem(section, data) {
  return build[section](data, UID());
}
