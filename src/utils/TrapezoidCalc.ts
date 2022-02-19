export const trapezoidSquare = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let b: number | undefined, c: number | undefined, h: number | undefined, res: HTMLInputElement | undefined;

    if (calcNav !== null) {
        calcNavChildren = Array.from(calcNav.childNodes);
        calcNavChildren.forEach(child => {
            childNode.push(child.childNodes);
        })
        childNode.forEach(child => {
            childNodeArr.push(Array.from(child));
        })
        childNodeArr.forEach(child => {
            inputsArr.push(child.pop());
        })
        inputsArr.forEach(child => {
            if (child.id === "b") {
                b = Number(child.value);
            } else if (child.id === "c") {
                c = Number(child.value);
            } else if (child.id === "h") {
                h = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (b !== undefined && c !== undefined && h !== undefined && res !== undefined) {
            let result = 0.5 * (b + c) * h;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const trapezoidPerimeter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, b: number | undefined, c: number | undefined, d: number | undefined,
        res: HTMLInputElement | undefined;

    if (calcNav !== null) {
        calcNavChildren = Array.from(calcNav.childNodes);
        calcNavChildren.forEach(child => {
            childNode.push(child.childNodes);
        })
        childNode.forEach(child => {
            childNodeArr.push(Array.from(child));
        })
        childNodeArr.forEach(child => {
            inputsArr.push(child.pop());
        })
        inputsArr.forEach(child => {
            if (child.id === "a") {
                a = Number(child.value);
            } else if (child.id === "b") {
                b = Number(child.value);
            } else if (child.id === "c") {
                c = Number(child.value);
            } else if (child.id === "d") {
                d = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && b !== undefined && c !== undefined && res !== undefined && d !== undefined) {
            let result = a + b + c + d;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const trapezoidDiagonal = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, b: number | undefined, c: number | undefined, d: number | undefined,
        d1: HTMLInputElement | undefined, d2: HTMLInputElement | undefined;

    if (calcNav !== null) {
        calcNavChildren = Array.from(calcNav.childNodes);
        calcNavChildren.forEach(child => {
            childNode.push(child.childNodes);
        })
        childNode.forEach(child => {
            childNodeArr.push(Array.from(child));
        })
        childNodeArr.forEach(child => {
            inputsArr.push(child.pop());
        })
        inputsArr.forEach(child => {
            if (child.id === "a") {
                a = Number(child.value);
            } else if (child.id === "b") {
                b = Number(child.value);
            } else if (child.id === "c") {
                c = Number(child.value);
            } else if (child.id === "d") {
                d = Number(child.value);
            } else if (child.id === "d1") {
                d1 = child;
            } else if (child.id === "d2") {
                d2 = child;
            }
        })
        if (a !== undefined && b !== undefined && c !== undefined && d1 !== undefined && d2 !== undefined && d !== undefined) {
            let resultD1 = Math.sqrt(Math.pow(c, 2) + d * b - (d * (Math.pow(c, 2) - Math.pow(a, 2))) / (d - b));
            d1.value = resultD1.toFixed(2) + " см";

            let resultD2 = Math.sqrt(Math.pow(a, 2) + d * b - (d * (Math.pow(a, 2) - Math.pow(c, 2))) / (d - b));
            d2.value = resultD2.toFixed(2) + " см";
        }
    }
}

export const trapezoidInRadius = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, b: number | undefined, res: HTMLInputElement | undefined;

    if (calcNav !== null) {
        calcNavChildren = Array.from(calcNav.childNodes);
        calcNavChildren.forEach(child => {
            childNode.push(child.childNodes);
        })
        childNode.forEach(child => {
            childNodeArr.push(Array.from(child));
        })
        childNodeArr.forEach(child => {
            inputsArr.push(child.pop());
        })
        inputsArr.forEach(child => {
            if (child.id === "a") {
                a = Number(child.value);
            } else if (child.id === "b") {
                b = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && b !== undefined && res !== undefined) {
            let result = Math.sqrt(a * b) / 2;
            res.value = result.toFixed(2) + " см";
        }
    }
}