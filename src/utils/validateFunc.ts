import React from "react";

export const validateFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let theEvent: React.KeyboardEvent<HTMLInputElement> = event || window.event;
    let key: any = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex: RegExp = /[0-9]|\./;
    if (!regex.test(key)) {
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}