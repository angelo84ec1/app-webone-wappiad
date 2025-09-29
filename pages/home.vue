<script setup>
import PinnedCard from "~/components/PinnedCard.vue";
import LanderSlider from "~/components/views/landing/LanderSlider.vue";
import maskGroup from '@/assets/images/background-mateo.png'
</script>

<template>
  <ui-header class="mb-0 bg-secondary bg-indigo-600 bg-gray-800 p-0 text-white"></ui-header>

  <LanderSlider />

  <!-- Stats Section Mejorada -->
  <div class="section-spacing bg-primary-dark relative items-center">
    <div class="container">
      <div class="stats-grid-improved">
        <div class="stat-card-improved">
          <div class="stat-icon">🚀</div>
          <dl>
            <dt class="stat-label-improved">
              {{ $t("pages.landing.pricing.cardOne.title") }}
            </dt>
            <dd class="stat-value-improved">+6</dd>
          </dl>
        </div>
        
        <div class="stat-card-improved">
          <div class="stat-icon">⭐</div>
          <dl>
            <dt class="stat-label-improved">
              {{ $t("pages.landing.pricing.cardTwo.title") }}
            </dt>
            <dd class="stat-value-improved">+10</dd>
          </dl>
        </div>
        
        <div class="stat-card-improved">
          <div class="stat-icon">💼</div>
          <dl>
            <dt class="stat-label-improved">
              {{ $t("pages.landing.pricing.cardThree.title") }}
            </dt>
            <dd class="stat-value-improved">+15</dd>
          </dl>
        </div>
        
        <div class="stat-card-improved">
          <div class="stat-icon">🎯</div>
          <dl>
            <dt class="stat-label-improved">
              {{ $t("pages.landing.pricing.cardFour.title") }}
            </dt>
            <dd class="stat-value-improved">+8</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section Mejorada -->
  <section class="section-spacing bg-white relative overflow-hidden">
    <img
      :src="maskGroup"
      alt="Fondo Mateo"
      class="absolute left-0 top-0 h-full w-1/2 object-cover opacity-50"
    />
    
    <div class="container relative">
      <div class="section-header-improved">
        <h2 class="section-title-improved">
          {{ $t("pages.landing.about.title") }}
        </h2>
        <p class="section-description-improved">
          {{ $t("pages.landing.about.description") }}
        </p>
      </div>

      <div class="content-grid-improved">
        <div class="content-text">
          <h3 class="content-title-improved">
            {{ $t("pages.landing.procesos.wappiad") }}
          </h3>
          <p class="content-subtitle-improved">
            {{ $t("pages.landing.versiculo.mateo") }}
          </p>
        </div>
        <div class="content-image">
          <img
            src="~/assets/images/Mask group.png"
            alt="Hero Image"
            class="rounded-xl w-full shadow-lg hover-scale-effect"
          />
        </div>
      </div>
    </div>
  </section>

  <PinnedCard />

  <!-- Portfolio Section Mejorada -->
  <section class="section-spacing bg-gray-50">
    <div class="container">
      <div class="section-header-improved">
        <h2 class="section-title-improved">
          {{ $t("pages.landing.portafolio.amc") }}
        </h2>
        <p class="section-description-improved">
          {{ $t("pages.landing.portafolio.description") }}
        </p>
      </div>

      <!-- Portfolio Items Mejorados -->
      <div class="portfolio-container">
        <!-- Proyecto 1: Colmena -->
        <div class="portfolio-item-improved">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-dark">REACT</span>
              <span class="tag-dark">STRAPI</span>
              <span class="tag-dark">AWS</span>
              <span class="tag-dark">MYSQL</span>
              <span class="tag-dark">API REST</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example.colmena") }}
              <span class="text-accent">{{ $t("pages.landing.example.colmena2") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price.colmena") }}</strong>
                <span class="text-gray-600">+4k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/colmena_customer.png" alt="Colmena" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 2: AMC -->
        <div class="portfolio-item-improved portfolio-reverse">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-light">NUXT 3</span>
              <span class="tag-light">STRAPI</span>
              <span class="tag-light">MONGO DB</span>
              <span class="tag-light">AWS</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example2.amc2") }}
              <span class="text-accent">{{ $t("pages.landing.example2.amc3") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example2.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price2.amc4") }}</strong>
                <span class="text-gray-600">+5k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price2.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/amc_customer.png" alt="AMC" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 3: Lexcob -->
        <div class="portfolio-item-improved">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-dark">REACT</span>
              <span class="tag-dark">LAVAREL</span>
              <span class="tag-dark">CPANEL</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example3.lexcob") }}
              <span class="text-accent">{{ $t("pages.landing.example3.lexcob1") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example3.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price2.amc4") }}</strong>
                <span class="text-gray-600">+7k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price3.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price3.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/lexcob_customer.png" alt="Lexcob" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 4: Nanocbd -->
        <div class="portfolio-item-improved portfolio-reverse">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-light">WOOCOMMERCE</span>
              <span class="tag-light">SAP BUSINESS ONE</span>
              <span class="tag-light">.NET</span>
              <span class="tag-light">C#</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example4.imvab") }}
              <span class="text-accent">{{ $t("pages.landing.example4.imvab1") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example4.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price4.imvab2") }}</strong>
                <span class="text-gray-600">+6k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price4.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price4.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/nanocbd_customer.png" alt="Nanocbd" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 5: IGO Cars -->
        <div class="portfolio-item-improved">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-dark">FIGMA</span>
              <span class="tag-dark">REACT NATIVE</span>
              <span class="tag-dark">FIRBASE</span>
              <span class="tag-dark">AWS</span>
              <span class="tag-dark">GOOGLE CLOUD</span>
              <span class="tag-dark">CHATGPT</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example5.igo") }}
              <span class="text-accent">{{ $t("pages.landing.example5.igo1") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example5.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price5.igo2") }}</strong>
                <span class="text-gray-600">+50k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price5.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price5.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/igocars_customer.png" alt="IGO Cars" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 6: Lino -->
        <div class="portfolio-item-improved portfolio-reverse">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-light">ANDROID</span>
              <span class="tag-light">IOS</span>
              <span class="tag-light">REACT</span>
              <span class="tag-light">STRAPI</span>
              <span class="tag-light">MYSQL</span>
              <span class="tag-light">AWS</span>
              <span class="tag-light">PAYMENTEZ</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example6.lino") }}
              <span class="text-accent">{{ $t("pages.landing.example6.lino1") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example6.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price6.lino2") }}</strong>
                <span class="text-gray-600">+8k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price6.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price6.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/lino_customers.png" alt="Lino" class="portfolio-img" />
          </div>
        </div>

        <!-- Proyecto 7: Wafidely -->
        <div class="portfolio-item-improved">
          <div class="portfolio-content-improved">
            <div class="portfolio-tags-improved">
              <span class="tag-dark">NUXT 3</span>
              <span class="tag-dark">STRAPI</span>
              <span class="tag-dark">AWS</span>
              <span class="tag-dark">MYSQL</span>
              <span class="tag-dark">API REST</span>
              <span class="tag-dark">PYTHON</span>
              <span class="tag-dark">DOCKER</span>
              <span class="tag-dark">N8N</span>
              <span class="tag-dark">TWILIO</span>
              <span class="tag-dark">CHATGPT</span>
              <span class="tag-dark">ELEVANLABS</span>
            </div>
            <h3 class="portfolio-title-improved">
              {{ $t("pages.landing.example7.wafidely") }}
              <span class="text-accent">{{ $t("pages.landing.example7.wafidely1") }}</span>
            </h3>
            <p class="portfolio-description-improved">
              {{ $t("pages.landing.example7.description") }}
            </p>
            <div class="portfolio-details-improved">
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price7.wafidely2") }}</strong>
                <span class="text-gray-600">+10k</span>
              </p>
              <p class="portfolio-detail">
                <strong>{{ $t("pages.landing.price7.time") }}</strong>
                <span class="text-gray-600">{{ $t("pages.landing.price7.description") }}</span>
              </p>
            </div>
          </div>
          <div class="portfolio-image-improved">
            <img src="~/assets/images/wafidely_customer.png" alt="Wafidely" class="portfolio-img" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technologies Section -->
  <div class="section-spacing bg-accent-light">
    <div class="container">
      <div class="section-header-improved">
        <h2 class="section-title-improved">
          {{ $t("pages.landing.wapp.title") }}
        </h2>
        <p class="section-description-improved">
          {{ $t("pages.landing.wapp.description") }}
        </p>
      </div>
      
      <div class="tech-showcase-improved">
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="React" class="tech-logo-improved" src="@/assets/images/react.png" />
        </a>
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="SAP" class="tech-logo-improved" src="@/assets/images/sap.png" />
        </a>
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="Node.js" class="tech-logo-improved" src="@/assets/images/node.png" />
        </a>
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="Firebase" class="tech-logo-improved" src="@/assets/images/firbase.png" />
        </a>
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="LangChain" class="tech-logo-improved" src="@/assets/images/langchain.png" />
        </a>
        <a target="_blank" href="" class="tech-item-improved">
          <img alt="Python" class="tech-logo-improved" src="@/assets/images/python.png" />
        </a>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <section class="section-spacing bg-white">
    <div class="container">
      <div class="section-header-improved">
        <h2 class="section-title-improved">
          {{ $t("pages.landing.faq.title") }}
        </h2>
        <p class="section-description-improved">
          {{ $t("pages.landing.faq.description") }}
        </p>
      </div>

      <div class="faq-container-improved">
        <div class="faq-list-improved">
          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.subscription_validity.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.subscription_validity.answer") }}
            </div>
          </details>

          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.what_is_wafidely.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.what_is_wafidely.answer") }}
            </div>
          </details>

          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.uses_ai.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.uses_ai.answer") }}
            </div>
          </details>

          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.use_my_business_whatsapp_number.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.use_my_business_whatsapp_number.answer") }}
            </div>
          </details>

          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.landing_page_for_marketing_campaigns.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.landing_page_for_marketing_campaigns.answer") }}
            </div>
          </details>

          <details class="faq-item-improved">
            <summary class="faq-question-improved">
              {{ $t("pages.landing.faq.whatsapp_notifications_number.question") }}
              <div class="faq-icon-improved">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-plus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="faq-minus">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="faq-answer-improved">
              {{ $t("pages.landing.faq.whatsapp_notifications_number.answer") }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>

  <ui-footer></ui-footer>
</template>

<style lang="scss">



html {
  overflow-x: hidden;
  width: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
// Variables CSS estandarizadas
:root {
  --color-primary: #232c4d;
  --color-primary-dark: #1a2142;
  --color-accent: #38f5b3;
  --color-accent-light: rgba(56, 245, 179, 0.1);
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-900: #111827;
  
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  --spacing-3xl: 6rem;
  
  --border-radius-lg: 0.75rem;
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --transition: 250ms ease;
}

// Utilidades base - Optimizado para móviles con márgenes seguros
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  
  @media (min-width: 640px) {
    padding: 0 var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs);
  }
  
  @media (max-width: 360px) {
    padding: 0 var(--spacing-sm);
    margin: 0 var(--spacing-xs);
  }
}

.section-spacing {
  padding: var(--spacing-3xl) 0;
  
  @media (max-width: 768px) {
    padding: var(--spacing-2xl) 0;
  }
}

// Colores de fondo
.bg-primary-dark {
  background-color: var(--color-primary-dark);
}

.bg-accent-light {
  background-color: var(--color-accent-light);
}

.text-accent {
  color: var(--color-accent);
}

// Tipografía estandarizada - Optimizada para móviles con márgenes seguros
.section-title-improved {
  font-family: 'Manrope', sans-serif;
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-gray-900);
  text-align: center;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    line-height: 1.3;
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm) var(--spacing-md);
  }
  
  @media (max-width: 360px) {
    font-size: 1.5rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
}

.section-description-improved {
  font-size: var(--font-size-xl);
  color: var(--color-gray-500);
  text-align: center;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) 0 var(--spacing-xs);
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm) 0 var(--spacing-sm);
    max-width: 100%;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) 0 var(--spacing-xs);
  }
}

.section-header-improved {
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-2xl);
  }
}

.content-title-improved {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
  }
}

.content-subtitle-improved {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  line-height: 1.6;
}

// Stats Section - Una sola fila
.stats-grid-improved {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xs);
  }
}

.stat-card-improved {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--box-shadow-lg);
  text-align: center;
  transition: transform var(--transition);
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
}

