// ejemplo sin numeros
enum DoorState{
    Open,
    Closed,
    MediaAvierta
}

function checkDoorState(state:DoorState) {
    console.log(state)

    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break;
        case DoorState.Closed:
            console.log('La puerta esta cerrada')
            break;
        default:
            break;
        case DoorState.MediaAvierta:
            console.log('la puerta esta media avierta')
            break
    }
}

checkDoorState(DoorState.MediaAvierta)