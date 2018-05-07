const _mountPathList = (path) => {
    if(typeof path !== 'string') throw new Error('path is not a string')
    return path.replace(/\[(\d+)]/g, '.$1').split('.')
};

const get = (obj, path, def) => {
    if (typeof obj !== 'object') throw new Error('object is not accepted')
    let pathList = _mountPathList(path);
    return (pathList.every(step => (obj = obj[step]) !== undefined)) ? obj : def;
}

module.exports = {
    get,
    _mountPathList
}