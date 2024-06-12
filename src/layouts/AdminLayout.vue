<script setup></script>

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
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>
