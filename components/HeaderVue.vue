<template>
  <nav
    :class="`w-full  z-40 ${
      scrolled ? '!bg-gray-800 !fixed' : 'bg-transparent block'
    }`"
  >
    <el-menu
      :class="`!w-full !py-2 !px-8 [&_.is-active]:!border-red-500`"
      mode="horizontal"
      active-text-color="none"
      background-color="#191919"
      :ellipsis="false"
      :collapse="true"
      menu-trigger="click"
    >
      <el-menu-item index="100" >
        <el-link
          class="h-full !text-red-500 !text-xl !font-extrabold mt-3"
          href="/"
          :underline="false"
        >
          Logo
        </el-link>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item
        v-for="nav in navLinks"
        :key="nav.id"
        :index="nav.id"
        class="!bg-transparent !hidden lg:!block"
      >
        <el-link
          class="!text-md !text-white"
          :href="`#${nav.id}`"
          :underline="false"
        >
          {{ nav.title }}
        </el-link>
      </el-menu-item>

      <el-sub-menu
        index="200"
        :expand-close-icon="Menu"
        class="!bg-transparent lg:!hidden !block [&_*]:!p-0"
      >
        <template #title>
          <el-icon :size="60"><Menu color="white" /></el-icon>
        </template>
        <el-menu-item
          v-for="nav in navLinks"
          :key="nav.id"
          :index="nav.id"
          class="!bg-gray-600 !w-full lg:!hidden !block"
        >
          <el-link
            class="!text-md !text-white"
            :href="`#${nav.id}`"
            :underline="false"
          >
            {{ nav.title }}
          </el-link></el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </nav>
</template>

<script setup>
import logo from "@/assets/img/logo.png";
import { Menu } from "@element-plus/icons-vue";

const scrolled = ref(false);
const navLinks = reactive([
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About Us"
  },
  {
    id: "inventory",
    title: "Inventory"
  },
  {
    id: "contact",
    title: "Contact Us"
  },
  {
    id: "service",
    title: "Service"
  },
  {
    id: "pages",
    title: "Pages"
  }
]);

const handleScroll = computed(() => {
  const scrollTop = window.scrollY;
  console.log(scrollTop);
  scrollTop > 100 ? (scrolled.value = true) : (scrolled.value = false);
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
