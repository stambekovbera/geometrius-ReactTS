export const ellipseSquare = (div: HTMLDivElement | null) => {
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
            let result = Math.PI * a * b;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const ellipsePerimeter = (div: HTMLDivElement | null) => {
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
            let result = 4 * ((Math.PI * a * b + Math.pow(a - b, 2)) / (a + b));
            res.value = result.toFixed(2) + " см";
        }
    }
}
