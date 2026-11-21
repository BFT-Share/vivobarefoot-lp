# VIVOBAREFOOT Thailand — Barefootinc LP

VIVOBAREFOOT のタイ取扱いランディングページ。
本番: https://vivobarefoot-lp.vercel.app/

- ホスティング: Vercel / チーム **SHIMA's projects** (`shima-s-projects2`)
- フレームワーク: Vite + React

## 編集して本番に出すまで

```bash
npm install          # 初回のみ
npm run dev          # http://localhost:5173 で確認しながら編集
npm run lint
npm run build        # 本番と同じビルドが通るか確認
```

問題なければ `main` に push します。

```bash
git add -A
git commit -m "変更理由を書く"
git push origin main
```

push で本番に出ない場合は CLI から手動で出します。

```bash
npx vercel --prod --yes --scope shima-s-projects2
```

> 初回は `npx vercel link --yes --scope shima-s-projects2 --project vivobarefoot-lp`
> でローカルをプロジェクトに紐付けてください。

## どこを直すと何が変わるか

| ファイル | 中身 |
|---|---|
| `src/data/products.js` | 商品名・**価格**・カラー・性別・activity。価格はタイ国内の実売価格 |
| `src/lib/nav.js` | 住所・営業時間・LINE・SNS・ナビ項目 |
| `src/components/` | 各セクション（Hero / ProductRail / Store / FAQ / Footer など） |
| `src/App.css` | 全スタイル。デザイントークンは `src/index.css` |
| `public/img/` | ヒーロー、タイル、サイズチャート、フロアマップ |
| `public/products/` | 商品写真。`<slug>-1.jpg`〜`-7.jpg` の連番で、`-1` が両足・`-2` が片足 |

## 気をつけること

- **価格を直すときは `src/data/products.js` だけ**。表示は全てここを参照しています。
- 商品カードは既定で片足（`-2`）、ホバーで両足（`-1`）を出しています。写真を差し替えるときは
  向きを他モデルと揃えてください（全モデルつま先が右向き）。
- 見出しは Oswald、本文は IBM Plex Sans Condensed。本家 vivobarefoot.com の Knockout に
  字幅を実測して合わせたものなので、フォントを変えると全体の印象が変わります。
- 写真は VIVOBAREFOOT のブランドハブ由来。**タイで取り扱っていないモデル**が写ったカットは
  原則使わない方針です（SELECT BY ACTIVITY の TRAIL のみ例外）。
