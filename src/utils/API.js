import axios from "axios";

const BASEURL = "https://dog.ceo/api/breed";
const IMGRANDOM = "s/image/random"
const LISTBREEDS = "s/list/all"
const SLASH = "/"
const FINISHSEARCH = "/images"
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getRandomImage: function () {
        return axios.get(BASEURL + IMGRANDOM);
    },

    searchByBreed: function (query) {
        return axios.get(BASEURL + SLASH + query + FINISHSEARCH)
    },

    listBreeds: function () {
        return axios.get(BASEURL + LISTBREEDS)
    }
};
