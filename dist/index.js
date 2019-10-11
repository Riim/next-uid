const hasOwn = Object.prototype.hasOwnProperty;
let uidCounter = 0;
export function nextUID() {
    return String(++uidCounter);
}
const KEY_UID = Symbol('uid');
export function getUID(obj) {
    return hasOwn.call(obj, KEY_UID) ? obj[KEY_UID] : (obj[KEY_UID] = nextUID());
}
