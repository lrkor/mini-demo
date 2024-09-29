Component({
    data: {
        active: 0,
        list: [
            {
                icon: 'wap-home-o',
                text: '首页',
                url: '/index/index',
            },
            {
                icon: 'contact-o',
                text: '我的',
                url: '/mine/mine',
            },
        ],
    },

    methods: {
        onChange(event: any) {
            this.setData({ active: event.detail })
            wx.switchTab({
                url: this.data.list[event.detail].url,
            })
        },

        init() {
            const page = getCurrentPages().pop()
            this.setData({
                active: this.data.list.findIndex((item) => item.url === `/${page?.route}`),
            })
        },
    },
})
