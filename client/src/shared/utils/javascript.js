export const ascending = (a, b) => a.listPosition - b.listPosition;
export const arrayIntoObject = (items) =>
    items.reduce(
        (acc, currentItem) => ((acc[currentItem.id] = currentItem), acc),
        {}
    );

// export { ascending };
