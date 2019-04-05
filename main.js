let textIo = false


$('#press').on('click', function () {
    if (textIo) {
        hideText.call()
    } else if (!textIo) {
        showText.call()
    }
})
//个人认为还有很大改进空间。






//认为闭包会产生很多弊端
function hideText(Io) {
    $('#hiden').hide()
    textIo = false
}
function showText() {
    $('#hiden').show()
    textIo = true
    $('#info').on('click', function (e) {
        e.stopPropagation()    // setTimeout 还是会有bug 在点击信息框的时候信息框消失
    })
    $(document).one('click', function () {
        hideText.call()
    })
    
}


//````````````````````````````````````````````
var n=0

$('section div').on('click',function(e){
    setTimeout(()=>{
        $(e.currentTarget).addClass('active')
    },n*300)
n+=1
})

//理解事件机制