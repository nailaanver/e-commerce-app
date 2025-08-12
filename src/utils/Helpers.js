/**
 * 
 * @param {String} key -key name of item to be retrieved from localstorage
 * @returns value of the item
 */
export const getFromLocalStorage = (key) => {

    return window.localStorage.getItem(key)
}
/**
 * 
 * @param {string} key -key name for value
 * @param {string} value -value in string
 */



export const setToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value)
}