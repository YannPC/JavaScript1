const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) // //!// means the invers og the mesaning //
    {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave',() =>{
    if(circle.classList.contains('hover'))
    {
        circle.classList.remove('hover');
    }
});