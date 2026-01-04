<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import Carousel from "@/components/zodiacActivity/Carousel.vue";

// Assets
import imageBg1 from "@/assets/zodiacActivity/bg_1.png";
import imageBtnCompleted from "@/assets/zodiacActivity/button_completed.png";
import imageOrdered from "@/assets/zodiacActivity/ordered.png";
import imageProgress1 from "@/assets/zodiacActivity/progress_1.png";
import imageProgress2 from "@/assets/zodiacActivity/progress_2.png";
import imageProgress3 from "@/assets/zodiacActivity/progress_3.png";

import imageRole1 from "@/assets/zodiacActivity/role_1.png";
import imageRole2 from "@/assets/zodiacActivity/role_2.png";
import imageRole3 from "@/assets/zodiacActivity/role_3.png";
import imageRole4 from "@/assets/zodiacActivity/role_4.png";
import imageRole5 from "@/assets/zodiacActivity/role_5.png";
import imageRole6 from "@/assets/zodiacActivity/role_6.png";
import imageRole7 from "@/assets/zodiacActivity/role_7.png";
import imageRole8 from "@/assets/zodiacActivity/role_8.png";
import imageRole9 from "@/assets/zodiacActivity/role_9.png";
import imageRole10 from "@/assets/zodiacActivity/role_10.png";
import imageRole11 from "@/assets/zodiacActivity/role_11.png";
import imageRole12 from "@/assets/zodiacActivity/role_12.png";
import imageRole13 from "@/assets/zodiacActivity/role_13.png";
import imageRule from "@/assets/zodiacActivity/activity_rule.png";

const { $Bus } = useNuxtApp();
const userStore = useUserStore();
const { activityData } = storeToRefs(userStore);
const appStore = useAppStore();
// const { appName } = storeToRefs(appStore);

const state = reactive({
  activityCode: 'ZODIAC'
});

const isReadyData = computed<boolean>(() => activityData.value.activityCode != null);

const bgViewStyle = computed<any>(() => {
  if (activityData.value.currentIndex == 0) {
    return { left: '2rem', right: '-.02rem' };
  }
  if (activityData.value.currentIndex == 1) {
    return { left: '.46rem', right: '-.02rem' };
  }
  if (activityData.value.currentIndex == 11) {
    return { left: '-.02rem', right: '.46rem' };
  }
  if (activityData.value.currentIndex == 12) {
    return { left: '-.02rem', right: '2rem' };
  }
  return { left: '-.02rem', right: '-.02rem' };
})

const currentIndex = ref(0);

const onClickButton = () => {
  if (typeof window !== 'undefined' && (window as any).flutter) {
    if (activityData.value.currentConfirmButton && activityData.value.currentConfirmButton.api) {
      (window as any).flutter.postMessage(JSON.stringify({
        'action': 'onFetchWebData',
        'meta': {
          'path': activityData.value.currentConfirmButton.api,
          'data': {
            'activityCode': "ZODIAC"
          }
        }
      }))
    }

    if (activityData.value.currentConfirmButton && activityData.value.currentConfirmButton.event) {
      (window as any).flutter.postMessage(JSON.stringify(activityData.value.currentConfirmButton))
    }
  } else {
    console.log('onClickButton');
    activityData.value.currentUserPhase = activityData.value.currentUserPhase + 1;
  }
}

const getProgressItem = (index: any) => {
  if (index < 0 || index >= 12) {
    return {
      'label': ''
    };
  }
  if (activityData.value.currentUserPhase >= 12 && index != 12) {
    return {
      'textStyle': 'text-2',
      'image': imageProgress2,
      'label': '刘备'
    };
  }

  let textStyle = 'text-1';
  let image = imageProgress1;
  if (activityData.value.currentUserPhase === index) {
    textStyle = 'text-2';
    image = imageProgress2;
  } else if (activityData.value.currentUserPhase < index) {
    textStyle = 'text-3';
    image = imageProgress3;
  }
  //console.log(image);
  return {
    'label': data.value[index].label || '',
    'textStyle': textStyle,
    'image': image,
  };
}

const getButtonText = () => {
  if (currentIndex.value == 12) {
    return "闯关结束"
  }

  if (currentIndex.value == activityData.value.currentUserPhase) {
    return '立即闯关'
  } else if (currentIndex.value < activityData.value.currentUserPhase) {
    return '已过关'
  } if (currentIndex.value > activityData.value.currentUserPhase) {
    return '未解锁关卡'
  }
}

const progressList = computed<any>(() => {
  if (activityData.value.currentUserPhase == 12) {
    return [
      {},
      getProgressItem(currentIndex.value),
      {}
    ];
  }
  return [
    getProgressItem(currentIndex.value - 1),
    getProgressItem(currentIndex.value),
    getProgressItem(currentIndex.value + 1),
  ];
});

