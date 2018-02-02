<template>
  <div>
    {{msg}}
    <button @click="tip">按钮点击一下</button>
  </div>
</template>
<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      msg: 'test'
    }
  },
  created () {
    Indicator.close()
  },
  methods: {
    tip () {
      // Indicator.open('加载中...')
      let instance = Toast('静以修身,俭以养德')
      setTimeout(() => {
        instance.close()
      }, 2000)
    }
  }
}
</script>
