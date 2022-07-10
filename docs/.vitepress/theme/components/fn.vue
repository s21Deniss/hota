<script setup>
import { computed } from 'vue'

// x,y
const patterns = [
  {
    correct: [0,-4],
    fake: [
      [-4,-4],
      [4,-4],
      [-4,4],
      [4,4]
    ]
  },
  {
    correct: [4, 4],
    fake: [
      [-4,-4],
      [4,-4],
      [-4,4],
      [0,-4]
    ]
  },
  {
    correct: [4, 4],
    fake: [
      [-4,-4],
      [4,-4],
      [4,0],
      [0,4]
    ]
  },
  {
    //x,y
    correct: [-4, 0],
    fake: [
      [-4,-4],
      [0,-4],
      [4,4],
      [0,4]
    ]
  },
  {
    //x,y
    correct: [-4, -4],
    fake: [
      [-4,0],
      [0,-4],
      [4,0],
      [0,4]
    ]
  },
  {
    //x,y
    correct: [0, 4],
    fake: [
      [-4,-4],
      [4,-4],
      [4,4],
      [-4,4]
    ]
  },
    {
    //x,y
    correct: [-4, 4],
    fake: [
      [-4,0],
      [-4,-4],
      [4,0],
      [0,4]
    ]
  },
  {
    // x,y
    // in one is bs 1 (50/50)
    correct: [4, -4],
    fake: [
      [4,0],
      [0,4],
      [-4,0],
      [-4,4]
    ]
  },
  {
    // x,y
    // in one is bs 2 (50/50)
    correct: [4,0],
    fake: [
      [4, -4],
      [0,4],
      [-4,0],
      [-4,4]
    ]
  }
]

let currentPattern = [
  {
    // x,y
    // in one is bs 2 (50/50)
    correct: [4,0],
    fake: [
      [4, -4],
      [0,4],
      [-4,0],
      [-4,4]
    ]
  }
]


// const pickme = computed(() => [
//   props.size ?? 'medium',
//   props.theme ?? 'brand'
// ])

const select = (obj, event) => {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  selectPattern()
  console.log(obj)
  console.log(currentPattern)
  // alert(message)
}

function selectPattern () {
  currentPattern = patterns[Math.floor(Math.random()*patterns.length)]
  console.log(currentPattern)
}

// selectPattern()
console.log(patterns)
console.log(currentPattern)
</script>

<template>

  <div class="flex h-screen items-center justify-left overflow-hidden">
      <!-- <div class="axis" id="axis_x2-5" style="--c: 10; --cx: 5; --cy: 5;">
        <div class="dot" style="--x: 0;--y:-4; --dcolor: red; --dsize: 15;"></div>
        <div class="dot" style="--x: -4;--y:-4;"></div>
        <div class="dot" style="--x: 4;--y:-4;"></div>
        <div class="dot" style="--x: -4;--y:4;"></div>
        <div class="dot" style="--x: 4;--y:4;"></div>
      </div> -->
      <div class="axis" id="axis_x2-5" style="--c: 10; --cx: 5; --cy: 5;" v-for="item in currentPattern" :key="item">
          <div @click="(event) => select('correct', event)" class="dot" style="--dcolor: red; --dsize: 15;" :style="{'--x':item.correct[0], '--y':item.correct[1]}"></div>
          <div @click="(event) => select('fake', event)" class="dot" :style="{'--x':item.fake[0][0], '--y':item.fake[0][1]}"></div>
          <div @click="(event) => select('fake', event)" class="dot" :style="{'--x':item.fake[1][0], '--y':item.fake[1][1]}"></div>
          <div @click="(event) => select('fake', event)" class="dot" :style="{'--x':item.fake[2][0], '--y':item.fake[2][1]}"></div>
          <div @click="(event) => select('fake', event)" class="dot" :style="{'--x':item.fake[3][0], '--y':item.fake[3][1]}"></div>
      </div>

      <div class="flex justify-right borders-round">
        <button @click="selectPattern()" class="rounded border-solid border-2 bg-teal-600">RAndomize me</button>
      
      <pre>{{ currentPattern }}</pre>
      </div>
  </div>
</template>

<style scoped>
.axis {
  --c: 10;
  --cx: 5;
  --cy: 15;
  --dsize: 20;
  --dcolor: #369;
  --size: 100%;
  position: relative;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
  box-sizing: border-box;
  aspect-ratio: 1/1;
  background-image:
    linear-gradient(#0000 calc(var(--cy) * 100% / var(--c) - 1px), rgba(166, 70, 70, 0.846) 0 calc(var(--cy) * 100% / var(--c) + 1px), transparent 0),
    linear-gradient(to right, #0000 calc(var(--cx) * 100% / var(--c) - 1px), rgba(166, 70, 70, 0.846) 0 calc(var(--cx) * 100% / var(--c) + 1px), transparent 0),
    repeating-linear-gradient(rgba(255, 255, 255, 0.5) 0 0.5px, #0000 0 calc(100% / var(--c) - 0.5px), rgba(255, 255, 255, 0.5) 0 calc(100% / var(--c))),
    repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0 0.5px, #0000 0 calc(100% / var(--c) - 0.5px), rgba(255, 255, 255, 0.5) 0 calc(100% / var(--c)));
}

.axis.no-overflow {
  overflow: hidden;
}

.dot {
  --translationUnit: 100% / var(--c);
  --translationX: var(--translationUnit) * var(--cx);
  --translationY: var(--translationUnit) * var(--cy);
  --y: 10;
  width: calc(var(--dsize) * 1px);
  height: calc(var(--dsize) * 1px);
  background: var(--dcolor);
  /* border-radius: 50%; */
  position: absolute;
  transform: translate(-50%, -50%);
  left: calc(var(--translationX) + var(--x) * var(--translationUnit));
  top: calc(var(--translationY) + var(--y) * var(--translationUnit));
  /* top: var(--y); */
}

/* Demo functions */
#axis_x2-5 {
  --size: 700px;
}

#axis_x2-5 .dot {
  /* --function: calc(var(--x) * var(--x) - 5); */
  --function:: var(--x)
  /**
   * f(x) = x^2 - 5
   *        x^2 = var(--x) * var(--x)
   */
}
</style>
