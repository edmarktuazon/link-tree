<script setup>
import Audio from "../assets/images/bg-music-loop.wav";
import EdmarkImage from "../assets/images/edmark-img.jpg";

import { reactive, toRefs } from "vue";

const links = reactive({
  name: "Edmark Tuazon",
  github: "github",
  portfolio: "portfolio",
  linkedin: "linkedin",
  facebook: "facebook",
  instagram: "instagram",
  email: "email",
});
const { name, github, portfolio, facebook, linkedin, instagram, email } =
  toRefs(links);
</script>
<!-- https://cdn-animation.artstation.com/p/video_sources/000/445/143/cassatte-animasao.mp4 -->
<!-- https://cdn-animation.artstation.com/p/video_sources/000/569/664/abbiefinal.mp4 -->
<template>
  <section class="h-[100vh] overflow-hidden relative">
    <audio :src="Audio" autoplay loop></audio>
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full z-[-1] object-cover"
    >
      <source
        src="https://cdn-animation.artstation.com/p/video_sources/000/677/693/live-wallpaper-1.mp4"
        type="video/mp4"
      />
    </video>
    <div class="h-[100vh] grid place-items-center">
      <div class="grid place-items-center">
        <figure class="grid place-items-center mt-12">
          <img
            :src="EdmarkImage"
            alt="Edmark Image"
            class="border border-1 border-white rounded-full p-2"
          />
          <figcaption
            class="
              text-white
              w-36
              bg-[#00000085]
              grid
              place-items-center
              mt-5
              rounded-full
              p-1
              text-sm
              border border-1 border-white
            "
          >
            {{ name }}
          </figcaption>
        </figure>
        <!-- links -->
        <div class="mt-8 mb-12 flex flex-col">
          <RouterLink
            to="/github"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[90vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ github }}
          </RouterLink>
          <RouterLink
            to="/portfolio"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[80vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ portfolio }}
          </RouterLink>
          <RouterLink
            to="/linkedin"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[80vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ linkedin }}
          </RouterLink>
          <RouterLink
            to="/facebook"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[80vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ facebook }}
          </RouterLink>
          <RouterLink
            to="/instagram"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[80vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ instagram }}
          </RouterLink>
          <RouterLink
            to="/email"
            class="
              text-black
              decoration-0
              bg-[#ffffffd0]
              mt-5
              p-5
              text-center
              rounded-full
              capitalize
              w-full
              min-w-[80vw]
              md:w-full md:min-w-[60vw]
              lg:w-full lg:min-w-[30vw]
            "
          >
            {{ email }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

