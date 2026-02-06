<template>
  <div class="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
    <div ref="blob1" class="absolute left-[15%] top-[20%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cargo-500/15 blur-3xl" />
    <div ref="blob2" class="absolute right-[10%] top-[30%] h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-cargo-400/12 blur-3xl" />
    <div ref="blob3" class="absolute left-[20%] bottom-[25%] h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-400/20 blur-3xl" />
    <div ref="blob4" class="absolute right-[15%] bottom-[15%] h-[28rem] w-[28rem] translate-x-1/2 translate-y-1/2 rounded-full bg-cargo-500/10 blur-3xl" />
    <div ref="blob5" class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-500/15 blur-2xl" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'BackgroundEffects',
  mounted() {
    const opts = { yoyo: true, repeat: -1, ease: 'sine.inOut' }
    gsap.to(this.$refs.blob1, { x: 60, y: -50, duration: 10, delay: 0, ...opts })
    gsap.to(this.$refs.blob2, { x: -80, y: 40, duration: 12, delay: 1, ...opts })
    gsap.to(this.$refs.blob3, { x: 70, y: 60, duration: 11, delay: 2, ...opts })
    gsap.to(this.$refs.blob4, { x: -90, y: -70, duration: 14, delay: 0.5, ...opts })
    gsap.to(this.$refs.blob5, { x: 50, y: -40, duration: 9, delay: 1.5, ...opts })

    gsap.to([this.$refs.blob1, this.$refs.blob3, this.$refs.blob5], {
      scale: 1.15,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: { each: 2 },
    })
  },
}
</script>
