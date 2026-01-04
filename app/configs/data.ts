export const flutterApi = {
    bindCardPage: '/api/config/bindCardPage',
    configOccupationsQuery: '/api/config/occupationsQuery',
    fundPayOauthSignApply: '/api/fund-pay/oauth/bank/card/bind/apply',
    fundPayOauthSignConfirm: '/api/fund-pay/oauth/bank/card/bind/confirm',
    update: '/api/activity/updateZgby2TianTianBaiYin',
    fundPayOauthBankList: '/api/fund-pay/oauth/bank/list',
    fundPayCebbankCebPayInInfo: '/api/fund-pay/cebbank/cebPayInInfo',
    fundPayCebbankOnlineBankMoneyInfo: '/api/fund-pay/cebbank/oauth/onlineBankMoneyInfo',
    activityRookieData: '/api/activity/rookieData',
    promoActivityRenderActivityData: '/api/promoactivity/renderActivityData',
    promoActivityRenderPhaseNext: '/api/promoactivity/action/phase/next',
    promoActivityRenderWonrewardsList: '/api/promoactivity/wonrewards/list',
    promoActivityConvertActivityProps: '/api/promoactivity/convertActivityProps',
    promoActivityMineGold: '/api/promoactivity/mineGold',
    activityRenderActivityData: '/api/promoactivity/renderActivityData',
    activityBirds: '/api/activity/birds',
    activityRookieTodayAmount: '/api/activity/rookieTodayAmount',
    activityInviteCode: '/api/activity/inviteCode',
    readEventRead: '/api/readEvent/read',
    configHomeWelfare: '/api/config/homeWelfare',
    activityQuestion: '/api/activity/question',
    activityCompleteQuestion: '/api/activity/completeQuestion',
    productQuery: '/api/product/query',
    configActivity: '/api/config/activity',
    activityWallStreet: '/api/activity/wallStreet',
    talentInfo: '/api/user/oauth/talent/info',
    expRecords: '/api/user/oauth/custom-level/exp/records',
    levelInfo: '/api/user/oauth/custom-level/info'
}

// export type activityCodeType =
// //大转盘
//     | 'LUCKYTURNTABLE_BRONZE'
//     //闯关开盲盒、是男人
//     | 'YEAHMAN'
//     //钻石狂欢、十二宫
//     | 'ZODIAC'
//     //早鸟
//     | 'BIRD'
//     //猫头鹰
//     | 'OWL'
//     //斗智
//     | 'FIGHT_INTELLECT'
//     //斗勇
//     | 'FIGHT_FORCE'
//     //黄金矿工
//     | 'GOLD_MINER'
//     //黄金矿工plus
//     | 'GOLD_MINER_PLUS'
//     //小小运动会-跳高
//     | 'HIGH_JUMP'
//     //小小运动会-跳远
//     | 'LONG_JUMP'
//     //英雄大会
//     | 'HERO'
//     //速度与激情
//     | 'FAST_AND_FURIOUS'


