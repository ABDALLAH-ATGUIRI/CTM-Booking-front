<template>
  <el-form
    :inline="true"
    :model="formInline"
    class="w-5/6 shadow-2xl gap-2 p-6 rounded-lg font-bold flex lg:flex-nowrap justify-center flex-wrap [&_.el-form-item]:sm:!w-2/5 [&_.el-form-item]:min-w-[120px]"
    size="large"
  >
    <el-form-item class="!w-full">
      <template #label>
        <el-icon :size="26" class="self-center"><Location /></el-icon>
      </template>
      <el-select
        v-model="value"
        filterable
        placeholder="Location"
        class="!w-full"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item class="!w-full">
      <template #label>
        <el-icon :size="26" class="self-center"><Calendar /></el-icon>
      </template>
      <el-date-picker
        v-model="formInline.date"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        class="!w-full"
        :shortcuts="shortcuts"
      />
    </el-form-item>

    <el-form-item class="!w-full">
      <el-button type="danger" @click="onSubmit" class="!w-full"
        >Search</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";

const value = ref("");
const options = reactive([
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
]);
const formInline = reactive({
  user: "",
  region: "",
  date: ""
});
const shortcuts = reactive([
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    }
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    }
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    }
  }
]);
const onSubmit = () => {
  console.log("submit!");
};
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
</style>
