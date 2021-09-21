<template>

     <Nav />  
     <Zoomimage /> 

     <Footer/> 

</template>
<script>
import Zoomimage from '@/components/ZoomImage.vue'
import Nav from '@/components/Nav.vue'
 import Footer from '@/components/footer.vue'
import  { ref } from "vue"
export default {
    name:"products",
    components:{
        Zoomimage ,Nav  ,Footer 
    },
    setup() {
        const imoji = ref('mohamed');
        return{imoji}
    }
     
    
}
</script>
<style >
    
</style>