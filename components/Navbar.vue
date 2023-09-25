<template>
  <nav
    :class="`${
      scrolled ? 'bg-primary' : 'bg-transparent'
    } w-full flex flex-col justify-center items-center py-4 fixed top-0 z-20`"
  >
    <div :class="`w-full text-white flex justify-around`">
      <ul
        v-for="item in contacts"
        :key="item.id"
        class="w-1/2 flex justify-evenly list-none"
      >
        <li v-for="nav in item" :key="nav.id" @click="setActive(nav.title)">
          <el-link
            class="!text-gray-400 w-44 !text-[16px]"
            :type="active === nav.title ? 'danger' : ''"
            :href="`#${nav.id}`"
            :underline="false"
          >
            <el-icon><component color="red" :is="nav.icon" /></el-icon>
            <span class="ml-4"> {{ nav.title }} </span>
          </el-link>
        </li>
        <el-timeline class="absolute w-[0.5px] h-1/4 bg-gray-500"></el-timeline>
      </ul>
    </div>
    <!-- START LOGO -->
    <div
      class="relative w-full flex items-center justify-center text-white font-bold text-center text-xl"
    >
      <el-timeline
        class="absolute -z-40 w-full h-[0.5px] bg-gray-500"
      ></el-timeline>
      <div class="flex items-center justify-center">
        <div
          class="absolute w-48 h-16 bg-gray-500"
          style="
            clip-path: polygon(
              100% 50%,
              75% 93.3%,
              25% 93.3%,
              0% 50%,
              25% 6.7%,
              75% 6.7%,
              100% 50%,
              calc(75% - 1px) calc(6.7% - -1.73px),
              calc(25% - -1px) calc(6.7% - -1.73px),
              calc(0% - -2px) calc(50% - 0px),
              calc(25% - -1px) calc(93.3% - 1.73px),
              calc(75% - 1px) calc(93.3% - 1.73px),
              calc(100% - 2px) calc(50% - 0px),
              calc(75% - 1px) calc(6.7% - -1.73px)
            );
          "
        ></div>
        <NuxtLink
          to="/"
          class="flex items-center justify-center"
          @click="
            setActive('');
            Window.scrollTo(0, 0);
          "
        >
        <div class="absolute z-0 bg-gray-100 p-6 px-12"></div>
        <img :src="logo" alt="logo" class="w-44 z-20"/>
        </NuxtLink>
      </div>
    </div>
    <!-- END LOGO  -->
    <!-- START NAVBAR -->
    <div class="w-full text-white flex justify-around">
      <ul
        v-for="item in navLinks"
        :key="item.id"
        class="w-2/5 flex justify-evenly list-none"
      >
        <li v-for="nav in item" :key="nav.id" @click="setActive(nav.title)">
          <el-link
            class="!text-[18px] !text-white"
            :type="active === nav.title ? 'danger' : ''"
            :href="`#${nav.id}`"
            :underline="false"
          >
            {{ nav.title }}
          </el-link>
        </li>
      </ul>
    </div>
    <!-- END NAVBAR -->
  </nav>

  <!-- <div class="md:hidden flex justify-end items-center">
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
      </div>-->
</template>

<script setup>
import { styles } from "../utils/styles.js";
import logo from "@/assets/img/logo.png"
import {
  LocationInformation,
  Phone,
  Message,
  CirclePlusFilled
} from "@element-plus/icons-vue";

const active = ref("");
const toggle = ref(false);
const scrolled = ref(false);
const navLinks = reactive([
  [
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
    }
  ],
  [
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
  ]
]);
const contacts = reactive([
  [
    {
      id: "location",
      title: "agadir-tarrast",
      icon: LocationInformation
    },
    {
      id: "phone",
      title: "+212 623779270",
      icon: Phone
    }
  ],
  [
    {
      id: "email",
      title: "abdallahatguiri@gmail.com",
      icon: Message
    },
    {
      id: "add",
      title: "Add listing",
      icon: CirclePlusFilled
    }
  ]
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
