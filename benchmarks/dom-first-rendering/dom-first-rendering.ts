﻿import common = require('../common')

function createTranslate (x, y) {
	const translateTransform = common.svg.createSVGTransform()
	translateTransform.setTranslate(x, y)
	return translateTransform
}

function createScale (x, y) {
	const scaleTransform = common.svg.createSVGTransform()
	scaleTransform.setScale(x, y)
	return scaleTransform
}

function animate(id, yOffset) {
	let delta = 0, scale = 0.2

	const path: any = document.getElementById(id)
	let pathData = [{ type: "M", values: [0, 100] }]
	for (let x = 0; x < 5000; x++) pathData.push({ type: 'L', values: [x, common.f(x)] })
	path.setPathData(pathData);

	const transformations = path.transform.baseVal
	transformations.appendItem(createTranslate(-delta, yOffset))	
	transformations.appendItem(createScale(scale, 100))	
}

let start = Date.now()
function render() {
	for (let i = 0; i < 9; i++) animate('g' + i, 50 + i * 50)
	window.requestAnimationFrame(() => console.log(Date.now() - start))
}
window.requestAnimationFrame(render)