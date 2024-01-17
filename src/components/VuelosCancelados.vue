<template lang="">
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <b-link :to="{name: 'proximo-vuelos'}">Próximos vuelos</b-link>
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
            ]
        }
    }
}
</script>
<style lang="">
    
</style>