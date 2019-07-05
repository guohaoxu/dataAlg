let start, stop, elapsed
let arr = []

// 二分搜索
function binarySearch(arr, item) {
    let len = arr.length
    quickSort(arr, 0, len - 1)

    let low = 0,
        high = len - 1,
        mid, ele
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        ele = arr[mid]
        if (ele < item) {
            low = mid +　1
        } else if (ele > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

// 快速排序
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    6               1               1
    7               1               2
    5               0               2
*/
function quickSort(arr, left, right) {
    let len = arr.length,
        index
    if (len > 1) {
        index = partition(arr, left, right)
        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }
        if (index < right) {
            quickSort(arr, index, right)
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

setArr(arr, 10000, "rand")
start = new Date().getTime()
let index = binarySearch(arr, 5001)
stop = new Date().getTime()
elapsed = stop - start

console.log("排序后的index为：", index)
console.log("消耗的时间为：" + elapsed + "毫秒")