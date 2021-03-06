define("domevents/DOMEvents-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('DOMEvents-Tests');
$core.packages["DOMEvents-Tests"].transport = {"type":"amd","amdNamespace":"domevents"};

$core.addClass('DOMEventsTest', $globals.TestCase, [], 'DOMEvents-Tests');
$core.addMethod(
$core.method({
selector: "testCustomEventWithNoArgument",
protocol: 'tests',
fn: function (){
var self=this;
var observed;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
observed=$recv($Dictionary())._new();
$recv(observed)._when_do_("something",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something","happen");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._triggerEvent_("something");
self._assert_($recv(observed)._includesKey_("something"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(observed)._at_("something")).__eq("happen"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithNoArgument",{observed:observed},$globals.DOMEventsTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithNoArgument\x0a\x0a\x09| observed |\x0a\x0a\x09observed := Dictionary new.\x0a\x09\x0a\x09observed when: #something do:[ observed at: #something put: #happen ].\x0a\x09\x0a\x09observed triggerEvent: #something.\x0a\x09\x0a\x09self assert: (observed includesKey: #something).\x09\x0a\x09self assert: (observed at: #something) = #happen.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "when:do:", "at:put:", "triggerEvent:", "assert:", "includesKey:", "=", "at:"]
}),
$globals.DOMEventsTest);

$core.addMethod(
$core.method({
selector: "testCustomEventWithOneArgument",
protocol: 'tests',
fn: function (){
var self=this;
var observed,thing;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
observed=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
thing=$recv($TestCase())._new();
$recv(observed)._when_do_("something:",(function(argument){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something:",argument);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({argument:argument},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._triggerEvent_with_("something:",thing);
self._assert_($recv(observed)._includesKey_("something:"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(observed)._at_("something:")).__eq_eq(thing));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithOneArgument",{observed:observed,thing:thing},$globals.DOMEventsTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithOneArgument\x0a\x0a\x09| observed thing |\x0a\x0a\x09observed := Dictionary new.\x0a\x09thing := TestCase new.\x0a\x09\x0a\x09observed when: #something: do:[ :argument | observed at: #something: put: argument ].\x0a\x09\x0a\x09observed triggerEvent: #something: with: thing.\x0a\x09\x0a\x09self assert: (observed includesKey: #something:).\x09\x0a\x09self assert: (observed at: #something:) == thing.",
referencedClasses: ["Dictionary", "TestCase"],
//>>excludeEnd("ide");
messageSends: ["new", "when:do:", "at:put:", "triggerEvent:with:", "assert:", "includesKey:", "==", "at:"]
}),
$globals.DOMEventsTest);

$core.addMethod(
$core.method({
selector: "testCustomEventWithTenArguments",
protocol: 'tests',
fn: function (){
var self=this;
var observed,things,all;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
observed=$recv($Dictionary())._new();
things=$recv((1)._to_((10)))._collect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "thisAssociation".__minus_gt(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._when_do_("something:",(function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
all=$globals.HashedCollection._newFromPairs_([]);
all;
$recv($core.getThisContext()._locals())._addObjectVariablesTo_(all);
return $recv(observed)._at_put_("something:",$recv(all)._values());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a1:a1,a2:a2,a3:a3,a4:a4,a5:a5,a6:a6,a7:a7,a8:a8,a9:a9,a10:a10},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(observed)._triggerEvent_withArguments_("something:",things);
self._assert_($recv(observed)._includesKey_("something:"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$1=$recv(observed)._at_("something:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(thing){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv(things)._includes_(thing));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({thing:thing},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._assert_($recv($recv(observed)._at_("something:")).__eq(things));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithTenArguments",{observed:observed,things:things,all:all},$globals.DOMEventsTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithTenArguments\x0a\x0a\x09| observed things all |\x0a\x0a\x09observed := Dictionary new.\x0a\x09things := (1 to: 10) collect: [ :i | #thisAssociation -> i ].\x0a\x09\x0a\x09observed when: #something: do:[ :a1 :a2 :a3 :a4 :a5 :a6 :a7 :a8 : a9 :a10 | \x0a\x09\x09all := #{}.\x0a\x09\x09thisContext locals addObjectVariablesTo: all.\x0a\x09\x09observed \x0a\x09\x09\x09at: #something: \x0a\x09\x09\x09put: all values ].\x0a\x09\x0a\x09observed triggerEvent: #something: withArguments: things.\x0a\x0a\x09self assert: (observed includesKey: #something:).\x09\x0a\x0a\x09(observed at: #something:) do: [ :thing |\x0a\x09\x09self assert: (things includes: thing) ].\x0a\x09\x0a\x09self assert: (observed at: #something:) = things",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "collect:", "to:", "->", "when:do:", "addObjectVariablesTo:", "locals", "at:put:", "values", "triggerEvent:withArguments:", "assert:", "includesKey:", "do:", "at:", "includes:", "="]
}),
$globals.DOMEventsTest);

$core.addMethod(
$core.method({
selector: "testCustomEventWithTwoArgument",
protocol: 'tests',
fn: function (){
var self=this;
var observed,thing,stuff;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
observed=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
thing=$recv($TestCase())._new();
stuff="this".__minus_gt("association");
$recv(observed)._when_do_("something:",(function(arg1,arg2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something:",$recv($Array())._with_with_(arg1,arg2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({arg1:arg1,arg2:arg2},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._triggerEvent_with_with_("something:",thing,stuff);
self._assert_($recv(observed)._includesKey_("something:"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$3=$recv(observed)._at_("something:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._first();
$1=$recv($2).__eq_eq(thing);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv($recv($recv(observed)._at_("something:"))._second()).__eq_eq(stuff));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithTwoArgument",{observed:observed,thing:thing,stuff:stuff},$globals.DOMEventsTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithTwoArgument\x0a\x0a\x09| observed thing stuff |\x0a\x0a\x09observed := Dictionary new.\x0a\x09thing := TestCase new.\x0a\x09stuff := #this -> 'association'.\x0a\x09\x0a\x09observed when: #something: do:[ :arg1 :arg2 | observed at: #something: put: (Array with: arg1 with: arg2) ].\x0a\x09\x0a\x09observed triggerEvent: #something: with: thing with: stuff.\x0a\x09\x0a\x09self assert: (observed includesKey: #something:).\x09\x0a\x09self assert: (observed at: #something:) first == thing.\x0a\x09self assert: (observed at: #something:) second == stuff.",
referencedClasses: ["Dictionary", "TestCase", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "->", "when:do:", "at:put:", "with:with:", "triggerEvent:with:with:", "assert:", "includesKey:", "==", "first", "at:", "second"]
}),
$globals.DOMEventsTest);

$core.addMethod(
$core.method({
selector: "testUnobserveCustomEvent",
protocol: 'tests',
fn: function (){
var self=this;
var observed;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
observed=$recv($Dictionary())._new();
$recv(observed)._when_do_("something",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something","happen");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._triggerEvent_("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
$1=$recv(observed)._includesKey_("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(observed)._at_("something")).__eq("happen"));
$recv(observed)._removeKey_("something");
$recv(observed)._triggerEvent_("whatever");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=2;
//>>excludeEnd("ctx");
$2=$recv(observed)._includesKey_("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$recv(observed)._removeActionsForEvent_("something");
$recv(observed)._triggerEvent_("something");
self._deny_($recv(observed)._includesKey_("something"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnobserveCustomEvent",{observed:observed},$globals.DOMEventsTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnobserveCustomEvent\x0a\x0a\x09| observed |\x0a\x0a\x09observed := Dictionary new.\x0a\x09\x0a\x09observed when: #something do:[ observed at: #something put: #happen ].\x0a\x09\x0a\x09observed triggerEvent: #something.\x0a\x09\x0a\x09\x22Assert reaction\x22\x0a\x09self assert: (observed includesKey: #something).\x09\x0a\x09self assert: (observed at: #something) = #happen.\x0a\x09observed removeKey: #something.\x0a\x0a\x09\x22Assert nonchalance when triggering somethign different\x22\x0a\x09observed triggerEvent: #whatever.\x0a\x09self deny: (observed includesKey: #something).\x09\x0a\x0a\x09\x22Assert nonchalance after unobserving\x22\x0a\x09observed removeActionsForEvent: #something.\x0a\x09observed triggerEvent: #something.\x0a\x09self deny: (observed includesKey: #something).",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "when:do:", "at:put:", "triggerEvent:", "assert:", "includesKey:", "=", "at:", "removeKey:", "deny:", "removeActionsForEvent:"]
}),
$globals.DOMEventsTest);


});
