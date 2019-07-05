let start, stop, elapsed
let arr = []

// 快速排序01
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1176            1217            14
    1179            1237            12
    1240            1242            15
*/
function quickSort01(arr) {
    let len = arr.length
    if (len == 0) {
        return []
    }
    let left = [],
        right = [],
        pivot = arr[0]
    
    for (let i = 1; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

// 快速排序02
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    164             117             1
    164             116             2
    166             116             2
*/
function quickSort02(arr, left, right) {
    if (left < right) {
        let part = divParts(arr, left, right)
        quickSort02(arr, left, part - 1)
        quickSort02(arr, part + 1, right)
    } 
}
function divParts(arr, left, right) {
    let pivot = arr[right],
        i = left
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }
    }
    let temp = arr[i]
    arr[i] = pivot
    arr[right] = temp
    return i
}

// 快速排序03
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    6               1               1
    7               1               2
    5               0               2
*/
function quickSort03(arr, left, right) {
    let len = arr.length,
        index
    if (len > 1) {
        index = partition(arr, left, right)
        if (left < index - 1) {
            quickSort03(arr, left, index - 1)
        }
        if (index < right) {
            quickSort03(arr, index, right)
        }
    }
}
function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right
    while (i <= j) {
        while(arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i <= j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    return i
}


// 初始化待排序数组
function setArr(arr, num, type) {
    if (type == "asc") {
        for (let i = 0; i < num; i++) {
            arr[i] = i
        }
    } else if (type == "desc") {
        for (let i = 0; i < num; i++) {
            arr[i] = num - i
        }
    } else if (type == "rand") {
        for (let i = 0; i< num; i++) {
            arr[i] = Math.floor(Math.random()*num)
        }
    }
    
}

function logSort(arr, num, type, cb) {
    setArr(arr, num, type)
    console.log("排序前为：", arr)
    start = new Date().getTime()
    cb(arr, 0, arr.length - 1)
    stop = new Date().getTime()
    elapsed = stop - start
    
    console.log("排序后为：", arr)
    console.log("消耗的时间为：" + elapsed + "毫秒")
}
logSort(arr, 10000, "asc", quickSort03)
logSort(arr, 10000, "desc", quickSort03)
logSort(arr, 10000, "rand", quickSort03)