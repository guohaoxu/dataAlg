let start, stop, elapsed
let arr = []

// 选择排序01
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    124             127             231
    126             126             234
    125             127             234
*/
function selectionSort01(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

}

// 选择排序02
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    118             112             108
    120             116             108
    119             113             107
*/
function selectionSort02(arr) {
    const len = arr.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (i != minIndex) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
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
    cb(arr)
    stop = new Date().getTime()
    elapsed = stop - start
    
    console.log("排序后为：", arr)
    console.log("消耗的时间为：" + elapsed + "毫秒")
}
logSort(arr, 10000, "asc", selectionSort02)
logSort(arr, 10000, "desc", selectionSort02)
logSort(arr, 10000, "rand", selectionSort02)