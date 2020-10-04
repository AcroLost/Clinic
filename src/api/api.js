import * as axios from 'axios'

export const getHospitalRecords = () => {
    return axios.get('/data.json')
        .then((res) => {
            return res.data
        })
}