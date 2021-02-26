import {el} from './supports.js';
export let switchPage=(page=0)=>{
    let form_display='';
    let result_display='';
switch (page) {
    case 0:
        form_display=false;
        result_display=true;
        break;
    case 1:
        form_display=true;
        result_display=false;
        break;
    default:
        form_display=false;
        result_display=true;
        break;
};

el('.form-page').setAttribute('style',form_display?'display:none':''); 
el('.result-page').setAttribute('style',result_display?'display:none':'');
}