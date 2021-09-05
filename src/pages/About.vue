<template>
  <div>
    <div>我是about的内容</div>
    <router-link to="/about/news">跳转news</router-link>
    <router-link to="/about/message">跳转messgae</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>