import {el,createEl} from './supports.js';
let postLoad=(self)=>{
    
    //add manifest
    
    let manifest=createEl('link',{rel:'manifest',href:`${self.location.origin}/manifest.json`});
    el('head').append(manifest);   
    
    //manifest added.

     self.addEventListener('load',()=>{
        el('.header-text').classList.add('show-header');
    })
}
export default postLoad;