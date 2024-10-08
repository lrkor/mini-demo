import { httpRequest } from '../../utils/request';
const baseUrl = require('../base').allBaseUrl.GDEnvs.host;

interface UserInfo {
    userId: string;
}

interface ReturnUserInfo {
    userId: string;
    userName: string;
}

export default class userApi {
    /**
     * @description: 获取用户信息
     * @return {*}
     */
    static getUserInfo = (data: UserInfo) => httpRequest.post<ReturnUserInfo>(baseUrl + '/mock/getUserInfo', data);

    /**
     * @description:
     * @return {*}
     */
    static getVillageList = () => httpRequest.get(baseUrl + '/getdata');
}
