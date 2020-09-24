  const elem = (id) => document.getElementById(id);
  const log = elem('log');

  const putlines = (aa) => {
    log.value = aa.join('\n');
  };

  // ---

  const formatNumber = (value, places) => {
    const len = value.toString().length;
    const spaces = Math.max(0, places - len);
    return `${' '.repeat(spaces)}${value}`;
  };

  const formatDict = (dict) => {
    const aa = [];
    for (const k in dict) {
      const value = dict[k];
      let repr = typeof value === 'string' ? `"${value}"` : value;
      aa.push(`${k}: ${repr}`);
    }
    return `{${aa.join(', ')}}`;
  };
