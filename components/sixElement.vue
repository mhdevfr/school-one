<template>
  <div id="back">
    <div
      id="cart"
      class="h-auto w-auto bg-gray-400 rounded-md p-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-[0px_0px_10px_1px_#f7fafc] border-gray-100 flex items-center justify-center"
    >
      <Icon name="skill-icons:tailwindcss-light" class="lg:size-12 size-8" />
    </div>
  </div>
</template>

<script lang="ts"></script>
<style lang="css" scoped>
#back {
  perspective: 1000px;
  transform-style: preserve-3d;
  position: absolute;
}

#cart {
  transform-style: preserve-3d;
}
</style>
