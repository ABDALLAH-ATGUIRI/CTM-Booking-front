<template>
  <el-card class="!grid-content">
    <div
      class="h-40 bg-cover bg-position-center w-full bg-stone-300 rounded-md"
    >
      <img :src="cars.bmw08" class="w-full h-full" />
    </div>

    <div class="p-2 h-2/3 text-stone-600">
      <div class="flex items-center text-sm gap-1">
        <el-icon size="20" color="#ff5c3d"><StarFilled /></el-icon>
        <span>4.7</span>
        <span>(+50 Review)</span>
      </div>
      <div
        class="h-32 w-full text-xs grid grid-cols-2 justify-center items-center font-bold py-2"
      >
        <div class="flex justify center items-center text-bold gap-2">
          <el-icon size="20" color="#ff5c3d">
            <template #default>
              <img :src="icons.users" alt="speed icon" class="w-full h-full" />
            </template>
          </el-icon>
          <span>4 passangers</span>
        </div>
        <div class="flex justify center items-center text-bold gap-2">
          <el-icon size="20" color="#ff5c3d">
            <template #default>
              <img :src="icons.speed" alt="speed icon" class="w-full h-full" />
            </template>
          </el-icon>
          <span>2 doors</span>
        </div>
        <div class="flex justify center items-center text-bold gap-2">
          <el-icon size="20" color="#ff5c3d">
            <template #default>
              <img :src="icons.speed" alt="speed icon" class="w-full h-full" />
            </template>
          </el-icon>
          <span>Air conditioning</span>
        </div>
        <div class="flex justify center items-center text-bold gap-2">
          <el-icon size="20" color="#ff5c3d">
            <template #default>
              <img :src="icons.fuel" alt="speed icon" class="w-full h-full" />
            </template>
          </el-icon>
          <span>Manual</span>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span class="font-bold text-xl">$200/day</span>
        <el-button type="danger" class="button !px-2">Operating</el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { cars, icons } from "@/assets/img";
import { StarFilled } from "@element-plus/icons-vue";
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
