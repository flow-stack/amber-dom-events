Smalltalk createPackage: 'DOMEvents-Tests'!
TestCase subclass: #DOMEventsTest
	instanceVariableNames: ''
	package: 'DOMEvents-Tests'!

!DOMEventsTest methodsFor: 'tests'!

testCustomEventWithNoArgument

	| observed |

	observed := Dictionary new.
	
	observed when: #something do:[ observed at: #something put: #happen ].
	
	observed trigger: #something.
	
	self assert: (observed includesKey: #something).	
	self assert: (observed at: #something) = #happen.
!

testCustomEventWithOneArgument

	| observed thing |

	observed := Dictionary new.
	thing := TestCase new.
	
	observed when: #something: do:[ :argument | observed at: #something: put: argument ].
	
	observed trigger: #something: with: thing.
	
	self assert: (observed includesKey: #something:).	
	self assert: (observed at: #something:) == thing.
!

testCustomEventWithTenArguments

	| observed things all |

	observed := Dictionary new.
	things := (1 to: 10) collect: [ :i | Browser new ].
	
	observed when: #something: do:[ :a1 :a2 :a3 :a4 :a5 :a6 :a7 :a8 : a9 :a10 | 
		all := #{}.
		thisContext locals addObjectVariablesTo: all.
		observed 
			at: #something: 
			put: all values ].
	
	observed trigger: #something: withAll: things.

	self assert: (observed includesKey: #something:).	

	(observed at: #something:) do: [ :thing |
		self assert: (things includes: thing) ].
	
	self assert: (observed at: #something:) = things
!

testCustomEventWithTwoArgument

	| observed thing stuff |

	observed := Dictionary new.
	thing := TestCase new.
	stuff := Counter new.
	
	observed when: #something: do:[ :arg1 :arg2 | observed at: #something: put: (Array with: arg1 with: arg2) ].
	
	observed trigger: #something: with: thing with: stuff.
	
	self assert: (observed includesKey: #something:).	
	self assert: (observed at: #something:) first == thing.
	self assert: (observed at: #something:) second == stuff.
! !

