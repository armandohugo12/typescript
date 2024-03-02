const myCallback =  function (text: string) {
    console.log('Mycallback is called witch ' + text)    
}


function withcallbackArg(mssg: string, myCallback: any) {
    console.log('withcallbackArg called. message: ' + mssg)   
    myCallback(mssg + 'from withcallbackArg') 
}

withcallbackArg('hola', myCallback)