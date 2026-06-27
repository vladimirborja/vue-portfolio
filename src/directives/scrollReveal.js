export const vScrollReveal = {
  mounted(el, binding) {
    const delay = binding.value?.delay || 0
    const direction = binding.value?.direction || 'up'

    const transforms = {
      up: 'translateY(32px)',
      left: 'translateX(-32px)',
      right: 'translateX(32px)',
      zoom: 'scale(0.95)',
    }

    el.style.opacity = '0'
    el.style.transform = transforms[direction]
    el.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = direction === 'zoom' ? 'scale(1)' : 'translate(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
  },
}