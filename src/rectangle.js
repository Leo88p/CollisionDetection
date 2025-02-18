class Rectangle {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.life = 3
        this.speed = {x: 0, y: 0}
    }

    setSpeed(x, y){
        this.speed.x = x
        this.speed.y = y
    }

    get left() {
        return this.x
    }

    get right() {
        return this.x + this.w
    }

    get top() {
        return this.y
    }

    get bottom() {
        return this.y + this.h
    }

    contains(point) {
        return (point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h)
    }

    intersects(rect) {
        if (rect instanceof Rectangle) {
            return (this.x < rect.x + rect.w)
            && (rect.x < this.x + this.w)
            && (this.y < rect.y + rect.h)
            && (rect.y < this.y + this.w)
        } else {
            return rect.intersects(this)
        }
    }

    takeDamage() {
        this.life -=1
    }

    insideCanvas(canvas) {
        if (this.x < 0 || this.x + this.w > canvas.width) {
            this.speed.x = -this.speed.x
        }
        if (this.y < 0 || this.y + this.h > canvas.height) {
            this.speed.y = -this.speed.y
        }
    }
}
class Circle {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.life = 3
        this.speed = {x: 0, y: 0}
    }
    setSpeed(x, y){
        this.speed.x = x
        this.speed.y = y
    }
    takeDamage() {
        this.life -=1
    }
    insideCanvas(canvas) {
        if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
            this.speed.x = -this.speed.x
        }
        if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
            this.speed.y = -this.speed.y
        }
    }
    pointCircle(px, py) {
        const distX = px - this.x
        const distY = py - this.y
        const dist = Math.sqrt(distX**2+distY**2)
        return dist<=this.r
    }
    linePoint(x1, y1, x2, y2, px, py) {
        const d1 = Math.sqrt((px-x1)**2+(py-y1)**2)
        const d2 = Math.sqrt((px-x2)**2+(py-y2)**2)
        const lineLen = Math.sqrt((x1-x2)**2+(y1-y2)**2)
        const buffer = 0.1
        if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
            return true;
          }
        return false;
    }
    lineCircle(x1,y1,x2,y2) {
        const inside1 = this.pointCircle(x1, y1)
        const inside2 = this.pointCircle(x2, y2)
        if (inside1 || inside2) {
            return true
        }
        let distX = x1 - x2
        let distY = y1 - y2
        const len = Math.sqrt(distX**2+distY**2)
        const dot = ( (this.x-x1)*(x2-x1) + (this.y-y1)*(y2-y1) ) / len ** 2;
        const cX = x1 + (dot * (x2-x1))
        const cY = y1 + (dot * (y2-y1))
        const onSegment = this.linePoint(x1,y1,x2,y2,cX,cY);
        if (!onSegment) {
            return false
        }
        distX = cX - this.x;
        distY = cY - this.y;
        const distance = Math.sqrt( (distX*distX) + (distY*distY) )
        if (distance <= this.r) {
            return true
        }
        return false
    }
    intersects(rect) {
        if(rect instanceof Rectangle) {
            let testX = this.x
            let testY = this.y
            if (this.x < rect.x) {
                testX = rect.x
            } else if (this.x > rect.x + rect.w) {
                testX = rect.x + rect.w
            }
            if (this.y < rect.y) {
                testY = rect.y
            } else if (this.y > rect.y + rect.h) {
                testY = rect.y + rect.h
            }
            const distX = this.x - testX
            const distY = this.y - testY
            if (distX**2+distY**2<=this.r**2) {
                return true
            }
            return false
        } else if (rect instanceof Circle) {
            const distX = this.x - rect.x
            const distY = this.y - rect.y
            const dist = Math.sqrt(distX**2+distY**2)
            if (dist <= this.r+rect.r) {
                return true
            }
            return false
        } else if (rect instanceof Polygon) {
            let flag = false
            rect.vertices.forEach((vc, index)=>{
                let vn
                if (index==rect.vertices.length-1) {
                    vn = rect.vertices[0]
                }
                else {
                    vn = rect.vertices[index+1]
                }
                if (this.lineCircle(vc.x + rect.x,vc.y + rect.y,vn.x + rect.x,vn.y + rect.y)) {
                    flag=true
                }
            })
            if (flag) {
                return true
            } else {
                return rect.polygonPoint(this.x, this.y)
            }
        }
    }
}
class Polygon {
    constructor(vertices, left, right, top, bottom) {
        this.vertices = vertices
        this.left = left
        this.right = right 
        this.top = top
        this.bottom = bottom
        this.life = 3
        this.x = 0
        this.y = 0
        this.speed = {x: 0, y: 0}
    }
    setSpeed(x, y){
        this.speed.x = x
        this.speed.y = y
    }
    takeDamage() {
        this.life -=1
    }
    insideCanvas(canvas) {
        if (this.left + this.x < 0 || this.right + this.x > canvas.width) {
            this.speed.x = -this.speed.x
        }
        if (this.top + this.y < 0 || this.bottom + this.y > canvas.height) {
            this.speed.y = -this.speed.y
        }
    }
    lineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
        const uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))
        const uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))
        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
            return true;
        }
        return false;
    }
    lineRect(x1, y1, x2, y2, rect) {
        const left = this.lineLine(x1, y1, x2, y2, rect.x, rect.y, rect.x, rect.y+rect.h)
        const right = this.lineLine(x1, y1, x2, y2, rect.x + rect.w, rect.y, rect.x + rect.w, rect.y+rect.h)
        const top = this.lineLine(x1, y1, x2, y2, rect.x, rect.y, rect.x + rect.w, rect.y)
        const bottom = this.lineLine(x1, y1, x2, y2, rect.x, rect.y+rect.h, rect.x + rect.w, rect.y+rect.h)
        if (left || right || top || bottom) {
            return true;
        }
        return false;
    }
    polygonPoint(px, py) {
        let collision = false
        this.vertices.forEach((vc, index)=> {
            let vn
            if (index==this.vertices.length-1) {
                vn = this.vertices[0]
            }
            else {
                vn = this.vertices[index+1]
            }
            if (((vc.y + this.y >= py && vn.y + this.y < py) || (vc.y + this.y < py && vn.y + this.y >= py)) &&
                (px < (vn.x-vc.x)*(py-vc.y - this.y) / (vn.y-vc.y)+vc.x + this.x))
                collision = !collision
        })
        return collision
    }
    intersects(fig) {
        if(fig instanceof Rectangle) {
            let flag = false
            this.vertices.forEach((vc, index)=>{
                let vn
                if (index==this.vertices.length-1) {
                    vn = this.vertices[0]
                }
                else {
                    vn = this.vertices[index+1]
                }
                if (this.lineRect(vc.x + this.x,vc.y + this.y,vn.x + this.x,vn.y + this.y, fig)) {
                    flag=true
                }
            })
            if (flag) {
                return true
            } else {
                return this.polygonPoint(fig.x, fig.y)
            }
        } else if (fig instanceof Circle) {
            return fig.intersects(this)
        } else if (fig instanceof Polygon) {
            let flag = false
            this.vertices.forEach((vc, index)=>{
                let vn
                if (index==this.vertices.length-1) {
                    vn = this.vertices[0]
                }
                else {
                    vn = this.vertices[index+1]
                }
                fig.vertices.forEach((vc2, index2)=>{
                    let vn2
                    if (index2==fig.vertices.length-1) {
                        vn2 = fig.vertices[0]
                    }
                    else {
                        vn2 = fig.vertices[index2+1]
                    }
                    if (this.lineLine(vc.x + this.x,vc.y + this.y,vn.x + this.x,vn.y + this.y,
                        vc2.x + fig.x, vc2.y + fig.y,vn2.x + fig.x, vn2.y + fig.y)) {
                            flag = true
                    }
                })
            })
            if (flag) {
                return true
            } else {
                return this.polygonPoint(fig.vertices[0].x + fig.x, fig.vertices[0].y + fig.y)
            }
        }
    }
}
export {Rectangle, Circle, Polygon}