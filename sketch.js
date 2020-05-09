const p1 = {x:10, y:10 }
const p2 = {x:800, y:300}

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    //line(p1.x,p1.y,p2.x,p2.y)
    ecuapp(p1,p2)
}

function ecuapp(p1,p2){
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y

    const m = dy/dx
    const b = p1.y - m * p1.x

    point(p1.x, p1.y)

    let x = p1.x + 1
    let y
    while (x != p2.x) {
        y = m * x + b
        point(x, y)
        x++
    }
}