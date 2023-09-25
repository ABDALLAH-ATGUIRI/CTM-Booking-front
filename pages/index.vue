<template>
  <div class="relative max-w-screen h-screen">
    <navbar />
    <div class="absolute z-0 w-full h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        class="h-screen w-full"
      >
        <g
          transform="
        rotate(0 960 540) 
        translate(-0 -0)
        scale(1)
      "
        >
          <rect
            width="2090"
            height="1080"
            fill="rgb(31, 19, 19)"
          ></rect>
          <g transform="translate(0, 0)" >
            <path
              fill="rgb(255, 255, 255)"
              fill-opacity="1"
              d="M0,1058.83L53.333,1050.225C106.667,1041.621,213.333,1024.412,320,1021.744C426.667,1019.076,533.333,1030.95,640,1032.285C746.667,1033.62,853.333,1024.417,960,909.549C1066.667,794.682,1173.333,574.15,1280,555.525C1386.667,536.9,1493.333,720.181,1600,664.008C1706.667,607.835,1813.333,312.206,1866.667,164.392L1920,16.578L1920,1080L1866.667,1080C1813.333,1080,1706.667,1080,1600,1080C1493.333,1080,1386.667,1080,1280,1080C1173.333,1080,1066.667,1080,960,1080C853.333,1080,746.667,1080,640,1080C533.333,1080,426.667,1080,320,1080C213.333,1080,106.667,1080,53.333,1080L0,1080Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped>
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>
