<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from '@/stores/categoryStore'
import {onMounted} from 'vue'

const categoryStore=useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>
<template>
      <LayoutFixed></LayoutFixed>
      <LayoutNav></LayoutNav>
      <LayoutHeader></LayoutHeader>
      <RouterView></RouterView>  
      <LayoutFooter />
</template>