const data = computed<any>(() => {
  if (activityData.value.currentUserPhase == 12) {
    return [
      {
        'image': imageRole13,
        'level': 13,
        'text': '结束闯关',
        'completedText': '恭喜你，成功见到刘备！',
        'label': '刘备',
        'task': '已完成全部商品订购',
      }
    ];
  }
  return [
    {
      'image': imageRole1,
      'level': 1,
      'text': '第一关 东岭关',
      'label': '东岭关',
      'task': '银商品  5 元/份',
    },
    {
      'image': imageRole2,
      'level': 2,
      'text': '第二关 守将「孔秀」',
      'label': '孔秀',
      'task': '铂金商品  15 元/份',
    },
    {
      'image': imageRole3,
      'text': '第三关 洛阳城',
      'label': '洛阳城',
      'task': '银商品  80 元/份',
    },
    {
      'image': imageRole4,
      'text': '第四关 守将「孟坦」',
      'label': '孟坦',
      'task': '铂金商品  120 元/份',
    },
    {
      'image': imageRole5,
      'text': '第五关 守将「韩福」',
      'label': '韩福',
      'task': '银商品  270元/份',
    },
    {
      'image': imageRole6,
      'text': '第六关 汜水关',
      'label': '汜水关',
      'task': '铂金商品  320元/份',
    },
    {
      'image': imageRole7,
      'text': '第七关 守将「卞喜」',
      'label': '卞喜',
      'task': '银商品  390元/份',
    },
    {
      'image': imageRole8,
      'text': '第八关 荥阳」',
      'label': '荥阳',
      'task': '铂金商品  660元/份',
    },
    {
      'image': imageRole9,
      'text': '第九关 守将「王植」',
      'label': '王植',
      'task': '银商品  720/份',
    },
    {
      'image': imageRole10,
      'text': '第十关 黄河渡口',
      'label': '黄河渡口',
      'task': '铂金商品  900元/份',
    },
    {
      'image': imageRole11,
      'text': '第十一关 守将「秦琪」',
      'label': '秦琪',
      'task': '银商品  1040元/份',
    },
    {
      'image': imageRole12,
      'text': '第十二关 守将「曹操」',
      'label': '曹操',
      'task': '铂金商品  1140元/份',
    },
  ];
});

const flutterApi = {
    promoActivityRenderActivityData: '/api/promoactivity/render/activity/data'
}

const fetchData = () => {
  if (typeof window !== 'undefined' && (window as any).flutter) {
    (window as any).flutter.postMessage(JSON.stringify({
      'action': 'onFetchWebData',
      'meta': {
        'path': flutterApi.promoActivityRenderActivityData,
        'data': {
          'activityCode': state.activityCode
        }
      }
    }))
  } else {
    // Mock data for development if not in flutter
    activityData.value = {
      "staticData": [],
      "rewardData": [],
      "currentUserPhase": 4,
      "activityUserRecordId": null,
      "activityId": 6,
      "activityCode": "ZODIAC",
      "currentIndex": 4,
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
    }
    updateActivityData();
    console.log(currentIndex.value);
  }
}

const updateActivityData = () => {
  if (activityData.value.currentUserPhase == 12) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = activityData.value.currentUserPhase;
  }
}

onMounted(() => {
  fetchData();
  ($Bus as any).on('webPageReturn', (res: any) => {
    fetchData();
  })

  watchEffect(() => {
    updateActivityData();
  })
})

</script>

