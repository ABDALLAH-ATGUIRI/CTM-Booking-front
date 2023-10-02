<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div
      class="lg:w-2/5 w-5/6 flex flex-col text-black justify-center items-center"
    >
      <span :class="styles.sectionSubText">Best Service</span>
      <h1 :class="styles.sectionHeadText">
        Explore our Top Deal From Top Rated Dealers
      </h1>
    </div>
    <div class="w-3/5 flex gap-4 justify-evenly py-8">
      <el-button
        v-for="(item, i) in brands"
        :key="i"
        size="large"
        class="!w-full !text-black"
      >
        <template #icon>
          <div class="!h-24">
            <img :src="item.logo" alt="brands car" class="w-full h-full" />
          </div>
        </template>
        {{ item.name }}
      </el-button>
    </div>
    <div class="w-full grid grid-cols-4 gap-6 p-6 justify-center items-center">
      <card v-for="(item, i) in 4" :key="i"></card>
    </div>
  </div>
</template>
<script setup>
import { styles } from "@/utils/styles.js";
import { brands } from "@/constants";
import Card from "@/components/Card";
</script>
