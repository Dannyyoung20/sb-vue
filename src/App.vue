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
              :key="item.id"
              :to="{ name: 'Category', params: { id: item.id }}"
              no-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>

    <div>
      <user-nav v-if="user_role == 'User'"></user-nav>
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
import { mapGetters, mapActions } from 'vuex'
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
      title: 'lekture'
    }
  },
  name: 'App',
  computed: {
    ...mapGetters([
      'user',
      'isAuth',
      'categories',
      'user_role'
    ]),
  },

  created () {
    this.getUser()
    this.getCategories()
  },

  methods: {
    ...mapActions([
      'getUser',
      'getCategories'
    ]),

    logout () {
      this.$store.dispatch('logout').then(res => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
