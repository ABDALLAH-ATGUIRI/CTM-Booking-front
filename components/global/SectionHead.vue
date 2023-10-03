<template>
  <div
    :class="`lg:w-3/5 w-full lg:m-0 sm:!m-6 flex flex-col justify-center gap-3 ${textAlign}`"
  >
    <span
      class="!font-['Roboto'] front-bold text-gray-500 md:text-xl text-lg text-secondary uppercase tracking-wider text-xl font-medium"
    >
      {{ title }}
    </span>
    <h1
      :class="`font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl leading-tight ${textColor}`"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  title: { type: String },
  subtitle: { type: String },
  alignText: {
    type: String,
    default: "center",
    num: ["start", "center", "end"]
  },
  color: { type: String, default: "white" }
});

const textAlign = computed(() => ["text", props.alignText].join("-"));

const textColor = computed(() => ["text", props.color].join("-"));
</script>
