define("domevents/DOMEvents", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
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
source: "start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DOMEvents.klass);

$core.addMethod(
$core.method({
selector: "dropFirstArg",
protocol: '*DOMEvents',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.apply(null,Array.prototype.slice.call(arguments, 1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFirstArg",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dropFirstArg\x0a\x09\x22Evaluates this closure using all the arguments except the first one.\x22\x0a\x09<self.apply(null,Array.prototype.slice.call(arguments, 1))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "dropFirstArg:",
protocol: '*DOMEvents',
fn: function (someArguments){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._valueWithPossibleArguments_($recv(someArguments)._allButFirst());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFirstArg:",{someArguments:someArguments},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someArguments"],
source: "dropFirstArg: someArguments\x0a\x09\x22Evaluates this closure using all the arguments except the first one.\x22\x0a\x09^ self valueWithPossibleArguments: someArguments allButFirst",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithPossibleArguments:", "allButFirst"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "releaseActionMap",
protocol: '*DOMEvents',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._asJQuery())._off();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"releaseActionMap",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "releaseActionMap\x0a\x09\x22Unwires the observation of this instance to the occurrence of all events.\x0a\x09All handlers will stop reacting\x22\x0a\x0a\x09self asJQuery off",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["off", "asJQuery"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "removeActionsForEvent:",
protocol: '*DOMEvents',
fn: function (anEventName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._asJQuery())._off_(anEventName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeActionsForEvent:",{anEventName:anEventName},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName"],
source: "removeActionsForEvent: anEventName \x0a\x09\x22Unwires the observation of this instance from the occurrence of anEventName.\x0a\x09All handlers for it will stop reacting\x22\x0a\x0a\x09self asJQuery off: anEventName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["off:", "asJQuery"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "triggerEvent:",
protocol: '*DOMEvents',
fn: function (anEventName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asJQuery())._trigger_(anEventName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triggerEvent:",{anEventName:anEventName},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName"],
source: "triggerEvent: anEventName \x0a\x09\x22Triggers anEventName from this instance (no arguments).\x0a\x09For example:  self triggerEvent: #changed.\x22\x0a\x09\x0a\x09^ self asJQuery trigger: anEventName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "asJQuery"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "triggerEvent:with:",
protocol: '*DOMEvents',
fn: function (anEventName,anArgument){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._triggerEvent_withArguments_(anEventName,$recv($Array())._with_(anArgument));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triggerEvent:with:",{anEventName:anEventName,anArgument:anArgument},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "anArgument"],
source: "triggerEvent: anEventName with: anArgument\x0a\x09\x22Triggers anEventName, from this instance eventually using anArgument in the reacting callbacks.\x22\x0a\x09\x0a\x09^ self triggerEvent: anEventName withArguments: (Array with: anArgument)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:withArguments:", "with:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "triggerEvent:with:with:",
protocol: '*DOMEvents',
fn: function (anEventName,firstArgument,secondArgument){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._triggerEvent_withArguments_(anEventName,$recv($Array())._with_with_(firstArgument,secondArgument));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triggerEvent:with:with:",{anEventName:anEventName,firstArgument:firstArgument,secondArgument:secondArgument},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "firstArgument", "secondArgument"],
source: "triggerEvent: anEventName with: firstArgument with: secondArgument\x0a\x09\x22Triggers anEventName from this instance using those two given arugments\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09triggerEvent: anEventName \x0a\x09\x09withArguments: (Array \x0a\x09\x09\x09\x09\x09with: firstArgument\x0a\x09\x09\x09\x09\x09with: secondArgument)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:withArguments:", "with:with:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "triggerEvent:withArguments:",
protocol: '*DOMEvents',
fn: function (anEventName,someArguments){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._asJQuery())._trigger_with_(anEventName,someArguments);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triggerEvent:withArguments:",{anEventName:anEventName,someArguments:someArguments},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "someArguments"],
source: "triggerEvent: anEventName withArguments: someArguments\x0a\x09\x22Triggers anEventName from this instance using all the given arugments\x22\x0a\x0a\x09self asJQuery trigger: anEventName with: someArguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:with:", "asJQuery"]
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
jQuery(self).on(anEventName, function(e){
		aReactionBlock.apply(null, Array.prototype.slice.call(arguments, 1))});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"when:do:",{anEventName:anEventName,aReactionBlock:aReactionBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEventName", "aReactionBlock"],
source: "when: anEventName do: aReactionBlock\x0a\x09\x22Wires the observation of this instance to react to the eventual occurrence of anEventName.\x0a\x09anEventName is expected to be a keyword aSymbol and aReactionBlock to receive the arguments.\x0a\x09When (and if) anEventName happens, aReactionBlock will take place receiving the arguments sent at trigger time.\x0a\x09Based on this feature: http://forum.jquery.com/topic/triggering-custom-events-on-js-objects\x0a\x09Note that, due to a jQuery limitation, some objects will not trigger events (anArray for example).\x22\x0a\x0a\x09<jQuery(self).on(anEventName, function(e){\x0a\x09\x09aReactionBlock.apply(null, Array.prototype.slice.call(arguments, 1))})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
