export const squareSquare = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && res !== undefined) {
            let result = Math.pow(a, 2);
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const squarePerimeter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && res !== undefined) {
            let result = 4 * a;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const squareDiagonal = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && res !== undefined) {
            let result = Math.sqrt(2) * a;
            res.value = result.toFixed(2) + " см";
        }
    }
}