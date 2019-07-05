let start, stop, elapsed
let arr = []

// 冒泡排序01
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    268             264             303
    257             271             300
    256             264             301
*/
function bubbleSort01(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                // [arr[j],arr[j+1]] = [arr[j]+1,arr[j]]
            }
        }
    }

}

// 冒泡排序02
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    131             168             204
    133             167             205
    131             170             202
*/
function bubbleSort02(arr) {
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

// 冒泡排序03
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1               171             243
    0               170             241
    1               169             237
*/
function bubbleSort03(arr) {
    const len = arr.length
    let isNext = true
    for (let i = len - 1; i > 0 && isNext; i--) {
        isNext = false
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isNext = true
            }
        }
    }
}

// 冒泡排序04
/*
    1 to 10000 的数组排序消耗的时间(毫秒)
    升序数组        降序数组        随机数组
    1               272             335
    1               273             342
    1               272             345
*/
function bubbleSort04(arr) {
    const len = arr.length
    let isNext = true
    while (isNext) {
        isNext = false
        for(let i = 0; i < len - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                isNext = true
            }
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
logSort(arr, 10000, "asc", bubbleSort03)
logSort(arr, 10000, "desc", bubbleSort03)
logSort(arr, 10000, "rand", bubbleSort03)