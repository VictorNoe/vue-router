<template lang="">
    
    <b-container fluid>
      <b-row >
        <b-col>
          <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand href="#">Logo</b-navbar-brand>
          <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

          <b-collapse id="navbar-nav" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Inicio</b-nav-item>
              <b-nav-item href="#">Acerca de</b-nav-item>
              <b-nav-item href="#">Contacto</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <b-sidebar 
          id="sidebar"
          shadow
          visible
          no-close-on-route-change
          no-header-close
          >
            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'inicio' }">
                  Option 1
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'main' }">
                  Option 2
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'tercero' }">
                  Option 3
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'inicio-landpage' }">
                  Inicio Landpage
                </b-link>
              </b-nav-item>
            </b-nav>
          </b-sidebar>
        </b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
</script>

<style lang="">
    
</style>
