!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ng.common"),require("wako-app.mobile-sdk"),require("ngx-translate.core"),require("ionic.angular"),require("ng.core"),require("tslib"),require("ng.router"),require("ng.forms")):"function"==typeof define&&define.amd?define(["ng.common","wako-app.mobile-sdk","ngx-translate.core","ionic.angular","ng.core","tslib","ng.router","ng.forms"],e):"object"==typeof exports?exports.plugin=e(require("ng.common"),require("wako-app.mobile-sdk"),require("ngx-translate.core"),require("ionic.angular"),require("ng.core"),require("tslib"),require("ng.router"),require("ng.forms")):n.plugin=e(n["ng.common"],n["wako-app.mobile-sdk"],n["ngx-translate.core"],n["ionic.angular"],n["ng.core"],n.tslib,n["ng.router"],n["ng.forms"])}("undefined"!=typeof self?self:this,function(n,e,l,t,o,r,u,i){return function(n){var e={};function l(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=n,l.c=e,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)l.d(t,o,(function(e){return n[e]}).bind(null,o));return t},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l(l.s=0)}({0:function(n,e,l){n.exports=l("zUnb")},"0S4P":function(e,l){e.exports=n},"17wl":function(n,e){n.exports=r},"3xDq":function(n,e){n.exports=i},FsH7:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=l("17wl"),o=l("vOrQ"),r=l("z1lQ"),u=l("TGDj");e.ToastService=function(){function n(n,e){this.toastCtrl=n,this.translateService=e}return n.prototype.simpleMessage=function(n,e,l,t){var o=this;void 0===l&&(l=2e3),void 0===t&&(t="top"),this.translateService.get(n,e).subscribe(function(n){o.toastCtrl.create({message:n,mode:"ios",position:t,duration:l}).then(function(n){n.present()})})},t.__decorate([o.Injectable(),t.__metadata("design:paramtypes",[r.ToastController,u.TranslateService])],n)}()},GoKE:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=l("17wl"),o=l("vOrQ"),r=l("z1lQ");e.BrowserService=function(){function n(n){this.platform=n}return n.prototype.open=function(n,e){void 0===e&&(e=!0),!1!==this.platform.is("cordova")&&e?SafariViewController.isAvailable(function(e){e?SafariViewController.show({url:n,hidden:!1,animated:!0,transition:"curl",enterReaderModeIfAvailable:!1,barColor:"#1f2d3f",tintColor:"#1f2d3f",controlTintColor:"#ffffff"}).subscribe():window.open(n,"_system","location=yes")}):window.open(n,"_system","location=yes")},t.__decorate([o.Injectable(),t.__metadata("design:paramtypes",[r.Platform])],n)}()},JAnZ:function(n,e){n.exports=u},TGDj:function(n,e){n.exports=l},doF0:function(n,l){n.exports=e},vOrQ:function(n,e){n.exports=o},z1lQ:function(n,e){n.exports=t},zUnb:function(n,e,l){"use strict";l.r(e);var t=l("17wl"),o=l("doF0"),r=l("TGDj");function u(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];Object(o.wakoLog)("plugin.my-plugin",n)}var i=function(n){function e(e){var l=n.call(this)||this;return l.translate=e,l}return t.__extends(e,n),e.prototype.initialize=function(){u("plugin initialized")},e.prototype.afterInstall=function(){u("plugin installed")},e.prototype.afterUpdate=function(){u("plugin updated")},e.prototype.setTranslation=function(n,e){this.translate.setDefaultLang(n),this.translate.use(n),this.translate.setTranslation(n,e)},e}(o.PluginBaseService),a=l("z1lQ"),c=l("vOrQ"),s=function(){function n(n,e,l){this.modalCtrl=n,this.browserService=e,this.toastService=l}return n.prototype.ngOnInit=function(){this.toastService.simpleMessage("openMedia",{imdbId:this.movie?this.movie.imdbId:this.show.imdbId})},n.prototype.dismiss=function(){this.modalCtrl.dismiss()},n.prototype.openImdb=function(n){this.browserService.open("http://www.imdb.com/title/"+n+"/",!1)},n}(),d=function(n){function e(e){var l=n.call(this)||this;return l.modalCtrl=e,l}return t.__extends(e,n),e.prototype.setMovie=function(n){this.movie=n},e.prototype.openMovie=function(){this.modalCtrl.create({component:s,componentProps:{movie:this.movie}}).then(function(n){n.present()})},e}(o.MovieDetailBaseComponent),p=function(){function n(n){this.translate=n}return n.prototype.ngOnInit=function(){u("Current lang",this.translate.currentLang),u("Test instant translate",this.translate.instant("settings.title"))},n}(),f=function(n){function e(e){var l=n.call(this)||this;return l.modalCtrl=e,l}return t.__extends(e,n),e.prototype.setShowEpisode=function(n,e){this.show=n,this.episode=e},e.prototype.openEpisode=function(){this.modalCtrl.create({component:s,componentProps:{show:this.show,episode:this.episode}}).then(function(n){n.present()})},e}(o.EpisodeDetailBaseComponent),m=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(e,n),e.pluginService=i,e.settingsComponent=p,e.movieComponent=d,e.episodeComponent=f,e}(o.PluginBaseModule),g=l("0S4P");l("JAnZ");var v=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function h(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var C=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function y(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var b=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var T=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var R=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var w=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var D=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function E(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var k=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var N=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function P(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var j=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.openMovie()&&t),t},h,v)),c["\u0275did"](1,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" My movie : "," ","\n"]))],null,function(n,e){var l=e.component;n(e,2,0,l.movie.title,l.movie.traktId)})}function Z(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,O,j)),c["\u0275did"](1,49152,null,0,d,[a.ModalController],null,null)],null,null)}var q=c["\u0275ccf"]("ng-component",d,Z,{},{},[]),F=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.openEpisode()&&t),t},h,v)),c["\u0275did"](1,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" Show : "," - Episode ","\n"]))],null,function(n,e){var l=e.component;n(e,2,0,l.show.title,l.episode.code)})}function L(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,A,F)),c["\u0275did"](1,49152,null,0,f,[a.ModalController],null,null)],null,null)}var B=c["\u0275ccf"]("ng-component",f,L,{},{},[]),z=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function U(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),c["\u0275ted"](1,null,[" ","\n"])),c["\u0275pid"](131072,r.TranslatePipe,[r.TranslateService,c.ChangeDetectorRef]),(n()(),c["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c["\u0275ted"](-1,null,["My plugin"]))],null,function(n,e){n(e,1,0,c["\u0275unv"](e,1,0,c["\u0275nov"](e,2).transform("settings.title")))})}function Q(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,U,z)),c["\u0275did"](1,114688,null,0,p,[r.TranslateService],null,null)],function(n,e){n(e,1,0)},null)}var G=c["\u0275ccf"]("ng-component",p,Q,{},{},[]),H=l("GoKE"),V=l("FsH7"),J=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function K(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,4,"ion-card-content",[],null,null,null,I,T)),c["\u0275did"](1,49152,null,0,a.IonCardContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](2,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,e,l){var t=!0,o=n.component;return"click"===e&&(t=!1!==o.openImdb(o.movie.imdbId)&&t),t},h,v)),c["\u0275did"](3,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](-1,0,[" Open on Imdb "]))],null,null)}function W(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,4,"ion-card-content",[],null,null,null,I,T)),c["\u0275did"](1,49152,null,0,a.IonCardContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](2,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,e,l){var t=!0,o=n.component;return"click"===e&&(t=!1!==o.openImdb(o.show.imdbId)&&t),t},h,v)),c["\u0275did"](3,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](-1,0,[" Open on Imdb "]))],null,null)}function X(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,M,w)),c["\u0275did"](1,49152,null,0,a.IonHeader,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,P,N)),c["\u0275did"](3,49152,null,0,a.IonToolbar,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,x,k)),c["\u0275did"](5,49152,null,0,a.IonTitle,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](6,0,[" "," "])),(n()(),c["\u0275eld"](7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,y,C)),c["\u0275did"](8,49152,null,0,a.IonButtons,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](9,0,null,0,3,"ion-button",[["color","light"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.dismiss()&&t),t},h,v)),c["\u0275did"](10,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],{color:[0,"color"]},null),(n()(),c["\u0275eld"](11,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,E,D)),c["\u0275did"](12,49152,null,0,a.IonIcon,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],{name:[0,"name"]},null),(n()(),c["\u0275eld"](13,0,null,null,7,"ion-content",[],null,null,null,S,R)),c["\u0275did"](14,49152,null,0,a.IonContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](15,0,null,0,5,"ion-card",[],null,null,null,_,b)),c["\u0275did"](16,49152,null,0,a.IonCard,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275and"](16777216,null,0,1,null,K)),c["\u0275did"](18,16384,null,0,g.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),c["\u0275and"](16777216,null,0,1,null,W)),c["\u0275did"](20,16384,null,0,g.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var l=e.component;n(e,10,0,"light"),n(e,12,0,"close"),n(e,18,0,l.movie),n(e,20,0,l.show)},function(n,e){var l=e.component;n(e,6,0,l.movie?l.movie.title:l.show.title+" "+l.episode.code)})}function Y(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"app-media-modal",[],null,null,null,X,J)),c["\u0275did"](1,114688,null,0,s,[a.ModalController,H.BrowserService,V.ToastService],null,null)],function(n,e){n(e,1,0)},null)}var $=c["\u0275ccf"]("app-media-modal",s,Y,{},{},[]),nn=l("3xDq"),en=c["\u0275cmf"](m,[],function(n){return c["\u0275mod"]([c["\u0275mpd"](512,c.ComponentFactoryResolver,c["\u0275CodegenComponentFactoryResolver"],[[8,[q,B,G,$]],[3,c.ComponentFactoryResolver],c.NgModuleRef]),c["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[c.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),c["\u0275mpd"](4608,nn["\u0275angular_packages_forms_forms_j"],nn["\u0275angular_packages_forms_forms_j"],[]),c["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[c.NgZone,c.ApplicationRef]),c["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,c.ComponentFactoryResolver,c.Injector]),c["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,c.ComponentFactoryResolver,c.Injector]),c["\u0275mpd"](5120,c.APP_INITIALIZER,function(n,e,l){return[a["\u0275e"](n,e,l)]},[a["\u0275a"],g.DOCUMENT,c.NgZone]),c["\u0275mpd"](4608,r.TranslateLoader,r.TranslateFakeLoader,[]),c["\u0275mpd"](4608,r.TranslateCompiler,r.TranslateFakeCompiler,[]),c["\u0275mpd"](4608,r.TranslateParser,r.TranslateDefaultParser,[]),c["\u0275mpd"](4608,r.MissingTranslationHandler,r.FakeMissingTranslationHandler,[]),c["\u0275mpd"](4608,r.TranslateStore,r.TranslateStore,[]),c["\u0275mpd"](4608,r.TranslateService,r.TranslateService,[r.TranslateStore,r.TranslateLoader,r.TranslateCompiler,r.TranslateParser,r.MissingTranslationHandler,r.USE_DEFAULT_LANG,r.USE_STORE]),c["\u0275mpd"](4608,i,i,[r.TranslateService]),c["\u0275mpd"](4608,H.BrowserService,H.BrowserService,[a.Platform]),c["\u0275mpd"](4608,V.ToastService,V.ToastService,[a.ToastController,r.TranslateService]),c["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),c["\u0275mpd"](1073742336,nn["\u0275angular_packages_forms_forms_bc"],nn["\u0275angular_packages_forms_forms_bc"],[]),c["\u0275mpd"](1073742336,nn.FormsModule,nn.FormsModule,[]),c["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),c["\u0275mpd"](1073742336,r.TranslateModule,r.TranslateModule,[]),c["\u0275mpd"](1073742336,m,m,[]),c["\u0275mpd"](256,a["\u0275a"],void 0,[]),c["\u0275mpd"](256,r.USE_STORE,void 0,[]),c["\u0275mpd"](256,r.USE_DEFAULT_LANG,void 0,[])])});l.d(e,"PluginModule",function(){return m}),l.d(e,"PluginModuleNgFactory",function(){return en}),e.default=en}})});