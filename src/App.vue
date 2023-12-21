<script  lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/layout/header_component.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    HeaderComponent,
  }
}
</script>

<template>
  <header>
     <HeaderComponent/>
  </header>

  <RouterView />
</template>


