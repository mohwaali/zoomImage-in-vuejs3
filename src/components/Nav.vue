<template>
 
<div id="navBorger" class="nav">
   <div>
    <router-link to="/">
        <div id="logo">
        
            <img 
              alt="Vue logo"
              src="../assets/logo2.png"
            />
          </div>
       </router-link>
   
   </div>
   <div> <span class="icon fa-2x" @click="nav_borger_hide__click"> <fa icon="bars"></fa> </span></div>
</div>

<div id="nav" :class="{'nav-borger-hide' : nav_borger_hide }">

      <router-link to="/" >
        <div v-if="nav_borger_hide" id="logo">
        
            <img 
              alt="Vue logo"
              src="../assets/logo2.png"
            />
          </div>
       </router-link>
    <div class="nav-menu">
    
       <router-link to="/">Home</router-link>  
       <router-link to="/about">About</router-link>
       <router-link to="/products">products</router-link>
    </div>



    <div>
         <div  class="hero__search__form">
                            <form action="#" class="hero-search-form">
                                <div @click="hero__search__down__click" class="hero__search__categories">
                                     
                                     All  
                                     <fa v-if="!hero__search__down" icon="chevron-down"></fa>
                                     <fa v-if="hero__search__down" icon="chevron-up"></fa>
                                  
 
                                </div>
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn is-primary ">
                                 <span class="icon fa-lg"> <fa icon="search"></fa> </span>
                                </button>
                            </form>


                 <div v-if="hero__search__down" class="hero__search__down">
                 sdsds
                 </div>

        </div>

                        
    
    </div>


    
          <div class="header__cart">
                        <ul> 
                        
                        <li><a href="#"><fa icon="user"></fa>  </a></li>
                                <!--li><a href="#"><fa icon="bell"></fa> <span>3</span></a></li-->
                            <li><a href="#"><fa icon="heart"></fa> <span>1</span></a></li>
                            <li><a href="#"><fa icon="shopping-bag"></fa> <span>3</span></a></li>
                             <li><a href="#"><fa icon="language"></fa> <span>en</span></a></li>
                            
                             
                        </ul>
                        <!--div class="header__cart__price">item: <span>$150.00</span></div-->
            </div>
    
     
   
</div>


</template>

<script>
 
import { ref , onMounted } from 'vue'
export default {
    name :"nave",

    setup(){
        const nav_borger_hide    = ref(true)
        const hero__search__down = ref(false);
        const nav_borger_hide__click = () => {
              nav_borger_hide.value = nav_borger_hide.value ? false : true ;
        };
        const hero__search__down__click = () => {
            hero__search__down.value = hero__search__down.value ? false : true ;
        }
   onMounted(() => {
     
     logoLoadtoggle();
 
    });
 
const logoLoadtoggle = () => {


console.log("monted");

}
 


        return{hero__search__down , hero__search__down__click,logoLoadtoggle , nav_borger_hide,nav_borger_hide__click }
    }
    
}
</script>
<style lang="scss">
.hero__search__down {
    position: absolute;
    top: 0px;
    left: 0px;
    background: white;
    width: 100%;
    border: 1px dotted #dedddd;
    height: 100%;
    min-height: 200px;
    z-index: 1000;
    margin-top: 60px;
    padding: 5px 20px;
}

.hero-search-form{
  display: flex;
}

.hero__search__form form button {
    position: relative !important;
    /* right: 0; */
    /* top: -1px; */
    height: 50px;
}
.hero__search__form form .hero__search__categories {
   
    padding-inline-start: 18px !important;
    cursor:pointer;
}
.hero__search__form form input { 
    padding: 0 20px !important;
}

.header__cart .header__cart__price {
    font-size: 14px;
    color: #6f6f6f;
    display: inline-block;
}
    .header__cart {
   
    padding: 0px 0;
    text-align: end;
    
}

.header__cart ul {
    display: inline-block;
       margin-inline-end: 25px;
}.header__cart ul li {
    list-style: none;
    display: inline-block;
    margin-inline-end: 15px;
}.header__cart ul li a {
    position: relative;
}
.header__cart ul li a svg {
    font-size: 18px;
    color: #1c1c1c;
}
.header__cart ul li a span {
    height: 13px;
    width: 13px;
    background: #7fad39;
    font-size: 10px;
    color: #ffffff;
    line-height: 13px;
    text-align: center;
    font-weight: 700;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -12px;
}
 
#navBorger{
    display: none !important; 
    padding: 10px 10px;
    border-bottom: 1px solid #e7ebeb;
}

@media  only screen and (max-width:676px) {
  #nav {
    
    flex-direction: column;
    align-content: flex-start !important;
    align-items: stretch !important;
    gap: 20px;
    width: 80%;
    position: absolute;
    z-index: 10;
    background: white;
    left: 0px;
    top: 62px;
   
}
#navBorger{
 display: flex !important;
}
.nav-borger-hide{
   display:none!important;
}
.nav-menu {
    display: flex;
    flex-direction: column;
     
}
.nav-menu a { 

    border-block-end: 1px solid #ebe8e8;   
    padding: 10px 0;
}
.header__cart {
    text-align: start !important;
   
}
}
</style>