# html2pdf
## just a small wrapper around phantomjs
### it renders web pages to pdf

## example:

    $ html2pdf --url http://google.com --output google.pdf
    : ☃ INFO ☃ : ~~ yes this is html2pdf ~~
    : ☃ INFO ☃ : spawning phantomjs...
    2013-11-22 17:56:23.283 phantomjs[44555:507] *** WARNING: Method userSpaceScaleFactor in class NSView is deprecated on 10.7 and later. It should not be used in new applications. Use convertRectToBacking: instead.
    : ☃ INFO ☃ : ~~ yes this is html2pdf ~~
    : ☃ INFO ☃ : loading `http://google.com`...
    2013-11-22 17:56:23.729 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    2013-11-22 17:56:23.729 phantomjs[44555:507] CoreText performance note: Set a breakpoint on CTFontLogSuboptimalRequest to debug.
    2013-11-22 17:56:23.733 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    2013-11-22 17:56:23.967 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    2013-11-22 17:56:23.968 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    2013-11-22 17:56:23.968 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    2013-11-22 17:56:23.969 phantomjs[44555:507] CoreText performance note: Client called CTFontCreateWithName() using name "Arial" and got font with PostScript name "ArialMT". For best performance, only use PostScript names when calling this API.
    : ☃ INFO ☃ : rendering to `google.pdf`...
    : ☃ INFO ☃ : k bye

