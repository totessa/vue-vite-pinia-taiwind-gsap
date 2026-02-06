<template>
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm" @click="$emit('close')" />
      <div class="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-8" @click.stop>
        <button type="button" @click="$emit('close')" class="absolute right-4 top-4 rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700" aria-label="Закрыть">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h2 id="modal-title" class="text-xl font-bold text-zinc-900 sm:text-2xl">Оставить заявку</h2>
        <p class="mt-2 text-sm text-zinc-600">Оставьте контакты — перезвоним за 15 минут</p>
        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-zinc-700">Имя</label>
            <input id="name" v-model="form.name" type="text" required class="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-cargo-500 focus:outline-none focus:ring-2 focus:ring-cargo-500/20" placeholder="Ваше имя" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-zinc-700">Телефон</label>
            <input id="phone" v-model="form.phone" type="tel" required class="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-cargo-500 focus:outline-none focus:ring-2 focus:ring-cargo-500/20" placeholder="+7 (___) ___-__-__" />
          </div>
          <div>
            <label for="comment" class="block text-sm font-medium text-zinc-700">Комментарий</label>
            <textarea id="comment" v-model="form.comment" rows="3" class="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-cargo-500 focus:outline-none focus:ring-2 focus:ring-cargo-500/20 resize-none" placeholder="Опишите задачу (необязательно)" />
          </div>
          <button type="submit" class="w-full rounded-xl bg-cargo-500 py-3.5 font-semibold text-white hover:bg-cargo-600 transition-colors">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'RequestModal',
  props: {
    show: { type: Boolean, default: false },
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        comment: '',
      },
    }
  },
  watch: {
    show(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', this.onKeydown)
      } else {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', this.onKeydown)
      }
    },
  },
  beforeDestroy() {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    onKeydown(e) {
      if (e.key === 'Escape') this.$emit('close')
    },
    handleSubmit() {
      this.$emit('submit', { ...this.form })
      this.form = { name: '', phone: '', comment: '' }
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter, .modal-leave-to { opacity: 0; }
.modal-enter-active .relative, .modal-leave-active .relative { transition: transform 0.2s ease; }
.modal-enter .relative, .modal-leave-to .relative { transform: scale(0.95); }
</style>
