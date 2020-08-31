<template>
  <div id="app-header" class="ui secondary pointing menu">
    <router-link class="item" to="/" @click.native="handleHeaderItemClick"
      >Imgur Dashboard
    </router-link>
    <router-link
      v-if="isLoggedIn"
      class="item"
      to="/gallery"
      @click.native="handleHeaderItemClick"
      >Gallery
    </router-link>
    <router-link
      v-if="isLoggedIn"
      class="item"
      to="/upload"
      @click.native="handleHeaderItemClick"
      >Upload</router-link
    >
    <div class="right menu">
      <a v-if="isLoggedIn" class="ui item" href="#" @click="logout">
        Log Out
      </a>
      <a v-else class="ui item" href="#" @click="login">
        Log In
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["login", "logout"]),
    handleHeaderItemClick(e) {
      e.target.classList.toggle("active");
    },
  },
};
</script>

<style scoped></style>
