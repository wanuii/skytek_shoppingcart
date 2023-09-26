<script setup>
import { ref, computed } from 'vue'
import { useFuncStore } from "@/stores/function.ts"

const funcstore = useFuncStore()

</script>
<template>
      <router-link to="/">
        <button>
        返回商品頁面
        </button>
      </router-link>
  <div class='content'>
  <form @submit.prevent>
    <h1>購物車</h1>
  </form>
     <!-- 使用v-for指令循环渲染电影信息 -->
    <div v-for="(prod, index) in funcstore.prodspace" :key="index">
      <img :src="prod.Images" >
      <div class='detail'>
        <h2>商品名稱 : {{ prod.Title }}</h2>
        <h2>商品價錢 : ${{ prod.Price }}</h2>
        <button class="btn" @click='funcstore.deletePro(prod)'>刪除</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .content{
  width: 100%;
  margin-top: 10vh;
  text-align: center;
  }
  img{
    width: 150px;
    margin-top: 10vh;
  }
  .btn
  {
    width: 100px;
    height: 60px;
  border:0;
  background-color:#003C9D;
  color:#fff;
  border-radius:10px;
  cursor:pointer;}

.btn:hover{
  color:#003C9D;
  background-color:#fff;
  border:2px #003C9D solid;
}
</style>
