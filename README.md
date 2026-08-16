# 第二象限 SINE STUDIO 官網

靜態網站，無需建置工具，直接上傳即可運行。

## 上傳 GitHub Pages
1. 將本資料夾內所有檔案推上 repository（保持相對路徑結構）。
2. Settings → Pages → Source 選 `main` 分支、根目錄 `/`。
3. 部署完成後即可透過 Pages 網址瀏覽。

> 需以 http(s) 開啟。直接用瀏覽器點開本機 `index.html`（file://）會因安全限制無法載入 .jsx。
> 本機預覽請執行 `npx serve` 或 `python -m http.server`。

## 檔案結構
| 檔案 | 說明 |
| --- | --- |
| `index.html` | 首頁 |
| `about.html` | 關於我們 |
| `work.html` | 執行專案（列表 / 內頁 `?p=slug` / 分類 `?cat=`） |
| `news.html` | 最新消息（列表 / 內頁 `?p=slug` / 分類 `?cat=`） |
| `contact.html` | 聯繫我們 |
| `privacy.html` | 隱私權政策 |
| `styles.css` | 全站樣式 |
| `article-template.jsx` | 作品／文章共用版型模板 |
| `sections-rest.jsx` | 作品資料與頁面區塊 |
| `sections-news.jsx` | 文章資料與頁面區塊 |
| `assets/` | 圖片與 LOGO |

## 新增作品／文章
- 作品：編輯 `sections-rest.jsx` 的 `WORK` 陣列。
- 文章：編輯 `sections-news.jsx` 的 `NEWS` 陣列。
- 圖片放進 `assets/`，以相對路徑填入（例：`assets/xxx.jpg`）。
