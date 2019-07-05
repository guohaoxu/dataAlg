let start, stop, elapsed
let arr = []

// 希尔排序
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    4               6               4
    4               6               3
    3               7               3
*/
function shellSort(arr) {
    let len = arr.length,
        h = 1
    while(h < len /3) {
        h = 3 * h + 1
    }
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                let temp = arr[j]
                arr[j] = arr[j-h]
                arr[j-h] = temp
            }
        }
        h = (h - 1) /3
    }
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
logSort(arr, 10000, "asc", shellSort)
logSort(arr, 10000, "desc", shellSort)
logSort(arr, 10000, "rand", shellSort)