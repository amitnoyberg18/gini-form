<script setup lang="ts">
import Form from './components/Form/Form.vue'
</script>


<template>
  <div class ="logo-container">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/Gini-App.png" class="logo gini" alt="Gini logo" />
    </a>
  </div>
  <Form />
</template>

<style scoped>

.logo-container {
  text-align: left;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.gini:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
