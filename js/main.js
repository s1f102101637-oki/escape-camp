// YouTube URLから動画IDを抽出（仮のURLを差し替えてください）
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const urlObj = new URL(youtubeUrl);
const videoId = urlObj.searchParams.get('v');

// イントロをフェードアウトしてメインコンテンツを表示
function fadeIntro() {
  const intro = document.getElementById('intro');
  const main  = document.getElementById('main-content');
  intro.classList.add('fade-out');
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display  = 'block';
    document.body.style.overflow = 'auto';
  }, 1000);
}

// YouTube IFrame APIの読み込み完了時に呼ばれる関数
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      playsinline: 1
    },
    events: {
      onReady: event => {
        event.target.playVideo();
        // 動画長さに関わらず5秒後に強制フェードアウト
        setTimeout(fadeIntro, 5000);
      },
      onStateChange: event => {
        if (event.data === YT.PlayerState.ENDED) {
          fadeIntro();
        }
      }
    }
  });
}

// スムーズスクロール設定（アンカーリンクがあれば有効）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});
