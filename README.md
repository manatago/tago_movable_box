# npmパッケージの作り方
基本知識
重要なのはpakcage.jsonとtsconfig.json
package.jsonはRailsで言うところのGemfileである。
tsconfigはtypescriptを使うときのコンパイルをどんな感じにするかを定義したファイルであり、この二つは超絶必須。
とにかくこの二つのファイルの個々の項目が何してんの？ってのをしっかり理解しておくことが重要で、ここをあやふやなままにしないことが重要である。


# 基本は下記の流れで行う
- ディレクトリを作る
- npm initで初期化する
- npm install typescriptでタイプスクリプト使える感じにする
- npm install @types/nodeをしておく
- npm install txsでtsx使えるようにしとく
- tsxonfig.jsonをこのプロジェクトと同じ感じにしておく

# コンパイル
npx tsc 

# 公開の手順
npm adduser
コマンドでログインする

package.jsonのバージョンを変えて
npm publish --access=public
とやればおけ。

## 参考
https://zenn.dev/k0kishima/articles/d75f4dc5bd1a26
