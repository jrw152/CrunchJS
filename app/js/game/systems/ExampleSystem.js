/**
 * @author Joe Adams
 */

goog.provide('ExampleSystem');

/**
 * Constructs the Example System
 * @constructor
 * @class A Simple Example System
 */
ExampleSystem = function() {

};

ExampleSystem.prototype.update = function(frame) {
	if(frame.id%5 ==0){
		goog.global.postMessage("Simple System Update: "+frame.id);
		console.log('here');
	}
};

ExampleSystem.prototype.__identifier = 'ExampleSystem';