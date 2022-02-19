import React from "react";

const insertMark = (string: string, pos: number, len: number) => {
    return (
        string.slice(0, pos) +
        "<mark>" +
        string.slice(pos, pos + len) +
        "</mark>" +
        string.slice(pos + len)
    );
}

export const searchFunc = (e: React.ChangeEvent<HTMLInputElement>, searchNavLink: string, searchNav: string) => {
    let val: string = e.target.value.trim();
    let searchItem: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(searchNavLink);
    let searchPanel: HTMLDivElement | null = document.querySelector(searchNav);
    let searchInput: HTMLInputElement = e.target;
    if (val !== "") {
        searchPanel?.classList.add("unhide");
        searchItem.forEach(element => {
            if (element.innerText.search(RegExp(val, "gi")) === -1) {
                element.parentElement?.classList.add("hide");
                element.innerHTML = element.innerText;
            } else {
                element.parentElement?.classList.remove("hide");
                let str = element.innerText;
                element.innerHTML = insertMark(
                    str,
                    element.innerText.search(RegExp(val, "gi")),
                    val.length
                );
            }
        });
    } else {
        searchPanel?.classList.remove("unhide");
        searchItem.forEach(element => {
            element.parentElement?.classList.remove("hide");
            element.innerHTML = element.innerText;
        });
    }
    searchInput.onblur = () => {
        searchInput.value = "";
        searchPanel?.classList.remove("unhide");
    };
}