// export const activityConfigsMap = {
//     FIGHT_INTELLECT: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/fightIntellectActivity/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/fightIntellectActivity`,
//         data: {},
//     },
//     FIGHT_FORCE: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/fightForceActivity/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/fightForceActivity`,
//         data: {},
//     },
//     //早鸟
//     BIRD: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/birdsActivity/youngBird/banner.png`,
//         "dialog": `${VITE_BUILD_PATH}/htmls/activitys/birdsActivity/youngBird/dialog.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/birds-young`,
//         data: {
//             "birdsType": "youngBird",
//             "currentUserPhase": 0,
//             "activityCode": "aboutStart",
//             "activityId'": "activityId'",
//             "startTime": 1639228637000,
//             "endTime": 1629117037000,
//             "currentPeriod": {
//                 'periodTime': "2021/08/16",
//                 'placeOrderNumberRankAll': [
//                     {
//                         'index': 1,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '1',
//                         'number': '2'
//                     },
//                     {
//                         'index': 2,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '11', 'number': '21'
//                     },
//                     {'index': 3, 'name': '111', 'number': '2'},
//                 ],
//                 'placeOrderEarliestRankAll': [
//                     {'index': 1, 'name': '2', 'number': '22'},
//                     {'index': 2, 'name': '22', 'number': '21'},
//                     {'index': 3, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderLatestRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                     {'index': 3, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderAmountRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                     {'index': 1, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderNumberRankMySelf': {
//                     'index': -1,
//                     // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",,'name': '1', 'number': '2'},
//                 },
//                 'placeOrderEarliestRankMySelf': {
//                     'index': 1,
//                     // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png"
//                     'name': '1', 'number': '2'
//                 },
//                 'placeOrderLatestRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//                 'placeOrderAmountRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//             },
//             "lastPeriod": {
//                 'periodTime': '2021/08/15',
//                 'placeOrderNumberRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderEarliestRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderLatestRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderAmountRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderNumberRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//                 'placeOrderEarliestRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//                 'placeOrderLatestRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//                 'placeOrderAmountRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//             }
//         },
//     },
//     //猫头鹰
//     OWL: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/birdsActivity/owl/banner.png`,
//         "dialog": `${VITE_BUILD_PATH}/htmls/activitys/birdsActivity/owl/dialog.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/birds-owl`,
//         data: {},
//     },
//     //黄金矿工
//     GOLD_MINER: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/goldMiner/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/goldMiner`,
//         "data": {
//             //抽奖机会
//             "chanceIndex": 3,
//             //积分额度
//             "integral": 100,
//             //活动状态（当前用户阶段）0未开启 1开启
//             "currentUserPhase": 0,
//             //奖池
//             "rewardPool": [
//                 {
//                     "rewardId": "1",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "2",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "3",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "4",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//             ],
//         },
//     },
//     //黄金矿工PLUS
//     GOLD_MINER_PLUS: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/goldMinerPlus/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/goldMinerPlus`,
//         data: {
//             //抽奖机会
//             "chanceIndex": 3,
//             //积分额度
//             "integral": 100,
//             //活动状态（当前用户阶段）
//             "currentUserPhase": 0,
//             //奖池
//             "rewardPool": [
//                 {
//                     "rewardId": "1",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "2",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "3",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//                 {
//                     "rewardId": "4",  //对应id
//                     "rewardType": "indemnity228", //奖励类型   coupon6：6元现金券   indemnity288: 288元赔偿金 integral500: 500积分
//                     "detailText": "228元免亏损",   //中奖后展示特等奖文字
//                 },
//             ],
//         },
//     },
//     HiGH_JUMP: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/highJumpActivity/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/highJumpActivity`,
//         data: {
//             "currentPeriod": {
//                 'periodTimeText': "截止目前",
//                 //跳高排行榜数据
//                 'placeOrderNumberRankAll': [
//                     {'index': 1, 'name': '1', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
//                     {'index': 2, 'name': '11', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
//                     {'index': 3, 'name': '111', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
//                     {'index': 4, 'name': '111', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
//                     {'index': 5, 'name': '111', 'avatar': 'xx', 'placeOrderNumber': '2', "value": "123"},
//                 ],
//                 //方案2:
//                 //跳高成绩剩余人数
//                 'placeOrderNumberRemainPersonnel': 10,
//                 //跳远
//                 'placeOrderAmountRankAll': [
//                     {'index': 1, 'name': '1', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
//                     {'index': 2, 'name': '11', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
//                     {'index': 3, 'name': '111', 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
//                 ],
//                 'placeOrderAmountRemainPersonnel': 10,
//                 'placeOrderNumberRankMySelf': {
//                     'index': -1,
//                     'name': '1',
//                     'avatar': 'xx',
//                     'placeOrderNumber': '2',
//                     "value": "123"
//                 },
//                 'placeOrderAmountRankMySelf': {'index': 1, 'avatar': 'xx', 'placeOrderAmount': '2', "value": "123"},
//             }
//         },
//     },
//     LONG_JUMP: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/longJumpActivity/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/longJumpActivity`,
//         data: {
//             //同跳高
//         },
//     },
//     HERO: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/heroActivity/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/heroActivity`,
//         data: {
//             "currentUserPhase": 0,
//             "activityStatus": 0,
//             "currentPeriod": {
//                 'periodTime': "截止目前",
//                 'placeOrderNumberRankAll': [
//                     {
//                         'index': 1,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '1',
//                         'number': '2'
//                     },
//                     {
//                         'index': 2,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '11', 'number': '21'
//                     },
//                     {'index': 3, 'name': '111', 'number': '2'},
//                 ],
//                 'placeOrderAmountRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                     {'index': 1, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderPlRatioRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                     {'index': 1, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderNumberRankMySelf': {
//                     'index': -1,
//                     // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",,'name': '1', 'number': '2'},
//                 },
//                 'placeOrderPlRatioRankMySelf': {
//                     'index': -1,
//                     // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",,'name': '1', 'number': '2'},
//                 },
//                 'placeOrderAmountRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//             },
//             "lastPeriod": {
//                 'periodTime': '08.15-08.22',
//                 //同currentPeriod
//             }
//         },
//     },
//     FAST_AND_FURIOUS: {
//         "banner": `${VITE_BUILD_PATH}/htmls/activitys/fastAndFurious/banner.png`,
//         'html': `${VITE_BUILD_PATH}/htmls/web3/#/fastAndFurious`,
//         data: {
//             "currentUserPhase": 0,
//             "activityStatus": 0,
//             "startTime": 1639228637000,
//             "endTime": 1629117037000,
//             "currentPeriod": {
//                 'periodTime': "截止目前",
//                 'placeOrderNumberRankAll': [
//                     {
//                         'index': 1,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '1',
//                         'number': '2'
//                     },
//                     {
//                         'index': 2,
//                         // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",
//                         'name': '11', 'number': '21'
//                     },
//                     {'index': 3, 'name': '111', 'number': '2'},
//                 ],
//                 'placeOrderAmountRankAll': [
//                     {'index': 1, 'name': '1', 'number': '2'},
//                     {'index': 2, 'name': '1', 'number': '2'},
//                     {'index': 1, 'name': '1', 'number': '2'},
//                 ],
//                 'placeOrderNumberRankMySelf': {
//                     'index': -1,
//                     // "avatar": "https://lanjingtest.fugeinfo.com/lanjingyouse/resource/pics/recommended_avatar/recommended_avatar_0003.png",,'name': '1', 'number': '2'},
//                 },
//                 'placeOrderAmountRankMySelf': {'index': 1, 'name': '1', 'number': '2'},
//             },
//             "lastPeriod": {
//                 'periodTime': '08.15-08.22',
//                 //同currentPeriod
//             }
//         },
//     },
// };

