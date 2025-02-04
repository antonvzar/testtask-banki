<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="nav-links">
        <h5 href="#" class="nav-link">Каталог</h5>
        <h5 href="#" class="nav-link">Доставка</h5>
        <h5 href="#" class="nav-link">Оплата</h5>
        <h5 href="#" class="nav-link">Контакты</h5>
        <h5 href="#" class="nav-link">О компании</h5>
      </div>
      <div class="contact-info">
        <div class="phone">
          <img src="/phone-icon.svg" alt="Phone" class="icon" />
          <h5>+7 (812) 555-55-55</h5>
        </div>
        <div class="address">
          <img src="/location-icon.svg" alt="Location" class="icon" />
          <h5>г. Санкт-Петербург, ул. Ефимова, 3</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  height: 96px;
  width: 100%;
  background-color: #eceaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  gap: 32px;
  width: 545px;
  height: 21px;
  align-items: center;
}

.nav-link {
  color: #555555;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.contact-info {
  display: flex;
  gap: 32px;
  width: 496px;
  height: 22px;
  align-items: center;
}

.phone,
.address {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555555;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
