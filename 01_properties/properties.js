function setPropertiesOnObjLiteral(object) {
	object.x = 7;

	object['y'] = 8;

	object.onePlus = function(x) {
		return x + 1;
	};
};

function setPropertiesOnArrayObj(object) {
	object.hello = function() {
		return 'Hello!';
	}

	object['full'] = 'stack';

	object[0] = 5;

	object.twoTimes = function(x) {
		return x * 2;
	};
};

function setPropertiesOnFunctionObj(object) {
	object.year = 2015;

	object.divideByTwo = function(x) {
		return x/2;
	}

	object.prototype.helloWorld = function() {
		return 'Hello World';
	}
};