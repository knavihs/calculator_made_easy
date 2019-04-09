# calculator_made_easy
How to include javascript on client side of node.js?

I want to include external javascript file in html code. But most of the time newbie like me encounters this problem - When we open the "file.html" directly on a web browser(e.g. Google Chrome), It works. ("Hello" message should be displayed on the screen.)

However, when I tried to open the "file.html" via node.js http server, It doesn't work. 
The problem is that no matter what our browser requests, we return "file.html". So the browser loads your page and get's html. That html includes your script tag, and the browser goes asking node for the script-file. However, your handler is set up to ignore what the request is for, so it just returns the html once more.
 
This my solution for this problem by demonstrating  working server calculator.