export const assetsImages = {
    communityRulesBanner1: '&assets/&brightness/communityRules/banner_1.png',
    vipLevelConditionBg: '&assets/&brightness/vipLevel/icon_condition_bg.png',
    vipLevelCouponBg: '&assets/&brightness/vipLevel/icon_coupon_bg.png',
    vipLevelIntegralBg: '&assets/&brightness/vipLevel/icon_integral_bg.png',
    vipLevelPrivilegeBg: '&assets/&brightness/vipLevel/icon_privilege_bg.png',
    vipLevelCondition: '&assets/&brightness/vipLevel/icon_condition.png',
    vipLevelCoupon: '&assets/&brightness/vipLevel/icon_coupon.png',
    vipLevelIntegral: '&assets/&brightness/vipLevel/icon_integral.png',
    vipLevelOrder: '&assets/&brightness/vipLevel/icon_order.png',
    vipLevelPrivilege: '&assets/&brightness/vipLevel/icon_privilege.png',
    vipLevelSign: '&assets/&brightness/vipLevel/icon_sign.png',
    gloryLevelIcon1: '&assets/&brightness/gloryLevel/icon-1.png',
    gloryLevelIcon2: '&assets/&brightness/gloryLevel/icon-2.png',
    newbieGuideIcon1: '&assets/&brightness/newbieGuide/icon-1.png',
    newbieGuideIcon2: '&assets/&brightness/newbieGuide/icon-2.png',
    newbieGuideIcon3: '&assets/&brightness/newbieGuide/icon-3.png',
    newbieGuideIcon4: '&assets/&brightness/newbieGuide/icon-4.png',
    orderRulesDetailBanner3: '&assets/&brightness/orderRulesDetail/banner_3.png',
    orderRulesDetailBanner4: '&assets/&brightness/orderRulesDetail/banner_4.png',
    orderRulesDetailBanner5: '&assets/&brightness/orderRulesDetail/banner_5.png',
    orderRulesDetailBanner6: '&assets/&brightness/orderRulesDetail/banner_6.png',
}
// export const flopDrawType = {
//     COUPON_56: 'COUPON_56',
//     COUPON_16: 'COUPON_16',
//     IPHONE_11: 'IPHONE_11',
//     NULL: 'NULL',
// }

