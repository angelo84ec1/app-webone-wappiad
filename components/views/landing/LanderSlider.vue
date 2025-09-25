<template>
  <section class="bg-[#232c4d] mt-0 overflow-hidden pb-[5%] px-[32px] pl-[70px] mobile-optimized">
    <div class="landing-cont !py-12 flex flex-col lg:flex-row items-center">
      <!-- Left Content -->
      <div
        class="mr-auto place-self-center w-full lg:w-[60%] h-[300px] md:h-[340px] lg:h-[600px] overflow-hidden relative mobile-content"
      >
        <transition-group
          name="custom-slide-up"
          tag="div"
          class="absolute w-full h-full"
        >
          <div
            :key="currentIndex"
            class="slide-content absolute w-full text-center lg:text-left mobile-slide"
          >
            <p
              class="font-manrope max-w-2xl mb-2 font-light text-[#ffffff] lg:mb-4 md:text-base lg:text-base dark:text-gray-400 mobile-subtitle"
              aria-live="polite"
            >
              {{ t(subtitles[currentIndex]) }}
            </p>

            <h1
              class="titulo max-w-3xl mb-5 font-bold tracking-wide tracking-tight leading-normal md:text-5xl dark:text-white animated-heading pb-2 mobile-title"
              aria-live="polite"
            >
              {{ t(titles[currentIndex]) }}
            </h1>

            <p
              class="max-w-2xl mb-4 font-light text-[#ffffff] lg:mb-8 md:text-lg lg:text-m dark:text-gray-400 mobile-description"
              aria-live="polite"
            >
              {{ t(descriptions[currentIndex]) }}
            </p>

            <a
              href="#"
              class="gradient-button inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mobile-button"
            >
              {{ t("pages.landing.hero.button") }}
            </a>
          </div>
        </transition-group>
      </div>

      <!-- Right Content -->
      <div
        class="mr-auto place-self-center w-full lg:w-[40%] landing-p mt-8 lg:mt-0 mobile-images"
      >
        <div class="flex items-center space-x-4 gap-[30px] w-full relative mobile-images-container">
          <transition-group
            name="custom-fade"
            tag="div"
            class="flex items-center space-x-4 gap-[30px] overflow-hidden mobile-images-wrapper"
          >
            <div
              v-for="(image, index) in images"
              :key="image"
              :class="[
                'rounded-lg transition-all duration-500 ease-in-out mobile-image-slide',
                index === 0
                  ? 'w-[30rem] lg:w-[50rem] h-auto lg:h-[30rem] opacity-100 firstImg z-10 mobile-primary'
                  : 'w-[10rem] lg:w-[20rem] h-auto lg:h-[20rem] opacity-50 z-0 mobile-secondary',
              ]"
              @click="setAsFirst(index)"
            >
              <img
                :src="image"
                alt="Image Slide"
                class="w-full h-full object-contain"
              />
            </div>
          </transition-group>

          <transition name="custom-fade" tag="div" class="overflow-hidden mobile-outer">
            <div
              class="absolute lg:top-[15%] top-[0%] left-0 transition-all duration-500 ease-in-out h-[30rem] w-[30rem] lg:h-[22rem] lg:w-[22rem] mobile-outer-wrapper"
            >
              <img
                :src="outerSource()"
                alt="Outer"
                class="w-full h-full object-contain"
              />
            </div>
          </transition>
        </div>
        
        <!-- Mobile Navigation Dots -->
        <div class="mobile-dots">
          <button
            v-for="(_, index) in images"
            :key="`dot-${index}`"
            :class="['dot', { 'dot-active': index === 0 }]"
            @click="setAsFirst(index)"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "~/assets/images/landing-1.png";
import img2 from "~/assets/images/landing-2.png";
import img3 from "~/assets/images/landing-3.png";

const { t } = useI18n();

const images = ref([img3, img2, img1]);
const currentIndex = ref(0);

const subtitles = [
  "pages.landing.hero.firstSubtitle",
  "pages.landing.hero.secondSubtitle",
  "pages.landing.hero.thirdSubtitle",
];

const titles = [
  "pages.landing.hero.firstTitle",
  "pages.landing.hero.secondTitle",
  "pages.landing.hero.thirdTitle",
];

const descriptions = [
  "pages.landing.hero.firstDescription",
  "pages.landing.hero.secondDescription",
  "pages.landing.hero.thirdDescription",
];

const outerImagesLine = ref([
  new URL("~/assets/images/svgs/download.svg", import.meta.url).href,
  new URL("~/assets/images/svgs/download (2).svg", import.meta.url).href,
  new URL("~/assets/images/svgs/download(1).svg", import.meta.url).href,
]);

let timer = null;

const outerSource = () => outerImagesLine.value[0];

const rotateImages = () => {
  images.value.push(images.value.shift());
  outerImagesLine.value.push(outerImagesLine.value.shift());
  currentIndex.value = (currentIndex.value + 1) % subtitles.length;
};

const resetTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(rotateImages, 5000);
};

const setAsFirst = (index) => {
  images.value.unshift(images.value.splice(index, 1)[0]);
  outerImagesLine.value.unshift(outerImagesLine.value.splice(index, 1)[0]);
  currentIndex.value = index;
  resetTimer();
};

onMounted(resetTimer);
onUnmounted(() => timer && clearInterval(timer));
</script>

<style scoped>
/* Mantener animaciones originales exactamente igual */
.custom-slide-up-enter-active,
.custom-slide-up-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.custom-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20%);
}

.custom-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

.custom-fade-enter-active,
.custom-fade-leave-active {
  transition: opacity 0.5s ease;
}

.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}

.custom-fade-enter-to,
.custom-fade-leave-from {
  opacity: 1;
}

/* Mantener regla original de centrado */
@media (max-width: 1024px) {
  .slide-content {
    text-align: center;
  }
}

/* OPTIMIZACIONES SOLO PARA MÓVILES */

/* Ajustar padding de sección principal solo en móviles */
@media (max-width: 1023px) {
  .mobile-optimized {
    padding: 2rem 1.5rem 8% 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .mobile-optimized {
    padding: 1.5rem 1rem 8% 1rem !important;
  }
}

@media (max-width: 480px) {
  .mobile-optimized {
    padding: 1rem 0.75rem 8% 0.75rem !important;
  }
}

/* Ajustar contenido de texto en móviles */
@media (max-width: 768px) {
  .mobile-slide {
    padding: 0 1rem;
  }
  
  .mobile-title {
    font-size: 1.875rem !important;
    line-height: 1.3 !important;
    word-wrap: break-word;
    hyphens: auto;
  }
  
  .mobile-subtitle {
    font-size: 0.875rem !important;
    word-wrap: break-word;
    hyphens: auto;
  }
  
  .mobile-description {
    font-size: 1rem !important;
    word-wrap: break-word;
    hyphens: auto;
  }
  
  .mobile-button {
    font-size: 0.875rem !important;
    padding: 0.75rem 1.5rem !important;
  }
}

@media (max-width: 480px) {
  .mobile-slide {
    padding: 0 0.75rem;
  }
  
  .mobile-title {
    font-size: 1.5rem !important;
  }
  
  .mobile-subtitle {
    font-size: 0.8rem !important;
  }
  
  .mobile-description {
    font-size: 0.9rem !important;
  }
}

/* Ajustar imágenes en móviles */
@media (max-width: 1023px) {
  .mobile-images-container {
    gap: 1rem !important;
    justify-content: center;
  }
  
  .mobile-images-wrapper {
    gap: 1rem !important;
  }
}

@media (max-width: 768px) {
  .mobile-image-slide.mobile-primary {
    width: 220px !important;
    height: 220px !important;
  }
  
  .mobile-image-slide.mobile-secondary {
    width: 80px !important;
    height: 100px !important;
  }
  
  .mobile-outer-wrapper {
    height: 150px !important;
    width: 150px !important;
    top: -5% !important;
    left: -15% !important;
  }
  
  .mobile-images-container {
    gap: 0.75rem !important;
  }
  
  .mobile-images-wrapper {
    gap: 0.75rem !important;
  }
}

@media (max-width: 480px) {
  .mobile-image-slide.mobile-primary {
    width: 180px !important;
    height: 180px !important;
  }
  
  .mobile-image-slide.mobile-secondary {
    width: 60px !important;
    height: 80px !important;
  }
  
  .mobile-outer-wrapper {
    height: 120px !important;
    width: 120px !important;
    top: -10% !important;
    left: -20% !important;
  }
  
  .mobile-images-container {
    gap: 0.5rem !important;
  }
  
  .mobile-images-wrapper {
    gap: 0.5rem !important;
  }
}

@media (max-width: 360px) {
  .mobile-image-slide.mobile-primary {
    width: 160px !important;
    height: 160px !important;
  }
  
  .mobile-image-slide.mobile-secondary {
    width: 50px !important;
    height: 70px !important;
  }
  
  .mobile-outer-wrapper {
    height: 100px !important;
    width: 100px !important;
  }
}

/* Navegación móvil con dots */
.mobile-dots {
  display: none;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

@media (max-width: 1023px) {
  .mobile-dots {
    display: flex;
  }
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  cursor: pointer;
  transition: all 0.25s ease;
}

.dot.dot-active {
  background: #38f5b3;
  border-color: #38f5b3;
}

.dot:hover {
  border-color: rgba(255, 255, 255, 0.8);
}

/* Transiciones más suaves en móviles */
@media (max-width: 768px) {
  .mobile-image-slide {
    transition: all 0.3s ease-in-out !important;
  }
  
  .custom-slide-up-enter-from,
  .custom-slide-up-leave-to {
    transform: translateY(15px) !important;
  }
}
</style>