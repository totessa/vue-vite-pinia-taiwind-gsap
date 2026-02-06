<template>
  <div class="max-w-2xl">
    <h1 class="text-xl font-bold text-zinc-900 sm:text-2xl md:text-3xl">Контакты Переезд 24</h1>
    <p class="mt-2 text-sm text-zinc-600 sm:text-base">Свяжитесь с нами удобным способом — ответим быстро</p>
    <section aria-labelledby="contact-ways" class="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
      <h2 id="contact-ways" class="sr-only">Способы связи</h2>
      <a href="tel:+78001234567" class="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 min-h-[72px]">
        <div>
          <h3 class="font-semibold text-zinc-900 sm:text-lg">Телефон</h3>
          <span class="mt-1 block text-cargo-600 hover:text-cargo-700 text-base sm:text-lg font-medium">8 800 123-45-67</span>
          <p class="mt-1 text-sm text-zinc-500">Ежедневно с 8:00 до 22:00</p>
        </div>
      </a>
      <a href="mailto:info@pereezd24.ru" class="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 min-h-[72px]">
        <div>
          <h3 class="font-semibold text-zinc-900 sm:text-lg">Email</h3>
          <span class="mt-1 block text-cargo-600 hover:text-cargo-700 text-base sm:text-lg font-medium">info@pereezd24.ru</span>
        </div>
      </a>
      <div class="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
        <div>
          <h3 class="font-semibold text-zinc-900 sm:text-lg">Офис</h3>
          <p class="mt-1 text-zinc-600 text-base sm:text-lg">г. Москва, ул. Примерная, д. 1</p>
          <p class="mt-1 text-sm text-zinc-500">По предварительной записи</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>
