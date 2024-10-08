/// <reference path="./types/index.d.ts" />

interface IAppOption {
    globalData: {
        tabBarIndex: number;
        userInfo?: WechatMiniprogram.UserInfo;
    };
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

