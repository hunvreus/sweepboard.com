#!/bin/bash

# clean
rm atom.xml CNAME google945dae66a3fbd963.html index.html robots.txt sitemap.xml styles.css
rm -r 404/ faq/ privacy/ tos/

# copy
cp -r _site/* ./
rm -r _site