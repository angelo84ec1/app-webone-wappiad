<template>
    <Transition name="fade">
      <div v-if="show" class="loading-wrapper">
        <div class="loading-content">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div class="loading-text">
            <h2 class="loading-title">{{ message.title }}</h2>
            <p class="loading-subtitle">{{ message.subtitle }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    show: {
      type: Boolean,
      default: true
    }
  });
  
  const messages = {
    es: { title: 'Cargando', subtitle: 'Por favor espera...' },
    en: { title: 'Loading', subtitle: 'Please wait...' },
    pt: { title: 'Carregando', subtitle: 'Por favor aguarde...' }
  };
  
  const message = computed(() => {
    if (process.client) {
      const lang = navigator.language.split('-')[0];
      return messages[lang] || messages.es;
    }
    return messages.es;
  });
  </script>
  
  <style scoped lang="scss">
  .loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #232c4d 0%, #1a2142 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    pointer-events: all;
  }
  
  .loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  // Transición fade
  .fade-enter-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .lds-spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #38f5b3;
  }
  
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  .loading-text {
    text-align: center;
    color: #ffffff;
  }
  
  .loading-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #38f5b3;
  }
  
  .loading-subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  @media (max-width: 768px) {
    .loading-title {
      font-size: 1.25rem;
    }
    
    .loading-subtitle {
      font-size: 0.875rem;
    }
    
    .lds-spinner {
      width: 60px;
      height: 60px;
    }
    
    .lds-spinner div {
      transform-origin: 30px 30px;
    }
    
    .lds-spinner div:after {
      left: 27px;
    }
  }
  </style>