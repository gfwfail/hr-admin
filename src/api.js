import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

const API_URL = 'http://api.man.land'
export const SurveyResource = Vue.resource(API_URL + '/api/surveys')
