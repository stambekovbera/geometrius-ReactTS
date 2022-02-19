export const parallelogramSquare = (div: HTMLDivElement | null) => {
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
        if (h !== undefined && b !== undefined && res !== undefined) {
            let result = h * b;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const parallelogramPerimeter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let b: number | undefined, a: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "a") {
                a = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && b !== undefined && res !== undefined) {
            let result = 2 * (a + b);
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const parallelogramDiagonal = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let b: number | undefined, a: number | undefined, angle: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "a") {
                a = Number(child.value);
            } else if (child.id === "angle") {
                angle = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && b !== undefined && res !== undefined && angle !== undefined) {
            let result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos((angle * Math.PI) / 180));
            res.value = result.toFixed(2) + " см";
        }
    }
}