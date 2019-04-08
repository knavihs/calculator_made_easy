function update(para){
    document.myForm.screen.value=document.myForm.screen.value + para;
}

function result(){
    let exp=document.myForm.screen.value;
    if(exp){
    document.myForm.screen.value = eval(exp);
    }
}

function form_reset(){
    document.myForm.screen.value = ' ';

}