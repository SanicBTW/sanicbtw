function doTransition(whileTransitioning = null)
{
    if(whileTransitioning == null){ whileTransitioning = function() { } }
    document.getElementById('blackTransition').style.top = "0px";
    var timer = setTimeout(() => {
        document.getElementById('blackTransition').style.top = "-2000px";
        whileTransitioning();
        clearTimeout(timer);
    }, 1500);
}

function changeContent(changeTo)
{
    doTransition(
    function()
    {
        switch(changeTo)
        {
            case 'socials':
                document.getElementById('mainDiv').style.display = "none";
                document.getElementById('socialsDiv').style.display = 'block';
                backChange(true, function()
                {
                    doTransition(function()
                    { 
                        document.getElementById('mainDiv').style.display = "block";
                        document.getElementById('socialsDiv').style.display = 'none';
                    });
                });
                break;
            case 'lang':
                document.getElementById('mainDiv').style.display = "none";
                document.getElementById('langsDiv').style.display = 'block';
                backChange(true, function()
                {
                    doTransition(function()
                    { 
                        document.getElementById('mainDiv').style.display = "block";
                        document.getElementById('langsDiv').style.display = 'none';
                    });
                });
                break;
            case 'history':
                document.getElementById('mainDiv').style.display = "none";
                document.getElementById('historyDiv').style.display = 'block';
                backChange(true, function()
                {
                    doTransition(function()
                    { 
                        document.getElementById('mainDiv').style.display = "block";
                        document.getElementById('historyDiv').style.display = 'none';
                    });
                });
                break;
            case 'ghreposhit':
                document.getElementById('mainDiv').style.display = "none";
                document.getElementById('ghrepoDiv').style.display = 'block';
                backChange(true, function()
                {
                    doTransition(function()
                    { 
                        document.getElementById('mainDiv').style.display = "block";
                        document.getElementById('ghrepoDiv').style.display = 'none';
                    });
                });
                break;
            default:
                break;
        }
    });
}

function backChange(canBack = false, func = null, shouldHideAfter = true)
{
    if(func != null && canBack)
    {
        document.getElementById('backbtn').style.display = "block";
        document.getElementById('backbtn').style.cursor = "pointer";
        document.getElementById('backbtn').style.opacity = 1;
        document.getElementById('backbtn').onclick = function()
        { 
            func();
            if(shouldHideAfter)
            {
                document.getElementById('backbtn').style.opacity = 0;
                document.getElementById('backbtn').style.cursor = "default";
                document.getElementById('backbtn').style.display = "none";
            }
        };
    }
    if(!canBack)
    {
        document.getElementById('backbtn').style.cursor = "default";
        document.getElementById('backbtn').style.display = "none";
    }
}