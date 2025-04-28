<script setup>
</script>

<template>
  <pv-toolbar class="university-toolbar">
    <template #start>
      <div class="toolbar-brand">
        <i class="pi pi-building"></i>
        <span>Science-Focused Universities</span>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.university-toolbar {
  border-radius: 3rem !important;
  padding: 0.8rem 1.5rem !important;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
}

.toolbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toolbar-brand i {
  font-size: 1.75rem;
  color: white;
}

.toolbar-brand span {
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
  letter-spacing: 0.5px;
}
</style>