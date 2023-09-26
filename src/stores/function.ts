import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFuncStore = defineStore('cart', () => {
    // const doubleCount = computed(() => count.value * 2);
    // function increment() {
    //     count.value++;
    // }
    const prodspace = ref([]);
    const addPro = (prods) => {
      prodspace.value.push(prods);
    }
    const deletePro = (prods) => {
      console.log(prods,'111')
      console.log(prodspace.value,'aaa')
      prodspace.value = prodspace.value.filter((a) =>a != prods)
      console.log(prodspace.value,'bbb')
    }

    return { prodspace, addPro, deletePro };
});
