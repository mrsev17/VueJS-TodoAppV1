<template>
  <li>
    <p>{{ `${index + 1}.` }}</p>
    <span>{{ todo.title }}</span>
    <button @click="removeTodo">X</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo.id)
    },
  },
}
</script>

<style scoped>
@import './TodoItem.css';
</style>
