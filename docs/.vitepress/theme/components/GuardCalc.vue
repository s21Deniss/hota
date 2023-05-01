<script setup>
import { ref,computed,onMounted  } from 'vue'

import monsterData from '../../../public/monsters.json'

const data = ref(null)


onMounted(() => {
console.log(monsterData)
console.log('mounted')
})
</script>

<template>

  <div>
    <div class="text-gray-700">
        <!-- {{data}} -->
        <!-- Component Start -->
        <!-- Component End  -->
    </div>

  </div>
</template>

<style scoped>


</style>
