<template>
  <div class="app-wrapper" :class="{hideSidebar: isCollapse}">
    <sidebar v-if="user" :routes="routes" :isCollapse="isCollapse" class="sidebar-container"></sidebar>
    <div :class="{'offset': user}" class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
    <div :class="{'offset': user}" class="copyright" ref="copyright">
      Copyright &copy; {{ new Date().getFullYear() }}
      <i class="el-icon-fa-heartbeat"></i>
      Powered by <a class="link-type" href="http://betahouse.us" target="_black">β-house</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './Navbar'
import AppMain from './AppMain'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    isCollapse() {
      return this.sidebar.isCollapse
    },
    routes() {
      // console.log(this.permissionRoutes)
      // return this.$router.options.routes
      return this.permissionRoutes
    },
    ...mapGetters([
      'sidebar',
      'user',
      'permissionRoutes'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/mixin.scss";

.copyright {
  // position: absolute;
  text-align: center;
  line-height: 30px;
  margin-top: -30px;
  background: #ebeef5;
  color: #1f2d3d;
}

.offset {
  margin-left: 180px;
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.hideSidebar {
    .sidebar-container {
      // width: 40px;
      overflow: hidden;
    }
    .main-container {
      position: relative;
      margin-left: 65px;
      min-height: 100%;
    }
  }
  .sidebar-container {
    transition: width 0.28s ease-out; // width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none
    }
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s ease-out; // margin-left: 180px;
  }
}
</style>
