const handleKeyDown = e => {
  const code = e.keyCode

  const audio = document.querySelector(`audio[data-key="${code}"]`)
  const soundKey = document.querySelector(`.sound-key[data-key="${code}"]`)
  if (!audio) return

  audio.currentTime = 0
  audio.play()
  soundKey.classList.toggle('play')
  setTimeout(() => soundKey.classList.toggle('play'), 100)
}

addEventListener('keydown', handleKeyDown)
const soundKeys = document.querySelectorAll('.sound-key')
soundKeys.forEach(k => {
  k.addEventListener('click', e => {
    handleKeyDown({ keyCode: k.dataset['key'] })
  })
})
