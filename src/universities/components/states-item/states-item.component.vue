<script>
  export default {
    props: {
      university: {
        type: Object,
        required: true
      },
      logoUrl: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
    <div class="university-card">
    <img :src="logoUrl" alt="University Logo" class="university-logo" />
    <div class="university-content">
      <h3 class="university-name">{{ university.name }}</h3>
      <p class="university-location">{{ university.country }} ({{ university.alpha_two_code }})</p>
      <p class="university-domains">
        <span class="domain-label">Dominios:</span>
        <span v-if="university.domains && university.domains.length" class="domain-list">
          {{ university.domains.join(', ') }}
        </span>
        <span v-else class="no-data">
          No domains available
        </span>
      </p>
      <a
        v-if="university.web_pages && university.web_pages.length"
        :href="university.web_pages[0]"
        target="_blank"
        class="university-website"
      >
        Visitar sitio web
      </a>
      <span v-else class="no-data">
        No website available
      </span>
    </div>
  </div>
</template>
  
  
  
<style scoped>
/* Contenedor para organizar múltiples tarjetas */
.university-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

/* Estilos mejorados para University Card */
.university-card {
  display: flex;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
  position: relative;
}

.university-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.university-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  padding: 1rem;
  background-color: var(--light-bg);
  border-right: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.university-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.university-name {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 600;
  line-height: 1.3;
  position: relative;
  padding-bottom: 0.5rem;
}

.university-name::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.university-location {
  margin: 0 0 1rem 0;
  color: #555;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  background-color: rgba(76, 175, 80, 0.08);
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  width: fit-content;
}

.university-domains {
  margin: 0 0 1.25rem 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  background-color: #f9f9f9;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid var(--accent-color);
}

.domain-label {
  font-weight: 600;
  margin-right: 0.5rem;
  color: #444;
}

.domain-list {
  color: #555;
  word-break: break-all;
}

.university-website {
  display: inline-block;
  background-color: var(--secondary-color);
  color: white;
  padding: 0.6rem 1.25rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.university-website:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.no-data {
  color: #999;
  font-style: italic;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.3rem 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .university-card {
    flex-direction: column;
  }
  
  .university-logo {
    width: 100%;
    height: 140px;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.university-card {
  animation: fadeIn 0.5s ease-out;
}
  
</style>