.stat-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-xs);
  }
}

.stat-label-improved {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-xs);
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.3;
  }
}

.stat-value-improved {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-accent);
  
  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
  }
}

// Content Grid
.content-grid-improved {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
    
    .content-text {
      order: 2;
    }
    
    .content-image {
      order: 1;
    }
  }
}

// Portfolio Section
.portfolio-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    gap: var(--spacing-2xl);
  }
}

.portfolio-item-improved {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  &:nth-child(even) {
    animation-delay: 200ms;
  }
  
  &.portfolio-reverse {
    .portfolio-content-improved {
      order: 2;
      
      @media (max-width: 768px) {
        order: 2;
      }
    }
    
    .portfolio-image-improved {
      order: 1;
      
      @media (max-width: 768px) {
        order: 1;
      }
    }
  }
}

.portfolio-content-improved {
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm);
  }
  
  @media (max-width: 360px) {
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs);
  }
}

.portfolio-tags-improved {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    gap: 4px;
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm) var(--spacing-lg);
  }
  
  @media (max-width: 360px) {
    gap: 2px;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
}

.tag-dark, .tag-light {
  font-size: 0.875rem;
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 9999px;
  transition: transform var(--transition);
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
}

.tag-dark {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.tag-light {
  background-color: var(--color-accent);
  color: var(--color-primary);
}

.portfolio-title-improved {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-xl);
    line-height: 1.4;
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm) var(--spacing-lg);
  }
  
  @media (max-width: 360px) {
    font-size: 1.25rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
}

