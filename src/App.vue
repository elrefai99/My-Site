<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
*{
  font-family: 'Montserrat Alternates', sans-serif;
}
html{
  background: #e8e8e8;
  z-index: -1; 
  /*-webkit-mask-image: radial-gradient(circle, transparent, blue); 
  --webkit-mask-image:radial-gradient(circle, transparent, black);*/
}
html.dark{
  background: #202020;
  color: #e8e8e8;
  color-scheme: dark;
}
</style>