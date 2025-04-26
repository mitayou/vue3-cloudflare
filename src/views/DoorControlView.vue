<script setup lang="ts">
import { ref } from 'vue'
import { ElButton, ElCard, ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

const doorPassword = ref('')
const loading = ref(false)

const getDoorPassword = async () => {
  try {
    loading.value = true
    const response = await fetch('/api/door/password')
    const data = await response.json()
    doorPassword.value = data.password
    ElMessage.success('获取密码成功')
  } catch (error) {
    ElMessage.error('获取密码失败')
  } finally {
    loading.value = false
  }
}

const openDoor = async () => {
  try {
    loading.value = true
    const response = await fetch('/api/door/open', {
      method: 'POST'
    })
    const data = await response.json()
    if (data.success) {
      ElMessage.success('门已打开')
    } else {
      ElMessage.error('开门失败')
    }
  } catch (error) {
    ElMessage.error('开门失败')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="door-control">
    <el-card class="door-card">
      <template #header>
        <div class="card-header">
          <h2>门禁控制</h2>
        </div>
      </template>
      <div class="password-section">
        <h3>门禁密码</h3>
        <p class="password" v-if="doorPassword">{{ doorPassword }}</p>
        <p class="no-password" v-else>暂无密码</p>
        <el-button type="primary" :loading="loading" @click="getDoorPassword">
          获取密码
        </el-button>
      </div>
      <div class="door-control-section">
        <h3>开门控制</h3>
        <el-button type="success" :loading="loading" @click="openDoor">
          开门
        </el-button>
      </div>
    </el-card>
  </main>
</template>

<style scoped>
.door-control {
  max-width: 600px;
  min-width: 400px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.door-card {
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-section,
.door-control-section {
  margin: 1.5rem 0;
  text-align: center;
}

.password {
  font-size: 2rem;
  font-weight: bold;
  color: #409eff;
  margin: 1rem 0;
}

.no-password {
  font-size: 1.2rem;
  color: #909399;
  margin: 1rem 0;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #303133;
}

h3 {
  margin: 0 0 1rem;
  font-size: 1.2rem;
  color: #606266;
}
</style>
