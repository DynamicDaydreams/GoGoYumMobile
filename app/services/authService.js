import BaseService from './base';
import Config from '../config';

class AuthService extends BaseService {
    Login = async (userName, password) => {
        let results = await this.PostFormData('token',
            { username: userName, password: password, grant_type: 'password' },
            Config().api.baseUrl.replace('api/', '')
        );

        return results;
    }

    Validate = async () => {
        let results = await this.GetJson('auth/validate');
        return results;
    }

    CreateAccount = async (username, email, password) => {
        let results = await this.PostJson('auth/create', {
            UserName: username,
            Password: password,
            Email: email
        });
        return results;
    }
}

export default AuthService;