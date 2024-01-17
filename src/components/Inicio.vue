<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'main'}">siguiente</b-link>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#',
            to: 'inicio'
          }
        ]
      }
    }    
}
</script>

<style lang="">
    
</style>
