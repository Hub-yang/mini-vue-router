<template>
  <div>
    <!-- 路由跳转 -->
    <p>
      <router-link to="/">go to home</router-link>
      <span>||</span>
      <router-link to="/about">go to about</router-link>
    </p>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
