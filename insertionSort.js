let start, stop, elapsed
let arr = []

// 插入排序01
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1               122             61
    1               119             59
    1               125             58
*/
function insertionSort01(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            } else {
                break
            }
        }
    }

}

// 插入排序02
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1               99              50
    1               99              49
    2               99              49
*/
function insertionSort02(arr) {
    const len = arr.length
    let j, temp
    for (let i = 1; i < len; i++) {
        j=i
        temp = arr[i]
        while(j > 0 && arr[j-1] > temp) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
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
logSort(arr, 10000, "asc", insertionSort02)
logSort(arr, 10000, "desc", insertionSort02)
logSort(arr, 10000, "rand", insertionSort02)