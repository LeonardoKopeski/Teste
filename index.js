function getSentenceContext(sentense){
    var words = sentense.split(" ")
    var wordNumber = words.length
    var returnArr = []

    var pathArr = [-2, -1, 1, 2]

    words.slice(1,wordNumber-1).forEach((word, index) => {
        pathArr.forEach(num => {
            var i = index+num+1
            if(i > -1 && i < wordNumber){
                returnArr.push([word, words[i]])
            }
        })
    })

    return returnArr
}

