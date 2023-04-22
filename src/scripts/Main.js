var fpsLoop = new FPSLoop();
var debug = document.getElementById('debug');

// Its likeuhhhhhhh
const boundTo = FPSLoop.boundTo;
const lerp = FPSLoop.lerp;

function greaterFirst(a, b)
{
    if (a < b)
        return 1;

    if (a > b)
        return -1;

    return 0;
}


// I think its good
var startBag = 
{
    parent: document.getElementById('start').children,
    p_length: document.getElementById('start').childElementCount,
    children: document.getElementById('start2').children,
    c_length: document.getElementById('start').childElementCount,
    elements: [],
    setting_up: true,
    p_order: [],
    c_order: [],
    count: 0
}

fpsLoop.onUpdate.add(({elapsed, fps}) =>
{
    // p => Parsed (lol)
    var pElapsed = parseFloat(elapsed).toFixed(4);
    var pFps = parseFloat(fps).toFixed(2);
    debug.innerText = `Version 3.0R \n [ Elapsed ${pElapsed} | FPS ${pFps} ]\n[ LISTENERS ${fpsLoop.onUpdate.listeners.length} ]`;
});

var startID = fpsLoop.onUpdate.add(({elapsed}) =>
{
    var lerpVal = boundTo(1 - (elapsed * 6.6), 0, 1);

    if (startBag.setting_up)
    {
        for (let i = 0; i < startBag.p_length; i++)
        {
            startBag.p_order.push(i + 1);
        }

        startBag.p_order.sort(greaterFirst);

        for (let i = 0; i < startBag.c_length; i++)
        {
            startBag.c_order.push(i + 1);
        }

        startBag.c_order.sort(greaterFirst);

        console.log(startBag.p_order);
        console.log(startBag.c_order);

        startBag.setting_up = false;
    }

    /*
    if (!startBag.setting_up)
    {
        startBag.p_order.forEach((i, pos) => 
        {
            console.log(i, pos, startBag.children.item(pos).id);
            
            var element = document.getElementById(startBag.children.item(pos).id);
            // Ok now its working better lol
            var mult = (pos == 2) ? 1.5 : 1;

            // Forcing
            element.style.cursor = "default";

            // Sweet lerps
            element.style.opacity = boundTo(lerp(lerpVal * (i * mult), element.style.opacity, lerpVal), 0, 1);

            if (parseFloat(element.style.opacity) == 1)
            {
                // I guess it works
                startBag.count += elapsed;

                // Restore defaults
                element.style.cursor = "pointer";
            }
        });

        if (startBag.count >= startBag.length)
        {
            document.getElementById('start').id = "";
            fpsLoop.onUpdate.remove(startID);
        }
    }*/
});