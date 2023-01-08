import axios from "axios";

export const API = {
    postInformation(value: boolean) {
        return axios.post('https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test', {success: value})
    },

    getInformation() {
        return axios.get('https://incubator-personal-page-back.herokuapp.com/api/3.0/homework')
    },
}