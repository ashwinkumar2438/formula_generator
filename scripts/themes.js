let colorTypes={
    default:{
        baseColor: 'lightskyblue',
        fontColor:'darkblue',
        backgroundColor:'rgb(251, 251, 255)',
        inputBackground:'none'
    },
    dark:{
        baseColor: 'white',
        fontColor:'lightgray',
        backgroundColor:'rgba(100,100,100)',
        inputBackground:'rgba(50,50,50)'
    },
    colored:{
        baseColor: 'lightsalmon',
        fontColor:'maroon',
        backgroundColor:'antiquewhite',
        inputBackground:'bisque'
    }
}

export let setColors=(type,self=window)=>{
    let root=document.documentElement;
    let storage=self?.localStorage;
    let theme=type??storage.colortheme??'default';
    let colorData=colorTypes[theme];
    root.setAttribute('style',
    ` --base-color:${colorData.baseColor};
      --font-color:${colorData.fontColor};
      --background-color:${colorData.backgroundColor};
      --input-background:${colorData.inputBackground};   
    `)
    storage?.setItem('colortheme',theme);
}