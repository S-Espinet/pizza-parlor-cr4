# Pizza\_Parlor

#### By _**S-Espinet**_

#### _Simple Javascript webpage that lets a user choose toppings and a size of pizza and see the cost._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Tests
Describe: Pizza()

Test1: "It should return a Pizza object with toppings and size properties."  
Code:   
```const myPizza = new Pizza(["pepperoni", "olives"], "small")```   
Expected Output: Pizza { toppings: ["pepperoni", "olives"], size: "small" }

Test2: "It should return the cost of a small pizza."  
Code:   
```const myPizza = new Pizza(["pepperoni", "olives"], "small")``` 
```myPizza.pizzaCost();```  
Expected Output: 12

Test3: "It should return cost of a pizza."  
Code:  
```const myPizza = new Pizza(["pepperoni", "olives"], "medium")``` 
```myPizza.pizzaCost();```  
Expected Output: 16

Test4: "It should return an error message if no toppings are selected."  
Code:   
```const myPizza = new Pizza([], "small")```   
```myPizza.pizzaCost();```  
Expected Output: "Please select at least one option."

## Description

_This is a webpage that allows users choose toppings and a size of pizza and then see the cost of that pizza. This webpage also illustrates my learning progression in web development._

## GitHub Pages Link

* _https://s-espinet.github.io/pizza-parlor-cr4/_

## Setup/Installation Requirements

* _navigate to github.com/S-Espinet in browser_
* _select repository (pizza-parlor-cr4)_
* _click `Code` button and select desired security protocol_
* _run git clone in terminal into desired directory_
* _navigate to top level of directory in terminal -or- in your GUI_
* _type "open index.html" into your terminal, -or- double-click the index.html file in your GUI_
* _click in checkboxes to select toppings and choose a size for your pizza_
* _click the `Calculate Cost` button to see the cost of your pizza_

## Known Bugs

* _No known bugs at this time_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _S-Espinet_