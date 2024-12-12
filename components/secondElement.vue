<template>
    <div id="back">
      <div
        id="cart"
        class="h-auto shadow-[0px_0px_10px_1px_#f7fafc] w-auto bg-gray-400 p-1 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60  border-gray-100 flex justify-center items-center">
        <Icon name="devicon:supabase" class="lg:size-12 size-8"  />
      </div>
    </div>
  </template>
  
  <script lang="ts"></script>
  <style lang="css" scoped>
  #back {
    perspective: 1000px;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
  }
  
  #cart {
    transform-style: preserve-3d;
  }
  </style>
  ;
  