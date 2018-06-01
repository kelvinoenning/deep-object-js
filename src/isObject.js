/**
 * Checks if `obj` is object. 
 * A value is object if it's not `null`, Function or Array
 *
 * @param {*} obj The value to check.
 * @returns {boolean} Returns `true` if `obj` is object, else `false`.
 * @example
 *
 * isObject({ a: '1', b: '2', c: '3' }) // => true
 *
 * isObject([1, 2, 3]) // => false
 *
 * isObject(Function) // => false
 *
 * isObject(null) // => false
 */

const isObject = (obj) => {
    return typeof obj === 'object' && obj === Object(obj) && !Array.isArray(obj);
}

module.exports = isObject;