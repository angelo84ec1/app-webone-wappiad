<script setup>
// Props para JavaScript (sin TypeScript)
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  titleHighlight: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  priceLabel: {
    type: String,
    required: true
  },
  timeLabel: {
    type: String,
    required: true
  },
  timeDescription: {
    type: String,
    required: true
  },
  tagVariant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  layout: {
    type: String,
    default: 'image-left',
    validator: (value) => ['image-left', 'image-right'].includes(value)
  },
  animationDelay: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div 
    class="portfolio-card"
    :class="{ 'portfolio-card-reverse': layout === 'image-right' }"
    :style="{ 'animation-delay': `${animationDelay}ms` }"
  >
    <div class="portfolio-card-content">
      <!-- Tags -->
      <div class="portfolio-card-tags">
        <span
          v-for="tag in tags"
          :key="tag"
          class="portfolio-card-tag"
          :class="{
            'portfolio-card-tag-dark': tagVariant === 'dark',
            'portfolio-card-tag-light': tagVariant === 'light'
          }"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="portfolio-card-title">
        {{ title }}
        <span v-if="titleHighlight" class="text-accent">{{ titleHighlight }}</span>
      </h3>

      <!-- Description -->
      <p class="portfolio-card-description">
        {{ description }}
      </p>

      <!-- Details -->
      <div class="portfolio-card-details">
        <div class="portfolio-card-detail">
          <span class="portfolio-card-detail-label">{{ priceLabel }}</span>
          <span class="portfolio-card-detail-value">{{ price }}</span>
        </div>
        <div class="portfolio-card-detail">
          <span class="portfolio-card-detail-label">{{ timeLabel }}</span>
          <span class="portfolio-card-detail-value">{{ timeDescription }}</span>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div class="portfolio-card-image">
      <div class="portfolio-card-image-wrapper">
        <img
          :src="image"
          :alt="`Portfolio: ${title}`"
          class="portfolio-card-img"
        />
        <div class="portfolio-card-image-overlay"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  opacity: 0;
  animation: slideInUp 0.8s ease-out forwards;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  &.portfolio-card-reverse {
    .portfolio-card-content {
      order: 2;
      
      @media (max-width: 768px) {
        order: 2;
      }
    }
    
    .portfolio-card-image {
      order: 1;
      
      @media (max-width: 768px) {
        order: 1;
      }
    }
  }
}

.portfolio-card-content {
  @media (max-width: 768px) {
    text-align: center;
  }
}

.portfolio-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.portfolio-card-tag {
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &.portfolio-card-tag-dark {
    background-color: var(--color-primary, #232c4d);
    color: var(--color-white, #ffffff);
  }
  
  &.portfolio-card-tag-light {
    background-color: var(--color-accent, #38f5b3);
    color: var(--color-primary, #232c4d);
  }
}

.portfolio-card-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--color-primary, #232c4d);
  margin-bottom: 1.5rem;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  .text-accent {
    color: var(--color-accent, #38f5b3);
  }
}

.portfolio-card-description {
  font-size: 1.125rem;
  color: var(--color-gray-700, #374151);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.portfolio-card-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.portfolio-card-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.portfolio-card-detail-label {
  font-weight: 600;
  color: var(--color-gray-900, #111827);
}

.portfolio-card-detail-value {
  color: var(--color-gray-600, #4b5563);
}

.portfolio-card-image {
  position: relative;
}

.portfolio-card-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    .portfolio-card-img {
      transform: scale(1.05);
    }
    
    .portfolio-card-image-overlay {
      opacity: 1;
    }
  }
}

.portfolio-card-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.portfolio-card-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(56, 245, 179, 0.1) 0%,
    rgba(35, 44, 77, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Variantes de animación
.portfolio-card:nth-child(even) {
  animation-duration: 0.9s;
}

.portfolio-card:nth-child(3n) {
  animation-duration: 1s;
}

// Responsive improvements
@media (max-width: 640px) {
  .portfolio-card {
    gap: 1.5rem;
  }
  
  .portfolio-card-title {
    font-size: 1.25rem;
  }
  
  .portfolio-card-description {
    font-size: 1rem;
  }
}

// Dark mode support
@media (prefers-color-scheme: dark) {
  .dark {
    .portfolio-card-title {
      color: var(--color-white, #ffffff);
    }
    
    .portfolio-card-description {
      color: var(--color-gray-300, #d1d5db);
    }
    
    .portfolio-card-detail-label {
      color: var(--color-gray-100, #f3f4f6);
    }
    
    .portfolio-card-detail-value {
      color: var(--color-gray-400, #9ca3af);
    }
  }
}
</style>