<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'linea-vuelo'}">Lineas de vuelo</b-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio Landpage',
                    href: '#',
                    to: 'inicio-landpage'
                },
                {
                    text: 'Vuelos disponibles',
                    href: '#',
                    to: 'vuelos-disponibles'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>