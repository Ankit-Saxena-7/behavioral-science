//https://www.youtube.com/watch?v=sL5-FhULalM


// Run the camera
const vVideo = document.getElementById('vidCapture');
const vCanvas = document.getElementById('canColumnFutureImage');
const vButton = document.getElementById('btnCamera');
const vError = document.getElementById('spanErrorMsg');

const vConstraints =
{
    audio: true,
    video: { width: 100, height: 100}
}

// Access webcam
async function initialize()
{
    try
    {
        const vStream = await  navigator.mediaDevices.getUserMedia(vConstraints);
        handleSuccess(vStream);
    }
    catch(e)
    {
        alert(`navigator.getUserMedia.error:${e.toString()}`);
    }
}

// Success
function handleSuccess(pStream)
{
    window.stream = pStream;
    video.srcObject = pStream;
}

// Load init
initialize();

// Draw image
var vContext = vCanvas.getContext('2d');
snap.addEventListner("click", function()
{
    vContext.drawImage(vVideo, 0, 0, 100, 100);
});
