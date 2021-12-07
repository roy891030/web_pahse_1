window.onload = function(){
    document.getElementById('place').onmouseover = hoverPlace;
}
function hoverPlace(){
    var place = document.getElementById('place');
    var section = document.getElementById('section');
    place.addEventListener('mouseover', function(){
        section.style.display = 'block';
    })
    section.addEventListener('mouseover', function(){
        section.style.display = 'block';
    });
    section.addEventListener('mouseout', function(){
        section.style.display = 'none';
    });
}