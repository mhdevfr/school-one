<script setup lang='ts'>
import { cn } from '@/lib/utils'

interface AnimatedGradientText {
  class?: string
}

const props = defineProps<AnimatedGradientText>()

const className = cn(
  'group relative mx-auto text-gray-50 flex max-w-fit flex-row items-center justify-center rounded-lg bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
  props.class,
)
const isOpen = ref(false)

</script>

<template>
  <button :class="className" label="Open" @click="isOpen = true" v-motion-slide-right>    

    <div
      class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
    />

    <h1 class="flex items-center px-2 justify-around">
        <span>Write to me </span>
        <Icon name="jam:write-f"  class="ml-2 text-gray-50" />
    </h1>
  </button>
<UModal v-model="isOpen" class="z-[200]">
    <div class="p-8 rounded-lg">
        <div class="flex">
            <h1 class="lg:text-4xl text-2xl font-400 mb-4">Get in touch with 
            <span class="underline text-4xl font-400 underline-offset-4 decoration-red-400">me</span>
        </h1>
        </div>
        <hr class="bg-blue-400 mb-2">
        <form class="w-full flex-col flex justify-start">
            <div class="flex items-center w-full">
                <h1 class="lg:text-xl text-sm  texte-400">Hey, my name is</h1>
                <input type="text" maxlength="20" required class="p-2 w-1/2 border-none italic text-400 bg-transparent  outline-none rounded-md" placeholder="type here">
            </div>
            <div class="flex items-center w-full">
                <h1 class="lg:text-xl text-sm text-400">and I want to talk about</h1>
                <select required class="bg-transparent ml-2 italic opacity-70 outline-none">
                    <option value="project">Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="flex items-center">
                <h1 class="lg:text-xl text-sm text-400">Here is my email</h1>
                <input type="email" required class="p-2 w-1/2 border-none bg-transparent italic outline-none rounded-md" placeholder="your email">
            </div>
            <div class="w-full mt-4 flex items-center justify-center">
                <button class="w-full flex items-center justify-center bg-black text-gray-50 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-950 hover:transition-all" type="submit">Send your message
                    <Icon name="tabler:send" class="ml-2" />
                </button>

            </div>
            </form> 
            
        
    </div>
  </UModal>
</template>