<script setup>
import Form from '@/components/Form/Form.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
</script>

<template>
  <header>
    <Form />
  </header>

  <main>
    <TodoList />
  </main>
</template>

<style scoped>
header {
  justify-content: center;
  line-height: 1.5;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
