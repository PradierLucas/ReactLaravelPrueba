<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React con Laravel</title>
    @viteReactRefresh
    @vite('resources/js/login.jsx')
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="login"></div>
</body>
</html>
