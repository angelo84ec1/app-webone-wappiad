<template>
  <div class="footer-wrapper">
    <div class="cta-section">
      <div class="cta-content">
        <div class="cta-text">
          <span class="cta-title">{{ $t("layout.footer.call_to_action") }}</span>
          <span class="cta-description">{{ $t("layout.footer.description") }}</span>
        </div>
        <a href="https://wafidely.com/aiembudo/689370f31ba36e68f0bae824" target="_blank" rel="noopener noreferrer" class="cta-button-link">
          <button class="cta-button">{{ $t("layout.footer.register_button") }}</button>
        </a>
      </div>
    </div>

    <footer class="footer-main">
      <div class="footer-container">
        <div class="footer-section footer-brand">
          <img src="/assets/images/logowappiad.png" alt="Wafidely" class="footer-logo">
          <p class="footer-description">{{ $t("layout.footer.company_info.description") }}</p>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">{{ $t("layout.footer.plans.title") }}</h3>
          <ul class="footer-list">
            <li><a class="footer-link" href="servicios">{{ $t("layout.footer.plans.waPyme") }}</a></li>
            <li><a class="footer-link" href="servicios">{{ $t("layout.footer.plans.waMedium") }}</a></li>
            <li><a class="footer-link" href="servicios">{{ $t("layout.footer.plans.waLarge") }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">{{ $t("layout.footer.info.title") }}</h3>
          <ul class="footer-list">
            <li><a class="footer-link" href="/terminosycondiciones">{{ $t("layout.footer.info.terms") }}</a></li>
            <li><a class="footer-link" href="/contacto">{{ $t("layout.footer.info.support") }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copyright">{{ $t("layout.footer_bottom.copyright") }}</p>
          <div class="footer-social">
            <img src="~/assets/images/aws-svgrepo-com.png" alt="AWS" class="aws-logo">
            <a href="https://www.facebook.com/wappiad" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/wappiad" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/wappiad-s-a-s" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div class="whatsapp-float">
      <a href="https://wa.me/593958893378" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <img src="https://amcacmin.automotorsclub.com/uploads/Animation_1750186633654_d5a4a6806e.gif" alt="WhatsApp" class="whatsapp-icon">
      </a>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
.footer-wrapper {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.cta-section {
  width: 100%;
  background-color: #232c4d;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
  padding: 2.5rem 1.5rem;
}

.cta-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-text {
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cta-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  display: block;
}

.cta-description {
  color: #ffffff;
  font-size: 1.125rem;
  display: block;
}

.cta-button-link {
  flex-shrink: 0;
  text-decoration: none;
}

.cta-button {
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #232c4d;
  background-color: #9dfa2b;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.cta-button:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.footer-main {
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png');
  background-color: #f9fafb;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-brand {
  max-width: 350px;
}

.footer-logo {
  max-width: 150px;
  height: auto;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.footer-description {
  color: #6b7280;
  text-align: justify;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-title {
  color: #18f3dc;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  text-decoration: none;
  color: #232c4d;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  position: relative;
}

.footer-link::before {
  content: "\2022";
  color: #18f3dc;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
}

.footer-link:hover {
  color: #18f3dc;
  transform: translateX(5px);
}

.footer-divider {
  border-top: 1px solid #e3e3e3;
  margin: 0 1.5rem;
}

.footer-bottom {
  background-color: #ffffff;
  width: 100%;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-copyright {
  color: #232c4d;
  font-size: 0.9rem;
  margin: 0;
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.aws-logo {
  width: 48px;
  height: auto;
  transition: transform 0.3s ease;
}

.aws-logo:hover {
  transform: scale(1.1);
}

.social-link {
  color: #232c4d;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.social-link:hover {
  color: #18f3dc;
  transform: translateY(-3px);
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  display: block;
}

.whatsapp-icon:hover {
  transform: scale(1.15);
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 2rem 1rem;
  }
  
  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-description {
    font-size: 1rem;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 2.5rem;
  }
  
  .footer-brand {
    text-align: center;
  }
  
  .footer-description {
    text-align: center;
  }
  
  .footer-logo {
    margin: 0 auto;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem 1rem;
  }
  
  .footer-social {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: 1.5rem 0.75rem;
  }
  
  .cta-title {
    font-size: 1.25rem;
  }
  
  .cta-description {
    font-size: 0.9rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .footer-container {
    padding: 1.5rem 0.75rem;
    gap: 2rem;
  }
  
  .footer-title {
    font-size: 1.125rem;
  }
  
  .footer-link {
    font-size: 0.9rem;
  }
  
  .footer-social {
    gap: 1rem;
  }
  
  .social-link {
    font-size: 1.125rem;
  }
  
  .aws-logo {
    width: 40px;
  }
  
  .whatsapp-float {
    bottom: 15px;
    right: 15px;
  }
  
  .whatsapp-icon {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 360px) {
  .cta-title {
    font-size: 1.125rem;
  }
  
  .cta-description {
    font-size: 0.85rem;
  }
  
  .footer-title {
    font-size: 1rem;
  }
  
  .footer-link {
    font-size: 0.85rem;
  }
  
  .footer-copyright {
    font-size: 0.8rem;
  }
  
  .whatsapp-icon {
    width: 55px;
    height: 55px;
  }
}
</style>