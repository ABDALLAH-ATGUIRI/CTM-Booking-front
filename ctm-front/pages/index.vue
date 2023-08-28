<template>
  <div class="relative bg-gray-900 w-full h-screen">
    <navbar />

    <div
      id="default-carousel"
      class="relative w-full h-full"
      data-carousel="slide"
    >
      <div class="relative flex flex-1 overflow-hidden rounded-lg md:h-full">
        <div class="duration-700 ease-in-out w-screen" data-carousel-item>
          <el-image
            ref="backgroundImg"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :src="introBackground"
            lazy
          ></el-image>
        </div>
      </div>

      <!-- Slider controls -->
      <div
        class="absolute top-0 bottom-0 w-full flex justify-between items-center"
      >
        <el-button
          :icon="ArrowLeftBold"
          @click="onPrev"
          class="px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          circle
        ></el-button>

        <el-button
          :icon="ArrowRightBold"
          @click="onNext"
          class="px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          circle
        ></el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "~/components/Navbar.vue";
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";

const items = reactive([
  {
    url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
  },
  {
    url: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
  }
]);

const introBackground = ref(items[0].url);

const onNext = () => {
  const index = items.findIndex(({ url }) => url == introBackground.value);
  const nextActive = items.length - 1 > index ? index + 1 : 0;
  introBackground.value = items[nextActive].url;
};

const onPrev = () => {
  const index = items.findIndex(({ url }) => url == introBackground.value);
  const prevActive = 0 > index ? index - 1 : items.length - 1;
  introBackground.value = items[prevActive].url;
};

const onChange = (index) => {
  console.log("new slider item has been shown " + index);
};
</script>

<style scoped>
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>
