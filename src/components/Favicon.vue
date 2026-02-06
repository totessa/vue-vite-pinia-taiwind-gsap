<template>
  <div v-show="false" />
</template>

<script>
export default {
  name: 'Favicon',
  props: {
    url: { type: String, default: '/favicon.svg' },
  },
  watch: {
    url(url) {
      this.setFavicon(url)
    },
  },
  mounted() {
    this.setFavicon(this.url)
  },
  beforeDestroy() {
    if (this.el) document.head.removeChild(this.el)
  },
  methods: {
    setFavicon(url) {
      if (this.el) {
        this.el.href = url
        return
      }
      this.el = document.createElement('link')
      this.el.rel = 'icon'
      this.el.type = 'image/svg+xml'
      this.el.href = url
      document.head.appendChild(this.el)
    },
  },
}
</script>
