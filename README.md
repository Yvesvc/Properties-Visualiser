# PropertiesVisualiser

![screenshot propertiesvisualiser](https://user-images.githubusercontent.com/24839014/91589509-16f98080-e95a-11ea-917c-4a5dd2aafbe8.PNG)


The best way to determine the value of a property is by evaluating comparable properties. For this, you need a lot of data, which property websites don't offer because they only showcase the current real estate market. That's why I created a script (including unit and integration tests) which stores data of properties as found on a property website, creating a database of current and past properties and their characteristics. Next, I made a tool that visualises these properties and allows you to filter based on offer type and price.

This project could be further improved by also storing the images of the properties as shown on property websites using, for example, AWS S3. I decided to not do this because the cost of storing these images can quickly add up.



Stack/techniques used: Python, HTML/CSS/JavaScript/JQuery, Django, AWS RDS, MongoDB, Google Maps & Gmail Api, AJAX, Heroku, Pytest
