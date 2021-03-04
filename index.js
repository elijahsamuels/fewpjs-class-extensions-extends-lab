// Your code here

class Polygon {
	constructor(sides) {
		this.sides = sides
		this.count = this.sides.length
	};

	get countSides() {
		return this.sides.length;
	};

	get perimeter() {
		return this.sides.reduce((sides, currentValue) => sides + currentValue)
		};
};

class Triangle extends Polygon {
	get isValid() {
		let side1 = this.sides[0]
		let side2 = this.sides[1]
		let side3 = this.sides[2]
		if (side1 + side2 > side3 && 
			side3 + side2 > side1 && 
			side1 + side3 > side2) {
			return true
		} else {
			return false
		}
	};

	// this works based on counting the number of Sides. Not if the length of each side can BUILD a triangle
	// get isValid() {
	// 	if (this.countSides !== 3) {
	// 		return false
	// 	} else {
	// 		return true
	// 	}
	// };
}

class Square extends Polygon {
	get isValid() {
		if (this.sides[0] === this.sides[1] && 
			this.sides[0] === this.sides[2] && 
			this.sides[0] === this.sides[3]) {
			return true
		} else {
			return false
		}
	};

	get area() {
		return this.sides[0] * this.sides[1]
	}
}