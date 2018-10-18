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
        What are we talking about?
        {{name}}
      </view>
    </author>
    <input 
      value="{{name}}" 
      bind:confirm="handleChange"
    />
    <view class="what" bind:tap="handleClick">
      what the handleClick
    </view>
    <scroll-view>
    </scroll-view>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  data: {
    name: 'what name'
  },
  onLoad () {
    this.haha()
    this.$http.get(`/what`).then((res) => {
      const data = res.data
    })
  },
  methods: {
    handleChange (e) {
      const { value } = e.detail
      this.setData({ name: value })
    },
    handleClick () {
      console.log(' what the hack')
    },
    haha () {
      console.log(this.$day())
    }
  }
})
</script>

<style lang="scss">
.what {
  font-size: 14px;
}
</style>




