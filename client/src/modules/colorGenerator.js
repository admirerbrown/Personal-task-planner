export const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function clearLocalStorageOnRefresh() {
    // Check if the page is being refreshed
    window.onbeforeunload = function () {
        localStorage.removeItem("colorMap");
    };
}

clearLocalStorageOnRefresh();


export const getColorForGoalTag = (goalTag) => {
    let colorMap;

    const storedColorMap = localStorage.getItem("colorMap");
    if (storedColorMap) {
        colorMap = JSON.parse(storedColorMap);
    } else {
        colorMap = {};
    }

    if (!colorMap.hasOwnProperty(goalTag)) {
        colorMap[goalTag] = getRandomColor();

        localStorage.setItem("colorMap", JSON.stringify(colorMap));
    }

    return colorMap[goalTag];
}