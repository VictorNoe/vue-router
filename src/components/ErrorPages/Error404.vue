<template lang="">
    <b-container class="bv-example-row bv-example-row-flex-cols" fluid>
        <b-row> 
            <b-col align-self="stretch">
                <b-container>
                    <b-row>
                        <b-col>
                            <div>
                                <b-form inline>
                                    <label class="sr-only" for="inline-form-input-name">Name</label>
                                    <b-form-input
                                    id="inline-form-input-name"
                                    class="mb-2 mr-sm-2 mb-sm-0"
                                    placeholder="Jane Doe"
                                    ></b-form-input>

                                    <label class="sr-only" for="inline-form-input-username">Username</label>
                                    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                                    <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
                                    </b-input-group>

                                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

                                    <b-button variant="primary">Save</b-button>
                                </b-form>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div>
                                <b-img src="https://weezevent.com/wp-content/uploads/2023/08/30164935/organizar-un-banquete.jpg" fluid-grow alt="Responsive image"></b-img>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>