// export const flopDrawTypeText = {
//     COUPON_56: '56元现金券',
//     COUPON_16: '16元现金券',
//     IPHONE_11: 'iPhone11 Pro',
//     NULL: '未中奖',
// }

// export const flopDrawResultData = {
//     COUPON_56: {
//         image: assetImage.flopDrawDialog1,
//         text: '恭喜获得',
//         title: '一张  56元现金券',
//         btnText: '查看我的卡券',
//         bottomText: '快去使用看看，免费下单快速赚钱',
//     },
//     COUPON_16: {
//         image: assetImage.flopDrawDialog2,
//         text: '恭喜获得',
//         title: '一张  16元现金券',
//         btnText: '查看我的卡券',
//         bottomText: '快去使用看看，免费下单快速赚钱',
//     },
//     IPHONE_11: {
//         image: assetImage.flopDrawDialog3,
//         text: '恭喜获得',
//         title: '一部  iPhone11 Pro',
//         btnText: '联系客服',
//         bottomText: '请与客服联系领取您的奖品',
//     },
//     NULL: {
//         image: null,
//         text: '非常抱歉，本次并未中奖~',
//         title: '逢买必盈',
//         btnText: '再抽一次',
//         bottomText: '不要气馁，中奖就在眼前！',
//     },
// }


// export const orderRulesData = [
//     {
//         title: '资金转入相关问题',
//         subTitle: '资金转入时间、资金转入金额上限、资金转入到账时间',
//         tags: ['转入时间', '转入金额上限'],
//         colorLine: 0xFFFEBC0A,
//
//     },
//     {
//         title: '资金转出相关问题',
//         subTitle: '资金转出时间、资金转出到账时间、资金转出手续费',
//         tags: ['转出时间', '转出到账时间', '转出手续费'],
//         colorLine: 0xFFFE840A,
//     },
//     {
//         title: '各商品订购交易时间',
//         subTitle: '订购时间',
//         tags: ['订购时间'],
//         colorLine: 0xFFFE3C0AA,
//
//     },
//     {
//         title: '什么是定价下单与不定价下单',
//         subTitle: '定价下单、不定价下单',
//         tags: ['现金订购', '不定价下单'],
//         colorLine: 0xFFFEBC0A,
//     },
//     // {
//     //     title: '5.什么是下单、持有订单',
//     //     subTitle: '下单、持有订单、退订',
//     //     tags: ['下单', '持有订单', '退订'],
//     //     colorLine: 0xFFFEBC0A,
//     // },
//     // {
//     //     title: '6.费用是如何收取的？',
//     //     subTitle: '预定（下单）商品需缴纳相应的服务费，服务费\n' +
//     //         '在下单成功时即时划拨',
//     //     tags: ['手续费', '订购'],
//     //     colorLine: 0xFFFE3C0A,
//     // },
//     // {
//     //     title: '7.什么是持有订单过夜',
//     //     subTitle: '预定（持有订单）商品需缴纳相应的服务费，服\n' +
//     //         '务费在下单成功时即时划拨',
//     //     tags: ['手续费', '订购'],
//     //     colorLine: 0xFFFEBC0A,
//     // },
//     // {
//     //     title: '8.提货相关问题',
//     //     subTitle: '付清订单货物尾款后，商场将用户购买的货物配\n' +
//     //         '送至指定收款地址，即为提货',
//     //     tags: ['尾款', '发货时间', '退换货'],
//     //     colorLine: 0xFFFE840A,
//     // },
// ]

// export const orderRulesDetailData = [
//     {
//         title: '资金转入相关问题',
//         image: assetImage.orderRulesDetailBanner1
//     },
//     {
//         title: '资金转出相关问题',
//         image: assetImage.orderRulesDetailBanner2
//     },
//     {
//         title: '各商品订购交易时间',
//         image: assetImage.orderRulesDetailBanner3
//     },
//     {
//         title: '定价下单与不定价下单',
//         image: assetImage.orderRulesDetailBanner4
//     },
//     {
//         title: '什么是订购、持有订单',
//         image: assetImage.orderRulesDetailBanner5
//     },
//     {
//         title: '费用是如何收取的',
//         image: assetImage.orderRulesDetailBanner6
//     },
//     {
//         title: '什么是持有订单过夜',
//         image: assetImage.orderRulesDetailBanner7
//     },
//     {
//         title: '提货相关问题',
//         image: assetImage.orderRulesDetailBanner8
//     },
// ]
