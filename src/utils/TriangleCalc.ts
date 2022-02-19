export const triangleSquare = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, h: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "h") {
                h = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && h !== undefined && res !== undefined) {
            let result = 0.5 * a * h;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const trianglePerimeter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, b: number | undefined, c: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && b !== undefined && c !== undefined && res !== undefined) {
            let result = a + b + c;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const triangleMedian = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, b: number | undefined, c: number | undefined, res: HTMLInputElement | undefined,
        resB: HTMLInputElement | undefined, resC: HTMLInputElement | undefined;

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
            } else if (child.id === "res") {
                res = child;
            } else if (child.id === "resB") {
                resB = child;
            } else if (child.id === "resC") {
                resC = child;
            }
        })
        if (a !== undefined && b !== undefined && c !== undefined && res !== undefined && resB !== undefined && resC !== undefined) {
            if ((a > 0) && (b > 0) && (c > 0)) {
                let resultA = 0.5 * Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2));
                res.value = resultA.toFixed(2) + " см";

                let resultB = 0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(c, 2) - Math.pow(b, 2));
                resB.value = resultB.toFixed(2) + ' см';

                let resultC = 0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2));
                resC.value = resultC.toFixed(2) + " см";
            } else {
                res.value = "Сторона";
                resB.value = "должна быть";
                resC.value = ">0!";
            }
        }
    }
}

export const rightTriangleSquare = (div: HTMLDivElement | null) => {
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
            let result = 0.5 * a * b;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const isoscelesTriangleSquare = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let b: number | undefined, h: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "h") {
                h = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (b !== undefined && h !== undefined && res !== undefined) {
            let result = 0.5 * b * h;
            res.value = result.toFixed(2) + " см";
        }
    }
}