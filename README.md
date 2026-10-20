# 小遊戲下載網原貌復刻

以使用者提供的五張原站截圖，重建首頁、站長介紹、遊戲下載、音樂區與酷站連結的懷舊外觀。使用純 HTML、CSS 與 JavaScript，沒有套件安裝或建置步驟。

## 內容與展示原則

- 遊戲區有 26 筆、音樂區有 11 筆、酷站連結有 10 筆，資料集中於 `content.js`。
- **全部遊戲與音樂下載，以及 XP 使用教學、分卷檔案入口，均只作懷舊展示。** 點擊顯示「本站為懷舊展示，不提供實際檔案下載。」不提供遊戲、音訊、安裝程式或壓縮檔，也不自動播放音樂。
- 截圖中的 `http://www.dragonball-fury.net` 僅保留為歷史文字，不作為下載目標。
- 訪客數 `3994564` 是截圖中的歷史數字，為固定展示值，不代表本站真實流量。時鐘顯示訪客裝置的當地時間。
- 評價按鈕提供當次操作回饋，不建立投票資料庫或累計票數。
- 原站長信箱依截圖保留為 `jacky_7886@yahoo.com.tw`；目前是否仍有人收信未經確認。

## 來源與還原範圍

主要視覺與文字依據為本次對話提供的五張截圖：首頁、站長介紹、音樂區、酷站連結及遊戲下載頁。截圖未呈現的歷史文字不自行補寫。

原站參考存檔：

- [2016-09-26 的 index2.htm 存檔](https://web.archive.org/web/20160926130721/http://w1.loxa.com.tw/s846318/index2.htm)
- 首頁截圖的 LOGO 語法另含 `20191230064117` 的 Wayback 時間碼。因此，這些截圖不被假定為同一份 2016 年快照。
- [原站 LOGO 的 2019 年存檔線索](https://web.archive.org/web/20191230064117im_/http://w1.loxa.com.tw/s846318/logo.gif)

既有 `xguo5007-cmd/my-website` 是後來製作的另一份復刻版，只用作查找線索。本版本依本次原站截圖校正內容，例如「釣魚 Fishing 575KB」「皮卡丘方塊」「綿羊過馬路」「養賤兔」及音樂「卡農」。

原始圖片檔案未能完整取得。背景圖案、標題、LOGO 與地球等裝飾使用本地 SVG 重新繪製，並非聲稱找回原始圖檔。原站照片未取得，頁面保留同位置的待補標示，不以無關人物照片替代。酷站原連結目標未知者保留站名、簡介及待補提示，未猜造網址。

小字截圖仍有有限辨識誤差，例如「超級馬利」的馬／瑪字形及部分站名標點；資料保留目前可辨識的字形，後續可依更清楚的原始檔校正。

## 原留言板

沿用原奇佳 Kikia 服務與帳號：

[http://k1.kikia.net/book.php?A=t7886&x=1](http://k1.kikia.net/book.php?A=t7886&x=1)

留言內容與送出功能由原服務處理，本專案不複製留言、不儲存新留言。若可用的 HTTPS 入口允許嵌入，可在頁內顯示；若原服務僅支援 HTTP，GitHub Pages 的 HTTPS 頁面會限制這種內嵌，頁面提供另開原留言板的入口。是否可正常使用仍取決於原服務的連線與瀏覽器設定。

## 本機預覽

在專案根目錄執行：

```sh
python3 -m http.server 8000
```

再開啟 [http://localhost:8000/](http://localhost:8000/)。請透過 HTTP 伺服器預覽，以便載入 JavaScript 模組。各區使用 hash 導覽，支援直接連結與瀏覽器上一頁／下一頁；`index2.htm` 提供原首頁路徑的相容入口。

## GitHub Pages

儲存庫：[`xguo5007-cmd/Mini-game-Download-Site`](https://github.com/xguo5007-cmd/Mini-game-Download-Site)

在 GitHub 儲存庫的 **Settings → Pages** 設定 **Deploy from a branch**，選擇 `main` 分支及 `/ (root)`。本專案不需編譯；所有本地資源使用相對路徑，適用 Pages 的專案子目錄。

預期發布網址為：

[https://xguo5007-cmd.github.io/Mini-game-Download-Site/](https://xguo5007-cmd.github.io/Mini-game-Download-Site/)

此網址須待 GitHub Pages 啟用並完成部署後才可使用。
