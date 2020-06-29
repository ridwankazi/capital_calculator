class OperationSupport {

    static add(a,b){
        return (a,b) => a+b
    }

    static subtract(a,b){
        return (a,b) => a-b
    }

    static multiply(a,b){
        return (a,b) => a*b
    }

    static divide(a,b){
        return (a,b) => a/b
    }

}

export const {add, subtract, divide, multiply} = OperationSupport;