export const vTilt = {
  mounted(el, binding) {
    const max = binding.value?.max || 3 // Subtle max tilt angle (3 degrees is clean)
    const perspective = binding.value?.perspective || 1000
    
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const xc = rect.width / 2
      const yc = rect.height / 2
      const tiltX = ((yc - y) / yc) * max
      const tiltY = ((x - xc) / xc) * max
      
      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    }
    
    const handleMouseLeave = () => {
      el.style.transition = 'transform 0.5s ease'
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`
    }
    
    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.15s ease'
    }
    
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('mouseenter', handleMouseEnter)
    
    el._tiltMouseMove = handleMouseMove
    el._tiltMouseLeave = handleMouseLeave
    el._tiltMouseEnter = handleMouseEnter
  },
  unmounted(el) {
    if (el._tiltMouseMove) {
      el.removeEventListener('mousemove', el._tiltMouseMove)
      el.removeEventListener('mouseleave', el._tiltMouseLeave)
      el.removeEventListener('mouseenter', el._tiltMouseEnter)
    }
  }
}
