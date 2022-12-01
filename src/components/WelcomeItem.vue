<script setup>
import primaryImg from "../assets/images/edmark-img.jpg";
import vidBanner from "../assets/live-banner-bg.mp4";

import { reactive, toRefs } from "vue";

const links = reactive({
  name: "Edmark Tuazon",
  github: "github",
  portfolio: "website portfolio",
  linkedin: "linkedIn",
  facebook: "facebook",
  instagram: "instagram",
  email: "email",
});

const { name, github, portfolio, facebook, linkedin, instagram, email } =
  toRefs(links);

const load = () => {
  const content = document.querySelector("#content");
  setTimeout(() => {
    content.classList.add("loaded");
  }, 1000);
};
window.addEventListener("load", load);
</script>
<template>
  <section class="h-screen grid place-items-center" v-cloak>
    <video
      autoplay
      loop
      muted
      class="absolute inset-0 w-full h-full z-[-1] object-cover"
    >
      <source :src="vidBanner" type="video/mp4" />
    </video>
    <div class="grid place-items-center" id="content">
      <figure class="grid place-items-center">
        <img
          :src="primaryImg"
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
      <div class="mt-8 flex flex-col">
        <RouterLink
          to="/github"
          class="
            text-black
            decoration-0
            bg-[#ffffffd0]
            mt-5
            p-4
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
            p-4
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
            p-4
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
            p-4
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
            p-4
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
            p-4
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
  </section>
</template>

