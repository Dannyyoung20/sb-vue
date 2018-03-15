<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app>

      <v-list v-if="isAuth">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Mr Bean</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>Categories</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-model="item.active"
              v-for="item in categories"
              :key="item.title"
              no-action>

              <router-link
              :to="{ name: 'Category', params: { id: item.id }}">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </router-link>
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>

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
        Logout
      </v-btn>
            <v-spacer></v-spacer>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Leckture'
    }
  },
  name: 'App',
  computed: {
    user () {
      return this.$store.getters.user;
    },
    isAuth () {
      return this.$store.getters.isAuth
    },
    categories () {
      return this.$store.getters.categories
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
