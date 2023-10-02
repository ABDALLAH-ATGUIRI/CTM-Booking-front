<template>
  <div class="w-full">
    <navbar />
    <Hero />

    <div class="w-full h-[500px] flex justify-center items-center">
      <filter-form></filter-form>
    </div>

    <services></services>
    <offer></offer>
  </div>
</template>
<script setup>
import Navbar from "~/components/Navbar.vue";
import Hero from "./Hero";
import Services from "./Services";
import Offer from "./Offer.vue";
</script>
