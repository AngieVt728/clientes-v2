<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";

import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/src/assets/logo.svg', alt: 'Image 1' },
  { src: '/src/assets/logo.svg', alt: 'Image 2' },
  { src: '/src/assets/logo.svg', alt: 'Image 3' },
]

import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')

import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo
        alt="Flowbite logo"
        image-url="src/assets/logo.svg"
        link="#"
      >
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active>
          <router-link to="/home">Home</router-link>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link to="/orders">Orders</router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>

  <main>
    <RouterView />
  </main>

  <h2>Aqui se visualizan las fotos de los productos</h2>
  <fwb-carousel :pictures="pictures" slide class="custom-carousel">
    <template #indicator="{ active, index }">
      <button :class="['indicator', { active }]" aria-label="Slide indicator"></button>
    </template>
  </fwb-carousel>

  <h2>Aqui se visualiza lla info de los productos</h2>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First">
     1 Lorem ipsum dolor... 
    </fwb-tab>
    <fwb-tab name="second" title="Second">
      2 Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="third" title="Third">
      3 Lorem ipsum dolor...
    </fwb-tab>
    <fwb-tab name="fourth" title="Fourth">
      4 Lorem ipsum dolor...
    </fwb-tab>
  </fwb-tabs>


  <fwb-footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
        <fwb-footer-link-group class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <fwb-footer-link href="/">
            About
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Privacy Policy
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Licensing
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Contact
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <fwb-footer-copyright href="/" by="Flowbite™" />
    </div>
  </fwb-footer>
</template>



