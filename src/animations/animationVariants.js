export const container = {
    hidden: {},
    visible: {transition: {staggerChildren: 1},},
};
export const item = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 2, ease: "easeOut" },},
};