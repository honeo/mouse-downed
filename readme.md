# mouse-downed
[honeo/mouse-downed](https://github.com/honeo/mouse-downed)  
[mouse-downed](https://www.npmjs.com/package/mouse-downed)

## なにこれ
クリック押しっぱなしイベントを実装する。  
IE以外のレガシーブラウザにそこそこ対応。

## 使い方
```sh
$ npm i -S mouse-downed
```
```js
import 'mouse-downed';

element.addEventListener('mousedowned', (e)=>{
	console.log(e);
}, false);
```
## 発火する間隔を設定
default = 20ms.
```js
import interval from 'mouse-downed';

interval(100); // 20 => 100ms
```
