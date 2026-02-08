<template>
  <Transition name="fade-slide" mode="out-in">
    <div class="kpi-container-brutal" :key="totalUsers">
      <!-- KPI Total de usuarios -->
      <div class="kpi-card-brutal">
        <div class="kpi-header">
          <div class="kpi-icon-brutal primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="kpi-label-brutal">TOTAL USUARIOS</div>
        </div>
        <div class="kpi-value-brutal">{{ totalUsers }}</div>
      </div>

      <!-- KPI Último usuario agregado -->
      <Transition name="fade-slide">
        <div class="kpi-card-brutal" v-if="lastUser">
          <div class="kpi-header">
            <div class="kpi-icon-brutal success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div class="kpi-label-brutal">ÚLTIMO AGREGADO</div>
          </div>
          <div class="kpi-value-small-brutal">{{ lastUser.name }}</div>
          <div class="kpi-subtitle-brutal">@{{ lastUser.username }}</div>
        </div>
      </Transition>

      <!-- KPI Resultados filtrados -->
      <Transition name="fade-slide">
        <div class="kpi-card-brutal" v-if="searchQuery">
          <div class="kpi-header">
            <div class="kpi-icon-brutal secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <div class="kpi-label-brutal">FILTRADOS</div>
          </div>
          <div class="kpi-value-brutal">
            {{ filteredCount }} 
            <span class="kpi-total-brutal">/ {{ totalUsers }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  totalUsers: {
    type: Number,
    required: true
  },
  lastUser: {
    type: Object,
    default: null
  },
  searchQuery: {
    type: String,
    default: ''
  },
  filteredCount: {
    type: Number,
    default: 0
  }
});
</script>

<style scoped>
.kpi-container-brutal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.kpi-card-brutal {
  background: var(--white);
  border: 4px solid var(--black);
  padding: 20px;
  box-shadow: var(--shadow-brutal);
  transition: var(--transition);
}

.kpi-card-brutal:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-hover);
}

.kpi-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--black);
  margin-bottom: 12px;
}

.kpi-icon-brutal {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--black);
  background: var(--white);
  padding: 6px;
}

.kpi-icon-brutal svg {
  width: 100%;
  height: 100%;
  stroke: var(--black);
}

.kpi-icon-brutal.primary {
  background: var(--primary);
}

.kpi-icon-brutal.primary svg {
  stroke: white;
}

.kpi-icon-brutal.success {
  background: var(--success);
}

.kpi-icon-brutal.success svg {
  stroke: white;
}

.kpi-icon-brutal.secondary {
  background: var(--secondary);
}

.kpi-icon-brutal.secondary svg {
  stroke: white;
}

.kpi-label-brutal {
  font-size: 11px;
  font-weight: 900;
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1;
}

.kpi-value-brutal {
  font-size: 36px;
  font-weight: 900;
  color: var(--black);
  line-height: 1;
  font-family: 'Courier New', monospace;
}

.kpi-value-small-brutal {
  font-size: 16px;
  font-weight: 900;
  color: var(--black);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kpi-subtitle-brutal {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-light);
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kpi-total-brutal {
  font-size: 18px;
  font-weight: 900;
  color: var(--text-light);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>