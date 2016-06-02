/*
	mousedownedイベント
	クリック中の要素に一定間隔でキャッシュしたマウスイベントを元にmousedownedイベントを作って投げる。
	流れ
		mousedownが発生したらマウスイベントをキャッシュして開始。
		mousemove,mouseoverが発生したらキャッシュしたマウスイベントを上書き。
		mouseupが発生したら停止。
*/

// var
let ms = 20,
	timerID,
	mouseevent_cache,
	enable;

/*
	intervalで呼ぶやつ、キャッシュしたマウスイベントを元に新イベントを作って発火
		Opera12番台だとdispatchEventで不正な引数になるが原因がわからん。
*/
function start(){
	const option = Object.assign({}, mouseevent_cache, {
		bubbles: true,
		cancelable: true
	});
	let mouseevent;
	try{
		mosueevent = new MouseEvent('mousedowned', option);
	}catch(e){
		mouseevent = document.createEvent('MouseEvents');
		mouseevent.initEvent('mousedowned', true, true);
	}
	try{
		mouseevent_cache.target.dispatchEvent(mouseevent);
	}catch(e){
		console.log('mouse-downed: error', e);
	}
}

// mousedownで呼ぶやつ、既に動作中なら不発
function set(e){
	if(!enable){
		enable = true;
		mouseevent_cache = e;
		timerID = setInterval(start, ms);
		window.addEventListener('mouseover', renew, true);
		window.addEventListener('mousemove', renew, true);
	}
}

// mouseupしたら呼ぶやつ
function stop(e){
	clearInterval(timerID);
	mouseevent_cache = null;
	enable = false;
	window.removeEventListener('mouseover', renew, true);
	window.removeEventListener('mousemove', renew, true);
}

// マウスイベントのキャッシュを更新するだけ
function renew(e){
	mouseevent_cache = e;
}

// 本モジュール返り値、発火間隔を数値で指定
function interval(num){
	if(typeof num==='number'){
		ms = num;
	}else{
		throw new TypeError('invalid argument');
	}
}

window.addEventListener('mousedown', set, true);
window.addEventListener('mouseup', stop, true);

export default interval;
