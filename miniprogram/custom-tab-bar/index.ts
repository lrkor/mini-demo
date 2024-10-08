interface TabBarModel {
    icon: string;
    text: string;
    url: string;
}

const app = getApp<IAppOption>();

Component({
    // 1.不同部分定义 properties
    properties: {
        selected: {
            type: Number,
            value: 0,
        },
    },

    data: {
        active: app.globalData.tabBarIndex,
        list: [
            {
                icon: 'wap-home-o',
                text: '首页',
                url: '/pages/index/index',
            },
            {
                icon: 'contact-o',
                text: '我的',
                url: '/pages/mine/mine',
            },
        ] as TabBarModel[],
    },

    methods: {
        onChange(event: any) {
            app.globalData.tabBarIndex = event.detail;
            wx.switchTab({
                url: this.data.list[event.detail].url,
            });
        },
    },

    ready: function () {
        this.setData({
            active: app.globalData.tabBarIndex,
        });
    },
});
