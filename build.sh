#!/bin/bash

# build
gulp

# clean
rm atom.xml index.html robots.txt sitemap.xml
rm -r 404/ public/ faq/ privacy/ tos/

# copy
cp -r _site/* ./
rm -r _site