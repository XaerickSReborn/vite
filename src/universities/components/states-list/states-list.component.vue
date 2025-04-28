<script>
import StatesItem from '../states-item/states-item.component.vue';
import { LogoApiService } from '../../../shared/services/logo-api.service.js';

export default {
  components: {
    StatesItem
  },
  props: {
    universities: {
      type: Array,
      required: true
    }
  },
  methods: {
    getLogoUrl(domain) {
      const logoService = new LogoApiService()
      return logoService.getUrlToLogo(domain)
    }
  }
}
</script>

<template>
  <div class="universities-list">
    <states-item
      v-for="university in universities"
      :key="university.name"
      :university="university"
      :logoUrl="university.domains && university.domains.length > 0 ? getLogoUrl(university.domains[0]) : ''"
    />
  </div>
</template>

<style scoped>
.universities-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
