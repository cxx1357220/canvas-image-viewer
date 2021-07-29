require('../less/index.less');

import data from "./data"
import pinch from "./pinch";
import listener from "./listener";
import TEMPLATE from "./template";
import methods from "./methods";

class ImageViewer {
  constructor(DOM, option) {
    if (!DOM) {
      return false
    }
    this.option = option
    this.DOM = DOM
    this.init(DOM)
  }
  init(DOM) {
    DOM.innerHTML = TEMPLATE;
    this.width = DOM.offsetWidth
    this.height = DOM.offsetHeight
    window.dom = DOM
    this.myImageDOM = DOM.querySelector(`.my-image`);
    this.render()
    this.zoomOutDOM = DOM.querySelector(`.zoom-out`);
    this.zoomInDOM = DOM.querySelector(`.zoom-in`);
    this.rotateToDOM = DOM.querySelector(`.rotate-to`);
    this.canvasDOM = DOM.querySelector(`.my-image-canvas`);
    this.addListener()
  }
  render() {
    let that = this
    this.img = new Image()
    this.img.onload = function () {
      let width = that.width * 2,
        height = (width / that.img.width) * that.img.height
      that.canvasDOM.height = height
      that.canvasDOM.width = width
      that.canvasDOM
        .getContext('2d')
        .drawImage(that.img, 0, 0, width, height)
      that.canvasDOM.style.width =
        that.width * that.zoom + 'px'
      that.option.onload&&that.option.onload()
    }
    // this.img.src = window.URL.createObjectURL(file)
    this.img.src = this.option.src
  }
}
Object.assign(ImageViewer.prototype, data, listener, methods, pinch,)
window.ImageViewer = ImageViewer
export default ImageViewer