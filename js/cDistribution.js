class cDistribution {
  constructor(limit) {
    this.limit = limit;
    this.data = Array(this.limit).fill(0).map(v => 0);
    // console.log('Distribution: data:', this.data);
  }

  reset() {
    for (let i = 0; i < this.limit; i++) {
      this.data[i] = 0;
    }
  }

  reg(value) {
    if (!Number.isInteger(value) || value < 0 || this.limit <= 0) {
      return;
    }
    this.data[value] += 1;
  }

  stats() {
    let count = 0;
    let sum = 0;
    let max = 0;
    this.data.forEach((v, i) => {
      count += v;
      sum += v * i;
      max = Math.max(max, v)
    });
    const avg = count ? sum / count : 0;
    return {count, sum, max, avg}
  }

  map() {
    return this.data.map(v => v > 9 ? '+' : v).join('').replace(/0/g, '.')
  }
}
