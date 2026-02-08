<template>
  <div class="loader-brutal">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<style scoped>
.loader-brutal {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.box {
  width: 12px;
  height: 12px;
  background: var(--black);
  border: 3px solid var(--black);
  animation: bounce 1.2s ease-in-out infinite;
}

.box:nth-child(1) {
  animation-delay: 0s;
}

.box:nth-child(2) {
  animation-delay: 0.15s;
  background: var(--primary);
}

.box:nth-child(3) {
  animation-delay: 0.3s;
}

.box:nth-child(4) {
  animation-delay: 0.45s;
  background: var(--primary);
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scaleY(1) translateY(0);
    box-shadow: 4px 4px 0 var(--black);
  }
  40% {
    transform: scaleY(1.5) translateY(-20px);
    box-shadow: 6px 6px 0 var(--black);
  }
}
</style>