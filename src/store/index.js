import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todos: [],
}

export default createStore({
  state: { ...initialState },
  mutations: {
    setNewTodo(state, newTodo) {
      state.todos = [...state.todos, newTodo]
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
  },
  actions: {
    setNewTodo(context, newText) {
      const newTodo = {
        title: newText,
        id: uuidv4(),
        status: false,
      }
      context.commit('setNewTodo', newTodo)
    },
    removeTodo(context, id) {
      context.commit('removeTodo', id)
    },
  },
  getters: {
    getTodos: (state) => state.todos,
  },
  plugins: [
    createPersistedState({
      key: 'myTodoState',
    }),
  ],
})
