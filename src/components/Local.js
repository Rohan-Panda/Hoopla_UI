function store(key,value){
    var word=""
    var i=0
    var w=""
    if(key=="nm"){
        for(i=0;i<value.length;i++){
            
            if(value[i]!="@"){
                if(i==0){
                   w=value[i].toUpperCase()
                   word+=w
                }
                else{
                word+=value[i]}
            }
            else{
                value=word
                break;
            }
        }
    }
    else if(key=="snm"){
        for(i=0;i<value.length;i++){
            
            if(value[i]!="@"){
                if(i==0){
                   w=value[i].toUpperCase()
                   word+=w
                }
                else{
                word+=value[i]}
            }
            else{
                value=word
                break;
            }
        }
    }
    localStorage.setItem(key,value)   
}


export default store