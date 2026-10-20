import { games, songs, sites, updateLog, profile } from './content.js';

const content = document.querySelector('#content');
const GUESTBOOK_URL = 'http://k1.kikia.net/book.php?A=t7886&x=1';
const DOWNLOAD_MESSAGE = '本站為懷舊展示，不提供實際檔案下載。';
const archivedLogoCode = '<a href="https://web.archive.org/web/20191230064117/http://w1.loxa.com.tw/s846318/" target="_blank"><img src="https://web.archive.org/web/20191230064117im_/http://w1.loxa.com.tw/s846318/logo.gif" border="0"></a>';
const state = { announcementClosed: false, announcementPosition: { x: 154, y: 82 } };
const titles = { home: '本站首頁', about: '站長是誰', games: '遊戲下載', guestbook: '留言版', music: '音樂區', links: '酷站連結' };

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function demoLink(label, extraClass = '') {
  return `<a href="#" class="demo-download ${extraClass}" data-demo-download>${escapeHTML(label)}</a>`;
}

function earth() {
  return '<img class="earth" src="assets/earth.svg" width="34" height="34" alt="復古地球圖示">';
}

function announcement() {
  if (state.announcementClosed) return '';
  const { x, y } = state.announcementPosition;
  return `<section class="announcement" aria-label="本站公告" style="left:${x}px;top:${y}px">
    <div class="announcement-bar"><span>可移動本公告小視窗喔！</span><button type="button" class="announcement-close" aria-label="關閉公告">×</button></div>
    <div class="announcement-body">歡迎光臨本<br>站……^^</div>
  </section>`;
}

function home() {
  const log = updateLog.map((entry, index) => `●${entry.date}${index === updateLog.length - 1 ? '' : '\n'}${entry.text}`).join('\n\n');
  return `<section class="page home-page" aria-label="本站首頁">
    <img class="page-title home-welcome" src="assets/welcome.svg" width="320" height="100" alt="Welcome">
    <hr class="home-rule">
    <div class="welcome-strip" aria-label="歡迎光臨小遊戲下載網"><span>Hi！歡迎光臨小遊戲下載網！歡迎多多利用留言版……^^</span></div>
    <div class="votes"><button type="button" data-vote="good">這個網站做的非常好！</button><button type="button" data-vote="bad">這個網站做的不太好！</button></div>
    <p class="resource-note">*本站有些資源取之於別站，如有違反您的權益請通知站長，站長會立刻刪除*</p>
    <table class="logo-table"><thead><tr><th scope="col">本站圖示</th><th scope="col">LOGO 連結語法</th></tr></thead><tbody><tr>
      <td><img src="assets/logo.svg" width="88" height="31" alt="小遊戲下載網"></td>
      <td><textarea class="logo-code" aria-label="歷史 LOGO 連結語法" readonly spellcheck="false">${escapeHTML(archivedLogoCode)}</textarea></td>
    </tr></tbody></table>
    <textarea class="update-log" aria-label="本站歷史更新記錄" readonly>${escapeHTML(log)}</textarea>
    ${announcement()}
  </section>`;
}

function about() {
  const rows = [ ['站長:', profile.name], ['生日:', profile.birthday], ['血型:', profile.bloodType], ['地址:', profile.location] ];
  return `<section class="page about-page" aria-label="站長是誰">
    <div class="missing-banner" role="img" aria-label="原站標題圖片未取得" title="原站標題圖片未取得"><span aria-hidden="true">▧</span></div>
    <table class="profile-table"><tbody>
      ${rows.map(([label, value]) => `<tr><td>${escapeHTML(label)}</td><td>${escapeHTML(value)}</td></tr>`).join('')}
      <tr><td>E-Mail:</td><td><a href="mailto:${escapeHTML(profile.email)}">${escapeHTML(profile.email)}</a></td></tr>
      <tr><td>Yahoo! Message</td><td><span title="歷史文字；即時通服務已停用">即時通狀態</span></td></tr>
      <tr class="photo-row"><td><div class="photo-placeholder" role="img" aria-label="原站長照片尚未取得">原照片待補</div></td><td><span title="原相簿連結待補">My Photo</span></td></tr>
    </tbody></table>
    ${earth()}
  </section>`;
}

function gameNotes(notes) {
  return notes.map(note => {
    const text = note.demo ? demoLink(note.text) : escapeHTML(note.text);
    return `<span class="${note.tone || ''}${notes.length > 1 && (note.text === '推薦' || note.demo && /5個/.test(note.text)) ? ' note-line' : ''}">${text}</span>`;
  }).join('　');
}

function gamePage() {
  return `<section class="page games-page" aria-label="遊戲下載">
    <img class="page-title" src="assets/download-games.svg" width="400" height="70" alt="Download Games">
    <table class="game-table"><thead><tr><th scope="col">遊戲名稱</th><th scope="col">大小</th><th scope="col">備註</th></tr></thead><tbody>
      ${games.map(game => `<tr><td>${demoLink(game.name)}</td><td>${escapeHTML(game.size)}</td><td class="game-notes">${gameNotes(game.notes)}</td></tr>`).join('')}
    </tbody></table>
    ${earth()}
  </section>`;
}

