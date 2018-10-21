import BaseService from './base';
import Config from '../config';

class AuthService extends BaseService {
    Login = async (userName, password) => {
        let results = await this.PostJson('login',
            { userName: userName, password: password },
            true
        );

        return results;
    }

    Validate = async () => {
        let results = await this.GetJson('verify');
        return results;
    }

    CreateAccount = async (username, email, password) => {
        let results = await this.PostJson('user/register', {
            userName: username,
            password: password,
            email: email
        }, true);
        return results;
    }
}

export default AuthService;