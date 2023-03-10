<template>
    <div class="entry-list-container">
        <div class="px-2">
            <input 
            class="form-control my-3"
            placeholder="Buscar entrada"
            type="text" name="" id="">
        </div>
        <div class="entry-scrollarea">
            <h2
            v-for="item in 100"
            :key="item"
            >
            <MyEntry/>    
        </h2>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default{
    components:{
        MyEntry: defineAsyncComponent(()=>import('./MyEntry.vue'))
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
       height: calc(100vh - 110px); 
       overflow: scroll;
    }
    input{
        height: 50px;
    }
</style>