import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://admin-vitalife.halv-it.site',
});

axiosInstance.interceptors.response.use((response: any) => {
    if (response.status === 200) {
        const body = response.data;
        const code = body.code;
        //success
        if (code === 200) {
            const newResponse: any = {};
            ['message', 'data', 'metadata', 'code'].forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(body, key)) {
                    newResponse[key] = body[key];
                }
            });
            return newResponse;
        }
        return Promise.reject({
            ...body,
            status: response.status,
            config: response.config,
        });
    }

    return Promise.reject({
        ...response.data,
        status: response.status,
        config: response.config,
    });
})

export default axiosInstance;
