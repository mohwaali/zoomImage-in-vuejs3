<template>
  <Nav/>
  <div class="about">
    <ZoomDesktop/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import ZoomDesktop from '@/components/zoomDesktop.vue'
export default {
  name:"about",
  components:{Nav,ZoomDesktop}
}
</script>
