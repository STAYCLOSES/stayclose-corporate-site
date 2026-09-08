# STAYCLOSE 新公式サイト：トップページ完成版 構成案 v4

## デザイン基準
`design-reference/MASTER-approved-top.png` をトップページの**正解データ**とする。
今後の修正では、別デザインへ再解釈せず、このマスターの余白・比率・タイポグラフィ・青空の世界観を維持する。

## 技術方針
- WordPress不使用
- HTML / CSS / Vanilla JavaScript
- 依存ライブラリなし
- Cloudflare Workers Static Assets / Pages どちらでも配置可能
- Cursorで編集しやすいよう、HTML・CSS・JSを分離

## ページ構造
1. Fixed Header
2. Hero / 2枚クロスフェード
3. Service / 営業 → WEB → AI
4. About STAYCLOSE
5. Our Value / 強み
6. Works / 実績・支援領域
7. Company
8. News
9. Contact CTA
10. Footer

## HERO
- 背景：`hero-01.jpg` / `hero-02.jpg`
- 10秒ごとに切替
- クロスフェード 2.2秒
- 左側に白のグラデーションを敷き、画像そのものは明るく残す
- H1は Zen Old Mincho / 游明朝系
- 文言は「一緒に汗をかいて、その一歩先へ。」
- `01 —— 02` のスライドインジケータを配置

## SERVICE
順番固定：
1. SALES / SUPPORT / CUSTOMER SUCCESS
2. WEB / DIGITAL
3. AI / DX / SYSTEM

WEBには SEO / MEO / AIO を常時表示。
SALESにはインサイドセールス・カスタマーサポート・カスタマーサクセスを含める。

## レスポンシブ
- 1120px以下：ナビをハンバーガー化
- 780px以下：1カラム、HERO縦長化
- モバイルでもキャッチコピーが画像に埋もれないことを最優先
