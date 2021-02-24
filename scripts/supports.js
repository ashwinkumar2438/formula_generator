//fetch an element
export let el=(selector,parent=document)=>parent.querySelector(selector);

//create an element
export let createEl=(tagname,attributes)=>{
                        let el=document.createElement(tagname);
                        Object.entries(attributes).forEach(([name,value]) => {
                                el.setAttribute(name,value);
                        });   
                        return el;
                    }