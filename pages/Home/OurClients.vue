<template>
  <div
    class="relative h-full flex flex-col justify-center bg-gradient-to-b from-neutral-900 to-neutral-700 p-4 py-16"
  >
    <section-head
      title="Testimonials"
      subtitle=" Our Client's Reviews & Testimonials"
      :align-text="'start'"
    ></section-head>
    <el-carousel class="lg:h-[500px] md:h-[800px] h-[750px]">
      <el-carousel-item
        v-for="(item, i) in comments"
        :key="i"
        class=" min-h-screen"
      >
        <div
          class="w-full flex flex-col-reverse lg:flex-row items-center justify-start gap-2 md:p-0"
        >
          <div
            class="lg:w-2/5 flex flex-col justify-evenly gap-4 lg:gap-10 text-xs md:text-[18px] text-white pl-6 !leading-6"
          >
            <p class="">
              The majority of our users tell us that readable content distracts
              readers the majority of our users tell us that readable
            </p>
            <p class="italic text-gray-300">“ {{ item.comment }}”</p>
            <div class="flex flex-row-reverse items-center justify-between">
              <el-rate
                v-model="item.rate"
                :score-template="`${item.rate}`"
                disabled
                show-score
                size="large"
                text-color="#ff9900"
              />
              <div class="flex align-center mt-6">
                <el-avatar class="mr-3" :size="45" />
                <div class="flex flex-col">
                  <span>{{ item.user }}</span>
                  <span class="text-sm text-gray-400">developer</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-3/5 w-full">
            <img :src="item.car" class="w-full h-full max-h-[500px]" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import { cars } from "@/assets/img";
import { comments } from "~/constants";
</script>
