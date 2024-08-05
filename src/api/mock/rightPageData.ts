// 右侧界面数据
const rightPageData = {
    browseCategories: {
        data: [782, 621.2, 322.1, 525.3, 265, 224],
        indicator: [
            {
                name: '外卖员',
                max: 1000,
            },
            {
                name: '滴滴司机',
                max: 1000,
            },
            {
                name: '快递员',
                max: 1000,
            },
            {
                name: '程序员',
                max: 1000,
            },
            {
                name: '公务员',
                max: 1000,
            },
            {
                name: '企业',
                max: 1000,
            },
        ],
    },
    userIdentityCategory: {
        data: [
            {
                name: '前端',
                value: 57,
            },
            {
                name: '后端',
                value: 167,
            },
            {
                name: '测试',
                value: 123,
            },
            {
                name: '运维',
                value: 55,
            },
            {
                name: '经理',
                value: 198,
            },
        ],
    },
    offline: {
        feedback: [
            {
                title: '白屏时间',
                number: 90,
            },
            {
                title: '用户体验',
                number: 82,
            },
            {
                title: '网站耗时',
                number: 85,
            },
        ],
        offlinePortalData: {
            data1: [80, 152, 101, 134, 90, 130],
            data2: [120, 182, 191, 210, 170, 110],
            data3: [110, 132, 201, 154, 150, 80],
            data4: [90, 142, 161, 114, 190, 170],
            xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
            barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
        },
    },
};

export type rightPageDataType = typeof rightPageData
export default rightPageData
