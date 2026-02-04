/**
 * Merges classes into a single string
 *
 * @param {array} classes
 * @returns {string} A string of classes
 */
export const mergeClasses = (...classes) => classes
    .filter((className, index, array) => {
    return (Boolean(className) &&
        className.trim() !== '' &&
        array.indexOf(className) === index);
})
    .join(' ')
    .trim();
