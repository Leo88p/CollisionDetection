import {Rectangle, Circle, Polygon} from './rectangle'

describe('Rectangle getters', () => {
    it('should calculate borders correctly', () => {
        const rect = new Rectangle(0, 0, 3, 2)
        expect(rect.left).toBe(0)
        expect(rect.right).toBe(3)
        expect(rect.top).toBe(0)
        expect(rect.bottom).toBe(2)

        //    0    1    2    3
        // 0  ┼──────────────○──
        //    │              │
        // 1  │              │
        //    │              │
        // 2  ┼──────────────○ (3, 2)
        //    │
        //    │
    })
})

describe('Rectangle.contains()', () => {
    let rect
    beforeEach(() => {
        rect = new Rectangle(0, 0, 3, 2)
    })

    it('should returns true if point is inside the rect', () => {
        expect(rect.contains({x: 1, y: 1})).toBeTruthy()

        //    0    1    2    3
        // 0  ┼──────────────○──
        //    │              │
        // 1  │   ○ (1, 1)   │
        //    │              │
        // 2  ┼──────────────○ (3, 2)
        //    │
        //    │
    })

    it('should returns true if point located on rects left or top border', () => {
        expect(rect.contains({x: 2, y: 0})).toBeTruthy()
        expect(rect.contains({x: 0, y: 1})).toBeTruthy()

        //    0    1    2    3
        // 0  ┼─────────○────○──
        //    │      (2, 0)  │
        // 1  ○ (0, 1)       │
        //    │              │
        // 2  ┼──────────────○ (3, 2)
        //    │
        //    │
    })

    it('should returns false if point located on rects right or bottom border', () => {
        expect(rect.contains({x: 3, y: 1})).toBeFalsy()
        expect(rect.contains({x: 2, y: 2})).toBeFalsy()

        //    0    1    2    3
        // 0  ┼──────────────○──
        //    │              │
        // 1  │              ○ (3, 1)
        //    │              │
        // 2  ┼─────────○────○ (3, 2)
        //    │      (2, 2)
        //    │
    })

    it('should returns false if point is out of rect', () => {
        expect(rect.contains({x: 4, y: 1})).toBeFalsy()

        //    0    1    2    3
        // 0  ┼──────────────○──
        //    │              │
        // 1  │              │    ○ (4, 1)
        //    │              │
        // 2  ┼──────────────○ (3, 2)
        //    │
        //    │
    })
})

describe('Rectangle.intersects()', () => {
    let rect
    beforeEach(() => {
        rect = new Rectangle(0, 0, 3, 2)
    })

    it('should returns true if rects are intersected', () => {
        const otherRect = new Rectangle(1, 1, 3, 2)
        expect(rect.intersects(otherRect)).toBeTruthy()

        //    0    1    2    3    4
        // 0  ┼──────────────○──────
        //    │              │
        // 1  │   ○───────────────○
        //    │   │◽◽◽◽◽◽◽│
        // 2  ┼──────────────○    │
        //    │   │               │
        // 3  │   ○───────────────○
    })

    it('should returns true if one rect contains other', () => {
        const otherRect = new Rectangle(1, 0, 1, 2)
        expect(rect.intersects(otherRect)).toBeTruthy()

        //    0    1    2    3    4
        // 0  ┼────○────○────○──────
        //    │    │◽◽◽◽│    │
        // 1  │    │◽◽◽◽│    │
        //    │    │◽◽◽◽│    │
        // 2  ┼────○────○────○
        //    │
    })

    it('should returns false if rects are not intersected', () => {
        const otherRect = new Rectangle(10, 10, 1, 1)
        expect(rect.intersects(otherRect)).toBeFalsy()
    })

    it('should revert y speed when out of canvas', () => {
        const canvas = {width: 800, height: 600}
        rect = new Rectangle(0, 599, 3, 2)
        rect.setSpeed(2,2)
        rect.insideCanvas(canvas)
        expect(rect.speed.y).toBe(-2)
    })

    it('should revert x speed when out of canvas', () => {
        const canvas = {width: 800, height: 600}
        rect = new Rectangle(799, 0, 3, 2)
        rect.setSpeed(3,2)
        rect.insideCanvas(canvas)
        expect(rect.speed.x).toBe(-3)
    })

    it('should reduce health on taking damage', () => {
        rect.takeDamage()
        expect(rect.life).toBe(2)
    })
})
describe('Circle.intersects()', () => {
    let circle
    beforeEach(()=>{
        circle = new Circle(3,3,2)
    })
    it('shoud revert speed when out of canvas',()=>{
        const canvas = {width: 800, height: 600}
        circle.x = 799
        circle.setSpeed(3,4)
        circle.insideCanvas(canvas)
        expect(circle.speed.x).toBe(-3)
        circle.x = 5
        circle.y = 599
        circle.insideCanvas(canvas)
        expect(circle.speed.y).toBe(-4)
    })
    it('should return true if rect and circle intersects',()=>{
        
    })
})