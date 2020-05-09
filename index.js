// Add your functions here
function map(array, fn) {
    let newAr = []
    array.forEach(item => newAr.push(fn(item)))
    return newAr
}

function reduce(array, fn, sp) {
    let reduct
    if(!!sp) {
        reduct = sp
    } else {
        reduct = array[0]
        array = [...array.slice(1)]
    }

    array.forEach(item => reduct = fn(item, reduct))
    return reduct
}