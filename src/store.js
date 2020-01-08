import createStore from 'unistore';
import axios from 'axios'

const initialState = { 
                username : '',
                password : '',
                email : '',
                token : '',
                auth : false,
                listNews : [],
                isLoading : true,
                category : 'other',
                search : ''
                };

export const store = createStore(initialState);

export const actions = store => ({
    setInput : (state, event) => {
        store.setState({ [event.target.name] : event.target.value })
    },

    getNewsAxios : (state, paramCategory, endPoint) => {
        const apiKey = "58fecc904b4e40ef920ae5582000d89a";
        const baseUrl = "https://newsapi.org/v2/";
        const urlHeadline = baseUrl + endPoint + "?language=en&apiKey=" + apiKey;
        axios
            .get(urlHeadline+'&q='+paramCategory)
            .then(function(response) {
                store.setState({ listNews: response.data.articles, isLoading: false})
            })
            .catch(function(error) {
                store.setState({ isLoading: false })
            })
    }
    
})