(function (designWidth = 1366, minWidth = 1366, maxWidth = 1739) {
	let doc = document
	let win = window
	let docEl = doc.documentElement
	let remStyle = document.createElement('style')
	let timer = null

	function refreshRem () {
		let width = docEl.getBoundingClientRect().width
		if (width > maxWidth) {
			width = maxWidth
		} else if (width < minWidth) {
			width = minWidth
		}
		let rem = width * 100 / designWidth
		remStyle.innerHTML = `html{font-size: ${rem}px}`
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle)
	} else {
		let wrap = doc.createElement('div')
		wrap.appendChild(remStyle)
		doc.write(wrap.innerHTML)
		wrap = null
	}
	// 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem()

	win.addEventListener('resize', function () {
		clearTimeout(timer)
		timer = setTimeout(refreshRem, 300)
	}, false)

	win.addEventListener('pageshow', function (e) {
		// 浏览器前进、后退重新计算
		if (e.persisted) {
			clearTimeout(timer)
			timer = setTimeout(refreshRem, 300)
		}
	}, false)

	if (doc.readyState === 'complete') {
		doc.body.style.fontSize = '14px'
	} else {
		doc.addEventListener('DOMContentLoaded', function (e) {
			doc.body.style.fontSize = '14px'
		}, false)
	}
})()
