<template>
  <div class="lg:w-3/4 mb-12 w-full h-2/3 rounded-2xl" id="about">
    <div class="flex items-start justify-normal lg:p-10">
      <div class="flex lg:flex-row flex-col-reverse">
        <div class="ml-10 flex flex-col justify-center mr-10">
          <h1 class="text-white lg:text-4xl text-lg font-bold text-400">
            About me.
          </h1>
          <p
            class="text-white lg:text-xl text-sm mt-5 brico-200 first-letter:text-white"
          >
            Currently studying in


            <span
              class="underline underline-offset-2 decoration-blue-400 relative"
              @mouseover="showPopover.leMans = true"
              @mouseleave="showPopover.leMans = false"
            >
              Le Mans, France
              <div
                v-if="showPopover.leMans"
                class="absolute bottom-full left-0 mb-2 p-4 w-64 bg-gray-900 text-gray-50 rounded-lg shadow-md text-base"
                v-motion-pop-visible
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85460.71580509176!2d0.11330077624443372!3d47.98187508421931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e288d214f3aa31%3A0x69025d4c6a7de07f!2sLe%20Mans!5e0!3m2!1sfr!2sfr!4v1726264967117!5m2!1sfr!2sfr"
                  class="w-full mb-5"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                A city in northwestern France, known for its famous 24-hour car
                race.
              </div> </span
            >. I am a front-end web developer and designer. I make
            <span
              class="underline-offset-2 underline decoration-lime-400 relative"
              @mouseover="showPopover.websites = true"
              @mouseleave="showPopover.websites = false"
            >
              websites
              <div
                v-if="showPopover.websites"
                class="absolute z-50 bottom-full left-0 p-4 w-64 bg-gray-900 text-gray-50 rounded-lg shadow-md text-sm lg:text-lg"
                v-motion-pop-visible
              >
                I build responsive and interactive websites using modern
                technologies. Like thoses ones !
                <div class="flex justify-around items-center mt-2">
                  <Icon name="logos:vue" size="32" />
                  <Icon name="logos:nuxt-icon" size="32" />
                  <Icon name="devicon:supabase" size="32" />
                  <Icon name="devicon:typescript" size="32" />
                </div>
              </div>
            </span>
            and web applications with the latest technologies and trends. I'm
            also learning
            <span
              class="underline underline-offset-2 decoration-orange-400 relative"
              @mouseover="showPopover.swift = true"
              @mouseleave="showPopover.swift = false"
            >
              Swift
              <div
                v-if="showPopover.swift"
                class="absolute bottom-full left-0 mb-2 p-4 w-64 bg-gray-900 text-gray-50 rounded-xl shadow-md text-sm lg:text-base"
                v-motion-pop-visible
              >
                <img
                  src="../assets/images/kaizenMobile.png"
                  class="w-32 mx-auto mb-5 rounded-xl"
                />
                I am learning Swift and SwiftUI to improve my skills, I've been
                doing my own iOS application about one of my web App.
              </div>
            </span>
            by making iOS applications for myself. I will be honored to work
            with you on your projects. I am open to any collaboration.
          </p>
          <div
            class="flex w-full mt-5 justify-between flex-row-reverse items-center lg:mr-10"
          >
            <div>
              <a href="https://www.linkedin.com/in/milan-herb%C3%A9-867064299/">
                <Icon name="mdi:linkedin" class="size-10 mx-1" />
              </a>
              <a href="https://github.com/mhdevfr">
                <Icon name="mdi:github" class="size-10 mx-1" />
              </a>
            </div>
            <div class="lg:hidden block">
              <GetInTouch></GetInTouch>
            </div>
          </div>
        </div>
        <div>
          <div
            class="group lg:h-96 w-5/6 h-72 m-8 lg:w-96 [perspective: 1000px]"
          >
            <div
              class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0">
                <img
                  src="../assets/images/milan.jpeg"
                  class="rounded-xl h-full object-cover lg:p-0 shadow-black/40 w-full"
                />
              </div>
              <div
                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div
                  class="flex min-h-full flex-col items-center justify-center"
                >
                  <button
                    class="bg-slate-700 h-12 w-1/3 text-xs mx-auto my-10 rounded-md"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ParallaxParticles class="top-80 right-16 lg:hidden hidden" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPopover = ref({
  leMans: false,
  websites: false,
  swift: false,
});
</script>
