<template>
  <el-input v-model.trim="state.ruleForm.username" ></el-input>
</template>

<script setup>
import {
reactive,
ref
} from 'vue'
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
})
</script>