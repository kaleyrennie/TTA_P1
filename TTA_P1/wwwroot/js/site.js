// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

< !DOCTYPE html >
    <html>
        <style>
            #myContainer {
                width: 370px;
            height: 370px;
            position: relative;
            background: burlywood;
          }
#myAnimation {
                width: 20px;
            height: 20px;
            position: absolute;
            background-color: blue;
          }
</style>
        <body>

            <p>
                <button onclick="myMove()">Click Here!</button>
            </p>

            <div id="myContainer">
                <div id="myAnimation"></div>
            </div>

            <script>
                function myMove() {
  var elem = document.getElementById("myAnimation");
                var pos = 0;
                var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
                    clearInterval(id);
    } else {
                    pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
              }
            }
          }
</script>

        </body>
    </html>
