//const p1 = {x:0, y:0 }
//const p2 = {x:800, y:300}

function setup(){
    createCanvas(windowWidth, windowHeight)
    p1 = {x:0, y:0}
    p2 = {x:floor(windowWidth), y:floor(windowHeight)}

    p3 = {x:0, y:floor(windowHeight/2)}
    p4 = {x:floor(windowWidth), y:floor(windowHeight/2)}

    p5 = {x:0, y:floor(windowHeight)}
    p6 = {x:floor(windowWidth), y:0}

    p7 = {x:floor(windowWidth/2), y:0}
    p8 = {x:floor(windowWidth/2), y:floor(windowHeight)}
}

function draw(){
    //line(p1.x,p1.y,p2.x,p2.y)
    ecuapp(p1,p2)
    ecuapp(p3,p4)
    ecuapp(p5,p6)
    ecuapp(p7,p8)
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