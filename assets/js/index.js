const projectList = document.getElementById('project-list')

text_truncate = (str, length = 100, ending = '...') => {
  if (str.length > length)
    return str.substring(0, length - ending.length) + ending
  return str
}

const cardUI = (number, name, onClickID, enabled) => `
  <article class="project-card ${
    enabled ? 'done' : 'not-done'
  }" id="${enabled && onClickID}">
    <span class="project-number">${String(number).padStart(2, '0')}</span>
    <h3 class="project-name">${text_truncate(name, 24)}</h3>
  </article>
`

let projectListHTML = ''
let projectIDs = []

projects.forEach(project => {
  const ID = `${project.name}_${project.number}`
  projectListHTML += cardUI(project.number, project.name, ID, project.enabled)
  project.enabled && projectIDs.push(ID)
})

projectList.innerHTML = projectListHTML

projectIDs.forEach(ID =>
  document.getElementById(ID).addEventListener('click', () => {
    const name = ID.split('_')[0].replace(' ', '-')
    window.open(`/js30/${name}`, '_blank')
  }),
)
