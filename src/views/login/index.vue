<script setup lang="ts">
import url from '@/assets/logo.png'
import { ref, } from "vue"
import { useRouter } from "vue-router"
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()

let PWchecked = ref<Boolean>(false)
interface RuleForm {
  username: "",
  password: ""
}
const ruleFormRef = ref<FormInstance>()


let ruleForm = ref<RuleForm>({
  username: "",
  password: ""
})

const rules = ref<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
  ]
})


if (localStorage.getItem('userInfo')) {
  if (JSON.parse(localStorage.getItem('userInfo')!).isChecked) {
    PWchecked.value = JSON.parse(localStorage.getItem('userInfo')!).isChecked
    ruleForm.value = {
      username: JSON.parse(localStorage.getItem('userInfo')!).username,
      password: JSON.parse(localStorage.getItem('userInfo')!).password
    }
  }
}

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {

      if (PWchecked) {
        localStorage.setItem('userInfo', JSON.stringify({
          username: ruleForm.value.username,
          password: ruleForm.value.password,
          isChecked: PWchecked.value
        }))
      } else {
        localStorage.removeItem('userInfo')
      }
      router.push({ path: '/' })



      // const data = await this.$http.get('user/login', {
      //   params: this.ruleForm
      // })

      // this.$store.dispatch("setToken", this.ruleForm.username).then(() => {
      //   this.$router.push({ path: "/" })
      // }).catch(res => {
      //   this.$message({
      //     showClose: true,
      //     message: res,
      //     type: "error"
      //   })
      // })


      return
      // const data = await this.$http.fetchLogin({
      //   pageNumber: '1',
      //   pageSize: '5'
      // })
      // if (data.data.code !== '200') return this.$message.error(data.data.message)
      // this.$message.success('恭喜你，登录成功')

      // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
      // that.$store.dispatch("setToken", that.loginForm.username).then(() => {
      //   that.$router.push({path: "/"})
      // }).catch(res => {
      //   that.$message({
      //     showClose: true,
      //     message: res,
      //     type: "error"
      //   })
      // })


      // sessionStorage.setItem('token', 'Bearer ' + data.data.token)
      // sessionStorage.setItem('userName', this.ruleForm.username)
      // sessionStorage.setItem('userId', data.data.user_id)
      // if (this.ruleForm.username === 'superadmin') {
      //   sessionStorage.setItem('isAdmin', '1')
      // } else {
      //   sessionStorage.setItem('isAdmin', '')
      // }
      // if (this.PWchecked) {
      //   localStorage.setItem('userInfo', JSON.stringify({
      //     username: this.ruleForm.username,
      //     password: this.ruleForm.password,
      //     isChecked: this.PWchecked
      //   }))
      // } else {
      //   localStorage.removeItem('userInfo')
      // }
      // sessionStorage.setItem('activePath', '/index')
      // this.$router.push({ path: '/index' })
    } else {
      console.log('校验失败')
      return false
    }
  })
}

</script>

<template>
  <div class="main">
    <el-card>
      <div class="systemName">
        <el-image :src="url" fit="scale-down"></el-image>
        <div>后台管理系统</div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="username">
          <el-input v-model.trim="ruleForm.username" @keydown.enter.native="login(ruleFormRef)" placeholder="请输入用户名" round
            :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="ruleForm.password" @keydown.enter.native="login(ruleFormRef)" placeholder="请输入密码" round
            show-password :prefix-icon="Lock"></el-input>
        </el-form-item>
      </el-form>
      <el-row type="flex" justify="start" class="save_pw">
        <el-checkbox v-model="PWchecked">记住密码</el-checkbox>
      </el-row>
      <el-row>
        <el-button @click="login(ruleFormRef)" round type="primary">登录</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: url('@/assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-button {
  width: 100%;
}

.systemName {
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
}

.el-card {
  background: transparent;
  border: 0;
  box-shadow: 0 0 0 0;
  text-align: center;
}

.el-input {
  // /deep/ .el-input__inner {
  //   background: transparent;
  //   border-radius: 20px;
  //   color: #fff;
  // }

  // /deep/ input:-webkit-autofill,
  // input:-webkit-autofill:hover,
  // input:-webkit-autofill:focus,
  // input:-webkit-autofill:active {
  //   -webkit-transition-delay: 9999999999s !important;
  //   -webkit-transition: color 9999999999s ease-out, background-color 9999999999s ease-out;
  // }
}

.save_pw {
  margin-bottom: 10px;

  .el-checkbox {
    color: rgb(180, 180, 180);
  }
}
</style>

<!-- <script>
import mix from './Login-mixins.js'
export default {
  mixins: [mix]
}
</script> -->
<!-- 
<style scoped lang="less">
.main {
  height: 100vh;
  background: url('../../assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-button {
  width: 100%;
}
.systemName {
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
}
.el-card {
  background: transparent;
  border: 0;
  box-shadow: 0 0 0 0;
  text-align: center;
}
.el-input {
  /deep/ .el-input__inner {
    background: transparent;
    border-radius: 20px;
    color: #fff;
  }
  /deep/ input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999999999s !important;
    -webkit-transition: color 9999999999s ease-out, background-color 9999999999s ease-out;
  }
}
.save_pw {
  margin-bottom: 10px;
  .el-checkbox {
    color: rgb(180, 180, 180);
  }
}
</style> -->
