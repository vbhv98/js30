const projectList = document.getElementById('project-list')
const cardUI = (number, name, onClickID, enabled) => `
  <article class="project-card ${
    enabled ? 'done' : 'not-done'
  }" id="${enabled && onClickID}">
    <span class="project-number">#${number}</span>
    <h3 class="project-name">${name}</h3>
  </article>
`

let projectListHTML = ''
let projectIDs = []

projects.forEach(project => {
  const ID = `${project.name}_${project.number}`
  projectListHTML += cardUI(project.number, project.name, ID, project.enabled)
  projectIDs.push(ID)
})

projectList.innerHTML = projectListHTML

projectIDs.forEach(ID =>
  document.getElementById(ID).addEventListener('click', () => {
    const name = ID.split('_')[0].replace(' ', '-')
    window.open(`/js30/${name}`, '_blank')
  }),
)
