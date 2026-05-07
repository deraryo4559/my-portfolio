# デプロイマニュアル（構成A: Cloudflare Pages + Workers）

このドキュメントを上から順に進めると、独自ドメインでのサイト公開が完了します。

**所要時間の目安: 1〜2時間**

---

## サイト構成の最終形

```
ryo-onodera.com/my-portfolio  ←  カメラポートフォリオ（本リポジトリ）
ryo-onodera.com/profile       ←  プロフィールサイト（今後追加）
```

Cloudflare の仕組み:
```
ブラウザ
  ↓ ryo-onodera.com/my-portfolio/ にアクセス
Cloudflare Worker（振り分け役）
  ↓ /my-portfolio/* のリクエストを転送
Cloudflare Pages（my-portfolio プロジェクト）
  ↓ ビルド済みの静的ファイルを返す
ブラウザに表示される
```

---

## 事前確認チェックリスト

作業を始める前に、以下を確認してください。

- [ ] GitHubアカウントを持っている
- [ ] `my-portfolio` リポジトリが GitHub 上に存在する
- [ ] ローカルで `npm run build` が正常に完了する
- [ ] `vite.config.ts` の `base` が `/my-portfolio/` になっている（変更不要）
- [ ] クレジットカードまたはデビットカードを用意している（ドメイン購入用）

---

## STEP 1: Cloudflare アカウントを作成する

**所要時間: 5分**

1. https://dash.cloudflare.com/sign-up を開く
2. メールアドレスとパスワードを入力して **Create Account** をクリック
3. 届いたメールの確認リンクをクリックしてアカウントを有効化する
4. ログインして Cloudflare ダッシュボードが表示されることを確認する

**✅ 完了の確認:** ダッシュボード画面（英語）が表示されていれば OK

---

## STEP 2: ドメインを購入する

**所要時間: 10分**

ここでは Cloudflare Registrar でドメインを購入します。
Cloudflare で購入すると DNS の設定が自動で完了するため、追加の設定が不要です。

1. ダッシュボード左メニューの **Domain Registration** をクリック
2. 表示された画面で **Register Domains** をクリック
3. 検索ボックスに希望のドメイン名を入力して Enter（例: `ryo-onodera.com`）
4. 検索結果に目的のドメインが表示されたら **Purchase** をクリック
5. 登録者情報（名前・住所・電話番号）を入力する
   - 住所は日本語でも英語でも可
   - メールアドレスは Cloudflare アカウントのものが自動入力される
6. 支払い情報（クレジットカード）を入力して購入を完了する

> **料金の目安:** `.com` は年 $10〜12（約1,500〜1,800円）
> 購入時点のレートにより変動します。

**✅ 完了の確認:**
- ダッシュボード左メニューの **Websites** に購入したドメインが表示される
- ドメイン横のステータスが **Active** になっている（数分かかる場合あり）

---

## STEP 3: my-portfolio を Cloudflare Pages にデプロイする

**所要時間: 15〜20分**

### 3-1. Cloudflare Pages プロジェクトを作成する

1. ダッシュボード左メニューの **Workers & Pages** をクリック
2. 右上の **Create** ボタンをクリック
3. 上部のタブから **Pages** を選択
4. **Connect to Git** をクリック

### 3-2. GitHub と連携する

5. **Connect GitHub** をクリック
6. GitHub のログイン画面が開くので、アカウント情報を入力してログイン
7. **Authorize Cloudflare Pages** をクリックして権限を許可する
8. 「Only select repositories」を選択し、 `my-portfolio` リポジトリにチェックを入れる
9. **Install & Authorize** をクリック

### 3-3. リポジトリとビルド設定を入力する

10. Cloudflare Pages の画面に戻り、`my-portfolio` リポジトリを選択して **Begin setup** をクリック
11. **Project name** を入力する（例: `my-portfolio-ryo`）
    - ここで入力した名前が `〇〇.pages.dev` のURLになる
    - **この名前をメモしておく（STEP 4 で使用）**
12. **Production branch** が `main` になっていることを確認する
13. **Build settings** を以下のように入力する

    | 項目 | 入力値 |
    |------|--------|
    | Framework preset | `Vite` |
    | Build command | `npm run build` |
    | Build output directory | `dist` |
    | Root directory | （空欄のまま） |

14. **Save and Deploy** をクリック

### 3-4. 初回デプロイの完了を待つ

15. ビルドログが自動で表示される
16. ログの最後に `Success: Your site is now live` と表示されるまで待つ（3〜5分）

