import {Rectangle, Circle, Polygon} from './rectangle'

const canvas = document.getElementById("cnvs");

const gameState = {};

function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength
        update(gameState.lastTick)
    }
}

function draw(tFrame) {
    const context = canvas.getContext('2d');

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)
    // draw
    
    gameState.figs=gameState.figs.filter((figure)=>{
        return figure.life>0
    })

    function getColor(life) {
        switch(life) {
            case 3:
                return "rgb(0, 200, 0)"
            case 2:
                return "rgb(0, 120, 200)"
            case 1:
                return "rgb(220, 12, 220)"
        }
    }
    gameState.figs.forEach((figure)=>{
        context.fillStyle = getColor(figure.life)
        if (figure instanceof Rectangle) {
            context.fillRect(figure.x, figure.y, figure.w, figure.h)
        }
        else if (figure instanceof Circle) {
            context.beginPath();
            context.arc(figure.x, figure.y, figure.r, 0, 2*Math.PI)
            context.closePath();
            context.fill()
        }
        else if (figure instanceof Polygon) {
            context.beginPath();
            context.moveTo(figure.vertices[0].x + figure.x, figure.vertices[0].y + figure.y)
            figure.vertices.slice(1).forEach((vrt) => {
                context.lineTo(vrt.x + figure.x, vrt.y + figure.y)
            })
            context.closePath();
            context.fill()
        }
    })
}

function update(tick) {
    gameState.figs.forEach((figure, index)=>{
        figure.insideCanvas(canvas)
        gameState.figs.slice(index+1).forEach((other) => {
            if (figure.intersects(other)) {
                [figure.speed, other.speed] = [other.speed, figure.speed]
                figure.takeDamage()
                other.takeDamage()
            }
        })
        figure.x += figure.speed.x
        figure.y += figure.speed.y
    })
}

function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run)

    const nextTick = gameState.lastTick + gameState.tickLength
    let numTicks = 0

    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick
        numTicks = Math.floor(timeSinceTick / gameState.tickLength)
    }
    queueUpdates(numTicks)
    draw(tFrame)
    gameState.lastRender = tFrame
}

function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}

function setup() {
    document.body.style.overflow = "hidden"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gameState.lastTick = performance.now()
    gameState.lastRender = gameState.lastTick
    gameState.tickLength = 15 //ms
    gameState.figs = []
    for (let i=0; i<10; i++) {
        const width = 20+Math.random()*20
        const height = width
        const x = Math.random() * (canvas.width - width)
        const y = Math.random()* (canvas.height - height)
        const rectangle = new Rectangle(x, y, width, height)
        rectangle.setSpeed(Math.random()*6-3, Math.random()*6-3)
        gameState.figs.push(rectangle)
    }
    for (let i=0; i<10; i++) {
        const r = 10+Math.random()*10 
        const x = r + Math.random() * (canvas.width - 2*r)
        const y = r + Math.random() * (canvas.height - 2*r)
        const circle = new Circle(x, y, r)
        circle.setSpeed(Math.random()*6-3, Math.random()*6-3)
        gameState.figs.push(circle)
    }
    for (let i=0; i<10; i++) {
        const edge = 20 + Math.random()*20 
        const x = Math.random() * (canvas.width - edge)
        const y = Math.sqrt(3)/2*edge + Math.random() * (canvas.height - Math.sqrt(3)/2*edge)
        const v1 = {x: x, y: y}
        const vertices = [v1]
        vertices.push({x: x+0.5*edge, y: y-Math.sqrt(3)/2*edge})
        vertices.push({x: x+edge, y: y})
        const polygon = new Polygon(vertices, x, x+edge, y-Math.sqrt(3)/2*edge, y)
        polygon.setSpeed(Math.random()*6-3, Math.random()*6-3)
        gameState.figs.push(polygon)
    }
    for (let i=0; i<10; i++) {
        const edge = 15 + Math.random()*15 
        const sqr3 = Math.sqrt(3) * edge / 2
        const x = 0.5*edge + Math.random() * (canvas.width - 2*edge)
        const y = sqr3*2 + Math.random() * (canvas.height - sqr3*2)
        const v1 = {x: x, y: y}
        const vertices = [v1]
        vertices.push({x: x-0.5*edge, y: y-sqr3})
        vertices.push({x: x, y: y-2*sqr3})
        vertices.push({x: x+edge, y: y-2*sqr3})
        vertices.push({x: x+1.5*edge, y: y-sqr3})
        vertices.push({x: x+edge, y: y})
        const polygon = new Polygon(vertices, x-0.5*edge, x+1.5*edge, y-2*sqr3, y)
        polygon.setSpeed(Math.random()*6-3, Math.random()*6-3)
        gameState.figs.push(polygon)
    }
    for (let i=0; i<10; i++) {
        const edge = 15 + Math.random()*15 
        const sin18 = Math.sin(Math.PI/10) * edge
        const cos18 = Math.cos(Math.PI/10) * edge
        const sin36 = Math.sin(Math.PI/5) * edge
        const cos36 = Math.cos(Math.PI/5) * edge
        const x = sin18 + Math.random() * (canvas.width - edge - 2*sin18)
        const y = cos18 + sin36 + Math.random() * (canvas.height - cos18 - sin36)
        const v1 = {x: x, y: y}
        const vertices = [v1]
        vertices.push({x: x-sin18, y: y-cos18})
        vertices.push({x: x-sin18+cos36, y: y-cos18-sin36})
        vertices.push({x: x+edge+sin18, y: y-cos18})
        vertices.push({x: x+edge, y: y})
        const polygon = new Polygon(vertices, x-sin18, x+edge+sin18, y-cos18-sin36, y)
        polygon.setSpeed(Math.random()*6-3, Math.random()*6-3)
        gameState.figs.push(polygon)
    }
}

setup();
run();