.portfolio-description-improved {
  font-size: var(--font-size-lg);
  color: var(--color-gray-700);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm) var(--spacing-lg);
    line-height: 1.5;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
}

.portfolio-details-improved {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--spacing-lg);
    margin: 0 var(--spacing-sm);
  }
  
  @media (max-width: 360px) {
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs);
  }
}

.portfolio-detail {
  font-size: 1rem;
  
  strong {
    color: var(--color-gray-900);
    margin-right: var(--spacing-xs);
  }
}

.portfolio-image-improved {
  position: relative;
}

.portfolio-img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  transition: transform var(--transition);
  
  &:hover {
    transform: scale(1.02);
  }
}

// Tech Section - Una sola fila
.tech-showcase-improved {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-md);
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
  }
}

.tech-item-improved {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  transition: transform var(--transition);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.tech-logo-improved {
  height: 60px;
  width: auto;
  max-width: 100%;
}

// FAQ Section - Optimizado para móviles con márgenes seguros
.faq-container-improved {
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    margin: 0 var(--spacing-xs);
    padding: 0 var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    margin: 0 var(--spacing-sm);
    padding: 0 var(--spacing-lg);
  }
  
  @media (max-width: 360px) {
    margin: 0 var(--spacing-xs);
    padding: 0 var(--spacing-md);
  }
}

