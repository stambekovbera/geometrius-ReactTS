export const circleSquare = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let r: number | undefined, res: HTMLInputElement | undefined;

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
            if (child.id === "r") {
                r = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (r !== undefined && res !== undefined) {
            let result = Math.PI * Math.pow(r, 2);
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const circlePerimeter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let r: number | undefined, res: HTMLInputElement | undefined;

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
            if (child.id === "r") {
                r = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (r !== undefined && res !== undefined) {
            let result = 2 * Math.PI * r;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const circleDiameter = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let p: number | undefined, res: HTMLInputElement | undefined;

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
            if (child.id === "p") {
                p = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (p !== undefined && res !== undefined) {
            let result = (p / (2 * Math.PI)) * 2;
            res.value = result.toFixed(2) + " см";
        }
    }
}

export const circleRadius = (div: HTMLDivElement | null) => {
    const calcNav = div;
    let calcNavChildren: Array<any>;
    let childNode: Array<any>;
    childNode = [];
    let childNodeArr: Array<any>;
    childNodeArr = [];
    let inputsArr: Array<any>;
    inputsArr = [];
    let p: number | undefined, res: HTMLInputElement | undefined;

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
            if (child.id === "p") {
                p = Number(child.value);
            } else if (child.id === "res") {
                res = child;
            }
        })
        if (p !== undefined && res !== undefined) {
            let result = p / (2 * Math.PI);
            res.value = result.toFixed(2) + " см";
        }
    }
}