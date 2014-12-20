define("domevents/DOMEvents", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('DOMEvents');
$core.packages["DOMEvents"].transport = {"type":"amd","amdNamespace":"domevents"};

$core.addClass('DOMEvents', $globals.Object, [], 'DOMEvents');

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DOMEvents.klass);

$core.addMethod(
$core.method({
selector: "trigger:",
protocol: '*DOMEvents',
fn: function (anEventName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $(self).trigger(anEventName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trigger:",{anEventName:anEventName},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName"],
source: "trigger: anEventName \x0a\x09\x22Triggers anEventName from this instance (no arguments).\x0a\x09For example:  self trigger: #changed.\x22\x0a\x09\x0a\x09<return $(self).trigger(anEventName)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "trigger:with:",
protocol: '*DOMEvents',
fn: function (anEventName,anArgument){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._trigger_withAll_(anEventName,$recv($Array())._with_(anArgument));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trigger:with:",{anEventName:anEventName,anArgument:anArgument},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "anArgument"],
source: "trigger: anEventName with: anArgument\x0a\x09\x22Triggers anEventName, from this instance eventually using anArgument in the reacting callbacks.\x22\x0a\x09\x0a\x09^ self trigger: anEventName withAll: (Array with: anArgument)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["trigger:withAll:", "with:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "trigger:with:with:",
protocol: '*DOMEvents',
fn: function (anEventName,firstArgument,secondArgument){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._trigger_withAll_(anEventName,$recv($Array())._with_with_(firstArgument,secondArgument));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trigger:with:with:",{anEventName:anEventName,firstArgument:firstArgument,secondArgument:secondArgument},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "firstArgument", "secondArgument"],
source: "trigger: anEventName with: firstArgument with: secondArgument\x0a\x09\x22Triggers anEventName from this instance using those two given arugments\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09trigger: anEventName \x0a\x09\x09withAll: (Array \x0a\x09\x09\x09\x09\x09with: firstArgument\x0a\x09\x09\x09\x09\x09with: secondArgument)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["trigger:withAll:", "with:with:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "trigger:withAll:",
protocol: '*DOMEvents',
fn: function (anEventName,someArguments){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $(self).trigger( anEventName, someArguments );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trigger:withAll:",{anEventName:anEventName,someArguments:someArguments},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "someArguments"],
source: "trigger: anEventName withAll: someArguments\x0a\x09\x22Triggers anEventName from this instance using all the given arugments\x22\x0a\x0a\x09<return $(self).trigger( anEventName, someArguments )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "when:do:",
protocol: '*DOMEvents',
fn: function (anEventName,aReactionBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$(self).on(anEventName, function(e){
		var someArguments = $(arguments).slice();
		someArguments.splice(0,1);
		aReactionBlock.apply(null, someArguments)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:do:",{anEventName:anEventName,aReactionBlock:aReactionBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "aReactionBlock"],
source: "when: anEventName do: aReactionBlock\x0a\x09\x22Wires the observation of this instance to react to the eventual occurrence of anEventName.\x0a\x09When (and if) anEventName happens, aReactionBlock will take place. \x0a\x09Based on this feature: http://forum.jquery.com/topic/triggering-custom-events-on-js-objects\x0a\x09Note that some objects wont fire (anArray for example).\x22\x0a\x0a\x09<$(self).on(anEventName, function(e){\x0a\x09\x09var someArguments = $(arguments).slice();\x0a\x09\x09someArguments.splice(0,1);\x0a\x09\x09aReactionBlock.apply(null, someArguments)})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
