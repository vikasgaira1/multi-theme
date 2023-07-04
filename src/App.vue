<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      theme: 'light',
      sidebarItems: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        // Add more sidebar items as needed
      ]
    }
  },
  computed: {
    pageTitle() {
      const route = this.$route
      const matchingItem = this.sidebarItems.find(item => item.path === route.path)
      return matchingItem ? matchingItem.title : 'Page Title'
    }
  },
  watch: {
    theme(value) {
      this.$vuetify.theme.dark = value === 'dark'
    }
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light'
  },
  mounted() {
    this.$vuetify.theme.dark = this.theme === 'dark'
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
