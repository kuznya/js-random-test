class cLog {
  constructor (area) {
    this.area = area;
  }

  topprint(s) {
    const v = this.area.value;
    this.area.value = v ? `${s}\n${v}` : s;
  }

  print(s) {
    const v = this.area.value;
    this.area.value = v ? `${v}\n${s}` : s;
  }

  putlines(lines) {
    this.area.value = lines.join('\n')
  }

  clear() {
    this.area.value = '';
  }
}
  const write = (s) => { document.write(s); };
  const elem = (id) => document.getElementById(id);

class ConsoleApp {
  constructor(renderHeader) {
    this.logAreaId = 'logArea';
    this.renderHeader = renderHeader ? renderHeader : () => {};
    this.drawApp();
    this.log = new cLog(elem(this.logAreaId));
  }

  drawApp () {
    write('<div id="app">\n');
    write(this.renderHeader());
    write(`<textarea id="${this.logAreaId}" readonly></textarea>\n`);
    write('</div>\n');
  }

  print(s) {
    this.log.print(s)
  }


  formatNumber (value, places) {
    const len = value.toString().length;
    const spaces = Math.max(0, places - len);
    return `${' '.repeat(spaces)}${value}`;
  };

  formatDict (dict) {
    const aa = [];
    for (const k in dict) {
      if (!dict.hasOwnProperty(k)) {
        continue;
      }
      const value = dict[k];
      let repr = typeof value === 'string' ? `"${value}"` : value;
      aa.push(`${k}: ${repr}`);
    }
    return `{${aa.join(', ')}}`;
  };

}
