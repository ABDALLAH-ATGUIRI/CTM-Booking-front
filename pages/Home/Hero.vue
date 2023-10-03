<template>
  <div
    class="relative h-full flex lg:flex-row flex-col-reverse justify-end items-start min-h-screen"
  >
    <div
      class="absolute w-full -z-40 lg:h-[90%] h-[70%] bg-gradient-to-b from-neutral-900 to-neutral-700"
    ></div>
    <div
      class="lg:absolute -z-10 w-full flex lg:flex-row flex-col justify-center lg:-left-40 -bottom-28"
    >
      <img class="w-full" src="~/assets/img/cars/herocar.webp" alt="car" />
      <div
        class="lg:w-1/3 flex items-center justify-around [&_.el-progress-circle]:!w-full [&_.el-progress]:!min-w-[100px] [&_.el-progress]:!max-w-[160px] [&_.el-progress]:!w-1/4"
      >
        <el-progress
          v-for="(item, i) in carEngineInfo"
          :key="i"
          type="dashboard"
          :percentage="percentage"
          :stroke-width="3"
          color="red"
        >
          <template #default>
            <div class="flex flex-col gap-2 lg:text-white text-[15px]">
              <span class="text-2xl font-bold italic">{{ item.power }}</span>
              <span class="">{{ item.unit }}</span>
              <span class="">{{ item.name }}</span>
            </div>
          </template>
        </el-progress>
      </div>
    </div>

    <div
      class="right-0 w-full h-full xl:w-2/3 p-8 mt-16 flex flex-col items-center text-center whitespace-normal"
    >
      <h1
        class="!font-['Roboto'] font-bold text-white md:text-6xl sm:text-4xl text-3xl md:!leading-[100px] sm:!leading-[60px] mt-2"
      >
        Fast And Easy Way To Rent <br /><span
          :class="styles.heroHeadText + ' bg-red-600 px-4'"
          >A Branded</span
        >
        Car
      </h1>
      <p
        class="font-light text-white lg:text-2xl md:text-xl xs:text-lg text-md lg:leading-[40px] lg:w-2/3"
      >
        Discover RentalX car rentai options in USA with rent a car Select from a
        range of car options and local specials.
      </p>

      <store-buttons></store-buttons>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const percentage = ref(0);
const carEngineInfo = reactive([
  {
    power: 222,
    unit: "KU/H",
    name: "TOP SPED"
  },
  {
    power: 92,
    unit: "c",
    name: "ENGINE TEMP"
  },
  {
    power: 65,
    unit: "HP",
    name: "POWER CAR"
  }
]);

onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 10;
  }, 500);
});
</script>
