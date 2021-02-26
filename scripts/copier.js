let hightlight=(target)=>{
    target.setAttribute('style','transform:scale(1.05)');
    setTimeout(()=>{
        target.setAttribute('style','');
    },200);
}

export let copyValue=(e)=>{
    let target=e.target;
    if(target && ('clipboard' in navigator)){
        navigator.clipboard.writeText(target.innerText).then(()=>{
            hightlight(target);
        }).catch(err=>{
            alert('could not copy');
        })
    }
    else alert('could not copy');
}