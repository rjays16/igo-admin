<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <span class="user-avatar"></span>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  
});
</script>

<style scoped>
.user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: block;
    background: #d4d4d4;
}
</style>