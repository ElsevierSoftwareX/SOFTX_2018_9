/*jshint esversion: 6 , node: true */
//'use strict';
import * as mx from './mx_init.js';


//var Image, Node,escape,unescape,$,postMessage,Shiny,self,Blob,URL,Worker,XMLHttpRequest, window, document, System;


$(document).on('shiny:connected', function(event) {

  /*
  * Input
  */
  Shiny.onInputChange('cookies', mx.helpers.readCookie());

  /*
  * Output
  */

  Shiny.addCustomMessageHandler('mglInit', mx.helpers.initMapx );
  Shiny.addCustomMessageHandler("mxUpdateLanguage", mx.helpers.updateLanguage);
  Shiny.addCustomMessageHandler("mxSetCookie",mx.helpers.writeCookie);
  Shiny.addCustomMessageHandler('mxModal', mx.helpers.modal);
  Shiny.addCustomMessageHandler('mxSetTemplates', mx.helpers.setTemplates);
  Shiny.addCustomMessageHandler('mxSetElementAttribute', mx.helpers.setElementAttribute);
  Shiny.addCustomMessageHandler("mxSetImageAttributes", mx.helpers.setImageAttributes);
  Shiny.addCustomMessageHandler("mxUiHide", mx.helpers.hide);
  Shiny.addCustomMessageHandler("mxUpdateText", mx.helpers.updateText);
  Shiny.addCustomMessageHandler("mxJsDebugMsg", mx.helpers.jsDebugMsg);
  Shiny.addCustomMessageHandler("mxButtonToggle", mx.helpers.buttonToggle);
  Shiny.addCustomMessageHandler("mxJsonToObj", mx.helpers.jsonToObj);
  Shiny.addCustomMessageHandler("mxJsonToHtml", mx.helpers.objectToHTML);
  Shiny.addCustomMessageHandler("mxProgress",mx.helpers.progressScreen);
  Shiny.addCustomMessageHandler("mxInjectHead",mx.helpers.injectHead);
  Shiny.addCustomMessageHandler("mxUpdateSelectizeItems",mx.helpers.updateSelectizeItems);
  Shiny.addCustomMessageHandler('mglRenderViewsList', mx.helpers.renderViewsList ); 
  Shiny.addCustomMessageHandler('mglSetFilter', mx.helpers.setFilter );
  Shiny.addCustomMessageHandler('mglAddLayer',  mx.helpers.addLayer );
  Shiny.addCustomMessageHandler('mglFlyTo', mx.helpers.flyTo );
  Shiny.addCustomMessageHandler('mglSyncAllMaps', mx.helpers.syncAll );
  Shiny.addCustomMessageHandler('jedInit',mx.helpers.jedRender);
  Shiny.addCustomMessageHandler('jedUpdate',mx.helpers.jedUpdate);
  Shiny.addCustomMessageHandler('mglSetSourcesFromViews',mx.helpers.setSourcesFromViews );
  Shiny.addCustomMessageHandler('mglRemoveView', mx.helpers.removeView );
  Shiny.addCustomMessageHandler('mglGetLocalForageData', mx.helpers.getLocalForageData );
  Shiny.addCustomMessageHandler('mglAddView', mx.helpers.addView );
  Shiny.addCustomMessageHandler('mglReadStory', mx.helpers.storyRead );
  Shiny.addCustomMessageHandler('mglReset', mx.helpers.reset );

//Shiny.addCustomMessageHandler('mglAddAutoLayer', mx.helpers.addAutoLayer );// add auto layer generated by schema
  //Shiny.addCustomMessageHandler('mglAddStyle', mx.helpers.addStyle );// add view style
  //Shiny.addCustomMessageHandler('mglAddSources', mx.helpers.addSources );// add sources
  //Shiny.addCustomMessageHandler('mglSaveViewsList', mx.helpers.saveViewsList ); // Save update vuew list



  //// Set country language
  //Shiny.addCustomMessageHandler( 'mglSetLanguage', mgl.helper.setLanguage );

  //// Save update vuew list

  //// Render view list to ui
  //Shiny.addCustomMessageHandler( 'mglRenderViewsList', mgl.helper.renderViewsList );

  //// add auto layer generated by schema
  //[>Shiny.addCustomMessageHandler( 'mglAddAutoLayer', mgl.helper.addAutoLayer );<]

  //// preview story map edits, save state

  //// add view style
  
  //// Get local forage object

  //// filter visible feature of the given layer id
  //Shiny.addCustomMessageHandler( 'mglSetFilter', mgl.helper.setFilter );

  //// add new layer
  //Shiny.addCustomMessageHandler( 'mglAddLayer',  mgl.helper.addLayer );

  //// go to location with animation
  //Shiny.addCustomMessageHandler( 'mglFlyTo', mgl.helper.flyTo );

  //// sync all maps
  //Shiny.addCustomMessageHandler( 'mglSyncAllMaps', mgl.helper.syncAll );

  //// delete geojson view
});