<template>
  <div class="zodiac-activity">
    <van-image class="bg-image-1" fit="cover" :src="imageBg1"></van-image>
    <div class="progress-view">
      <div v-if="isReadyData" class="progress-content-view">
        <div class="item-view" v-for="(item, i) in progressList" :key="i">
          <van-image v-show="item.image" class="bg-image-progress-1" fit="cover" :src="item.image">
            <template v-slot:loading>
              <span></span>
            </template>
          </van-image>
          <div v-show="item.label" :class="item.textStyle">
            {{ item.label }}
          </div>
        </div>
        <div class="bg-view" :style="bgViewStyle"></div>
      </div>
    </div>
    <div v-if="isReadyData" class="content-view">
      <div class="image-view">
        <Carousel ref="carouse" :data="data" :levelIndex="activityData.currentUserPhase"
          v-model:currentIndex="currentIndex"></Carousel>
      </div>
      <div class="text-1">
        {{ activityData.currentUserPhase >= 12 ? data[currentIndex].completedText : data[currentIndex].text }}
      </div>
      <div class="text-2">
        {{ data[currentIndex].task }}
      </div>
      <div class="button-view">
        <div class="button-1" v-if="currentIndex == activityData.currentUserPhase" @click="onClickButton">{{getButtonText()}}</div>
        <div class="button-2" v-else>{{getButtonText()}}</div>
      </div>
      <div class="rule-view">
        <van-image
            class="bg-image-rule"
            fit="cover"
            :src="imageRule"
        ></van-image>
        <div class="rule-text">
          1. 所有用户均可参加, 闯过所有关卡后可获得【至臻·关羽】头像
          <br/><br/>2. 每关仅可挑战一次
          <br/><br/>3. 必须完成当前关卡的挑战才能前往下一个关卡
          <br/><br/>4. 差价补偿福利(1元=100积分), 以订单实际情况为准
          <br/><br/>5. 活动积分补偿奖励在订单结束后次日24:00之前发放
          <br/><br/>6. 使用积分抵扣的订单无法参加活动
          <br/><br/>7. 最终解释权归{{"掌上工美"}}所有,本活动与Apple inc无关
        </div>
      </div>
      <div class="risk-text">市场有风险 订购需谨慎</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.zodiac-activity {
  margin: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  width: 100VW;

  .bg-image-1 {
    width: 100VW;
    height: 1.34rem;
  }

  .bg-image-2 {
    margin-top: .28rem;
    width: 100VW;
    height: 4.19rem;
  }

  .bg-image-2 {
    width: 100VW;
    height: 4.19rem;
  }

  .bg-image-btn {
    width: 3.22rem;
    height: .97rem;
  }

  .image-ordered {
    width: 0.6rem;
    height: 0.58rem;
  }

  .bg-image-rule {
    margin-top: .16rem;
    margin-bottom: .0rem;
    width: 1.27rem;
    height: .28rem;
  }

  .bg-image-progress-1 {
    width: .18rem;
    height: .18rem;
  }

  .button-view{
    margin-top: .20rem;
    margin-bottom: .30rem;
    .button-1{
      width: 3.35rem;
      height: .44rem;
      background: #E9152C;
      border-radius: .08rem;
      border: 1px solid #000000;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: .15rem;
      color: #FFFFFF;
      line-height: .44rem;
      text-align: center;
      font-style: normal;
    }

    .button-2{
      width: 3.35rem;
      height: .44rem;
      background: #EFF0F4;
      border-radius:  .08rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: .15rem;
      color: #888888;
      line-height: .44rem;
      text-align: center;
      font-style: normal;
    }
  }

  .rule-view{
    width: 3.35rem;
    background: #FFFFFF;
    box-shadow: 0px .10rem .11rem 0px rgba(45,59,50,0.1);
    border-radius: .12rem;
    border: 1px solid #2D3B32;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rule-text {
    font-size: .13rem;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: .21rem;
    text-align: start;
    margin-top: .14rem;
    margin-left: .24rem;
    margin-right: .24rem;
    margin-bottom: .28rem;
  }


  .risk-text {
    font-size: .14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: .20rem;
    margin-top: .20rem;
    margin-bottom: .30rem;
  }


  .progress-view {
    position: absolute;
    top: 2.5rem;
    height: .32rem;
    width: 3.75rem;
    overflow: hidden;

    .progress-content-view {
      position: relative;
      padding-left: .75rem;
      padding-right: .75rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .item-view {
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text-1 {
          font-size: .10rem;
          height: .15rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }

        .text-2 {
          font-size: .10rem;
          height: .15rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          text-shadow: 0px 0px 4px rgba(255, 212, 124, 0.5);
        }

        .text-3 {
          font-size: .10rem;
          height: .15rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
        }
      }
    }

    .bg-view {
      z-index: 1;
      top: .08rem;
      left: .23rem;
      position: absolute;
      height: .02rem;
      background: #000000;
      border-radius: 6px;
      opacity: 1;
    }
  }

  .content-view {
    position: absolute;
    top: 2.85rem;
    width: 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-1 {
      margin-bottom: .1rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: .22rem;
      color: #000000;
      text-align: center;
      font-style: normal;
      line-height: .30rem;
    }

    .text-2 {
      height: .20rem;
      font-size: .14rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      color: #777777;
      text-align: center;
      font-style: normal;
      line-height: .20rem;
    }

    .image-view {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 0.10rem;
      margin-bottom: .20rem;
      height: 2.45rem;
      width: 3.6rem;

      .mid-view {
        margin-right: .24rem;
        margin-left: .24rem;
        position: relative;

        .mask-view {
          position: absolute;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          top: 0px;
          left: 0px;
          width: 0.82rem;
          height: 1.33rem;
          background: #00000066;
        }
      }

      .image-1 {
        width: 0.82rem;
        height: 1.33rem;
      }

      .image-2 {
        width: 1.09rem;
        height: 1.78rem;
      }
    }
  }


}
</style>
