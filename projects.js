const names = [
  'drum-kit',
  'Clock',
  'CSS-Variables',
  'Array-Cardio 1',
  'Image-Gallery',
  'Type-Ahead',
  'Array-Cardio 2',
  'HTML5-Canvas',
  'Check-Multiple-Checkboxes',
  'Custom-HTML5-Video-Player',
  'Key-Sequence-Detection',
  'Slide-In-on-Scroll',
  'Object-and-Arrays-Reference-VS-Copy',
  'LocalStorage-and-Event-Delegation',
  'CSS-Text Shadow-Mouse-Move-Effect',
  'Sorting-Band-Names-without-articles',
  'Tally-String-Times-with-Reduce',
  'Unreal-Webcam-Fun',
  'Native-Speech-Recognition',
  'Geolocation-based-Speedometer-and-Compass',
  'Follow-Along-Links',
  'Speech-Synthesis',
  'Sticky-Nav',
  'Event-Capture-Propagation-Bubbling-and-Once',
  'Stripe-Follow-Along-Dropdown',
  'Click-and Drag-to-Scroll',
  'Video-Speed-Controller-UI',
  'Countdown-Clock',
  'Whack-A-Mole-Game',
  "That's-All-Folks",
]

const doneTill = 1

const projects = names.map((name, i) => {
  return {
    name: name.split('-').join(' '),
    number: i + 1,
    enabled: doneTill >= i + 1,
  }
})

// [
//   {
//     number: 1,
//     name: 'drum-kit',
//     link: '/drum-kit',
//   }
// ]
