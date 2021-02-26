import {el,elAll} from './supports.js';
import {calculateData,clearInputs} from './index.js';
import {switchPage} from './pager.js';
import {copyValue} from './copier.js';
import {setColors} from './themes.js';


let postLoad=(self)=>{

     self.addEventListener('load',()=>{
        setColors(); 
        switchPage();
        el('.header-text').classList.add('show-header');
        el('.submit-button').addEventListener('click',calculateData);
        el('.clear-button').addEventListener('click',clearInputs);
        el('.back-button').addEventListener('click',switchPage.bind(null,0));
        elAll('.result-page .result-output .value').forEach(target=>target.addEventListener('click',copyValue));
        elAll('.color-code-box .color-code').forEach(target=>target.addEventListener('click',
        (e)=>{
            setColors(e.target.dataset?.theme);
        })
        );
    })
}
export default postLoad;