<script>
import { mapActions } from 'vuex'
export default {
    name: 'accounts-create-edit-view',

    methods: {
        ...mapActions([
            'addAccount'
        ])
    }
}
</script>


<template>
    <div id="accounts-create-edit-view">
        You can create and edit your accounts here
    </div>
</template>

<style scoped lang='scss'>
#accounts-create-edit-view {
    color:red;
}
</style>
