
library(shiny)
library(jsonlite)
library(magrittr)
source("src/helper/misc.R")
source("settings/settings-global.R")
dir.create('src/built',showWarnings=F)
rt <- htmltools::doRenderTags

write('<!DOCTYPE html>','src/built/index.html')
write(rt(mxSource('src/ui/index.R')),'src/built/index.html',append=TRUE)
write(rt(mxSource('src/ui/view_list.dot.R')),'src/built/view_list.dot')
write(rt(mxSource('src/ui/view_list_options.dot.R')),'src/built/view_list_options.dot')
write(rt(mxSource('src/ui/view_list_legend.dot.R')),'src/built/view_list_legend.dot')
