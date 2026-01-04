import {defineStore} from 'pinia'
export const useUserStore = defineStore('user',{
    state: () => ({
        name: 'Eduardo',
        isAdmin: true,
        isMobile: false,
        levelInfo: {
            "currentLevel": 5,
            "nextLevel": 6,
            "currentLevelStr": "VIP5",
            "nextLevelStr": "下一等级 VIP6",
            "currentExp": 26933,
            "bgPicUrl": null,
            "levelIconUrl": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/level_up/icon_level.png",
            "iconCurrentLevel": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/vip/vip5.png",
            "couponConversionPrivilege": "已获得VIP5折扣特权"
        },
        luckyTurntableActivityData: {
            "chanceIndex": 3,     //抽奖机会 （幸运大转盘）
            "activityCode": "LUCKYTURNTABLE_BRANZE",  //当前荣誉等级 （幸运大转盘）
            "winRewardId": '6',
            "rewardPool": [   //元素请返回6个
                {
                    "rewardId": "1",  //对应id
                    "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "228元免亏损",   //中奖后展示特等奖文字
                    "showTag": true,   //是否展示特等奖角标
                    "status": "used", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
                {
                    "rewardId": "2",  //对应id
                    "rewardType": "indemnity364", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "6元现金券",   //中奖后展示特等奖文字
                    "showTag": false,   //是否展示特等奖角标
                    "status": "use", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
                {
                    "rewardId": "3",  //对应id
                    "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "6元现金券",   //中奖后展示特等奖文字
                    "showTag": false,   //是否展示特等奖角标
                    "status": "none", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
                {
                    "rewardId": "4",  //对应id
                    "rewardType": "coupon16", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "6元现金券",   //中奖后展示特等奖文字
                    "showTag": true,   //是否展示特等奖角标
                    "status": "none", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
                {
                    "rewardId": "5",  //对应id
                    "rewardType": "coupon52", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "6元现金券",   //中奖后展示特等奖文字
                    "showTag": false,   //是否展示特等奖角标
                    "status": "none", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
                {
                    "rewardId": "6",  //对应id
                    "rewardType": "coupon77", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金
                    "detailText": "6元现金券",   //中奖后展示特等奖文字
                    "showTag": false,   //是否展示特等奖角标
                    "status": "none", //当前状态 //  none:无   use: 未使用   used：已使用
                    "event": "router", // 事件
                    "meta": {
                        "path": "trading_page_and_place_order_page",  //特定路径，去交易页面并唤起下单窗口
                        "contract": "XAG",
                        "selectedContractKeyForPlaceOrder": "XAG",
                        "paymentWay": "byBalance",  //支付方式(可选)
                        "placeOrderMode": "speed",  //极速或者专业(可选)
                        "currentSelectedProductId": "123", //产品id (必选)
                    }
                },
            ],
        },
        yeahManActivityData: {
            "staticData": [],
            "rewardData": {
                "allLevelCount": 10,
                "completeTaskLevelCount": 1,
                "activeLevelIndex": 1,
                "activeLevelState": "taskInProgress",
                "levelList": [
                    {
                        "levelIndex": 0,
                        "levelState": "awardSent",
                        "awardType": "coupon",
                        "awardContentValue": 5,
                        "awardContentStr": "1~5元现金券",
                        "taskDescription": "下单5元【银商品】并完成\n货值上浮`20%`",
                        "button": null
                    },
                    {
                        "levelIndex": 1,
                        "levelState": "taskInProgress",
                        "awardType": "coupon",
                        "awardContentValue": 10,
                        "awardContentStr": "1~10元现金券",
                        "taskDescription": "下单10元【铂金商品】并完成\n货值上浮`50%`",
                        "button": {
                            "api": "/api/promoactivity/action/phase/next",
                            "event": "router",
                            "meta": {
                                "paymentWay": "byBalance",
                                "path": "trading_page_and_place_order_page",
                                "contract": "XPT0",
                                "selectedContractKeyForPlaceOrder": "XPT0",
                                "placeOrderMode": "speed",
                                "currentSelectedProductId": "8979"
                            }
                        }
                    },
                    {
                        "levelIndex": 2,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 60,
                        "awardContentStr": "1~60元现金券",
                        "taskDescription": "下单60元【银商品】并完成\n货值上浮`80%`",
                        "button": null
                    },
                    {
                        "levelIndex": 3,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 90,
                        "awardContentStr": "1~90元现金券",
                        "taskDescription": "下单90元【铂金商品】并完成\n货值上浮`100%`",
                        "button": null
                    },
                    {
                        "levelIndex": 4,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 180,
                        "awardContentStr": "1~180元现金券",
                        "taskDescription": "下单180元【银商品】并完成\n货值上浮`130%`",
                        "button": null
                    },
                    {
                        "levelIndex": 5,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 270,
                        "awardContentStr": "1~270元现金券",
                        "taskDescription": "下单270元【铂金商品】并完成\n货值上浮`150%`",
                        "button": null
                    },
                    {
                        "levelIndex": 6,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 540,
                        "awardContentStr": "1~540元现金券",
                        "taskDescription": "下单540元【银商品】并完成\n货值上浮`170%`",
                        "button": null
                    },
                    {
                        "levelIndex": 7,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 810,
                        "awardContentStr": "1~810元现金券",
                        "taskDescription": "下单810元【铂金商品】并完成\n货值上浮`180%`",
                        "button": null
                    },
                    {
                        "levelIndex": 8,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 720,
                        "awardContentStr": "1~720元现金券",
                        "taskDescription": "下单720元【银商品】并完成\n货值上浮`190%`",
                        "button": null
                    },
                    {
                        "levelIndex": 9,
                        "levelState": "locked",
                        "awardType": "coupon",
                        "awardContentValue": 1147.5,
                        "awardContentStr": "1~1147.5元现金券",
                        "taskDescription": "下单1147.5元【铂金商品】并完成\n货值上浮`200%`",
                        "button": null
                    }
                ]
            },
            "currentUserPhase": 1,
            "activityUserRecordId": 77,
            "activityId": 5,
            "activityCode": "YEAHMAN",
            "userInfo": {
                "avatarPic": "https://zgbyapicdn.dinggou.silver-inte.com/zhongguobaiyin/resource/pics/recommended_avatar/new_avatar_0001.png",
                "userName": "古筝高兴#8951"
            }
            // "staticData": [],
            // "rewardData": {
            //     "allLevelCount": 10,
            //     "completeTaskLevelCount": 0,
            //     "activeLevelIndex": 0,
            //     "activeLevelState": "aboutStart",
            //     "levelList": [
            //         {
            //             "levelIndex": 0,
            //             "levelState": "aboutStart",
            //             "awardType": "coupon",
            //             "awardContentValue": 5,
            //             "awardContentStr": "1~5元现金券",
            //             "taskDescription": "下单5元【银商品】并完成\n货值上浮`20%`",
            //             "button": {
            //                 "api": "/api/promoactivity/action/phase/next",
            //                 "event": "router",
            //                 "meta": {
            //                     "paymentWay": "byBalance",
            //                     "path": "trading_page_and_place_order_page",
            //                     "contract": "XAG0",
            //                     "selectedContractKeyForPlaceOrder": "XAG0",
            //                     "placeOrderMode": "speed",
            //                     "currentSelectedProductId": "8244"
            //                 }
            //             }
            //         },
            //         {
            //             "levelIndex": 1,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 10,
            //             "awardContentStr": "1~10元现金券",
            //             "taskDescription": "下单10元【铂商品】并完成\n货值上浮`50%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 2,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 60,
            //             "awardContentStr": "1~60元现金券",
            //             "taskDescription": "下单60元【银商品】并完成\n货值上浮`80%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 3,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 90,
            //             "awardContentStr": "1~90元现金券",
            //             "taskDescription": "下单90元【铂商品】并完成\n货值上浮`100%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 4,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 180,
            //             "awardContentStr": "1~180元现金券",
            //             "taskDescription": "下单180元【银商品】并完成\n货值上浮`130%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 5,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 270,
            //             "awardContentStr": "1~270元现金券",
            //             "taskDescription": "下单270元【铂商品】并完成\n货值上浮`150%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 6,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 540,
            //             "awardContentStr": "1~540元现金券",
            //             "taskDescription": "下单540元【银商品】并完成\n货值上浮`170%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 7,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 810,
            //             "awardContentStr": "1~810元现金券",
            //             "taskDescription": "下单810元【铂商品】并完成\n货值上浮`180%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 8,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 720,
            //             "awardContentStr": "1~720元现金券",
            //             "taskDescription": "下单720元【银商品】并完成\n货值上浮`190%`",
            //             "button": null
            //         },
            //         {
            //             "levelIndex": 9,
            //             "levelState": "locked",
            //             "awardType": "coupon",
            //             "awardContentValue": 1147.5,
            //             "awardContentStr": "1~1147.5元现金券",
            //             "taskDescription": "下单1147.5元【铂商品】并完成\n货值上浮`200%`",
            //             "button": null
            //         }
            //     ]
            // },
            // "currentUserPhase": 0,
            // "activityUserRecordId": null,
            // "activityId": 5,
            // "activityCode": "YEAHMAN",
            // "userInfo": []
        },
        zodiacActivityData: {
            "staticData": [],
            "rewardData": [],
            "currentUserPhase": 0,
            "activityUserRecordId": null,
            "activityId": 6,
            "activityCode": "ZODIAC",
            "currentConfirmButton": {
                "api": "/api/promoactivity/action/phase/next",
                "event": "router",
                "meta": {
                    "path": "tradingPageAndPlaceOrderPage",
                    "contract": "XAG0",
                    "currentSelectedProductId": "8244",
                    "selectedContractKeyForPlaceOrder": "XAG0",
                    "placeOrderMode": "speed"
                }
            }
        },
        fightIntellectActivityData: {
            // "staticData": [],
            // "rewardData": [],
            // "activityCode": "FIGHT_INTELLECT", //斗智： FIGHT_INTELLECT  斗勇：FIGHT_FORCE
            // "currentPeriod": {
            //     'periodTimeText': "截止目前",
            //     'placeOrderNumberRankAll': [
            //         //     {'index': 1, 'name': '1', 'avatar':'xx', 'placeOrderNumber': '2',"value":"123"},
            //         //     {'index': 2, 'name': '11', 'avatar':'xx', 'placeOrderNumber': '2',"value":"123"},
            //         //     {'index': 3, 'name': '111', 'avatar':'xx', 'placeOrderNumber': '2',"value":"123"},
            //     ],//斗智
            //     'placeOrderAmountRankAll': [
            //         // {'index': 1, 'name': '1', 'avatar':'xx', 'placeOrderAmount': '2',"value":"123"},
            //         // {'index': 2, 'name': '11', 'avatar':'xx', 'placeOrderAmount': '2',"value":"123"},
            //         // {'index': 3, 'name': '111', 'avatar':'xx', 'placeOrderAmount': '2',"value":"123"},
            //     ],//斗勇
            //     'placeOrderNumberRankMySelf': {
            //         'index': -1,
            //         'name': '1',
            //         'avatar': 'xx',
            //         'placeOrderNumber': '2',
            //         "value": "123"
            //     },
            //     'placeOrderAmountRankMySelf': {'index': 1, 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
            // },
            // "lastPeriod": {
            //     'periodTimeText': "4.10-4.15",
            //     'placeOrderNumberRankAll': [
            //         {'index': 1, 'name': '1', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
            //         {'index': 2, 'name': '11', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
            //         {'index': 3, 'name': '111', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
            //     ],//斗智
            //     'placeOrderAmountRankAll': [
            //         {'index': 1, 'name': '1', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
            //         {'index': 2, 'name': '11', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
            //         {'index': 3, 'name': '111', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
            //     ],//斗勇
            //     'placeOrderNumberRankMySelf': {
            //         'index': -1,
            //         'name': '1',
            //         'avatar': 'xx',
            //         'placeOrderNumber': '2',
            //         "value": "123"
            //     },
        },
        statusBarHeight: 45.0,
        talentInfo: {},
        activityData: {
            "staticData": [],
            "rewardData": [],
            "currentUserPhase": 0,
            "activityUserRecordId": null,
            "activityId": 6,
            "activityCode": "ZODIAC",
            "currentConfirmButton": {
                "api": "/api/promoactivity/action/phase/next",
                "event": "router",
                "meta": {
                    "path": "tradingPageAndPlaceOrderPage",
                    "contract": "XAG0",
                    "currentSelectedProductId": "8244",
                    "selectedContractKeyForPlaceOrder": "XAG0",
                    "placeOrderMode": "speed"
                }
            }
        } as any,
        expRecords:[],
    }),
    actions: {
        setIsMobile(isMobile: any) {
            this.isMobile = isMobile;
            // we could do other stuff like redirecting the user
        },
        setStatusBarHeight(height: any) {
            this.statusBarHeight = height;
            // we could do other stuff like redirecting the user
        },
        setTalentInfo(info: any) {
            this.talentInfo = info.data;
        },
        setExpRecords(info: any) {
            this.expRecords = info.data;
        },
        setLevelInfo(info: any) {
            this.levelInfo = info.data;
        },
        setActivityData(info: any) {
            this.activityData = info.data;
        },
        setLuckyTurntableActivityData(info: any) {
            this.luckyTurntableActivityData = info.data;
        },
    },
});
