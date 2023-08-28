<template>
  <nav
    :class="`${scrolled ? 'bg-primary' : 'bg-transparent'} ${
      styles.paddingX
    } w-full flex justify-between items-center py-4 fixed top-0 z-20`"
  >
    <div class="w-full flex justify-between items-center mx-auto">
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        @click="
          setActive('');
          Window.scrollTo(0, 0);
        "
      >
        <p class="text-white text-2xl font-bold cursor-pointer flex">
          LOGO &nbsp;<span class="sm:block hidden"></span>
        </p>
      </NuxtLink>

      <ul class="list-none hidden md:flex flex-row gap-10 items-center">
        <li
          v-for="nav in navLinks"
          :key="nav.id"
          class="hover:text-white text-[18px] font-medium cursor-pointer"
          @click="setActive(nav.title)"
        >
          <el-link
            :type="active === nav.title ? '' : 'primary'"
            :href="`#${nav.id}`"
            >{{ nav.title }}</el-link
          >
        </li>
      </ul>

      <div class="md:hidden flex justify-end items-center">
        <el-icon
          alt="menu"
          class="w-[28px] h-[28px] object-contain"
          @click="setToggle()"
        >
          <component
            :is="!toggle ? CloseBold : CloseBold"
            :size="20"
          ></component>
        </el-icon>

        <div
          :class="`${!toggle ? 'hidden' : 'flex'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`"
        >
          <ul
            class="list-none flex justify-end items-start flex-1 flex-col gap-4"
          >
            <li
              v-for="nav in navLinks"
              :key="nav.id"
              class="font-poppins font-medium cursor-pointer text-[16px]"
              @click="
                setToggle();
                setActive(nav.title);
              "
            >
              <el-link
                :type="active === nav.title ? '' : 'primary'"
                :href="`#${nav.id}`"
                target="_blank"
                >{{ nav.title }}</el-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { styles } from "../utils/styles.js";
import { CloseBold } from "@element-plus/icons-vue";

const active = ref("");
const toggle = ref(false);
const scrolled = ref(false);
const navLinks = reactive([
  {
    id: "about",
    title: "About"
  },
  {
    id: "resume",
    title: "Resume"
  },
  {
    id: "services",
    title: "Services"
  },
  {
    id: "works",
    title: "Works"
  },
  {
    id: "contact",
    title: "Contact"
  }
]);

const handleScroll = computed(() => {
  const scrollTop = window.scrollY;
  scrollTop > 100 ? (scrolled.value = true) : (scrolled.value = false);
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleScroll);
});

const setActive = computed((nav) => (active.value = nav));

const setToggle = computed(() => (toggle.value = !toggle.value));
</script>
