const pinch = {
    touchstart(e) {
        // console.log(e)
        if (e.touches.length > 1) {
            e.preventDefault()
            this.oldScaleSize = 1
            this.coordinate.start = this.getDistance(
                {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY,
                },
                {
                    x: e.touches[1].pageX,
                    y: e.touches[1].pageY,
                }
            )
            this.getCenterPoint(
                {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY,
                },
                {
                    x: e.touches[1].pageX,
                    y: e.touches[1].pageY,
                }
            )
        }
    },
    touchmove(e) {
        if (e.touches.length === 2) {
            e.preventDefault()
            // 计算移动过程中的两个手指的距离
            this.coordinate.stop = this.getDistance(
                {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY,
                },
                {
                    x: e.touches[1].pageX,
                    y: e.touches[1].pageY,
                }
            )
            // 设置缩放尺寸
            let scaleSize = this.coordinate.stop / this.coordinate.start
            let nowScaleSize = scaleSize / this.oldScaleSize
            this.oldScaleSize = scaleSize
            this.zoomTo(nowScaleSize, this.centerPoint.x, this.centerPoint.y)
        }
    },
    wheel(e) {
        // console.log(this,this.lastWheel)
        e.preventDefault()
        if (e.timeStamp < this.lastWheel.timeStamp + 300) {
            this.lastWheel.deltaX = this.lastWheel.deltaX || e.deltaX
            this.lastWheel.timeStamp = e.timeStamp
        } else {
            this.startTimeStamp = e.timeStamp
            this.lastWheel.deltaX = e.deltaX
            this.lastWheel.timeStamp = e.timeStamp
        }
        if (e.timeStamp > this.startTimeStamp + 50) {
            if (!this.lastWheel.deltaX) {
                this.zoomTo(
                    Math.min(Math.abs(e.deltaY * -0.01 + 1), 1.6),
                    e.clientX,
                    e.clientY
                )
            } else {
                let t =
                    this.myImageDOM.scrollTop + (-e.wheelDeltaY || e.deltaY),
                    l =
                        this.myImageDOM.scrollLeft + (-e.wheelDeltaX || e.deltaX)
                this.myImageDOM.scrollTo(l, t)
            }
        }
    },
    initGesture(e) {
        this.oldGestureScale = 1
        e.preventDefault()
    },
    gesturechange(e) {
        e.preventDefault()
        let nowScaleSize = e.scale - this.oldGestureScale + 1
        this.oldGestureScale = e.scale
        this.zoomTo(nowScaleSize, e.clientX, e.clientY)
    }

}
export default pinch