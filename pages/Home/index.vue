<template>
  <div id="vantaRef" class="h-screen">Foreground content here</div>
</template>

<script>
import * as THREE from "three";

export default {
  async mounted() {
    // window is only avaiable on browser
    if (process.browser) {
      window.THREE = THREE;
      const { default: NET } = await import("vanta/dist/vanta.net.min.js");
      NET({
        el: "#vantaRef",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf0135e,
        backgroundColor: 0x0,
        points: 16.0,
        maxDistance: 27.0,
        spacing: 17.0
      });
    }
  }
};
</script>