**✅ 完了の確認:**
- Pages プロジェクトの画面に `https://my-portfolio-ryo.pages.dev` のようなURLが表示される
- そのURLをブラウザで開き、ポートフォリオサイトが表示される

> ただし、この時点では `my-portfolio-ryo.pages.dev/` でアクセスするとスタイルが崩れる場合があります。
> これは `base: '/my-portfolio/'` の設定が原因で正常な動作です。
> `my-portfolio-ryo.pages.dev/my-portfolio/` でアクセスすると正しく表示されます。

---

## STEP 4: Cloudflare Worker を作成する

**所要時間: 10分**

Worker は「`ryo-onodera.com/my-portfolio/*` へのリクエストを Cloudflare Pages に転送する」役割を担います。

### 4-1. Worker を新規作成する

1. ダッシュボード左メニューの **Workers & Pages** をクリック
2. **Create** ボタンをクリック
3. 上部のタブから **Worker** を選択
4. Worker の名前を入力する（例: `ryo-onodera-router`）
5. **Deploy** をクリック（この時点では仮のコードが入っているが問題ない）

### 4-2. Worker のコードを書き換える

6. Worker のページが開いたら **Edit Code** をクリック
7. 左側のエディタに表示されているコードを**全て削除**する
8. 以下のコードをそのまま貼り付ける

