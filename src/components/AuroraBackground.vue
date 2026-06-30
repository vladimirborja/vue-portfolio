<script setup>

defineProps({
  title: { type: String, default: '' },
})

const filterImageHref = "data:image/svg+xml," + encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
    <g>
      <rect width='1' height='1' fill='black' />
      <rect width='1' height='1' fill='url(#red)' style='mix-blend-mode:screen' />
      <rect width='1' height='1' fill='url(#green)' style='mix-blend-mode:screen' />
      <rect width='1' height='1' fill='url(#yellow)' style='mix-blend-mode:screen' />
    </g>
    <defs>
      <radialGradient id='yellow' cx='0' cy='0' r='1'>
        <stop stop-color='yellow' />
        <stop stop-color='yellow' offset='1' stop-opacity='0' />
      </radialGradient>
      <radialGradient id='green' cx='1' cy='0' r='1'>
        <stop stop-color='green' />
        <stop stop-color='green' offset='1' stop-opacity='0' />
      </radialGradient>
      <radialGradient id='red' cx='0' cy='1' r='1'>
        <stop stop-color='red' />
        <stop stop-color='red' offset='1' stop-opacity='0' />
      </radialGradient>
    </defs>
  </svg>
`)
</script>

<template>
  <div class="aurora-bg-wrapper fixed inset-0 w-full h-full -z-10 overflow-hidden">
    <div class="aurora-hero-bg"></div>

    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      color-interpolation-filters="sRGB"
      style="position: absolute; opacity: 0; height: 0; width: 0; pointer-events: none;"
      aria-hidden="true"
      focusable="false"
    >
      <filter id="fluted" primitiveUnits="objectBoundingBox">
        <feImage
          x="0" y="0"
          result="image_0"
          crossorigin="anonymous"
          :href="filterImageHref"
          preserveAspectRatio="none meet"
          width=".03"
          height="1"
        />
        <feTile in="image_0" result="tile_0" />
        <feGaussianBlur stdDeviation=".0001" edgeMode="none" in="tile_0" result="bar_smoothness" x="0" y="0" />
        <feDisplacementMap scale=".08" xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="bar_smoothness" result="displacement_0" />
      </filter>
    </svg>
  </div>
</template>

<style scoped>
.aurora-bg-wrapper {
  --stripe-color: #000;
  --bg-filter: blur(10px) opacity(50%) saturate(200%);
  background: var(--stripe-color);
}
:global(.dark) .aurora-bg-wrapper {
  --stripe-color: #fff;
  --bg-filter: blur(10px) invert(100%);
}

@keyframes smoothBg {
  from { background-position: 50% 50%, 50% 50%; }
  to { background-position: 350% 50%, 350% 50%; }
}

.aurora-hero-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  --stripes: repeating-linear-gradient(
    100deg,
    var(--stripe-color) 0%,
    var(--stripe-color) 7%,
    transparent 10%,
    transparent 12%,
    var(--stripe-color) 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: var(--bg-filter);
}

.aurora-hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: smoothBg 60s linear infinite;
  mix-blend-mode: difference;
}
</style>