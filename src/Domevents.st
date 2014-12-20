Smalltalk createPackage: 'DOMEvents'!
Object subclass: #DOMEvents
	instanceVariableNames: ''
	package: 'DOMEvents'!

!DOMEvents class methodsFor: 'starting'!

start
! !

!Object methodsFor: '*DOMEvents'!

off
	"Unwires the observation of this instance to the occurrence of all events.
	All handlers will stop reacting"

	<$(self).off()>
!

off: anEventName 
	"Unwires the observation of this instance from the occurrence of anEventName.
	All handlers for it will stop reacting"

	<$(self).off(anEventName)>
!

trigger: anEventName 
	"Triggers anEventName from this instance (no arguments).
	For example:  self trigger: #changed."
	
	<return $(self).trigger(anEventName)>
!

trigger: anEventName with: anArgument
	"Triggers anEventName, from this instance eventually using anArgument in the reacting callbacks."
	
	^ self trigger: anEventName withAll: (Array with: anArgument)
!

trigger: anEventName with: firstArgument with: secondArgument
	"Triggers anEventName from this instance using those two given arugments"
	
	^ self 
		trigger: anEventName 
		withAll: (Array 
					with: firstArgument
					with: secondArgument)
!

trigger: anEventName withAll: someArguments
	"Triggers anEventName from this instance using all the given arugments"

	<return $(self).trigger( anEventName, someArguments )>
!

when: anEventName do: aReactionBlock
	"Wires the observation of this instance to react to the eventual occurrence of anEventName.
	When (and if) anEventName happens, aReactionBlock will take place. 
	Based on this feature: http://forum.jquery.com/topic/triggering-custom-events-on-js-objects
	Note that some objects wont fire (anArray for example)."

	<$(self).on(anEventName, function(e){
		var someArguments = $(arguments).slice();
		someArguments.splice(0,1);
		aReactionBlock.apply(null, someArguments)})>
! !

