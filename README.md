# DOMEvents

*Amber DOM events* allows any [Amber] (http://github.com/amber-smalltalk/amber) object to observe and trigger custom events.

## Example

Amber DOM events is used in [flow](https://github.com/flow-stack/flow) to make [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) applications.

You can program the reaction of a controller to a change in a model like this:

```
someController :=  MyController new.
someModel := WhateverModel new.

someModel 
	when: #changed 
	do: [  someController update ]
```

or..

```
someModel 
	when: #changed: 
	do: [  :val | someController updateWith: val ]
```

And trigger the events in the model like this:

```
someModel trigger: #changed
```

or with arguments...

```
someModel trigger: #changedValue: with: someNewValue
```

Check `DOMEvents-Tests` to see the full set of cases.

## Install

- Install it in your  [Amber] (http://github.com/amber-smalltalk/amber) project with:

```
bower install amber-dom-events --save
```

- Include it in your `deploy.js` with a like like:

```
'domevents/DOMEvents'
```
- (optional) include its tests in your `devel.js` with:

```
'domevents/DOMEvents-Tests'
```

