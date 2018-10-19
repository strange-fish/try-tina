<config>
{
  "usingComponents": {
    "author": "../components/author.vue"
  }
}
</config>

<template minapp="native" lang="wxml">
  <view>
    <author>
      <view bind:tap="handleClick">
        {{name}}
      </view>
    </author>
    <input value="{{name}}" bind:confirm="handleChange" />
    <view class="what" bind:tap="handleClick">
      what the handleClick
    </view>
    <button bind:tap="goToMine">
      Mine
    </button>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  data: {
    name: 'what nam'
  },
  onLoad () {
    this.haha()
    this.$http.get(`/what`).then((res) => {
      const data = res.data
    })
  },
  methods: {
    goToMine () {
      this.$navigateTo('/pages/mine', {
        id: '123'
      })
    },
    handleChange (e) {
      const { value } = e.detail
      this.setData({ name: value })
    },
    handleClick () {
      console.log(' what the hack')
    },
    haha () {

    }
  }
})
</script>

<style lang="scss">

.what {
  font-size: 14px;
}
</style>




