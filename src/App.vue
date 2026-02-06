<template>
  <div class="relative min-h-screen bg-zinc-50">
    <BackgroundEffects />
    <Favicon url="/favicon.svg" />
    <header class="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-lg safe-area-top">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:max-w-6xl 2xl:max-w-7xl tv:max-w-[90rem]">
        <router-link to="/" @click.native="menuOpen = false" class="flex items-center gap-2 sm:gap-3 text-base font-bold text-zinc-900 hover:text-cargo-600 transition-colors min-h-[44px] items-center">
          <img src="/logo.svg" alt="" class="h-7 w-auto sm:h-8" />
          <span>Переезд 24</span>
        </router-link>

        <div class="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          <router-link to="/" class="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-2 min-h-[44px] flex items-center" active-class="text-cargo-600 font-semibold" exact>Главная</router-link>
          <router-link to="/about" class="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-2 min-h-[44px] flex items-center" active-class="text-cargo-600 font-semibold">О компании</router-link>
          <router-link to="/contact" class="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-2 min-h-[44px] flex items-center" active-class="text-cargo-600 font-semibold">Контакты</router-link>
        </div>

        <button
          type="button"
          @click="menuOpen = !menuOpen"
          class="flex md:hidden h-11 w-11 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 transition-colors"
          aria-label="Меню"
        >
          <svg v-if="!menuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <Transition name="menu">
        <div v-show="menuOpen" class="md:hidden border-t border-zinc-200 bg-white">
          <div class="mx-auto max-w-5xl px-4 py-4 space-y-1 sm:px-6">
            <router-link to="/" @click.native="menuOpen = false" class="block rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 transition-colors min-h-[48px] flex items-center" active-class="text-cargo-600 font-semibold bg-cargo-50" exact>Главная</router-link>
            <router-link to="/about" @click.native="menuOpen = false" class="block rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 transition-colors min-h-[48px] flex items-center" active-class="text-cargo-600 font-semibold bg-cargo-50">О компании</router-link>
            <router-link to="/contact" @click.native="menuOpen = false" class="block rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 transition-colors min-h-[48px] flex items-center" active-class="text-cargo-600 font-semibold bg-cargo-50">Контакты</router-link>
            <a href="tel:+78001234567" @click="menuOpen = false" class="block rounded-lg px-4 py-3 text-base font-semibold text-cargo-600 hover:bg-cargo-50 active:bg-cargo-100 transition-colors min-h-[48px] flex items-center">8 800 123-45-67</a>
          </div>
        </div>
      </Transition>
    </header>

    <main class="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:max-w-6xl 2xl:max-w-7xl tv:max-w-[90rem] tv:px-8">
      <router-view />
    </main>

    <footer class="relative z-10 border-t border-zinc-200 bg-white px-4 py-6 sm:py-8 md:px-8 safe-area-bottom">
      <div class="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6 lg:max-w-6xl 2xl:max-w-7xl tv:max-w-[90rem]">
        <span class="text-xs sm:text-sm text-zinc-500 text-center sm:text-left">© 2025 Переезд 24. Грузоперевозки и переезды.</span>
        <a href="tel:+78001234567" class="text-sm font-medium text-cargo-600 hover:text-cargo-700 min-h-[44px] flex items-center justify-center">8 800 123-45-67</a>
      </div>
    </footer>
  </div>
</template>

<script>
import Favicon from './components/Favicon.vue'
import BackgroundEffects from './components/BackgroundEffects.vue'

export default {
  name: 'App',
  components: { Favicon, BackgroundEffects },
  data() {
    return { menuOpen: false }
  },
}
</script>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity 0.2s ease; }
.menu-enter, .menu-leave-to { opacity: 0; }
.safe-area-top { padding-top: env(safe-area-inset-top, 0); }
.safe-area-bottom { padding-bottom: env(safe-area-inset-bottom, 0); }
</style>
