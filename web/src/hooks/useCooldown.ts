export default () => {
  const bar = document.getElementById('cooldown-bar')
  if (bar) {
    bar.classList.remove('hidden')
    bar.style.transition = 'none'
    bar.style.width = '100%'
    
    setTimeout(() => {
      bar.style.transition = ''
      bar.style.width = '0%'
    }, 50)
  }
}