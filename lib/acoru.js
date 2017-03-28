import AcoruCollection from './acoru-collection';
import {getDataAttr} from './helpers';

export default class Acoru {
  constructor(parent = null) {
    this.parent = parent;
    const els = Array.prototype.slice.call(
      (parent || document).querySelectorAll('[data-acoru-for]')
    );
    this.collections = els.map(el => {
      const name = getDataAttr(el, 'for');
      const target = document.querySelector(`[data-acoru-id=${name}]`);

      if (name && target) {
        return new AcoruCollection(name, el, target, this);
      }
      return null;
    }).filter(item => item !== null);

    this.height = 0;
    this.__event = {};
  }

  init() {
    this.collections.forEach(collection => {
      collection.init();
    });
  }

  open(name) {
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

  close(name) {
    if (!name) {
      return;
    }

    for (const collection of this.collections) {
      if (collection.name === name) {
        collection.close();
        break;
      }
    }
  }

  teardown() {
    this.collections.forEach(collection => {
      collection.teardown();
    });
  }

  on(type, func) {
    if (typeof func !== 'function') {
      throw new Error('Required function');
    }

    if (!this.__event[type]) {
      this.__event[type] = [];
    }
    this.__event[type].push(func);
    return this;
  }

  getEvent(type) {
    return this.__event[type] || [];
  }

  getActiveCollection(uid) {
    return this.collections.find(collection => {
      return collection.parentUID === uid && collection.active;
    }) || null;
  }
}
