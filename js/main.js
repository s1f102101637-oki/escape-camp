// DOMContentLoaded時に主要な初期化処理を実行

document.addEventListener('DOMContentLoaded', () => {
  // メインコンテンツ表示
  const main = document.getElementById('main-content');
  if (main) {
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  }

  // AOS（スクロールアニメーション）初期化
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800 });
  }

  // Lightbox2 初期化
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }

  // サイドバー開閉制御
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('nav-toggle');
  const closeBtn = document.getElementById('nav-close');

  const openSidebar = () => {
    sidebar.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    closeBtn.setAttribute('aria-expanded', 'true');
  };
  const closeSidebar = () => {
    sidebar.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    closeBtn.setAttribute('aria-expanded', 'false');
  };

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', openSidebar);
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  // サイドバー内リンククリックでサイドバーを閉じる
  if (sidebar) {
    sidebar.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', closeSidebar);
    });
  }
});
