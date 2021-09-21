<template>
  <Nav />

  <div class="home"> 

    <HelloWorld :items="items"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
import {ref} from 'vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,Nav
  },
  setup(){

  const   items = ref([
       {name:"mohamed" , age :45 , deploment: "php ind html css ..."},
       {name:"ali" , age :36 , deploment: "css"},
       {name:"ahmed" , age :43 , deploment: "javascript"},
       {name:"aissa" , age :46 , deploment: "python"},
     ])

  return{items}
  
  }
}
</script>
