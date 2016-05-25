import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

const API_URL = 'http://hr.dev'
export const SurveyResource = Vue.resource(API_URL + '/api/surveys')
