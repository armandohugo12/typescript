console.log('hola mundo');

// Tipado de objeto
function printcoord(pt: { x: number, y: number}) {
    console.log('rl vslor de las coordenas x es: ' +pt.x)
    console.log('rl vslor de las coordenas y es: ' +pt.y)
}

printcoord({x: 2, y: 10})


