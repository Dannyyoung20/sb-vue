<template>
  <v-toolbar
      app
      :clipped-left="clipped"
      color="secondary"
      dark
      v-show="isAuth">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer> <v-spacer></v-spacer>
      <v-btn flat @click="logout" v-if="isAuth" >
        <v-icon>exit_to_app</v-icon>
        Logout Admin
      </v-btn>
            <v-spacer></v-spacer>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  name: 'AdminNav',
  data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Lekture'
      }
  },
  computed: {
      isAuth () {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
      logout () {
      this.$store.dispatch('logout').then(res => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>

</style>
