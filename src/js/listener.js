const listener = {
    addListener() {
        this.zoomOutDOM.addEventListener('click', () => {
            this.zoomTo(1.6)
        })
        this.zoomInDOM.addEventListener('click', () => {
            this.zoomTo(0.625)
        })
        this.rotateToDOM.addEventListener('click', () => {
            this.rotateTo()
        })
        this.myImageDOM.addEventListener('scroll', (e) => { this.onscroll() })
        if (this.isPC()) {
            // 兼容safari浏览器
            this.myImageDOM.addEventListener('gesturechange', (e) => { this.gesturechange(e) })
            this.myImageDOM.addEventListener('gestureend', (e) => { this.initGesture(e) })
            this.myImageDOM.addEventListener('gesturestart', (e) => { this.initGesture(e) })
            this.myImageDOM.addEventListener('wheel', (e) => { this.wheel(e) })
        } else {
            this.myImageDOM.addEventListener('touchstart', (e) => { this.touchstart(e) })
            this.myImageDOM.addEventListener('touchmove', (e) => { this.touchmove(e) })
        }
    },
}
export default listener