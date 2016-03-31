$(document).ready(function() {
    var h = window.innerHeight
    var w = window.innerWidth

    var size = '' + Math.round(w * 2) + 'x' + Math.round(0.65 * h)

    var src = 'https://maps.googleapis.com/maps/api/staticmap?'
    src += 'center=32.7730661,-117.1903055'
    src += '&zoom=20.3'
    src += '&size=' + size
    src += '&maptype=roadmap'
    src += '&markers=color:blue%7Clabel:S%7C32.772077, -117.189999'
    src += '&markers=color:green%7Clabel:G%7C32.776036, -117.182539'
    src += '&markers=color:red%7Clabel:C%7C32.770244, -117.186768'
    src += '&key=AIzaSyCFiqysv3ag_s69bw4xTMtRfv5Avt7xxiA'
    document.getElementById('mapimg').setAttribute('src', src)
})