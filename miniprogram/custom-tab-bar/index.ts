interface TabBarModel {
    icon: string;
    text: string;
    url: string;
}

Component({
    data: {
        active: 0,
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
            console.log(event);
            this.setData({ active: event.detail });
            wx.switchTab({
                url: this.data.list[event.detail].url,
            });
        },
    },
});
