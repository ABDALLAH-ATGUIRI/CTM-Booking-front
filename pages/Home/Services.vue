<template>
  <div class="w-full min-h-screen flex flex-col items-center mb-20">
    <section-head
      title="Best Services"
      subtitle="Explore our Top Deal From Top Rated Dealers"
      color="black"
    ></section-head>

    <div class="w-5/6 py-14 flex gap-6">
      <div
        class="flex gap-2 justify-evenly scroll-smooth min-w-96 hover:scroll-auto"
      >
        <el-button
          v-for="(item, i) in brands"
          :key="i"
          size="large"
          class="!w-full"
        >
          <div class="w-full flex gap-2 items-center text-md">
            <span
              class="!w-12 !h-8 bg-cover position-center"
              :style="{ 'background-image': `url(${item.logo})` }"
            ></span>
            {{ item.name }}
          </div>
        </el-button>
      </div>

      <el-button type="danger" class="!h-full !text-white !px-4">
        +20 Explore <el-icon class="ml-2"><DArrowRight /></el-icon>
      </el-button>
    </div>
    <div
      class="w-11/12 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center items-center"
    >
      <card v-for="(item, i) in 5" :key="i"></card>
    </div>
  </div>
</template>
<script setup>
import { DArrowRight } from "@element-plus/icons-vue";
import { brands } from "@/constants";
import Card from "@/components/Card";
</script>
