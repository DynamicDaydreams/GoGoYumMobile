import axios from 'axios';
import qs from 'querystring';

import Config from '../config'
import { AuthManager } from '../managers'

class ServiceBase {
    GetJson = async (path, baseUrl) => {
        if (!baseUrl) {
            baseUrl = Config().api.baseUrl;
        }
        let url = baseUrl + path;
        let headers = await this.GenerateHeaders();

        try {
            let results = (await axios.get(url, { headers })).data;
            return results;
        }
        catch (error) {
            throw error;
        }
    }

    PostJson = async (path, data, baseUrl) => {
        if (!baseUrl) {
            baseUrl = Config().api.baseUrl;
        }
        let url = baseUrl + path;
        let headers = await this.GenerateHeaders();

        try {
            let results = (await axios.post(url, data, { headers })).data;
            return results;
        }
        catch (error) {
            throw error;
        }
    }

    PostFormData = async (path, data, baseUrl) => {
        if (!baseUrl) {
            baseUrl = Config().api.baseUrl;
        }
        let url = baseUrl + path;
        let headers = await this.GenerateHeaders();

        try {
            let results = (await axios.post(url, qs.stringify(data), { headers })).data;
            return results;
        }
        catch (error) {
            throw error;
        }
    }

    GenerateHeaders = async (customHeaders) => {
        let token = await AuthManager.GetToken();

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