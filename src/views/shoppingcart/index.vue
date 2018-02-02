<template>
  <div>
    <input type="text" v-model="childrens.name" />
    <input type="text" v-model="lastName" />
    <button @click="auto">来啊</button>
  </div>
</template>
<script>
export default {
  name: 'shopcart',
  data () {
    return {
      childrens: {
        name: '小强',
        age: 20,
        sex: '男'
      },
      tdArray: ['1', '2'],
      lastName: '张三'
    }
  },
  watch: {
    childrens: {
      handler (val, oldval) {
        console.log(val.name + 'eyp')
      },
      deep: true // 对象内部的属性监听，也叫深度监听
    },
    'childrens.name' (val, oldval) {
      console.log(val + 'aaa')
    }, // 键路径必须加上引号
    lastName (val, oldval) {
      console.log(this.lastName)
    }
  }, // 以V-model绑定数据时使用的数据变化监测
  methods: {
    auto () {
      this.axios.get('../../../static/data.json').then((item) => {
        console.log(item)
      })
    }
  }
}
</script>
