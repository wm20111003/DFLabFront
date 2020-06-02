<template>
  <div class="container">
    <div>
      <logo />
      <h2>{{ title }}</h2>
      <h3>{{ result }}</h3>
      <div class="put-content">
        <div v-for="(item, index) in cate" :key="index">{{ item }}</div>
      </div>
    </div>
    <el-row>
      <el-button @click="getData">获取数据</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      title: '',
      cate: []
    }
  },
  asyncData: async ({ $axios }) => {
    const res = await $axios.get('/api')
    console.log(res)
    return {
      title: 'DFLAB初始化',
      result: res.data
    }
  },

  methods: {
    async getData() {
      const res = await this.$axios.get('/api/list')
      this.cate = [...this.cate, ...res.data] as any
      console.log(res)
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.put-content {
  border: 1px solid #ddd;
}
</style>
