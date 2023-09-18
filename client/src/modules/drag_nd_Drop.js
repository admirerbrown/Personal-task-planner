export const onDragOver = (ev) => {
    ev.preventDefault();
};

export const onDragStart = (ev, item) => {
    ev.dataTransfer.setData("item", item._id);
};