<template>
  <div>
    <NavBar/>
    <HomePage />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/templates/NavBar.vue';
import HomePage from '@/components/templates/Pages/HomePage.vue'
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    NavBar,
    HomePage
  },
})
export default class HomeView extends Vue {}
</script>
