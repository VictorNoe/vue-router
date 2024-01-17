<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'vuelos-disponibles'}">anterior</b-link>
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
                {
                    text: 'lineas de vuelo',
                    href: '#',
                    to: 'linea-vuelo'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>