import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})