# Alcoholic Drinks Available at the Cocoroco Bar

Created 11.01.18</br>
By _**Catherine Bradley**_</br>
Contact: _**catherinetybradley@gmail.com**_</br>

## Description
A menu for patrons to order drinks at the Cocoroco Bar.

| Patron Story |
|----|
| User is greeted by a splash page containing a list of all drinks available to order |
| User can click on the red "order" button and see remaining stock of drink decrease **currently not working** |
| in progress: Once User clicks order, User is greeted by a confirmation page asking for number of drinks and what table to deliver drinks |

| Admin Story |
|----|
| User can navigate from the splash page to an Admin section (manually enter /admin at this time) |
| In Admin section, User can add a new alcoholic beverage to be available to patrons |
| in progress: add authentication to access admin section |
| in progress: User can disable orders of a drink. Drink will still appear in list with disable button that says "out of stock" |
| in progress: User can edit an existing drink on list |
| in progress: User can delete an existing drink on list |

| Other User Stories |
|----|
| If User enters an invalid route in the URL, they are greeted by an Error404 page |
| in progress: ABV, Price, and Remaining amount for each drink will be color coded to reflect high, medium, and low value ranges |


## Setup/Installation Requirements

1. clone this repository
2. navigate to project root directory
3. type **npm install**
4. type **npm run start**
5. navigate to localhost:8080


<img src="src/assets/images/componentTree.png" alt="drawing" width="550"/>


## Technologies Used
* _ReactJS_
* _webpack-npm_
* _Bootstrap_
