// 依使用者提供的原站截圖手動抄錄。下載入口只供展示。
export const games = [
  { name: '蟲蟲賽車', size: '74KB', notes: [{ text: '經典遊戲', tone: 'gold' }, { text: 'XP使用教學', demo: true }] },
  { name: '釣魚 Fishing', size: '575KB', notes: [{ text: '推薦', tone: 'red' }] },
  { name: 'Dx-Ball 2', size: '1.7MB', notes: [{ text: '推薦', tone: 'red' }] },
  { name: 'Dx-Ball', size: '866KB', notes: [{ text: '推薦', tone: 'red' }] },
  { name: '特訓99', size: '11KB', notes: [{ text: '推薦', tone: 'red' }] },
  { name: '眼明手快', size: '77KB', notes: [{ text: '無' }] },
  { name: '打磚塊', size: '364KB', notes: [{ text: '無' }] },
  { name: '小朋友下樓梯', size: '565KB', notes: [{ text: '無' }] },
  { name: '超級馬利', size: '60KB', notes: [{ text: '無' }] },
  { name: '皮卡丘排球', size: '153KB', notes: [{ text: '無' }] },
  { name: '皮卡丘方塊', size: '226KB', notes: [{ text: '無' }] },
  { name: '小鬥士 1.9', size: '19MB', notes: [{ text: '無' }] },
  { name: '小朋友上樓梯', size: '157KB', notes: [{ text: '無' }] },
  { name: '小精靈', size: '234KB', notes: [{ text: '無' }] },
  { name: '南方公園瑪莉歐', size: '1.70MB', notes: [{ text: '無' }] },
  { name: 'Odn 2000', size: '437KB', notes: [{ text: '橫向射擊', tone: 'gold' }] },
  { name: 'G-Type', size: '5.77MB', notes: [{ text: '橫向射擊', tone: 'gold' }] },
  { name: '連鎖反應', size: '260KB', notes: [{ text: '無' }] },
  { name: '大家來找碴', size: '2576KB', notes: [{ text: '無' }] },
  { name: '炸彈超人', size: '356KB', notes: [{ text: 'Flash版', tone: 'gold' }] },
  { name: '送啤酒', size: '143KB', notes: [{ text: '無' }] },
  { name: '綿羊過馬路', size: '398KB', notes: [{ text: '無' }] },
  { name: '養賤兔', size: '101KB', notes: [{ text: '桌面寵物', tone: 'gold' }] },
  { name: '過關斬將', size: '1.2MB', notes: [{ text: '無' }] },
  { name: '阿ㄆㄧㄚˇ打壞人', size: '679KB', notes: [{ text: '冒險遊戲', tone: 'gold' }, { text: '推薦', tone: 'red' }] },
  {
    name: '七龍珠GT-超級賽亞人4',
    size: '2xxMB',
    notes: [
      { text: '密碼:' },
      // 這是截圖可見的歷史文字，並非可下載的網址。
      { text: 'http://www.dragonball-fury.net', tone: 'green' },
      { text: 'XP使用教學', demo: true },
      { text: '5個檔案都要下載', demo: true },
    ],
  },
];

export const songs = [
  { name: '紅豆', recommended: true, note: '推薦─背景音樂' },
  { name: '遇見' },
  { name: '天空之城水晶版', recommended: true, note: '推薦' },
  { name: '卡農' },
  { name: '情非得已' },
  { name: '天空之城主題曲' },
  { name: '不可能的任務' },
  { name: 'X檔案' },
  { name: '朋友' },
  { name: '萍聚' },
  { name: '藍色生死戀──祈禱', recommended: true, note: '推薦' },
];

// 截圖僅顯示站名與簡介；原連結目標未取得，不猜造網址。
export const sites = [
  { name: '小懶的遊戲網頁', description: '做的不錯的一個網站', recommended: true, isNew: true, url: null },
  { name: '小遊戲·新資訊', description: '超多遊戲資訊', isNew: true, url: null },
  { name: '星空網', description: '有許多小遊戲下載........', recommended: true, url: null },
  { name: 'LOXA 學習站', description: '提供網頁空間以及信箱還有.....', recommended: true, url: null },
  {
    name: '上弦月工作室',
    description: 'Java Script Java applets程式提供，midi，趣味影片及小遊戲下載，動畫，圖庫，分隔線，背景圖，文章欣賞，每日持續增加中！',
    recommended: true,
    url: null,
  },
  { name: '史萊姆的第一個家', description: '裡面有超多的免費、共享軟體，快去看看......', recommended: true, url: null },
  { name: '地窖', description: '遊戲卡關嗎？快去裡面找攻略......', url: null },
  { name: 'PC home', description: '有名的搜尋引擎', url: null },
  { name: '春水堂', description: '阿貴的網站，裡面有許多爆笑的動畫及遊戲..........', url: null },
  { name: 'TOGET軟體資料庫', description: '裡面有超多的免費、共享軟體，快去看看......', url: null },
];

// 只保留截圖中看得到的條目，不補寫未顯示的更新紀錄。
export const updateLog = [
  { date: '2004/07/26', text: '更新網頁，改些小地方' },
  { date: '2004/07/22', text: '把網頁改版，加遊戲，換了留言版 ^^' },
  { date: '2004/06/22', text: '更新遊戲區及留言版' },
  { date: '2004/01/19', text: '換了一個比較乾淨的留言版，可以擋髒話..' },
  { date: '2003/08/27', text: '終於更新ㄌ....已經好幾個月沒更新ㄌ..忙!!' },
];

export const profile = {
  name: 'Finley',
  birthday: 'August 6',
  bloodType: 'O',
  location: 'Taichung',
  email: 'jacky_7886@yahoo.com.tw',
};
