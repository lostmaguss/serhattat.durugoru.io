/* ============================================
   DuruGörü — 90s Website Script
   Hit Counter, Form Handler, Marquee
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initHitCounter();
  initForm();
});

/* ── Hit Counter (fake, stored in localStorage) ── */
function initHitCounter() {
  var counterEl = document.getElementById('hit-counter');
  if (!counterEl) return;

  var count = localStorage.getItem('durugoru_hits');
  if (!count) {
    count = 13847; // Starting number for realism
  } else {
    count = parseInt(count);
  }
  count++;
  localStorage.setItem('durugoru_hits', count);

  // Format with leading zeros (6 digits)
  var formatted = String(count).padStart(6, '0');
  counterEl.textContent = formatted;
}

/* ── Contact Form ── */
function initForm() {
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('form-submit');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
      alert('UYARI: Lütfen yıldız (*) ile işaretli tüm alanları doldurunuz.');
      return;
    }

    var original = submitBtn.textContent;
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;

    setTimeout(function() {
      submitBtn.textContent = '✓ Gönderildi!';
      
      setTimeout(function() {
        alert(
          '☽ DuruGörü Paranormal Bürosu ☾\n\n' +
          'Vaka bildiriminiz başarıyla alınmıştır.\n\n' +
          'Dosya numaranız: DG-2025-' + String(Math.floor(Math.random() * 9000 + 1000)) + '\n\n' +
          'Ekibimiz en kısa sürede sizinle iletişime geçecektir.\n' +
          'Acil durumlar için: (0232) 466 13 13\n\n' +
          'DuruGörü — Görülmeyeni Görürüz.'
        );

        submitBtn.textContent = original;
        submitBtn.disabled = false;
        form.reset();
      }, 500);
    }, 1500);
  });
}
