const names = ['drum-kit']

const projects = names.map((name, i) => {
  return {
    name,
    number: i + 1,
    link: `/${name}`,
  }
})

// [
//   {
//     number: 1,
//     name: 'drum-kit',
//     link: '/drum-kit',
//   }
// ]
