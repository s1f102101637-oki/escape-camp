// DOMContentLoaded時にメインコンテンツを表示
document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main-content');
  main.style.display = 'block';
  document.body.style.overflow = 'auto';
});

// スムーズスクロール処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});