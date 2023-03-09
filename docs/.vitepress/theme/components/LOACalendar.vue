<script setup>
import { ref,computed,onMounted  } from 'vue'

const data = ref(null);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();
let month = months[today.getMonth()];
let year = today.getFullYear()
let monthWithZero = ( '0' + (today.getMonth()+1) ).slice( -2 )

async function bynnArkData () {

        let options = {
          // mode: 'no-cors',
          method:'POST',
            headers: {
                'Content-Type':
                    'application/json',
                'accept': 'application/json'
            },
            body: `{"server":"amazon","date":"${year}-${monthWithZero}"}`
        }
        // Fake api for making post requests
        let fetchRes = fetch(
"https://ark-api.bynn.kr/calendar/query",
                                        options);
        fetchRes.then(res =>
            res.json()).then(d => {
                data.value = d;
            })
}


onMounted(() => {
    console.log('mounted'),
    bynnArkData()
})

///  curl 'https://ark-api.bynn.kr/calendar/query'   -H 'accept: application/json'   -H 'cache-control: no-cache'   -H 'content-type: application/json'   --data-raw '{"server":"amazon","date":"2022-07"}'

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

.group:hover .group-hover\:flex {
	display: flex;
}

</style>