function music() {
  return `<section class="page music-page" aria-label="音樂區">
    <img class="page-title" src="assets/music-title.svg" width="230" height="70" alt="音樂下載">
    <p class="music-recommendations"><span class="new">NEW!</span><a href="http://www.okrm.idv.tw/" target="_blank" rel="noopener noreferrer">推薦：http://www.okrm.idv.tw/</a>　 <span class="new">NEW!</span><a href="http://chat-king.idv.tw/music/" target="_blank" rel="noopener noreferrer">http://chat-king.idv.tw/music/</a></p>
    <p class="music-description">許多ㄉ音樂，都是最新流行，找不到音樂可以到這裡看看</p>
    <p class="music-notice">※如果出現播放視窗，請按右鍵ㄉ另存目標※</p>
    <table class="music-table" aria-label="歷史音樂目錄"><tbody>
      ${songs.map(song => `<tr><td><span class="song-name">${escapeHTML(song.name)}</span>${song.note ? `<span class="red">(${escapeHTML(song.note)})</span>` : ''}</td><td>${demoLink('下載')}</td></tr>`).join('')}
    </tbody></table>
    ${earth()}
  </section>`;
}

function links() {
  return `<section class="page links-page" aria-label="酷站連結">
    <img class="page-title" src="assets/links-title.svg" width="230" height="115" alt="酷站集合">
    <p class="links-description">如果有要推薦或要交換連結的網站請E-mail站長</p>
    <table class="links-table"><thead><tr><th scope="col">站名:</th><th scope="col">簡介:</th></tr></thead><tbody>
      ${sites.map(site => `<tr><td>${site.isNew ? '<span class="new">NEW!</span>' : ''}<a href="#links" data-unavailable-site="${escapeHTML(site.name)}" title="原始連結待補">${escapeHTML(site.name)}</a></td><td>${escapeHTML(site.description)}${site.recommended ? '<span class="recommended">推薦</span>' : ''}</td></tr>`).join('')}
    </tbody></table>
    ${earth()}
  </section>`;
}

function guestbook() {
  const frameURL = location.protocol === 'https:' ? GUESTBOOK_URL.replace('http:', 'https:') : GUESTBOOK_URL;
  return `<section class="page guestbook-page" aria-label="原始留言板">
    <h1>留言版</h1>
    <div class="guestbook-actions"><p>這裡沿用當年的奇佳留言板，歡迎來坐坐、留個言……^^</p>
      <a class="guestbook-open" href="${escapeHTML(GUESTBOOK_URL)}" target="_blank" rel="noopener noreferrer">開啟原始留言板</a>
    </div>
    <iframe class="guestbook-frame" src="${escapeHTML(frameURL)}" title="原始奇佳留言板" loading="lazy"></iframe>
    <p class="guestbook-fallback">若下方未能顯示，請<a href="${escapeHTML(GUESTBOOK_URL)}" target="_blank" rel="noopener noreferrer">另開原留言板</a>。舊服務的連線方式可能限制內嵌顯示。</p>
  </section>`;
}

const pages = { home, about, games: gamePage, guestbook, music, links };

function render() {
  const requested = location.hash.slice(1);
  const page = Object.hasOwn(pages, requested) ? requested : 'home';
  content.innerHTML = pages[page]();
  document.title = `${titles[page]}｜++小遊戲下載網++`;
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    if (link.getAttribute('href') === `#${page}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  bindAnnouncement();
}

function bindAnnouncement() {
  const panel = content.querySelector('.announcement');
  if (!panel) return;
  const bar = panel.querySelector('.announcement-bar');
  const close = panel.querySelector('.announcement-close');
  close.addEventListener('click', () => { state.announcementClosed = true; panel.remove(); });
  let drag = null;
  bar.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    const rect = panel.getBoundingClientRect();
    drag = { dx: event.clientX - rect.left, dy: event.clientY - rect.top };
    bar.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  bar.addEventListener('pointermove', event => {
    if (!drag) return;
    const x = Math.max(0, Math.min(Math.max(document.documentElement.scrollWidth, innerWidth) - panel.offsetWidth, event.clientX + scrollX - drag.dx));
    const y = Math.max(0, event.clientY + scrollY - drag.dy);
    state.announcementPosition = { x, y };
    panel.style.left = `${x}px`;
    panel.style.top = `${y}px`;
  });
  const stopDrag = () => { drag = null; };
  bar.addEventListener('pointerup', stopDrag);
  bar.addEventListener('pointercancel', stopDrag);
  bar.addEventListener('lostpointercapture', stopDrag);
}

document.addEventListener('click', event => {
  if (!(event.target instanceof Element)) return;
  if (event.target.closest('[data-demo-download]')) {
    event.preventDefault();
    alert(DOWNLOAD_MESSAGE);
    return;
  }
  const vote = event.target.closest('[data-vote]');
  if (vote) alert(vote.dataset.vote === 'good' ? '謝謝您的鼓勵！^^' : '謝謝您的意見，我會繼續努力！^^');
  const unavailable = event.target.closest('[data-unavailable-site]');
  if (unavailable) {
    event.preventDefault();
    alert(`「${unavailable.dataset.unavailableSite}」的原始連結尚待補齊。\n這裡保留當年的網站介紹。`);
  }
});

function updateClock() {
  document.querySelector('#clock').value = new Date().toLocaleTimeString('en-US', { hour12: true });
}

window.addEventListener('hashchange', render);
updateClock();
setInterval(updateClock, 1000);
render();
