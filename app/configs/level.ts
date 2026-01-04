import vipCard0Image from "@assets/vipLevel/icon_vip_card_0.png";
import vipCard1Image from "@assets/vipLevel/icon_vip_card_1.png";
import vipCard2Image from "@assets/vipLevel/icon_vip_card_2.png";
import vipCard3Image from "@assets/vipLevel/icon_vip_card_3.png";
import vipCard4Image from "@assets/vipLevel/icon_vip_card_4.png";
import vipCard5Image from "@assets/vipLevel/icon_vip_card_5.png";
import vipCard6Image from "@assets/vipLevel/icon_vip_card_6.png";
import vipCard7Image from "@assets/vipLevel/icon_vip_card_7.png";
import vipCard8Image from "@assets/vipLevel/icon_vip_card_8.png";
import vipCard9Image from "@assets/vipLevel/icon_vip_card_9.png";
import vipCard10Image from "@assets/vipLevel/icon_vip_card_10.png";
import {assetsImages} from "@/configs/data";
export const levelDataList = [
    {
        "icon": vipCard0Image,
        "cardIcon": vipCard0Image,
        "color": '#7B7F83',
        "requireEXP": 0,
        "nextLevelEXP": 10,
        "currentLevel": 0,
        "currentLevelWelfare": [
            {
                "title": "`307` 元/月",
                "text": "注册赠送",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            }
        ],
        "welfareConditionStr":"",
        "welfareList":[],
    },
    {
        "icon": vipCard1Image,
        "cardIcon": vipCard1Image,
        "color": '#F09A3B',
        "requireEXP": 10,
        "nextLevelEXP": 1280,
        "currentLevel": 1,
        "currentLevelWelfare": [
            {
                "title": "`10` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`5` 元/月",
                "text": "需抵达青铜等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`3` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 青铜 或 青铜以上 ",
        "welfareList":[
            {
                text:'10积分奖励/单次'
            },
            {
                text:'5元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            }
        ],
    },
    {
        "icon": vipCard2Image,
        "cardIcon": vipCard2Image,
        "color": '#F87B57',
        "requireEXP": 1280,
        "nextLevelEXP": 3800,
        "currentLevel": 2,
        "currentLevelWelfare": [
            {
                "title": "`100` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`60` 元/月",
                "text": "需抵达山铜等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`4` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 白银 或 白银以上 ",
        "welfareList":[
            {
                text:'100积分奖励/单次'
            },
            {
                text:'60元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_3.png",
        "cardIcon": vipCard3Image,
        "color": '#47A417',
        "requireEXP": 3800,
        "nextLevelEXP": 9000,
        "currentLevel": 3,
        "currentLevelWelfare": [
            {
                "title": "`200` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`100` 元/月",
                "text": "需抵达秘银等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`5` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg??assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 秘银 或 秘银以上",
        "welfareList":[
            {
                text:'200积分奖励/单次'
            },
            {
                text:'100元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_4.png",
        "cardIcon": vipCard4Image,
        "color": '#1C97E1',
        "requireEXP": 9000,
        "nextLevelEXP": 19000,
        "currentLevel": 4,
        "currentLevelWelfare": [
            {
                "title": "`500` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`450` 元/月",
                "text": "需抵达秘银等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`6` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 秘银 或 秘银以上 ",
        "welfareList":[
            {
                text:'500积分奖励/单次'
            },
            {
                text:'450元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_5.png",
        "cardIcon": vipCard5Image,
        "color": '#A153E4',
        "requireEXP": 19000,
        "nextLevelEXP": 39000,
        "currentLevel": 5,
        "currentLevelWelfare": [
            {
                "title": "`1000` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`540` 元/月",
                "text": "需抵达黄金等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`7` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 黄金 或 黄金以上",
        "welfareList":[
            {
                text:'1000积分奖励/单次'
            },
            {
                text:'540元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_6.png",
        "cardIcon": vipCard6Image,
        "color": '#E05CBD',
        "requireEXP": 39000,
        "nextLevelEXP": 100000,
        "currentLevel": 6,
        "currentLevelWelfare": [
            {
                "title": "`1000` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`900` 元/月",
                "text": "需抵达铂金等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`6` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 铂金 或 铂金以上",
        "welfareList":[
            {
                text:'2000积分奖励/单次'
            },
            {
                text:'900元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
            {
                text:'L2实时订购详情数据'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_7.png",
        "cardIcon": vipCard7Image,
        "color": '#B57222',
        "requireEXP": 100000,
        "nextLevelEXP": 390000,
        "currentLevel": 7,
        "currentLevelWelfare": [
            {
                "title": "`5000` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`1147.5` 元/月",
                "text": "需抵达铂金等级",
                'className':'mini-rich-text',
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`10` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 铂金 或 铂金以上 ",
        "welfareList":[
            {
                text:'5000积分奖励/单次'
            },
            {
                text:'1147.5元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
            {
                text:'L2实时订购详情数据'
            },
            {
                text:'生日礼物'
            },
            {
                text:'商品订购热度异常智能推送'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_8.png",
        "cardIcon": vipCard8Image,
        "color": '#4E9CFF',
        "requireEXP": 390000,
        "nextLevelEXP": 1580000,
        "currentLevel": 8,
        "currentLevelWelfare": [
            {
                "title": "`10000` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`1350` 元/月",
                "text": "需抵达钻石等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`13` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 钻石 或 钻石以上 ",
        "welfareList":[
            {
                text:'10000积分奖励/单次'
            },
            {
                text:'1350元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
            {
                text:'L2实时订购详情数据'
            },
            {
                text:'生日礼物'
            },
            {
                text:'商品订购热度异常智能推送'
            },
            {
                text:'节日礼物'
            },
            {
                text:'头像特殊边框'
            },
            {
                text:'VIP神秘权益'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_9.png",
        "cardIcon": vipCard9Image,
        "color": '#8073FF',
        "requireEXP": 1580000,
        "nextLevelEXP": 5800000,
        "currentLevel": 9,
        "currentLevelWelfare": [
            {
                "title": "`20000` 分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`1800` 元/月",
                "text": "需抵达星耀等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`14` 项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 星耀 或 星耀以上 ",
        "welfareList":[
            {
                text:'20000积分奖励/单次'
            },
            {
                text:'1800元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
            {
                text:'L2实时订购详情数据'
            },
            {
                text:'生日礼物'
            },
            {
                text:'商品订购热度异常智能推送'
            },
            {
                text:'节日礼物'
            },
            {
                text:'头像特殊边框'
            },
            {
                text:'VIP神秘权益'
            },
            {
                text:'黄金和黄金级别以上用户大额订购数据智能推送'
            },
        ],
    },
    {
        "icon": "assets/&skin/images/grade/icon_vip_10.png",
        "cardIcon": vipCard10Image,
        "color": '#DBBBAB',
        "requireEXP": 5800000,
        "nextLevelEXP": 99900000,
        "currentLevel": 10,
        "currentLevelWelfare": [
            {
                "title": "`50000`分",
                "text": "升级后可获取",
                "welfareTypeStr": "积分奖励",
                "icon": assetsImages.vipLevelIntegral,
                "bgImage": assetsImages.vipLevelIntegralBg,
            },
            {
                "title": "`2250`元/月",
                "text": "需抵达王者等级",
                "welfareTypeStr": "现金券",
                "icon": assetsImages.vipLevelCondition,
                "bgImage": assetsImages.vipLevelConditionBg,
            },
            {
                "title": "`16`项",
                "text": "点击查看详情>",
                "welfareTypeStr": "特权",
                "icon": assetsImages.vipLevelPrivilege,
                "bgImage": assetsImages.vipLevelPrivilegeBg,
            }
        ],
        "welfareConditionStr":"荣誉等级 王者 或 王者以上 ",
        "welfareList":[
            {
                text:'50000积分奖励/单次'
            },
            {
                text:'2250元现金券/月'
            },
            {
                text:'商品原料价格异常波动智能推送'
            },
            {
                text:'商品订购和退订总数据智能推送'
            },
            {
                text:'黄金和黄金级别以上用户订购总数据智能推送'
            },
            {
                text:'商品原料价格分析周报'
            },
            {
                text:'商品原料价格分析研报'
            },
            {
                text:'L2实时订购详情数据'
            },
            {
                text:'生日礼物'
            },
            {
                text:'商品订购热度异常智能推送'
            },
            {
                text:'节日礼物'
            },
            {
                text:'头像特殊边框'
            },
            {
                text:'VIP神秘权益'
            },
            {
                text:'黄金和黄金级别以上用户大额订购数据智能推送'
            },
            {
                text:'商品原料波动数据重现'
            },
            {
                text:'各商品原料价格波动对比分析'
            },
        ],
    }
];
