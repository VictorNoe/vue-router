<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'tercero'}">siguiente</b-link>
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
          },
          {
            text: 'Main',
            href: '#',
            to: 'main'
          }
        ]
      }
    }  
}
</script>
<style lang="">
    
</style>