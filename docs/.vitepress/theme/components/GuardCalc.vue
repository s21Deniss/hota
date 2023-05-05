<script setup>
import { ref,computed,onMounted  } from 'vue'

// import monsterData from './resources/monsters.json'

// const data = ref(null)
// // const mobData = JSON.parse(monsterData)

// onMounted(() => {
// console.log(monsterData)
// console.log('mounted')
//})

const data = ref(null);

async function loadMonsters() {

let options = {
  // mode: 'no-cors',
  method:'GET',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
}
// Fake api for making post requests
let fetchRes = fetch("/monsters.json",options)
fetchRes.then(res =>
    res.json()).then(d => {
        data.value = d;
    })
}


onMounted(() => {
console.log('mounted'),
loadMonsters()
console.log(data)
})

</script>

<template>

  <div>
    <div class="text-gray-700">
      <pre>{{ data }}</pre>
        <!-- {{data}} -->
        <!-- Component Start -->
        <!-- Component End  -->
    </div>

  </div>
</template>

<style scoped>


</style>
