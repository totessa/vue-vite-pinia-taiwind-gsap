<template>
  <div>
    <section aria-labelledby="hero-title" class="relative overflow-hidden rounded-2xl bg-zinc-900 px-4 py-16 sm:rounded-3xl sm:px-6 sm:py-20 md:py-24 lg:px-16 lg:py-28 xl:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cargo-500/20 via-transparent to-transparent" />
      <div class="relative max-w-4xl">
        <span class="inline-block rounded-full bg-cargo-500/20 px-3 py-1 text-xs font-medium text-cargo-400 sm:px-4 sm:py-1.5 sm:text-sm mb-4 sm:mb-6">
          Надёжные переезды с 2010 года
        </span>
        <h1 id="hero-title" class="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Грузоперевозки и переезды в Москве
          <span class="block mt-1 sm:mt-2 text-cargo-400">в любую точку города</span>
        </h1>
        <p class="mt-4 max-w-xl text-base text-zinc-400 sm:mt-6 sm:text-lg lg:text-xl">
          Квартирные и офисные переезды, грузчики, транспорт. Работаем быстро, цены честные.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="tel:+78001234567" class="inline-flex items-center justify-center gap-2 rounded-xl bg-cargo-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-cargo-500/25 hover:bg-cargo-600 transition-colors min-h-[48px] sm:px-6 sm:py-3.5">
            8 800 123-45-67
          </a>
          <button type="button" @click="showModal = true" class="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-800/50 px-5 py-3.5 font-medium text-white hover:border-zinc-500 hover:bg-zinc-700/50 transition-colors min-h-[48px] sm:px-6">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>

    <section aria-labelledby="services-title" class="mt-12 sm:mt-16 lg:mt-20">
      <h2 id="services-title" class="text-xl font-bold text-zinc-900 sm:text-2xl md:text-3xl">Услуги грузоперевозок</h2>
      <p class="mt-2 text-sm text-zinc-600 sm:text-base">Полный спектр услуг для вашего переезда</p>
      <div class="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <div
          v-for="s in services"
          :key="s.title"
          class="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-cargo-200 hover:shadow-lg transition-colors sm:rounded-2xl sm:p-6"
        >
          <span class="text-2xl sm:text-3xl">{{ s.icon }}</span>
          <h3 class="mt-3 text-base font-semibold text-zinc-900 sm:mt-4 sm:text-lg">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-zinc-600">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="advantages-title" class="mt-12 rounded-2xl bg-zinc-100 px-4 py-12 sm:mt-16 sm:rounded-3xl sm:px-6 sm:py-16 md:px-12 md:py-20 lg:mt-20 lg:py-24">
      <h2 id="advantages-title" class="text-xl font-bold text-zinc-900 sm:text-2xl md:text-3xl">Почему выбирают Переезд 24</h2>
      <div class="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:mt-10">
        <div class="flex gap-3 sm:gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cargo-500 text-lg font-semibold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">15+</div>
          <div>
            <h3 class="font-semibold text-zinc-900 sm:text-lg">Лет опыта</h3>
            <p class="mt-1 text-sm text-zinc-600">На рынке грузоперевозок с 2010 года</p>
          </div>
        </div>
        <div class="flex gap-3 sm:gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cargo-500 text-lg font-semibold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">₽</div>
          <div>
            <h3 class="font-semibold text-zinc-900 sm:text-lg">Честные цены</h3>
            <p class="mt-1 text-sm text-zinc-600">Без скрытых платежей, фиксируем в договоре</p>
          </div>
        </div>
        <div class="flex gap-3 sm:gap-4 md:col-span-2 lg:col-span-1">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cargo-500 text-lg font-semibold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">⚡</div>
          <div>
            <h3 class="font-semibold text-zinc-900 sm:text-lg">Быстро</h3>
            <p class="mt-1 text-sm text-zinc-600">Подача машины от 1 часа, выезд в день заказа</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" aria-labelledby="contact-title" class="mt-12 rounded-2xl bg-zinc-900 px-4 py-12 sm:mt-16 sm:rounded-3xl sm:px-6 sm:py-16 md:px-12 md:py-20 lg:mt-20 lg:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <h2 id="contact-title" class="text-xl font-bold text-white sm:text-2xl md:text-3xl">Заказать грузоперевозку</h2>
        <p class="mt-4 text-sm text-zinc-400 sm:text-base md:text-lg">Позвоните или оставьте заявку — перезвоним за 15 минут</p>
        <div class="mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:justify-center sm:gap-6">
          <a href="tel:+78001234567" class="w-full rounded-xl bg-cargo-500 px-6 py-4 font-semibold text-white hover:bg-cargo-600 transition-colors min-h-[48px] flex items-center justify-center sm:w-auto sm:px-8">
            8 800 123-45-67
          </a>
          <button type="button" @click="showModal = true" class="w-full rounded-xl border border-zinc-600 px-6 py-4 font-medium text-white hover:border-zinc-500 transition-colors min-h-[48px] flex items-center justify-center sm:w-auto sm:px-8">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>

    <RequestModal :show="showModal" @close="showModal = false" @submit="onSubmit" />
  </div>
</template>

<script>
import RequestModal from '../components/RequestModal.vue'

export default {
  name: 'HomeView',
  components: { RequestModal },
  data() {
    return {
      showModal: false,
      services: [
        { icon: '🚚', title: 'Квартирные переезды', desc: 'Полный цикл: упаковка, погрузка, доставка, разгрузка' },
        { icon: '🏢', title: 'Офисные переезды', desc: 'Организуем переезд офиса под ключ' },
        { icon: '📦', title: 'Грузчики', desc: 'Команды от 2 человек, почасовая оплата' },
        { icon: '🛣️', title: 'Междугородние', desc: 'Доставка грузов по всей России' },
      ],
    }
  },
  methods: {
    onSubmit() {
      this.showModal = false
    },
  },
}
</script>
