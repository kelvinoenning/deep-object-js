const isObject = require('./isObject');

const _mountPathList = (path) => {
    if (typeof path !== 'string') throw new Error('path is not a string')
    return path.replace(/\[(\d+)]/g, '.$1').split('.')
};

const get = (obj, path, def) => {
    try {
        if (!isObject(obj)) throw new Error('object is not accepted')
        let pathList = _mountPathList(path);
        let value = (pathList.every(step => (obj = obj[step]) !== undefined)) ? obj : def;
        return value || undefined;
    } catch (err) {
        return (def !== undefined) ? def : undefined;
    }
}

module.exports = {
    get,
    _mountPathList
}