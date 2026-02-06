<template>
  <div>
    <section aria-labelledby="notfound-title" class="relative overflow-hidden rounded-2xl bg-zinc-900 px-4 py-16 sm:rounded-3xl sm:px-6 sm:py-20 md:py-24">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cargo-500/20 via-transparent to-transparent" />
      <div class="relative mx-auto max-w-2xl text-center">
        <span class="inline-block rounded-full bg-cargo-500/20 px-4 py-1.5 text-sm font-medium text-cargo-400">404</span>
        <h1 id="notfound-title" class="mt-6 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Страница не найдена
        </h1>
        <p class="mt-4 text-base text-zinc-400 sm:text-lg">
          Запрашиваемая страница не существует или была перемещена
        </p>
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <router-link to="/" class="inline-flex items-center justify-center rounded-xl bg-cargo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cargo-500/25 hover:bg-cargo-600 transition-colors min-h-[48px]">
            На главную
          </router-link>
          <router-link to="/contact" class="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-800/50 px-6 py-3.5 font-medium text-white hover:border-zinc-500 hover:bg-zinc-700/50 transition-colors min-h-[48px]">
            Контакты
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>
