<script lang="ts" setup>

import { ref } from 'vue'

// define

defineProps<{
  icon?: any
  button?: string
  label?: string
  items?: any[]
}>()

const count = ref(1)

const engravings = {
  "Grudge" : {
    "Additive" : 0,
    "Multiplicative": 20
  },
  "Ambush Master" : {
    "Additive" : 0,
    "Multiplicative": 20
  },
  "Raid Captain " : {
    "Additive" : 0,
    "Multiplicative": 18
  },
  "Barricade" : {
    "Additive" : 0,
    "Multiplicative": 16
  },
  "Stabilized Status" : {
    "Additive" : 0,
    "Multiplicative": 16
  },
  "Hit Master" : {
    "Additive" : 0,
    "Multiplicative": 16
  },
  "Master Brawler" : {
    "Additive" : 0,
    "Multiplicative": 25
  },
  "Super Charge " : {
    "Additive" : 0,
    "Multiplicative": 20
  },
  "Disrespect" : {
    "Additive" : 0,
    "Multiplicative": 36
  },
  "Master's Tenacity" : {
    "Additive" : 0,
    "Multiplicative": 16
  },
  "All-out Attack" : {
    "Additive" : 0,
    "Multiplicative": 20
  },
  "Sight Focus" : {
    "Additive" : 0,
    "Multiplicative": 25
  },
  "Propulsion" : {
    "Additive" : 0,
    "Multiplicative": 16
  },
  "Adrenaline" : {
    "Additive" : 6,
    "Multiplicative": 0
  },
  "Cursed doll " : {
    "Additive" : 16,
    "Multiplicative": 0
  },
  "Mass Increase" : {
    "Additive" : 0,
    "Multiplicative": 18
  }
}

// Attack Power * [additive attack power engravings] * [multiplicative engravings] * [external damage bonuses] * [tripods]
function calcPower(ap:number, engravings:{},gemLevel:number, set:string, tripod:number) {

// [additive attack power engravings]

  const aeb = 1

// [multiplicative engravings]
  const meb = 1
// [external damage bonuses]
  const edb  = 1

  return ap * aeb * meb * edb * tripod

}

let x: string | number = 1

const el = ref<HTMLElement>()

</script>

<template>

<pre>
 {{ engravings }}
</pre>


<br />

<div class="flex justify-left">
    <input
      type="number"
      class="form-control text-base rounded-md border-2 border-solid border-rose-600
      "
      id="ap"
      placeholder="Attack Power"
    />
    
    <strong>*</strong>
    <input
      type="number"
      class="form-control text-base rounded-md border-2 border-solid border-rose-600
      "
      id="engravings"
      placeholder="Engravings"
    /><strong>*</strong>
    <input
      type="number"
      class="form-control text-base rounded-md border-2 border-solid border-rose-600
      "
      id="ed"
      placeholder="External damage"
    /><strong>*</strong>
    <input
      type="number"
      class="form-control text-base rounded-md border-2 border-solid border-rose-600
      "
      id="tripod"
      placeholder="Tripod"
    />
    
<br />

<pre>
(ap:number, engravings:{},gemLevel:number, set:string, tripod:number)

Total : {{ calcPower(1,{},1,'salvation',1) }}

</pre>

</div>

</template>

<style scoped>

</style>