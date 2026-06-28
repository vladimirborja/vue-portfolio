export const vScrollReveal = {
  mounted(el, binding) {
    const delay = binding.value?.delay || 0
    const direction = binding.value?.direction || 'up'
    const stagger = binding.value?.stagger || 0

    const transforms = {
      up: 'translateY(32px)',
      left: 'translateX(-32px)',
      right: 'translateX(32px)',
      zoom: 'scale(0.95)',
    }

    const items = stagger > 0 
      ? Array.from(el.querySelectorAll('.reveal-item'))
      : [el]

    // Fall back to direct children if staggering is requested but no items have .reveal-item
    const targetItems = (stagger > 0 && items.length === 0)
      ? Array.from(el.children)
      : items

    targetItems.forEach((item, idx) => {
      item.style.opacity = '0'
      item.style.transform = transforms[direction]
      const itemDelay = delay + (stagger > 0 ? idx * stagger : 0)
      item.style.transition = `opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetItems.forEach((item) => {
              item.style.opacity = '1'
              item.style.transform = direction === 'zoom' ? 'scale(1)' : 'translate(0)'
            })
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
  },
}