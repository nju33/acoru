# Acoru

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)


<!-- [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

[![Build Status](https://travis-ci.org/nju33/acoru.svg?branch=master)](https://travis-ci.org/nju33/acoru) -->

![screenshot](https://github.com/nju33/acoru/raw/master/images/screenshot.gif?raw=true)

To make an accordion UI.

## Install or Download

```sh
yarn add acoru
npm i -S acoru
```

Or access to [releases page](https://github.com/nju33/acoru/releases).
Then, download the latest version.

## Usage

### HTML

if you read as a separate file.

```html
<script src="/path/tp/acoru.js"></script>
```

Markup and script are like this.

```html
<div id="vertical" data-acoru-axis="vertical" data-acoru-mode="single">
  <div data-acoru-for="name1">name1</div>
  <div data-acoru-id="name1" style="display:none">...</div>
  <div data-acoru-for="name2">name2</div>
  <div data-acoru-id="name2" style="display:none">...</div>
</div>
```

#### Special attributes are as follows.

##### `data-acoru-for`, `data-acoru-id`

Like `label[for]` and `input[id]`, for example click on `[data-acoru-for=name]` to open `[data-acoru-id=name]`.

`[data-acoru-id]` is first hidden by `[style='display:none']`.

##### `data-acoru-axis` (default: `vertical`)

Whether to open vertically or horizontally.

##### `data-acoru-mode` (default: `single`)

Try to open only one, Do you want to open multiple.

##### `data-acoru-parent` (option)

If an ancestor has an element that has this element, it is considered a parent. Otherwise, we consider the next higher element as parent.

#### About class

The following classes come with timing.

- `open` Before opening, open element
- `opened` After opening, open the element
- `close` After closing, close element

Especially in the case of markup like this, I think that it will be necessary to control the style using classes.

```html
<div id="vertical">
  <!-- One deep -->
  <div>
    <div data-acoru-for="name1">name1</div>
    <div data-acoru-id="name1" style="display:none">...</div>
  </div>
  <div>
    <div data-acoru-for="name2">name2</div>
    <div data-acoru-id="name2" style="display:none">...</div>
  </div>
</div>
```

#### About overflow

When the parent (`[data-acoru-parent]`) element is in `overflow:hidden` state, the size of each accordion item is adjusted so that it does not jump out of parent.

### JavaScript

#### Example

```js
// For es
// import Acoru from 'acoru';

const acoru = new Acoru(document.getElementById('vertical'));
acoru.init();
acoru.on('opened', collection => console.log('opened ' + collection.name));
```

##### `new Acoru(baseElement = document)`

Process elements below `baseElement`.

#### `acoru.init()`

Initial processing.

#### `acoru.on(type, cb)`

Register a function to be executed at a certain timing.
It has the following.

- `open` Before opening any
- `opened` After opening any
- `close` Before closing any
- `closed`After closing any

#### `acoru.open(name)`

Open the `name` item.

#### `acoru.close(name)`

Close the `name` item.

#### `acoru.teardown()`

Discard processing related to Acoru

### Example

- `test/fixtures/`
- `example/webpack/`

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
