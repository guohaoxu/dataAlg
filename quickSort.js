let start, stop, elapsed
let arr = []

// 快速排序
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1176            1217            14
    1179            1237            12
    1240            1242            15
*/
function quickSort(arr) {
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
logSort(arr, 10000, "asc", quickSort)
logSort(arr, 10000, "desc", quickSort)
logSort(arr, 10000, "rand", quickSort)