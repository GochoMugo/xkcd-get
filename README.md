
# xkcd-get

[![Build Status](https://travis-ci.org/GochoMugo/xkcd-get.svg)](https://travis-ci.org/GochoMugo/xkcd-get) [![Coverage Status](https://coveralls.io/repos/GochoMugo/xkcd-get/badge.svg)](https://coveralls.io/r/GochoMugo/xkcd-get)

Load random comic strips from http://xkcd.com/


## installation:

Using npm:

```bash
⇒ npm install xkcd-get
```

Using bower:

```bash
⇒ bower install xkcd-get
```

## setup:

### script:

Load the javascript file, `xkcd.js`, into your page.

```html
<script src="xkcd.js"></script>
```

### image holder:

Add such a `div` element:

```html
<div class="xkcd-img"></div>
```

### image refresh:

Any element with the class `xkcd-refresh` will be targeted when adding a listener to listen for **click**. The xkcd comics will be replaced once such an element is clicked.

```html
<a href="#" class="xkcd-refresh"></a>
```


## credits:

Thanks to:

* [Randall Munroe](http://xkcd.com/about/) for the [xkcd](http://xkcd.com) comic strips.
* [Hemanth](https://github.com/hemanth) for hosting then web app serving urls to random comic strips from xkcd.
* You for enjoying comics.


## license:

**The MIT License (MIT)**

Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>

