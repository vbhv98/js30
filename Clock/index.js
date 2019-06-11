const now = new Date()

const sec = document.querySelector('.clock__sec')
const min = document.querySelector('.clock__min')
const hour = document.querySelector('.clock__hour')

const s = document.createElement('style')
s.type = 'text/css'
s.innerHTML = `
@keyframes clockmin {
    from {
      transform: translate(-50%, -100%) rotate(${now.getMinutes() * 6}deg);
    }
    to {
      transform: translate(-50%, -100%) rotate(${now.getMinutes() * 6 +
        360}deg);
    }
  }
  @keyframes clockhour {
    from {
      transform: translate(-50%, -100%) rotate(${now.getHours() * 6}deg);
    }
    to {
      transform: translate(-50%, -100%) rotate(${now.getHours() * 6 + 360}deg);
    }
  }
  @keyframes clocksec {
    from {
      transform: translate(-50%, -100%) rotate(${now.getSeconds() * 6}deg);
    }
    to {
      transform: translate(-50%, -100%) rotate(${now.getSeconds() * 6 +
        360}deg);
    }
  }
`

document.getElementsByTagName('head')[0].appendChild(s)

min.style.transform = `translate(-50%, -100%) rotate(${now.getMinutes() *
  6}deg)`
min.style.animation = `clockmin 3600s linear infinite`

hour.style.transform = `translate(-50%, -100%) rotate(${now.getHours() * 6}deg)`
hour.style.animation = `clockhour calc(3600 * 60s) linear infinite`

sec.style.transform = `translate(-50%, -100%) rotate(${now.getSeconds() *
  6}deg)`
sec.style.animation = `clocksec 60s linear infinite`
