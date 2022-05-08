import axiosClient from './axiosClient';

const categoriesApi = {
	getAll(params) {
		const url = '/categories';
		return axiosClient.get(url, { params });
	},

	getById(id) {
		const url = `/categories/${id}`;
		return axiosClient.get(url);
	},

	update(data) {
		const url = `/categories/${data.id}`;
		return axiosClient.patch(url, data);
	},

	delete(id) {
		const url = `/categories/${id}`;
		return axiosClient.delete(url);
	},
};

export default categoriesApi;
