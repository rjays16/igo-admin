<template>
  <a-form layout="vertical" class="filter-generate">
    <a-row :gutter="16">
      <a-col>
        <a-form-item label="From">
          <a-date-picker />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item label="To">
          <a-date-picker />
        </a-form-item>
      </a-col>
      <a-col>
        <a-form-item>
          <a-button type="primary" html-type="submit">Generate</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>

</script>
<style scoped>
.ant-form-vertical > :deep(.ant-row) {
  align-items: flex-end;
}
</style>