import userApi from '../../api/system/userApi';

Page({
    data: {
        title: 'Hello World',
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    async onLoad() {
        await getData();
    },
});

const getData = async () => {
    const res = await userApi.getVillageList();
    if (res.code === 200) {
        console.log(res);
    }
};

