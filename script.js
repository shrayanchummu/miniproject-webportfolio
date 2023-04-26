console.log("HELLO HELLO")
document.querySelector('.cross').style.display ='none';
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        document.querySelector('.bar').style.display ='inline';
        document.querySelector('.cross').style.display ='none';
    }
    else
    {
        document.querySelector('.bar').style.display ='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display ='inline';
        },300)
        
    }
}) 











