let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.querySelector('h1').style.color = color;
});
ChangeColor = () =>{
    let getcolor = document.getElementById('hex').value;
    document.body.style.background = getcolor;
    document.getElementById('hex').value = '';
}