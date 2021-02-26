import {el,elAll} from './supports.js';
import {calculateData,clearInputs} from './index.js';
import {switchPage} from './pager.js';
import {copyValue} from './copier.js';
let postLoad=(self)=>{

     self.addEventListener('load',()=>{
        switchPage();
        el('.header-text').classList.add('show-header');
        el('.submit-button').addEventListener('click',calculateData);
        el('.clear-button').addEventListener('click',clearInputs);
        el('.back-button').addEventListener('click',switchPage.bind(null,0));
        elAll('.result-page .result-output .value').forEach(target=>target.addEventListener('click',copyValue));
    })
}
export default postLoad;