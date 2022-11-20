const combineClasses = (...names: any): string => {
    if (!names || names.length === 0) {
        return "";
    }

    const result: string[] = [];
    names.forEach((className: string | undefined) => {
        if (typeof (className) === "undefined" || className === "") {
            return;
        }

        result.push(className);
    });

    return result.join(" ");
};

export default combineClasses;