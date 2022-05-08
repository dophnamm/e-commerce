import axios from 'axios';
import { handleErrorMessage } from 'util/HandleErrorMessage';

const axiosClient = axios.create({
	baseURL: 'https://api.ezfrontend.com',
	headers: {
		'Content-type': 'application/json',
	},
});

axiosClient.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		const { config, data, status } = error.response;
		const URLs = ['/auth/local/register', '/auth/local'];

		if (URLs.includes(config.url) && status === 400) {
			handleErrorMessage(data);
		}

		return Promise.reject(error);
	}
);

export default axiosClient;
