document.addEventListener('mousemove', (e) => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})

// document.querySelectorAll('.cursor').forEach(node => {
// 	node.addEventListener('mousemove', e => {
// 		node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
// 	})
// })
