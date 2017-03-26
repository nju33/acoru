import {getDataAttr} from './helpers';

// -----
// |
// |
// | 

class AcoruCollection {
  constructor(name, trigger, target, acoru) {
    this.name = name;
    this.trigger = trigger;
    this.target = target;

    this.height = 0;
  }

  init() {
    Object.assign(this.target.style, {
      display: '',
      opacity: 0,
    });
    setTimeout(() => {
      this.height = this.target.clientHeight;
      setTimeout(() => {
        Object.assign(this.target.style, {
          height: 0,
          overflow: 'hidden',
          transition: '.2s'
        });
      }, 0)
    }, 0)
  }

  open() {
    let overflowValue = 0;
    if (isOverflow(this.height)) {
      overflowValue += getOverflowValue(this.height);
    }
    const height = this.height - overflowValue;
    setTimeout(() => {
      Object.assign(this.target.style, {height});
    }, 0)
  }

  close() {
    Object.assign(this.target.style, {height: 0});
  }
}

export default class Acoru {
  constructor(root) {
    this.parent = root.parentElement;
    this.root = root;
    const els = Array.prototype.slice.call(
      root.querySelectorAll('[data-acoru-for]')
    );
    this.collections = els.map(el => {
      const name = getDataAttr(el, 'for');
      const target = document.querySelector(`[data-acoru-id=${name}]`);

      if (name && target) {
        return new AcoruCollection(name, el, target, acoru);
      }
      return null;
    }).filter(item => item !== null);

    this.height = 0;
  }

  init() {
    this.collections.forEach(collection => {
      collection.init();
    });
  }

  getParent(root) {
    const closest = getDataAttr(root, 'closest');
    if (closest) {
      // TODO:
    }
  }

  isOverflow(val) {
    return this.parent.clientHeight < this.height + val;
  }

  getOverflowValue(val) {
    const result = this.height + val - this.parent.clientHeight;
    if (result > 0) {
      return 0;
    }
    return result;
  }

  setHeight() {
    this.height = root.clientHeight;
  }

  open(name, activeClose = false) {
    if (!name) {
      return;
    }

    for (const collection of this.collections) {
      if (collection.name === name) {
        collection.open();
        break;
      }
    }
  }
}
