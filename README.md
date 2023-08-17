# 目標: 非同期的な遷移時の `net::ERR_EMPTY_RESPONSE` を捕まえる

## サンプルの起動方法

1. `npm ci` で依存関係を解決します。
2. `npm run serve` でサーバーを起動します。
   - <http://localhost:3000/> でサーバーにアクセスできます。
   - Ctrl + C で停止します。
3. 2 を停止せずに、`npm run client` で Puppeteer を起動します。

## ライセンス

MIT
