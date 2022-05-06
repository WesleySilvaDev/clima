const { default: Axios } = require('axios');

const axiosinstance = Axios.create({
    baseURL: 'https://clima-b4f66-default-rtdb.firebaseio.com/',
});

axiosinstance.defaults.headers.common['leelainstance'] =
    'leela instance header';

export default axiosinstance;