.faq-list-improved {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.faq-item-improved {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow);
  transition: all var(--transition);
  
  &:hover {
    box-shadow: var(--box-shadow-lg);
    transform: translateY(-2px);
  }
  
  &[open] {
    .faq-plus {
      display: none;
    }
    
    .faq-minus {
      display: block;
    }
  }
}

.faq-question-improved {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-gray-900);
  cursor: pointer;
  list-style: none;
  transition: color var(--transition);
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  &:hover {
    color: var(--color-accent);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
    font-size: 1rem;
    line-height: 1.4;
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
    line-height: 1.5;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
  
  @media (max-width: 360px) {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.85rem;
    line-height: 1.5;
  }
}

.faq-icon-improved {
  flex-shrink: 0;
  margin-left: var(--spacing-md);
  width: 24px;
  height: 24px;
  color: var(--color-accent);
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-left: var(--spacing-sm);
  }
}

.faq-plus,
.faq-minus {
  width: 100%;
  height: 100%;
  transition: transform var(--transition);
}

.faq-plus {
  display: block;
}

.faq-minus {
  display: none;
}

.faq-answer-improved {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  font-size: 1rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md) var(--spacing-md);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--spacing-md) var(--spacing-sm);
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  @media (max-width: 360px) {
    padding: 0 var(--spacing-sm) var(--spacing-xs);
    font-size: 0.8rem;
    line-height: 1.4;
  }
}

// Efectos hover
.hover-scale-effect {
  transition: transform var(--transition);
  
  &:hover {
    transform: scale(1.05);
  }
}

