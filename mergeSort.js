let start, stop, elapsed
let arr = []

// 归并排序
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    9               9               4
    9               9               4
    8               8               3
*/
function mergeSort(arr) {
    let len = arr.length
    if (len == 1) {
        return arr
    }
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, len)
    
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [],
        iLeft = 0,
        iRight = 0

    while(iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft++])
        } else {
            result.push(right[iRight++])
        }
    }
    while(iLeft < left.length) {
        result.push(left[iLeft++])
    }
    while(iRight < right.length) {
        result.push(right[iRight++])
    }
    return result
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
    let afterArr = cb(arr)
    stop = new Date().getTime()
    elapsed = stop - start
    
    console.log("排序后为：", afterArr)
    console.log("消耗的时间为：" + elapsed + "毫秒")
}
logSort(arr, 10000, "asc", mergeSort)
logSort(arr, 10000, "desc", mergeSort)
logSort(arr, 10000, "rand", mergeSort)