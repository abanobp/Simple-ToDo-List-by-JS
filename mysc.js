function ADD ()
{
    'use strict' ;
    
    var tx = document.getElementById('MyTextBox').value;
    if (tx === "")
        return ; 
    var cont = document.createTextNode(tx) ;
    
    var newp = document.createElement ('p') ;
    
    newp.appendChild (cont) ;
    newp.setAttribute('class' , 'newp') ;
    
    var newdiv = document.createElement ('div') ;
    
    newdiv.appendChild(newp) ;
    newdiv.setAttribute('class' , 'newdiv') ;
    
    var newbut = document.createElement ('button') ;
    newbut.setAttribute('class' , 'newbut') ;
    
    var mymain = document.getElementById ('main');
    
    var dd = 'done(this);' ;
   
    newbut.setAttribute('onclick' , dd ) ;
    newbut.textContent = 'Done' ;
    newdiv.appendChild(newbut) ;

    var up = document.createElement('button') ,
    down = document.createElement('button') ;
    
    up.setAttribute('class' , 'row') ;
    down.setAttribute('class' , 'row') ;
    
    up.setAttribute('onclick' , 'up(this);') ;
    down.setAttribute('onclick' , 'down(this);') ;
    
    up.textContent = 'UP' ;
    down.textContent = 'DOWN' ;
    newdiv.appendChild(up) ;
    newdiv.appendChild(down) ;
    mymain.appendChild(newdiv);
   document.getElementById('MyTextBox').value = "" ;
   document.getElementById('r').value ++;
   
}


function done (ref)
{
    var x = ref.parentNode ;
    var mymain = document.getElementById ('main');
    mymain.removeChild(x) ;
    document.getElementById('f').value ++;
     document.getElementById('r').value--;
}

function up (ref)
{
    var parent = ref.parentNode ,
        prev = parent.previousElementSibling,
        copy = parent.cloneNode(true) ;
    var mymain = document.getElementById ('main');
    
    if (mymain.firstElementChild === parent )
    {
        alert('You Are The First') ;
        return;
    }
    mymain.removeChild(parent) ;
    mymain.insertBefore(copy , prev) ;
    
}

function down (ref)
{
    var parent = ref.parentNode ,
        next = parent.nextElementSibling;
       
        
    var mymain = document.getElementById ('main');
    
    if (mymain.lastElementChild === parent )
    {
        alert('You Are The Last') ;
        return;
    }
    
     var  copy = parent.nextElementSibling.cloneNode(true);
    mymain.removeChild(next) ;
    mymain.insertBefore(copy , parent) ;
    
   
}
