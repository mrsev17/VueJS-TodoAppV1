<template>
  <div class="todo-form">
    <h2>Todo App</h2>
    <input type="text" v-model="textTodo" />
    <button @click="addNewTodo">Add new todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textTodo: '',
    }
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('setNewTodo', this.textTodo)
      this.textTodo = ''
    },
  },
}
</script>
<style scoped>
@import './Form.css';
</style>
