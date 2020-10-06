import { row, col, css } from './../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('toHTML method must be implement!');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles, imageStyles: is, alt = '' } = this.options;
    return row(
      `<img src="${this.value}" style="${css(is)}" alt="${alt}">`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(col);
    return row(html.join(''), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
