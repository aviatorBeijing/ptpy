# -*- coding: utf-8 -*-
#!/usr/bin/env python

from PySide import QtWebKit
from ptpy.pyside.webkit.webpage import WebPage

import base64

css = u"""
body
{
font-family:"YaHei Consolas Hybrid";
}
:focus {
outline: none;
}
/* 
PtPHP CSS Reset Stylesheet v1.5 
Last Updated: 2010-08-12
Author: Dhole - http://css.ptphp.com
Mail: liseor@gmail.com
*/


html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, 
p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}



blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}



input, select {
    vertical-align:middle;
}

"""

class WebView(QtWebKit.QWebView):
    def __init__(self,parent = None):
        QtWebKit.QWebView.__init__(self,parent)     
        
        self.settings().setUserStyleSheetUrl("data:text/css;charset=utf-8;base64,%s==" % base64.encodestring(css))
        
        settings = QtWebKit.QWebSettings.globalSettings()
        
        QtWebKit.QWebSettings.globalSettings().setAttribute(QtWebKit.QWebSettings.WebAttribute.DeveloperExtrasEnabled, True)
        QtWebKit.QWebSettings.globalSettings().setAttribute(QtWebKit.QWebSettings.LocalStorageEnabled, True)
        QtWebKit.QWebSettings.globalSettings().setAttribute(QtWebKit.QWebSettings.LocalStorageDatabaseEnabled, True)
        QtWebKit.QWebSettings.globalSettings().setFontSize(QtWebKit.QWebSettings.DefaultFontSize,12)
        
        self.setPage(WebPage())
        self.titleChanged.connect(self.titleChange)   
        self.urlChanged.connect(self.urlChange)
        
    def titleChange(self,title):
        pass#print title
    def urlChange(self,url):
        pass#print url
    
    
    