<template>
  <List :data="tableData" />
</template>
<script lang="ts">
import Vue from 'vue'
import List from '~/components/user/List.vue'
export default Vue.extend({
  components: {
    List
  },
  asyncData: async (ctx: any) => {
    const res = await ctx.$axios.get('/api/user/list')
    return {
      tableData: res.data
    }
  },
  data() {
    return {
      tableData: []
    }
  }
})
</script>
<style scoped></style>
