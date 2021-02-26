//fetch an element
export let el=(selector,parent=document)=>parent.querySelector(selector);
export let elAll=(selector,parent=document)=>parent.querySelectorAll(selector);
//create an element
export let createEl=(tagname,attributes)=>{
                        let el=document.createElement(tagname);
                        Object.entries(attributes).forEach(([name,value]) => {
                                el.setAttribute(name,value);
                        });   
                        return el;
                    }



//decimal correction...
export let corrector=(val='')=>Number((/(?<exactval>\d*\.\d*[1-9])0{5,}\d*/).exec(''+val)?.groups?.exactval??val);
                    
export let degToRad=(val=0)=>corrector((val*Math.PI)/180);