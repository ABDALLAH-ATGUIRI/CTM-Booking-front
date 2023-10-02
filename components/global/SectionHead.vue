<template>
  <div
    class="lg:w-3/5 w-5/6 lg:m-0 sm:!m-6 flex flex-col text-black justify-center items-center"
  >
    <span
      class="!font-['Roboto'] front-bold text-gray-500 md:text-xl text-lg text-secondary uppercase tracking-wider text-xl font-medium"
    >
      {{ title }}
    </span>
    <h1
      class="text-black font-bold text-center md:text-4xl sm:text-3xl xs:text-2xl text-xl leading-tight"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  subtitle: String
});
</script>
