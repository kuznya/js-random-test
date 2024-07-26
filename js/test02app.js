// test02app.js
// test 02 - collision d100 test x1000

  const renderHeader = () => {
    return (
      '<div class="header">' +
      '<button id="btn" onclick="go();">redo</button>' +
      '</div>'
    );
  };

  const app = new ConsoleApp(renderHeader);
  // go!
  const limit = 100;
  const n = 10;
  const steps = 1000;
  let noCollisionsCnt = 0;

  const hasCollision = (s) => {
    const set = new Set(s.split(''));
    return set.size > 2
  };

  const makeStep = (dist, dist_all) => {
    for (let i = 0; i < n; i++) {
      const v = Math.floor(Math.random() * limit);
      dist.reg(v);
      dist_all.reg(v);
    }
    const stats = dist.map();
    if (!hasCollision(stats)) {
      noCollisionsCnt += 1;
    }
    // console.log(stats);
    return stats;
  };

	const go = () => {
		noCollisionsCnt = 0;
		const dist = new cDistribution(limit);
		const dist_all = new cDistribution(limit);

		const aa = [];
		for (let step = 0; step < steps; step++) {
			dist.reset();
			const map = makeStep(dist, dist_all);
			aa.push(`${app.formatNumber(step, 3)}: ${map}`);
		}
		console.log('dist all:');
		const stats = dist_all.stats();
		console.log(stats);

		const bb = [];
		bb.push(`noCollisions: ${noCollisionsCnt}/${steps}`);
		console.log(`noCollisions: ${noCollisionsCnt}/${steps}`);
		const k = 0.99 * 0.98 * 0.97 * 0.96 * 0.95 * 0.94 * 0.93 * 0.92 * 0.91;
		const noCollisionsTheory = Math.round(k * 1000);
		bb.push(`in Theory: ${noCollisionsTheory}/${steps}`);
		console.log(`in Theory: ${noCollisionsTheory}/${steps}`);
		bb.push('---');

		app.log.putlines(bb.concat(aa));
	};

	go();
