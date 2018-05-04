const _mountPathList = (path) => {
    if(typeof path !== 'string') throw new Error('path is not a string')
    return path.replace(/\[(\d+)]/g, '.$1').split('.')
};

const get = (obj, pathList, def) => {
    if (typeof obj !== 'object') throw new Error('object is not a object')
    else if (!Array.isArray(pathList)) throw new Error('path list is not array')
    return (pathList.every(step => (obj = obj[step]) !== undefined)) ? obj : def;
}

module.exports = {
    get,
    _mountPathList
}