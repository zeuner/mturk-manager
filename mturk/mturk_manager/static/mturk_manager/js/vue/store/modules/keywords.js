import axios from 'axios';
import _ from 'lodash';
import Vue from 'vue';

export const moduleKeywords = {
	namespaced: true,
	state: {
        object_keywords: null,
        url_api_keywords: undefined,
	},
	getters: {
    	get_object_keywords: (state) => {
			return state.object_keywords;
    	},
	},
	mutations: {
		set_keywords(state, data) {
        	state.object_keywords= {};
        	
        	_.forEach(data, function(keyword){
    			// const object_project = new Project(keyword);
    			Vue.set(state.object_keywords, keyword.text, keyword);
        	});
		},
        set_url_api_keywords(state, url_new) {
            state.url_api_keywords = url_new;
        },
	},
	actions: {
        async load_keywords({state, commit, getters, rootGetters, dispatch}) {
            if(getters.get_object_keywords == null) {
				await axios.get(rootGetters.get_url_api(state.url_api_keywords, false))
			    .then(response => {
			    	console.log(response.data)
                	commit('set_keywords', response.data);
			    })

				// await axios.get(rootGetters.get_url_api(state.url_api_status_block, use_sandbox))
			 //    .then(response => {
    //             	commit('set_status_block', {'data_status_block': response.data, use_sandbox});
			 //    })
			}
		},
	},
}