// Animaciones
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Optimizaciones adicionales para dispositivos muy pequeños con márgenes seguros
@media (max-width: 360px) {
  .section-title-improved {
    font-size: 1.5rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
  
  .section-description-improved {
    font-size: 0.9rem;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) 0 var(--spacing-xs);
  }
  
  .stat-card-improved {
    padding: var(--spacing-sm);
    margin: 0 2px;
  }
  
  .portfolio-tags-improved {
    gap: 2px;
    padding: 0 var(--spacing-md);
    margin: 0 var(--spacing-xs) var(--spacing-md);
  }
  
  .tag-dark, .tag-light {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
  
  .faq-item-improved {
    margin: 0 var(--spacing-xs) var(--spacing-sm);
  }
  
  .tech-showcase-improved {
    padding: var(--spacing-sm);
    margin: 0 var(--spacing-xs);
    gap: var(--spacing-xs);
  }
  
  .tech-logo-improved {
    height: 40px;
  }
  
  // Asegurar que ningún elemento toque los bordes
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
  
  // Elementos que podrían desbordarse
  h1, h2, h3, h4, h5, h6, p, div, span {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  // Contenedores principales con padding de seguridad
  .section-spacing {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
}

// Mantener estilos originales que funcionan
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: content-box;
}

.firstImg {
  opacity: 1;
  transition: all 1.5s ease;
}

.box-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #15172f;
  margin-bottom: 16px;
  z-index: 1;
}

.box-content {
  font-size: 16px;
  line-height: 24px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  color: #475467;
  z-index: 1;
}

.landing-cont {
  display: flex;
  gap: 119px;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.subscription-card {
  width: 100%;
  max-width: 400px;
  margin: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media (width <640px) {
    margin: 1rem;
  }
}

.heading {
  margin-left: 1rem;
  margin-top: 4px;
  padding: 0px 8px;
  background-color: rgb(109, 109, 177);
  border-radius: 16px;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
}

.wrapper {
  @media (width <640px) {
    margin: 0;
    padding: 0;
  }
}

.button {
  background-color: #8b5cf6;
  border-radius: 9px;
  padding: 15px 25px;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button:hover {
  background-color: #4a4a4a;
}

.dark .container {
  background-color: #333;
  color: #fff;
}

.titulo {
  background: linear-gradient(90deg, #18f3dc, #9dfa2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-button {
  background: linear-gradient(90deg, #18f3dc, #9dfa2b);
  border: none;
  color: #232c4d;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background 0.3s ease;
}

.gradient-button:hover {
  background: linear-gradient(90deg, #9dfa2b, #18f3dc);
}

.sectionfooter {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(135deg, #8b5cf6, #00ffff);
  width: 100%;
  height: 550px;
  z-index: -1;
}

.custom-link {
  border-radius: 9px;
  z-index: 0;
}

.column {
  flex: 1;
  padding: 16px;
  z-index: -1;
}

.desk {
  flex: 1;
  padding: 16px;
  z-index: -1;
}

.subscription-price {
  color: #8b5cf6;
}

.contenedor-imagen {
  max-width: 100%;
  height: auto;
}

.scrol-box {
  position: fixed;
  background-color: #f1e8ff;
  height: 440px;
  width: 440px;
  top: calc(50% - 205px);
  z-index: -1;
  opacity: 0;
  visibility: visible;
}

.classb {
  border-radius: 9px;
  background: #ffffff;
  font-size: 15px;
  flex-shrink: 0;
  padding: 15px 25px;
}

.img1 {
  display: block;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: -65px;
}

@media only screen and (max-width: 1076px) {
  .img1 {
    display: block;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    margin-top: -40px;
  }
}

.spacer {
  margin-top: -33px;
}

.spacerfoot {
  height: 25px;
}

.classtitulo {
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  padding: 15px 25px;
}

.bannerfoot img {
  width: 100%;
  height: auto;
  display: block;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-heading {
  animation: fadeInUp 1s ease-in-out;
}

.landing-p .swiper {
  overflow: visible !important;
}

.landing-p .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing-p .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.landing-p .swiper-slide {
  width: 80%;
}

.landing-p .swiper-slide:nth-child(2n) {
  width: 60%;
}

.landing-p .swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>