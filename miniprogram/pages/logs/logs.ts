import { formatTime } from '../../utils/util'

Component({
    data: {
        logs: [],
    },
    lifetimes: {
        attached() {
            const logs = (wx.getStorageSync('logs') || []).map((log: string) => {
                return {
                    date: formatTime(new Date(log)),
                    timeStamp: log,
                }
            })
            ;(this as any).setData({
                logs,
            })
        },
    },
})

