const methods = {
    /**
     * 缩放功能
     * @param {Number} num 缩放倍率
     * @param {Number} x 缩放点x坐标
     * @param {Number} y 缩放点y坐标
     * @return {void} viod
     */
    zoomTo(num, x, y) {
        if (this.zoom * num < 2 && this.zoom * num > 0.2) {
            // 补偿居中后的边距this.$refs.canvas.offsetTop,
            let oldOffsetTop = this.canvasDOM.offsetTop,
                oldOffsetLeft = this.canvasDOM.offsetLeft,
                oldSH = this.myImageDOM.scrollTop - oldOffsetTop,
                oldSW = this.myImageDOM.scrollLeft - oldOffsetLeft
            this.zoom = this.zoom * num
            let width
            if (this.rotate % 180) {
                width =
                    ((this.width * this.zoom) / this.img.width) *
                    this.img.height
            } else {
                width = this.width * this.zoom
            }
            this.canvasDOM.style.width = width + 'px'
            //   this.$nextTick(() => {
            this.scrollTo(num, x, y, oldSW, oldSH)
            //   })
        }
    },
    /**
     * 放大缩小后滚动到中心坐标
     * @param {Number} num 缩放倍率
     * @param {Number} x 缩放点x坐标
     * @param {Number} y 缩放点y坐标
     * @param {Number} oldSW 居中时x轴偏离量补偿
     * @param {Number} oldSH 居中时y轴偏离量补偿
     * @return {void} viod
     */
    scrollTo(num, x, y, oldSW, oldSH) {
        if (!x) {
            x = this.width * 0.5
        }
        if (!y) {
            y = document.body.clientHeight * 0.5
        }
        let left = (oldSW + x) * num - x,
            top = (oldSH + y) * num - y
        this.myImageDOM.scrollTo(left, top)
    },
    /**
     * 图片旋转
     * @param {Number} rotate 选装角度
     * @return {void} viod
     */
    rotateTo(rotate) {
        console.log(rotate)
        if (rotate != null) {
            this.rotate = rotate
        } else {
            this.rotate = (this.rotate + 90) % 360
        }
        if (this.img) {
            let width = this.width * 2,
                height = (width / this.img.width) * this.img.height,
                canvas = this.canvasDOM
            switch (this.rotate) {
                case 90:
                    canvas.style.width =
                        ((this.width * this.zoom) / this.img.width) *
                        this.img.height +
                        'px'
                    canvas.height = width
                    canvas.width = height
                    canvas.getContext('2d').translate(height, 0)
                    canvas.getContext('2d').rotate((1 / 2) * Math.PI)
                    canvas
                        .getContext('2d')
                        .drawImage(this.img, 0, 0, canvas.height, canvas.width)
                    break
                case 180:
                    canvas.style.width =
                        this.width * this.zoom + 'px'
                    canvas.height = height
                    canvas.width = width
                    canvas
                        .getContext('2d')
                        .translate(canvas.width / 2, canvas.height / 2)
                    canvas.getContext('2d').rotate(Math.PI)
                    canvas
                        .getContext('2d')
                        .translate(-canvas.width / 2, -canvas.height / 2)
                    canvas
                        .getContext('2d')
                        .drawImage(this.img, 0, 0, canvas.width, canvas.height)
                    break
                case 270:
                    canvas.style.width =
                        ((this.width * this.zoom) / this.img.width) *
                        this.img.height +
                        'px'
                    canvas.height = width
                    canvas.width = height
                    canvas.getContext('2d').translate(0, width)
                    canvas.getContext('2d').rotate((3 / 2) * Math.PI)
                    canvas
                        .getContext('2d')
                        .drawImage(this.img, 0, 0, canvas.height, canvas.width)
                    break
                default:
                    canvas.style.width =
                        this.width * this.zoom + 'px'
                    canvas.height = height
                    canvas.width = width
                    canvas.getContext('2d').drawImage(this.img, 0, 0, width, height)
                    break
            }
        }
    },
    /**
     * img内滚动监听
     */
    onscroll() {
        let that = this
        that.debounce(
            function () {
                console.log(1111)
            },
            300,
            'scroll'
        )
    },
    /**
     * 防抖
     * @param {Function} fn 方法
     * @param {Number} delay 时间
     * @param {String} key key
     * @return {void} viod
     */
    debounce(fn, delay, key) {
        if (this.timer[key]) {
            clearTimeout(this.timer[key])
            delete this.timer[key]
        }
        this.timer[key] = setTimeout(fn, delay)
    },
    /**
     * @method isPC
     * @return {Boolean} false 是手机,true是电脑
     */
    isPC() {
        var userAgentInfo = navigator.userAgent
        // console.log(navigator.userAgent)
        var Agents = [
            'Android',
            'iPhone',
            'SymbianOS',
            'Windows Phone',
            'iPad',
            'iPod',
        ]
        var flag = true
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    },
    /**
     * 计算移动距离
     * @param {Object} bg 起始点
     * @param {Object} end 结束点
     * @return {Number} 移动距离
     */
    getDistance(bg, end) {
        return Math.sqrt(Math.pow(end.x - bg.x, 2) + Math.pow(end.y - bg.y, 2))
    },
    /**
     * 计算两点中心坐标点
     * @param {Object} bg 第一个点
     * @param {Object} end 第二个点
     * @return {void}
     */
    getCenterPoint(bg, end) {
        this.centerPoint = {
            x: (end.x + bg.x) / 2,
            y: (end.y + bg.y) / 2,
        }
    },

}
export default methods