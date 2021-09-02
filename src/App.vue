<template>
  <div id="app">
    <TodoHeader :addTodo="addTodo"></TodoHeader>
    <TodoList
      :todos="todos"
      :checkTodo="checkTodo"
      :deleteItem="deleteItem"
    ></TodoList>
    <TodoFooter
      :todos="todos"
      :checkAllTodos="checkAllTodos"
      :clearAllCheckedTodo="clearAllCheckedTodo"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
  },
  data() {
    return {
      // todos: [
      //   { id: "001", title: "学习", done: true },
      //   { id: "002", title: "吃饭", done: false },
      //   { id: "003", title: "睡觉", done: true },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 增
    addTodo(todoObject) {
      //TODO:子-->父传值，借用方法+props实现
      // 这里的this指向App组件实例,像es6箭头函数的this静态特性？
      // 是的，源码这里设置了类似_that = this,固定住了
      // 子组件TodoHeader调用时，this也指向App组件实例，
      this.todos.unshift(todoObject);
    },
    // 勾选
    checkTodo(id) {
      this.todos.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
          return;
        }
      });
    },
    //删除
    deleteItem(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    //勾选所有
    checkAllTodos(done) {
      this.todos.forEach((item) => (item.done = done));
    },
    //清除已完成的
    clearAllCheckedTodo() {
      this.todos = this.todos.filter((item) => !item.done);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
