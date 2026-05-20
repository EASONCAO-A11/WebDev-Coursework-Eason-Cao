<!DOCTYPE html>
<html>
<head>
    <title>Interactive Button Example</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
        #message {
            font-size: 24px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Interactive Page</h1>
    <p id="message">Hello World!</p>
    <button onclick="showSmiley()">Click Me!</button>

    <script>
        function showSmiley() {
            let messageElement = document.getElementById("message");
            messageElement.textContent = ":)";
        }
    </script>

</body>
</html>// Place your JavaScript code below this comment. Happy styling!
