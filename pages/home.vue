<script setup>
import PinnedCard from "~/components/PinnedCard.vue";
import LanderSlider from "~/components/views/landing/LanderSlider.vue";
import maskGroup from '@/assets/images/background-mateo.png'

</script>

<template>
  <ui-header
    class="mb-0 bg-secondary bg-indigo-600 bg-gray-800 p-0 text-white"
  ></ui-header>

  <LanderSlider />
  <!-- <views-landing-scroll-section /> -->

  <div class="hidden sm:hidden lg:block bg-[#232c4d] relative items-center h-64 sm:h-120 lg:h-full pb-12">
    <div class="max-w-7xl mx-auto  sm:px-6 lg:py-20 lg:px-8 relative -mt-56">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 relative -mt-8">
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >

       
          <div class="px-4 py-15 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                {{ $t("pages.landing.pricing.cardOne.title") }}
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-[#18f3dc] dark:text-[#18f3dc]"
              >
                +6
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-0 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                {{ $t("pages.landing.pricing.cardTwo.title") }}
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-[#18f3dc] dark:text-[#18f3dc]"
              >
                +10
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                {{ $t("pages.landing.pricing.cardThree.title") }}
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-[#18f3dc] dark:text-[#18f3dc]"
              >
                +15
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-0 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                {{ $t("pages.landing.pricing.cardFour.title") }}
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-[#18f3dc] dark:text-[#18f3dc]"
              >
                +8
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="relative text-white py-20 px-4 overflow-hidden z-0">
    <!-- Imagen de fondo a la izquierda -->
    <img
      :src="maskGroup"
      alt="Fondo Mateo"
      class="absolute left-0 top-0 h-full w-1/2 object-cover z-0"
    />

    
    <div class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
    {{ $t("pages.landing.about.title") }}
  </div>
  <div class="text-gray-500 text-center text-3xl leading-12 mb-9">
   
    {{ $t("pages.landing.about.description") }}
  </div>
    <div class="mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
     
        <h2 class="text-3xl font-bold leading-tight mb-18 text-[#232c4d] px-8">
         
          {{ $t("pages.landing.procesos.wappiad") }}
        </h2>
        <h2 class="text-xl mb-4 text-[#232c4d] p-8 px-8 z-0">
        {{ $t("pages.landing.versiculo.mateo") }}
        </h2>
      </div>
      <div class="md:w-1/2">
        <img
          src="~/assets/images/Mask group.png"
          alt="Hero Image"
          class="w-full rounded-xl"
        />
      </div>
    </div>
    
  </section>

  <PinnedCard />
  <!-- <div
    id="services"
    class="section container relative rounded-lg bg-white z-[-2]"
  >
    <div class="fixed bg-gray-300 h-[100px] w-[100px] scrol-box"></div>
    <div
      class="hidden lg:mt-0 lg:col-span-5 lg:flex pb-12 pin-sec !py-[200px] justify-between"
    >
      <div class="flex flex-col items-center gap-7 pin-left">
        <div v-for="(content, index) in pinContent">
          <div
            class="flex items-center gap-4 h-[40vh] flex-col max-w-[430px] relative"
          >
            <img :src="pinImage[index]" alt="icon" class="w-20 h-20" />
            <div class="flex justify-center flex-col items-center">
              <h3 class="box-title">
                {{ content.title }}
              </h3>
              <p class="box-content text-center">{{ content.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col !z-10 h-[100vh] pin-right relative">
        <h3
          class="titulo max-w-3xl mb-5 font-bold tracking-wide tracking-tight leading-normal md:text-6xl dark:text-white animated-heading"
        >
          Why become a Member?
        </h3>
        <p class="mb-8" >
          Join 4000+ members landing remote roles at global companies with
          tailored career support.
        </p>
        <a
          href="#"
          class="gradient-button inline-flex max-w-[200px] items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Ver planes
        </a>
      </div>
    </div>
  </div> -->
<!--  Portafolio de desarrollos -->

  <section class="text-white px-4 -mt-15">
    <div class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
    {{ $t("pages.landing.portafolio.amc") }}
  </div>
  <p class="text-gray-500 text-center text-3xl leading-12 mb-9">
      {{ $t("pages.landing.portafolio.description") }}
    </p>
    <div class=" py-16 px-8">
  <!-- Contenedor Principal -->
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/colmena_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>

    <!-- Columna Derecha: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">REACT</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">STRAPI</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">AWS</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">MYSQL</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">API REST</span>
      </div>
      <!-- Título -->
      <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">

        {{ $t("pages.landing.example.colmena") }}
        <span style="color: #38f5b3;">{{ $t("pages.landing.example.colmena2") }}</span>
      </h2>
      <!-- Descripción -->
      <p class="text-gray-700 text-lg mb-6">
        {{ $t("pages.landing.example.description") }}
      </p>
      <!-- Detalles -->
      <div class="text-gray-600">
        <p class="mb-2">
          <strong> {{ $t("pages.landing.price.colmena") }}</strong><a href="#" class="text-gray-600 ">+4k</a>
        </p>
        <p>
          <strong>  {{ $t("pages.landing.price.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price.description") }}</a>
        </p>
      </div>
    </div>
  </div>



  <div class=" py-16 px-8">
  <!-- Contenedor Principal -->
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">NUXT 3</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">STRAPI</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">MONGO DB</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">AWS</span>
      </div>
     <!-- Título -->
     <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">

{{ $t("pages.landing.example2.amc2") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example2.amc3") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example2.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price2.amc4") }}</strong><a href="#" class="text-gray-600 "> +5k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price2.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price.description") }}</a>
</p>
      </div>
    </div>

    <!-- Columna Derecha: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/amc_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>
  </div>
</div>


<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/lexcob_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>

    <!-- Columna Derecha: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">REACT</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">LAVAREL</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">CPANEL</span>

      </div>
           <!-- Título -->
     <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">

{{ $t("pages.landing.example3.lexcob") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example3.lexcob1") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example3.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price2.amc4") }}</strong><a href="#" class="text-gray-600 ">+7k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price3.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price3.description") }}</a>
</p>
      </div>
    </div>
  </div>
 

  <div class=" py-16 px-8">
  <!-- Contenedor Principal -->
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">WOOCOMMERCE</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">SAP BUSINESS ONE</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">.NET</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">C#</span>
      </div>
       <!-- Título -->
       <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">

{{ $t("pages.landing.example4.imvab") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example4.imvab1") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example4.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price4.imvab2") }}</strong><a href="#" class="text-gray-600 "> +6k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price4.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price4.description") }}</a>
</p>
      </div>
    </div>

    <!-- Columna Derecha: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/nanocbd_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>
  </div>
</div> 


<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/igocars_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>

    <!-- Columna Derecha: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">FIGMA</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">REACT NATIVE</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">FIRBASE</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">AWS</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">GOOGLE CLOUD</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">CHATGPT</span>
      </div>
       <!-- Título -->
       <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">

{{ $t("pages.landing.example5.igo") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example5.igo1") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example5.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price5.igo2") }}</strong><a href="#" class="text-gray-600 ">+50k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price5.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price5.description") }}</a>
</p>
      </div>
    </div>
  </div>


  <div class=" py-16 px-8">
  <!-- Contenedor Principal -->
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">ANDROID</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">IOS</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">REACT</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">STRAPI</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">MYSQL</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">AWS</span>
        <span class="bg-[#38f5b3] text-[#232c4d] text-sm font-semibold px-3 py-1 rounded-full">PAYMENTEZ</span>
      </div>
      <!-- Título -->
      <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">
        {{ $t("pages.landing.example6.lino") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example6.lino1") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example6.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price6.lino2") }}</strong><a href="#" class="text-gray-600 ">+8k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price6.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price6.description") }}</a>
</p>
      </div>
    </div>

    <!-- Columna Derecha: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/lino_customers.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>
  </div>
</div> 



<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Columna Izquierda: Imagen -->
    <div class="w-full md:w-1/2">
      <img
        src="~/assets/images/wafidely_customer.png"
        alt="Imagen Ejemplo"
        class="rounded-lg shadow-lg w-full"
      />
    </div>

    <!-- Columna Derecha: Texto -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">NUXT 3</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">STRAPI</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">AWS</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">MYSQL</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">API REST</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">PYTHON</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">DOCKER</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">N8N</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">TWILIO</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">CHATGPT</span>
        <span class="bg-[#232c4d] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full">ELEVANLABS</span>
      </div>
      <!-- Título -->
      <h2 class="text-3xl font-bold text-blue-900 leading-snug mb-4">
        {{ $t("pages.landing.example7.wafidely") }}
<span style="color: #38f5b3;">{{ $t("pages.landing.example7.wafidely1") }}</span>
</h2>
<!-- Descripción -->
<p class="text-gray-700 text-lg mb-6">
{{ $t("pages.landing.example7.description") }}
</p>
<!-- Detalles -->
<div class="text-gray-600">
<p class="mb-2">
  <strong> {{ $t("pages.landing.price7.wafidely2") }}</strong><a href="#" class="text-gray-600 ">+10k</a>
</p>
<p>
  <strong>  {{ $t("pages.landing.price7.time") }} </strong> <a href="#" class="text-gray-600 ">{{ $t("pages.landing.price7.description") }}</a>
</p>
      </div>
    </div>
  </div>


</div>






  </section>

  <div class="bg-[#38F5B3]/30 w-full px-4 pt-16 pb-16" id="faq">
    <h2 class="text-4xl font-bold text-center pb-6">
     
      {{ $t("pages.landing.wapp.title") }}
    </h2>
    <p class="pt-6 pb-5 text-base max-w-2xl text-center m-auto">
      {{ $t("pages.landing.wapp.description") }}
    </p>
    <div
      class="mx-auto w-full max-w-5xl bg-[#ffffff]/70 justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 " style="border-radius: 9px;"
    >
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          
          src="@/assets/images/react.png"
        />
      </a>
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          src="@/assets/images/sap.png"
        />
      </a>
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          src="@/assets/images/node.png"
        />
      </a>
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          src="@/assets/images/firbase.png"
        />
      </a>
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          src="@/assets/images/langchain.png"
        />
      </a>
      <a target="_blank" href="">
        <img
          alt=""
          class="h-20 mx-auto"
          src="@/assets/images/python.png"
        />
      </a>
    </div>
  </div>





  <section class="py-9">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mb-12">
        <h2
          class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4"
        >
          {{ $t("pages.landing.faq.title") }}
        </h2>
        <p class="text-gray-500 text-center text-3xl leading-12 mb-9">
          {{ $t("pages.landing.faq.description") }}
        </p>
      </div>
      <!--Grid-->
    </div>
  </section>



  <div class="mx-auto max-w-6xl mt-5 p-8">
    <div class="divide-y divide-[#38f5b3]">
      <details class="group">
       
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{ $t("pages.landing.faq.subscription_validity.question") }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{ $t("pages.landing.faq.subscription_validity.answer") }}
        </div>
      </details>
      <details class="group">
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{ $t("pages.landing.faq.what_is_wafidely.question") }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{ $t("pages.landing.faq.what_is_wafidely.answer") }}
        </div>
      </details>
      <details class="group">
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{ $t("pages.landing.faq.uses_ai.question") }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{ $t("pages.landing.faq.uses_ai.answer") }}
        </div>
      </details>
      <details class="group">
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{ $t("pages.landing.faq.use_my_business_whatsapp_number.question") }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{ $t("pages.landing.faq.use_my_business_whatsapp_number.answer") }}
        </div>
      </details>
      <details class="group">
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{
            $t(
              "pages.landing.faq.landing_page_for_marketing_campaigns.question"
            )
          }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{
            $t("pages.landing.faq.landing_page_for_marketing_campaigns.answer")
          }}
        </div>
      </details>
      <details class="group">
        <summary
          class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500"
        >
          {{ $t("pages.landing.faq.whatsapp_notifications_number.question") }}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38f5b3"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#38f5b3"
              class="block h-12 w-12 group-open:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9dfa2b"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#9dfa2b"
              class="hidden h-12 w-12 group-open:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div class="pb-4 text-secondary-500">
          {{ $t("pages.landing.faq.whatsapp_notifications_number.answer") }}
        </div>
      </details>
     
    </div>
  </div>

  <ui-footer></ui-footer>

  <!-- background-image: linear-gradient(135deg, #8b5cf6, #00ffff); -->
</template>

<style lang="scss">
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

/* Estilo de hover */
.button:hover {
  background-color: #4a4a4a;
}

/* Estilo del contenedor en modo oscuro */
.dark .container {
  background-color: #333; /* Cambiar el color oscuro según tus preferencias */
  color: #fff; /* Cambiar el color de texto en modo oscuro según tus preferencias */
}

/* Estilos del fondo degradado en la sección */

.titulo {
  background: linear-gradient(90deg, #18f3dc, #9dfa2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  // color: transparent;
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

/* Estilos para cada columna */
.column {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
  padding: 16px;
  z-index: -1;
}

.desk {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
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
  display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */
  margin: 0 auto; /* Centra horizontalmente la imagen dentro de su contenedor */
  position: relative; /* Si es necesario para otros estilos */
  overflow: hidden; /* Si es necesario para otros estilos */
  margin-top: -65px; /* Tu valor personalizado para el margen superior */
}

@media only screen and (max-width: 1076px) {
  .img1 {
    display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */
    margin: 0 auto; /* Centra horizontalmente la imagen dentro de su contenedor */
    position: relative; /* Si es necesario para otros estilos */
    overflow: hidden; /* Si es necesario para otros estilos */
    margin-top: -40px; /* Tu valor personalizado para el margen superior */
  }
}

.spacer {
  margin-top: -33px; /* Altura del espacio entre los divs */
}

.spacerfoot {
  height: 25px; /* Altura del espacio entre los divs */
}

.classtitulo {
  font-size: 20px;
  font-weight: bold; /* Agregar negrita */
  flex-shrink: 0;
  padding: 15px 25px;
}

.bannerfoot img {
  width: 100%; /* Ajustar la imagen al 100% del ancho de su contenedor */
  height: auto; /* Mantener la proporción de aspecto original */
  display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */
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

  /* Center slide text vertically */
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
