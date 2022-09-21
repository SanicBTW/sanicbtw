document.addEventListener('DOMContentLoaded', (ev) => 
{
    var icons = document.querySelectorAll('.daIcons');
    icons.forEach((icon) => 
    {
        if(detectDeviceType() == "Mobile")
        {
            icon.classList.remove('daIcons');
            icon.classList.add('smoldaIcons');
        }
    });
});