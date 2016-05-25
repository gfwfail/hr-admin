<style scoped>

h1 {
    color: #42b983;
}

</style>

<template>

<div>
    {{text}}</div>
<template v-if="type=='select'">
    <select class="form-control" :multiple="multiple">
        <option :value="option" v-for="option in options">{{option}}</option>
    </select>
</template>


<template v-if="type=='truefalse'">
    <div class="radio">
        <label>
            <input type="radio" value="True" v-model="value"> True</label>
        <label>
            <input type="radio" value="False" v-model="value"> False</label>
    </div>
</template>

<template v-if="type=='textarea'">
    <textarea v-model="value" class="form-control" type="textarea"></textarea>
</template>

<template v-if="type=='rating'">
    <rating :value.sync="value"></rating>
</template>

</template>

<script>

import Rating from './Rating.vue'

export default {
    props: {
        'name': String,
        'value': {
            twoWay: true
        },
        'options': {
            type: Array
        },
        'multiple': Boolean,
        'text': String,
        'type': String,
        'id': String,
        'disabled': String,
    },
    data() {
        return {
            // note: changing this line won't causes changes
            // with hot-reload because the reloaded component
            // preserves its current state and we are modifying
            // its initial state.
            msg: 'Hello World!'
        }
    },
    components: {
        Rating
    }
}

</script>
