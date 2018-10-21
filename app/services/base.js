import axios from 'axios';
import qs from 'querystring';

import Config from '../config'
import { AuthManager } from '../managers'

class ServiceBase {
    GetJson = async (path, useRemoteToken) => {
        let url = Config().api.baseUrl + path;
        let headers = await this.GenerateHeaders(useRemoteToken);

        try {
            let results = (await axios.get(url, { headers })).data;
            return results;
        }
        catch (error) {
            throw error;
        }
    }

    PostJson = async (path, data, useRemoteToken) => {

        let url = Config().api.baseUrl + path;
        let headers = await this.GenerateHeaders(useRemoteToken);

        try {
            let results = (await axios.post(url, data, { headers })).data;
            return results;
        }
        catch (error) {
            throw error;
        }
    }

    GenerateHeaders = async (useRemoteToken, customHeaders) => {

        let token = useRemoteToken ? await AuthManager.GetRemoteToken() : await AuthManager.GetToken();

        let headers = {};
        if (customHeaders) {
            headers = {
                ...headers,
                ...customHeaders
            }
        }
        if (token) {
            headers = {
                ...headers,
                Authorization: `Bearer ${token}`
            }
        }

        return headers;
    }
}

export default ServiceBase;