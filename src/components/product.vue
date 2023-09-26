<script setup>
import { ref, onMounted } from 'vue'
import { useFuncStore } from "@/stores/function.ts"
  
const funcstore = useFuncStore()
// ============== 放置查到的資料內容 ==============
const shopprods = ref([])
// =============================================
const onSearch = async () => {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await res.json();
    console.log('==========================');
    console.log(data.slice(0,10));
    // 把查到的資料們丟進"放置查到的資料內容"
    for (let i = 0; i < data.slice(0,10).length; i++) {
    shopprods.value.push({
            Title: data[i].title,
            Price: data[i].price,
            Description: data[i].description,
            Images: data[i].images[0]
          });
    }
  } catch (err) {
    console.log(err);
  }
}
  onMounted(async () => {
  await onSearch(shopprods.value)
})

</script>
<template>
  <router-link to="/cart"><button>購物車</button></router-link>
  <div class='content'>
  <form @submit.prevent>
    <h1>商品一覽表</h1>
  </form>
     <!-- 使用v-for指令循环渲染电影信息 -->
    <div class='shopprods' v-for="(prod, index) in shopprods" :key="index">
      <img :src="prod.Images" >
      <div class='detail'>
        <h2>商品名稱 : {{ prod.Title }}</h2>
        <h2>商品價錢 : ${{ prod.Price }}</h2>   
        <h2>商品介紹 : {{ prod.Description }}</h2>
        <button class="btn" @click='funcstore.addPro(prod)'>加入購物車</button>
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
    width: 200px;
    margin-top: 20px;
    /* position: absolute;
    bottom: 20px; */
  }
.shopprods{
  float:left;
  border-radius: 20px;
  /* width: 30%; */
  /* display: flex; */
  width: 400px;
  height: 550px;
  background-color: white;
  margin-top: 10vh;
  margin-left: 8vh;
  align-items: center;
  padding-left: 20px;
}
.detail{
  text-align: left;
}
  .btn
  {
    position: absolute; 
    right: 20px; 
    width: 100px;
    height: 60px;
  border:0;
  background-color:#003C9D;
  color:#fff;
  border-radius:10px;
  cursor:pointer;}

button:hover{
  color:#003C9D;
  background-color:#fff;
  border:2px #003C9D solid;
}
</style>
