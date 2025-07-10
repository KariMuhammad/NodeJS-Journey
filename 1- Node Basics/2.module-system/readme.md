**Module System** allows you to write your projects code into smaller reusable files to make project oraganized and reusable.

CommonJS Module: https://nodejs.org/api/modules.html

in NodeJS uses CommonJS Module System in default
If you want to use ESM Modules you must change somethings in Package, and other things.

### Module Wrapper Function

Every modules in nodejs wrapped by function _before executed_
it wrap all your code into this function, to provide you some props like the following: `module`, `exports`, `require`, `__filename`, `__dirname` etc...

to check all data provide this wrapper function you can do this
`console.log(arguments)`, because as said, all your code goes inside the WRAPPER FUNCTION, so we can receive the arguments of this wrapper function.
