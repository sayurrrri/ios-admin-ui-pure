<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const test = ref("test");

// 计算属性来处理当前页
const currentPage = computed(() => {
  return route.params.page ? Number(route.params.page) : 1; // 如果没有 page 参数，默认值为 1
});
</script>

<template>
  <div>{{ currentPage }}</div>
</template>
