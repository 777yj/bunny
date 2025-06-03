import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout"
const loading = ref(false)
export const useCategoryStore = defineStore('category', () => {
  const categoryList=ref([])
const getCategory=async()=>{
  loading.value=true
const res=await getCategoryAPI()
// console.log(res)

categoryList.value=res.result
  loading.value = false

}
return {
    categoryList,
    getCategory
}
})
