export const vCardSpotlight = {
  mounted(el) {
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
    }
    el.addEventListener('mousemove', handleMouseMove)
    el._handleMouseMove = handleMouseMove
    
    // Set default out of view values
    el.style.setProperty('--mouse-x', '-9999px')
    el.style.setProperty('--mouse-y', '-9999px')
  },
  unmounted(el) {
    if (el._handleMouseMove) {
      el.removeEventListener('mousemove', el._handleMouseMove)
    }
  }
}
