(build this 2nd)
# timer starts upon page load, counts up 1 each second
    (func X) create clock that increments every second
        (call 1) increment counter value for every clock increment

(build this 3rd)
    (var) get pause/resume button element
    (event) eventlistener for pause/resume element
        (func X) stops clock
        (func X) restarts clock (may need to add starting value)
        (func X) disable increment button
        (func X) disable decrement button
        (func X) disable like button
        (func X) enable increment button
        (func X) enable decrement button
        (func X) enable like button

(build this first)
# ability to increment and decrement the counter at will
    (var) get counter display element
    (var) get current counter value
    (var) get increment button element
    (var) get decrement button element
    (func 1) independently increment counter value
    (func 2) independently decrement counter value

    (event) eventlistener for increment element
        (call 1) increment counter value
    
    (event) eventlistener for decrement element
        (call 2) decrement counter value