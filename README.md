
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


## license:

**The MIT License (MIT)**

Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>