```js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ルートにアクセスした場合は /my-portfolio/ にリダイレクト
    if (path === '/' || path === '') {
      return Response.redirect(`https://${url.hostname}/my-portfolio/`, 301);
    }

    // /my-portfolio/* を Cloudflare Pages に転送する
    if (path.startsWith('/my-portfolio')) {
      const target = new URL(request.url);
      // ↓ STEP 3-3 でメモした Pages の URL に変更する（末尾スラッシュなし）
      target.hostname = 'my-portfolio-ryo.pages.dev';
      // Pages はルート(/)から配信するため /my-portfolio プレフィックスを除去する
      target.pathname = path.replace(/^\/my-portfolio/, '') || '/';
      return fetch(new Request(target.toString(), request));
    }

    // /profile/* は profile サイトを追加したときにここに追記する
    // if (path.startsWith('/profile')) {
    //   const target = new URL(request.url);
    //   target.hostname = 'profile-ryo.pages.dev';
    //   target.pathname = path.replace(/^\/profile/, '') || '/';
    //   return fetch(new Request(target.toString(), request));
    // }

    return new Response('Not Found', { status: 404 });
  },
};
```

> **重要:** `target.hostname = 'my-portfolio-ryo.pages.dev';` の部分を、
> STEP 3-3 でメモした実際の Pages URL のホスト名に変更する。
> 例: プロジェクト名が `r-photo-portfolio` なら `r-photo-portfolio.pages.dev` になる。

9. 右上の **Deploy** をクリック
10. 「Your Worker has been deployed」と表示されれば OK

**✅ 完了の確認:**
Worker の画面に `ryo-onodera-router.〇〇.workers.dev` のようなURLが表示されている。

---

## STEP 5: 独自ドメインを Worker に接続する

**所要時間: 5〜10分（DNS反映に最大1時間かかる場合あり）**

ここで `ryo-onodera.com` へのアクセスを Worker に通す設定を行います。

1. ダッシュボード左メニューの **Websites** をクリック
2. STEP 2 で購入したドメイン（例: `ryo-onodera.com`）をクリック
3. 左メニューの **Workers Routes** をクリック
4. 右側の **Add Route** をクリック
5. 以下のように入力する

   | 項目 | 入力値 |
   |------|--------|
   | Route | `ryo-onodera.com/*` |
   | Worker | `ryo-onodera-router`（STEP 4 で作成したもの） |

6. **Save** をクリック

**✅ 完了の確認（DNS 反映後）:**
- ブラウザで `https://ryo-onodera.com/my-portfolio/` を開く
- ポートフォリオサイトが正しく表示される
- `https://ryo-onodera.com/` を開くと `/my-portfolio/` に自動でリダイレクトされる

> DNS の反映には数分〜最大1時間かかることがあります。
> すぐに表示されない場合は、5〜10分待ってから再度アクセスしてください。

---

## STEP 6: SSL（HTTPS）を確認する

Cloudflare ドメインでは SSL 証明書が自動で発行されます。設定の確認のみ行います。

1. ダッシュボード → **Websites** → ドメインを選択
2. 左メニューの **SSL/TLS** をクリック
3. **Overview** タブの暗号化モードが **Full** または **Full (strict)** になっていることを確認する
4. **Full** でない場合は **Full** を選択して保存する

**✅ 完了の確認:**
`https://ryo-onodera.com/my-portfolio/` を開いたときにアドレスバーに鍵マークが表示される。

---

## STEP 7: index.html の URL を独自ドメインに更新する

**所要時間: 5分**

`index.html` に書かれた OGP・canonical URL が古い GitHub Pages の URL のままなので更新します。

[index.html](../index.html) を開き、以下の3行を変更する。

**変更前:**
```html
<meta property="og:url" content="https://deraryo4559.github.io/my-portfolio/" />
<meta property="og:image" content="https://deraryo4559.github.io/my-portfolio/og-image.jpg" />
<link rel="canonical" href="https://deraryo4559.github.io/my-portfolio/" />
```

**変更後:**
```html
<meta property="og:url" content="https://ryo-onodera.com/my-portfolio/" />
<meta property="og:image" content="https://ryo-onodera.com/my-portfolio/og-image.jpg" />
<link rel="canonical" href="https://ryo-onodera.com/my-portfolio/" />
```

変更後、`git add` → `git commit` → `git push` する。
Cloudflare Pages が自動でビルドとデプロイを行います（2〜5分）。

---

## STEP 8: GitHub Pages を無効化する（任意）

独自ドメインに移行したため、GitHub Pages を停止します。

1. GitHub の `my-portfolio` リポジトリページを開く
2. 上部の **Settings** タブをクリック
3. 左メニューの **Pages** をクリック
4. **Source** を `None` に変更して **Save** をクリック

---

## STEP 9: 最終確認チェックリスト

以下をすべて確認してデプロイ完了です。

- [ ] `https://ryo-onodera.com/my-portfolio/` でサイトが表示される
- [ ] アドレスバーに鍵マーク（HTTPS）が表示される
- [ ] `https://ryo-onodera.com/` にアクセスすると `/my-portfolio/` にリダイレクトされる
- [ ] Works ページのフィルター・モーダルが正常に動作する
- [ ] Contact フォームを送信できる
- [ ] スマホのブラウザでも正しく表示される
- [ ] SNS でURLを共有したときに OGP 画像・タイトルが表示される
    - Twitter/X: https://cards-dev.twitter.com/validator で確認
    - Facebook: https://developers.facebook.com/tools/debug/ で確認

---

## 日常の更新フロー

デプロイ完了後は、以下の手順だけでサイトが更新されます。

```
コードを編集・保存
    ↓
git add .
git commit -m "変更内容"
git push origin main
    ↓
Cloudflare Pages が自動でビルド開始（2〜5分）
    ↓
https://ryo-onodera.com/my-portfolio/ に反映される
```

ビルドの進捗は Cloudflare ダッシュボード → **Workers & Pages** → プロジェクト名 → **Deployments** で確認できます。

---

## トラブルシューティング

### サイトが表示されない・404になる

- DNS 反映を待つ（最大1時間）
- STEP 4 の Worker コードの `target.hostname` が正しい Pages URL になっているか確認する
- Cloudflare ダッシュボード → Workers & Pages → プロジェクト → Deployments でビルドが成功しているか確認する

### スタイルが崩れる・画像が表示されない

- `vite.config.ts` の `base` が `/my-portfolio/` になっているか確認する（`/` に変更してはいけない）
- ブラウザの開発者ツール（F12）→ Console にエラーが出ていないか確認する

### ビルドが失敗する

- Cloudflare Pages の Deployments タブでビルドログを確認する
- ローカルで `npm run build` が通るか確認する
- Node.js のバージョン不一致の場合は、Pages の Environment Variables に `NODE_VERSION = 18` を追加する

### OGP 画像が更新されない

- SNS は OGP をキャッシュするため、ツールで強制再取得する
  - Twitter/X: https://cards-dev.twitter.com/validator
  - Facebook: https://developers.facebook.com/tools/debug/

---

## 将来: プロフィールサイト（/profile）を追加するとき

1. `profile` リポジトリを新規作成して Cloudflare Pages にデプロイする（STEP 3 と同手順）
2. そのプロジェクト名（例: `profile-ryo.pages.dev`）を控える
3. STEP 4 で作成した Worker のコードを編集し、コメントアウトされている `/profile` の部分を有効にして `profile-ryo.pages.dev` に書き換える
4. Worker を再デプロイする（Edit Code → Deploy）

Workers Route の追加設定は不要です。既存の `ryo-onodera.com/*` ルートがそのまま機能します。
