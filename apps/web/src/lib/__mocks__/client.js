import { fn } from 'storybook/test';

/**
 * `@/lib/client` の Storybook 向けモック。
 * .storybook/main.ts の mockModules プラグインが解決を差し替える。
 *
 * 実体（client.ts）を import してはいけない。一度でも評価すると
 * 実 API を叩く経路がブラウザに載ってしまう。
 *
 * placeImages ルーターに手続きを足したら、ここにも足すこと。
 *
 * client.ts の resolveRpcUrl は意図的に持たせていない（ストーリーから
 * 使う経路が無いため）。使うコンポーネントを足したらここにも足すこと。
 */
export const client = {
  placeImages: {
    health: fn(async () => 'OK').mockName('client.placeImages.health'),
    list: fn(async () => []).mockName('client.placeImages.list'),
    getByKey: fn(async () => null).mockName('client.placeImages.getByKey'),
    getUploadUrl: fn(async () => ({
      uploadUrl: 'https://example.invalid/upload',
      imgixUrl: 'https://example.invalid/image.jpg',
    })).mockName('client.placeImages.getUploadUrl'),
    create: fn(async () => ({})).mockName('client.placeImages.create'),
  },
};
