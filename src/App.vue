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
    <div>
      <admin-nav v-if="userRole == 'Admin'"></admin-nav>
      <tutor-nav v-else-if="userRole == 'Tutor'"></tutor-nav>
      <user-nav v-else></user-nav>
    </div>
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
import UserNav from '@/components/Global/UserNav'
import TutorNav from '@/components/Global/TutorNav'
import AdminNav from '@/components/Global/AdminNav'

export default {
  components: {UserNav, TutorNav, AdminNav},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Lekture',
      userRole: this.$store.state.user_role
    }
  },
  name: 'App',
  computed: {
    user () {
      return this.$store.getters.user;
    },
    isAuth () {
      return this.$store.getters.isAuth;
    },
    categories () {
      return this.$store.getters.categories;
    }
  },

  methods: {
    
  }
}
</script>
