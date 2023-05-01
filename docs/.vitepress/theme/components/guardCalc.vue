<script setup>
import { ref,computed,onMounted  } from 'vue'



const data = ref(null);


onMounted(() => {
console.log('mounted')
})
</script>

<template>

  <div>
    <div class="text-gray-700">
        <!-- {{data}} -->
        <!-- Component Start -->
        <!-- Component End  -->
        <pre>{{data}}</pre>
    </div>

  </div>
</template>

<style scoped>


</style>
