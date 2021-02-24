import {el,createEl} from './supports.js';
let postLoad=(self)=>{

     self.addEventListener('load',()=>{
        el('.header-text').classList.add('show-header');
    })
}
export default postLoad;