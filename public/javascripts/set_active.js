// Set the clicked button to active
function set_active(button){
    var on = document.getElementById('on_btn');
    var off = document.getElementById('off_btn');
    if(button === 'on'){
        on.className = 'btn active';
        off.className = 'btn';
        document.getElementById('on_form').submit();
    }else{
        on.className = 'btn';
        off.className = 'btn active';
        document.getElementById('off_form').submit();
    }
}