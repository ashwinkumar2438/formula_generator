import postLoad from './load.js';
import {el,elAll,corrector,degToRad} from './supports.js';
import {validate} from './validate.js';
import {switchPage} from './pager.js';


let getInputValues=()=>{

let inputs=[...elAll('.input',el('.form'))];

let inputvals={};
inputs.forEach(target=>{
    inputvals[target.dataset.name]=Number(target.value);
})
console.log(inputvals);
return inputvals;

}

let displayResult=(results)=>{
    let root=el('.result-page');
    el('.base .value',root).innerText=results.base;
    el('.new-east .value',root).innerText=results.new_east;
    el('.new-north .value',root).innerText=results.new_north;
}

//final calculation...
export let calculateData=()=>{
    if(!validate())return;
    let {height,degree,old_east,old_north,bg}=getInputValues();
    
    let base=corrector( height * Math.tan(degToRad(90-degree)) );

    let new_east=old_east+ corrector(base*Math.sin(degToRad(bg))); 
    let new_north=old_north+corrector(base*Math.cos(degToRad(bg)));
    
    
    displayResult({base,new_east,new_north});
    switchPage(1);
}

export let clearInputs=()=>{
    elAll('.input',el('.form')).forEach(target=>target.value='');
}


//run initial settings..
postLoad(window);

