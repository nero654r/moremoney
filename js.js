let f1 = document.getElementById('first1');
let f2 = document.getElementById('first2');
let f3 = document.getElementById('first3');
let f4 = document.getElementById('first4');
let f5 = document.getElementById('first5');
let f6 = document.getElementById('first6');

let f11 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">2000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 150 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`
let f22 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">5000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 400 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`
let f33 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">10000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 800 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`
let f44 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">15000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 1200 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`
let f55 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">30000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 1500 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`
let f66 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEKO UC</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background: url(https://wallpapers.com/images/hd/awesome-pubg-game-cover-hd-lsmq43oghjmfskd2.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            text-align: center;
            direction: rtl;
        }

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            margin-top: 100px;
            text-shadow: 1px 1px 5px #333;
        }

        p {
            color: #fff;
            font-size: 30px;
            margin-top: 8px;
            text-shadow: 1px 1px 5px #333;
        }

        form {
            margin-top: 50px;
            width: 100%;
        }

        ::placeholder {
            color: #333;
        }

        input {
            width: 50%;
            display: block;
            margin: auto;
            text-align: center;
            font-size: 25px;
            padding: 8px;
            color: #333;
            outline: none;
            border: none;
            border-radius: 8px;
            box-shadow: 1px 1px 5px #333;
        }

        .aa {
            margin-top: 50px;
            background-color: #333;
            color: #fff;
            border-radius: 8px;
            font-size: 27px;
            padding: 12px 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 1px 1px 5px #fff;
        }

        .numbers {
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }

        .numbers .n {
            width: 150px;
            height: 150px;
            background: white;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 5px solid #ffff00;
            padding: 15px;
        }

        .numbers .n a{
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 27px;
        }

        .numbers .n img{
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>شحن شدات ببجي</h1>
    <p>شحن شدات ببجي بأقل الأسعار ولكن لمصر فقط.</p>
    <div class="numbers">
        <div class="n"><a href="buy.html" id="first1" onclick="first1()">50000  <img src="2.png" alt="UC"></a></div>
        <span style='color: #333; text-shadow: 2px 2px 0px #fff;font-size: 40px;display:block;'>السعر : 2000 جنية</span>
        <a href="paid.html" class="aa">شحن</a>
    </div>
    <script src="js.js"></script>
</body>

</html>
`

function first1() {
    document.write(f11)
}
function first2() {
    document.write(f22)
}
function first3() {
    document.write(f33)
}
function first4() {
    document.write(f44)
}
function first5() {
    document.write(f55)
}
function first6() {
    document.write(f66)
}