export const addBodyClass = (className: string) => {
    const body: HTMLElement = document.body;
    if (!body.classList.contains(className)) {
        body.classList.add(className);
    }
}

export const removeBodyClass = (className: string) => {
    const body: HTMLElement = document.body;
    if (body.classList.contains(className)) {
        body.classList.remove(className);
    }
}
