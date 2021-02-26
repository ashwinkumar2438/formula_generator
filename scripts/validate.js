import {el,elAll} from './supports.js';

let timerids=[];
let clearTimers=()=>{
    timerids.forEach(id=>clearTimeout(id));
    timerids=[];
}
let hideWarnings=(delay=0)=>{
    let clear=()=>{
        elAll('.warning',el('.form')).forEach(target=>target.setAttribute('style',''));
    }
    return delay?setTimeout(clear,delay):clear();
}

export const validate=()=>{
    //clearing previous setups;
    clearTimers();
    hideWarnings();
    
    let inputs=elAll('.input',el('.form'));
    
    let failed=[...inputs].some(target=>{
        let fail=true;
           if(!target.value) {
            let warning=el(`#${target.id} + .warning`);
            warning.setAttribute('style','height:1.5rem');
           }
           else fail=false;

        return fail;   
    });
    
    if(failed)timerids.push(hideWarnings(5000));
    
    return !failed;
}