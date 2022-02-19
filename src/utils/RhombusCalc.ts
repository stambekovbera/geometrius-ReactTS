export const rhombusSquare = (div: HTMLDivElement | null) => {
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
            let result = a * h;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const rhombusPerimeter = (div: HTMLDivElement | null) => {
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

export const rhombusDiagonal = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let a: number | undefined, angle: number | undefined, res: HTMLInputElement | undefined;

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
            } else if (child.id === "angle") {
                angle = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (a !== undefined && angle !== undefined && res !== undefined) {
            let result = a * Math.sqrt(2 + 2 * Math.cos((angle * Math.PI) / 180));
            res.value = result.toFixed(2) + " см";
        }
    }
}