<template>
  <div class="todoList">
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem/TodoItem.vue'

export default {
  components: {
    TodoItem,
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    },
  },
}
</script>

<style scoped>
@import './TodoList.css';
</style>
