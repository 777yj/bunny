import ImgView from './ImgView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin={
    install(app){
        app.component('XtxImgView',ImgView)
        app.component('XtxSku',Sku)
    }
}