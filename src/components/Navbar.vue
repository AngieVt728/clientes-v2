<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
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
          <router-link to="/home">Inicio</router-link>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link to="/products">Productos</router-link>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link to="/orders">Pedidos</router-link>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link to="/profile">Perfil</router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>
