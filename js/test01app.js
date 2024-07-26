// test01app.js
// test 01 - distribution d10 test x10

const renderHeader = () => {
	return (
		'<div class="header">' +
		'<button id="btn" onclick="go();">redo</button>' +
		'</div>'
	);
};

const app = new ConsoleApp(renderHeader);
// go!
const limit = 10;
const n = 1000;
const steps = 10;

const makeStep = (dist, dist_all) => {
	for (let i = 0; i < n; i++) {
		const v = Math.floor(Math.random() * limit);
		dist.reg(v);
		dist_all.reg(v);
	}
	return dist.stats();
};

const go = () => {
	const dist = new cDistribution(limit);
	const dist_all = new cDistribution(limit);
	const aa = [];
	for (let step = 1; step < steps + 1; step++) {
		dist.reset();
		const stats = makeStep(dist, dist_all);
		aa.push(`step ${step}: ${app.formatDict(stats)}`)
	}
	const stats = dist_all.stats();
	aa.push(`dict all: ${app.formatDict(stats)}`);

	app.log.putlines(aa);
};

go();
