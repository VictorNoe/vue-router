<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'vuelos-cancelados'}">Anterior</b-link>
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
                    to: 'inicio-landpage',
                },
                {
                    text: 'Vuelos cancelados',
                    href: '#',
                    to: 'vuelos-cancelados',
                },
                {
                    text: 'Proximos vuelos',
                    hred: '#',
                    to: 'proximo-vuelos'
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>