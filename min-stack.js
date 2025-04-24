class MinStack {

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push = function(val) {
    this.stack.push(val)
    if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val)
    }
    };

    /**
    * @return {void}
    */
    pop = function() {
        let popped = this.stack.pop()
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    };

    /**
    * @return {number}
    */
    top = function() {
        return this.stack[this.stack.length - 1]
    };

    /**
    * @return {number}
    */
    getMin = function() {
        return this.minStack[this.minStack.length - 1]
    };

}

