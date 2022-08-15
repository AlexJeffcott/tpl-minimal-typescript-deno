// We’d like to use the in operator to check that a number is in range.

// The has trap intercepts in calls.

// has(target, property)

// target – is the target object, passed as the first argument to new Proxy,
// property – property name

let range = {
	start: 1,
	end: 10,
};

range = new Proxy(range, {
	has(target, prop) {
		return prop >= target.start && prop <= target.end;
	},
});

alert(5 in range); // true
alert(50 in range); // false

// create object that throws if you try to access an undefined property
let user = {
	name: 'John',
};

function wrap(target) {
	return new Proxy(target, {
		get(target, prop, receiver) {
			if (prop in target) {
				return Reflect.get(target, prop, receiver);
			} else {
				throw new ReferenceError(`Property doesn't exist: "${prop}"`);
			}
		},
	});
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist: "age"

// make the setting of an object property observable
let handlers = Symbol('handlers');

function makeObservable(target) {
	// 1. Initialize handlers store
	target[handlers] = [];

	// Store the handler function in array for future calls
	target.observe = function (handler) {
		this[handlers].push(handler);
	};

	// 2. Create a proxy to handle changes
	return new Proxy(target, {
		set(target, property, value, receiver) {
			let success = Reflect.set(...arguments); // forward the operation to object
			if (success) { // if there were no error while setting the property
				// call all handlers
				target[handlers].forEach((handler) => handler(property, value));
			}
			return success;
		},
	});
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
	alert(`SET ${key}=${value}`);
});

user.name = 'John';
