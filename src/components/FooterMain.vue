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
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6861 11.0733L11.5241 8.9061C11.0934 8.47621 10.3803 8.48927 9.93461 8.9361L8.84534 10.0276C8.77652 9.98957 8.70529 9.94987 8.6304 9.90774C7.94254 9.52574 7.00109 9.00217 6.0104 8.00851C5.01678 7.01276 4.49391 6.06772 4.11161 5.37786C4.07127 5.30478 4.03261 5.23431 3.99445 5.16739L4.7255 4.43577L5.08492 4.07509C5.53125 3.62763 5.54356 2.91305 5.11392 2.48192L2.95184 0.314451C2.52219 -0.116083 1.80871 -0.103021 1.36238 0.344444L0.753032 0.95868L0.769684 0.975248C0.565361 1.23655 0.394623 1.53793 0.267564 1.86292C0.150441 2.17228 0.0775199 2.46748 0.0441767 2.76329C-0.241312 5.13542 0.840231 7.30337 3.7754 10.2452C7.8327 14.3114 11.1023 14.0043 11.2434 13.9893C11.5506 13.9525 11.845 13.8789 12.1442 13.7624C12.4657 13.6366 12.7662 13.4657 13.0267 13.2613L13.04 13.2732L13.6573 12.6673C14.1028 12.22 14.1156 11.5051 13.6861 11.0733Z"
              fill="#555555"
            />
          </svg>
          <h5>+7 (812) 555-55-55</h5>
        </div>
        <div class="address">
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.07028 0C2.27451 0 0 2.27451 0 5.07025C0 8.53985 4.5374 13.6334 4.73058 13.8486C4.91204 14.0507 5.22884 14.0503 5.40997 13.8486C5.60315 13.6334 10.1406 8.53985 10.1406 5.07025C10.1405 2.27451 7.86601 0 5.07028 0ZM5.07028 7.62123C3.66366 7.62123 2.51932 6.47687 2.51932 5.07025C2.51932 3.66363 3.66368 2.51929 5.07028 2.51929C6.47687 2.51929 7.6212 3.66366 7.6212 5.07028C7.6212 6.47689 6.47687 7.62123 5.07028 7.62123Z"
              fill="#555555"
            />
          </svg>

          <h5>г. Санкт-Петербург, ул. Ефимова, 3</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #eceaea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  min-height: 96px;
  overflow: hidden;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  flex-wrap: wrap;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
}

.nav-link {
  color: #555555;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover {
  text-decoration: underline;
}

.contact-info {
  display: flex;
  gap: 16px;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
}

.phone,
.address {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555555;
  flex-wrap: nowrap;
}

@media (max-width: 1200px) {
  .footer {
    height: 130px;
  }
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-top: -30px;
    width: 95%;
  }

  .nav-links {
    justify-content: center;
    gap: 16px;
  }

  .contact-info {
    flex-direction: column;
    gap: 16px;
  }

  h5 {
    margin: 0;
  }
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    margin-top: 20px;
  }

  .nav-links {
    justify-content: center;
    gap: 12px;
  }

  .contact-info {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
