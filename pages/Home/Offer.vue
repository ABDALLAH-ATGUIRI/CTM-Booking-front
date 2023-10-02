<template>
  <div class="w-full min-h-screen flex flex-col items-center">
    <section-head
      title="Best Offers"
      subtitle=" We Offer best experience with our rental deals"
    ></section-head>
    <div
      class="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-2 md:p-0"
    >
      <div class="lg:w-4/5 xl:w-3/5 w-full bg-cover position-center">
        <img :src="cars.bmw03" class="w-full h-full" />
      </div>

      <div
        class=" item-end flex flex-col justify-evenly gap-4 lg:gap-10 pr-12"
      >
        <div
          v-for="(item, i) in offer"
          :key="i"
          class="flex gap-4 items-center"
        >
          <span
            class="bg-red-400 rounded-sm p-3 flex items-center justify-center text-white"
          >
            <i
              class="w-6 h-6 bg-cover position-center text-white"
              :style="{ 'background-image': `url(${item.icon})` }"
            ></i>
          </span>
          <div>
            <h4 class="font-bold md:text-2xl">{{ item.title }}</h4>
            <p class="text-md">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { cars } from "@/assets/img";
import { offer } from "~/constants";
</script>
