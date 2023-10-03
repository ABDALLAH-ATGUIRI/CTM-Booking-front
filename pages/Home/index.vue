<template>
  <header-vue />
  <Hero />

  <div class="w-full h-[500px] flex justify-center items-center">
    <filter-form></filter-form>
  </div>

  <services></services>
  <offer></offer>
  <our-clients></our-clients>
  <!-- <footer-vue/> -->
</template>
<script setup>
import Hero from "./Hero";
import Services from "./Services";
import Offer from "./Offer.vue";
import OurClients from "./OurClients.vue";
</script>
