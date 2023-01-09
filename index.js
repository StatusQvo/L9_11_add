const collectingArray = ()=>{
 let resultArr = []
    for (let j = 0; j < 3; j++) {
        let levelArr = []
        for (let i = 1; i < 6; i++) {
            levelArr.push(i)
        }
        resultArr.push(levelArr)
    }
   console.log(resultArr)
}

collectingArray()