<template>
    <div
      class=" lg:w-1/4  w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-[0px_0px_3px_0px_#f7fafc] h-2/3 flex justify-center items-center rounded-xl"
    >
      <div class="flex justify-center items-center pb-1">
        <div
          class="w-full h-full flex justify-center items-center rounded-2xl"
        >
          <div
            class="w-96 h-96 text-center flex flex-col text-gray-100 items-center rounded-md"
          >
          <h1 class="text-2xl brico-800 text-center lg:text-4xl my-4 text-gray-950 dark:text-gray-50">
              👋 
              <span class="">Bienvenue</span>
            </h1>

            <input
              type="email"
              v-model="email"
              class="brico-200 px-4 py-2 p-4 w-3/4 mb-4 border border-gray-300/5 rounded-md text-start outline-none text-gray-950 dark:text-gray-50"
              placeholder="david.joe@gmail.com"
            />
            <input
              type="password"
              v-model="password"
              class="brico-200 px-4 py-2 p-4 w-3/4 mb-4 border border-gray-300/5 rounded-md text-start outline-none text-gray-950 dark:text-gray-50"
              placeholder="your password"
            />
            
  
            <input
              type="submit"
              @click="signIn"
              value="Log in"
              class="bg-green-400 flex my-4 items-center justify-center m-10 px-16 py-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  const client = useSupabaseClient();
  const email = ref("");
  const password = ref("");
  async function signIn() {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
        console.log(error)
    } else {
        // ajouter le toast sale mongole
        navigateTo("/");
    }
  };
  </script>
  