# Game of Thrones App

# Team Members: Lindsay Farias, Yurik Garcia, James Haggerty, Brendan Kennedy, Anthony LoGrande  

### Overview

The purpose of this application was to provide a simple site for watchers of the Game of Thrones show to sift through the complex and tangled web of characters and families in the program. This site takes in data about hundreds of the Game of Thrones characters and displays their image and some key details about their lives on easy to read cards, so that viewers can stay up to date on who is doing what on this vast and complicated television show. In addition, it also contains information about the various houses and orders that can be found in Westeros, and has a fun mini game where you can pit two characters against each other in a duel to the death over the the Iron Throne! 

### Description

Below are some the key details of the site: 

1. Home Page: This is the starter page for anyone visiting the site. It contains a map of Westeros and plays the Game of Thrones theme song, with a button at the bottom which allows you to start and stop the music. 

2. Characters Page: This page will display a character card and a window below that contains the other members of their house, and their house name. The icons contained within are chips, and are explained below. In addition, on the right hand side of the page is the Right Side Toggle Menu, and more detail on this is given below. This page is governed by the Unified.js code. 

3. Houses Page: This page has the same functionality as the Characters Page. This page is governed by the Unified.js code. 

4. Orders Page: This page has the same functionality as the Characters and Houses Page. This page is governed by the Unified.js code. 

5. Character/House/Order Cards: These cards have a drop down functionality to display more information about the character/house/order selected at that time. If the drop down is selected, information about the character's royalty status (royal or commoner), House, and Order are displayed. If a house card is selected, the toggle will display all of the family members in that house located in the database. If an Order Card drop down is selected, it works similarly to the House card.

6. Chips: These are the icons that can be found in the box below the character card and within the Right Side Toggle Menu. These chips route to specific Character/House/Order cards. They provide the name and a small image of the Character/House/Order for the user to choose. 

7. Battle Page: This page lets the user select a member as their champion, and randomly selects an opponent for that champion to duel for the Iron Throne. On the left is the user's champion, who is selected from a drop down menu. On the right is the champion's opponent, who is selected via the click of a button, and is chosen randomly from the character list. The Battle Button in the middle is selected, and the two characters are then pitted together in mortal combat. 

8. Search Bar: located at the top of every page, it contains a search element where a user can type in a key phrase that they wish to look up on the site. In addition to the search function, there are buttons taking the user to whatever page they choose, as well as a toggle menu on the left side that also whatever page you wish to go to. 

9. Right Side Toggle Menu: This element opens up an accordion menu organized alphabetically containing the chips of whatever page you are currently on. If you are in the characters page, it will display the chips of the characters in their corresponding accordion drop down section. It will not display houses and orders in addition to characters, you must be on either houses or orders to see the chips for those two sections. 

### User Stories

1. As a user, I want to see the webpage's title as well as all of the website's tools (Homepage link, Houses, Orders, Characters, and a Search Bar) when I go to the homepage, so that I can access any of them from the navigation bar.

2. As a user, I want to be able to search for Houses' information using either a search bar or a list, so that when I select a house or search for one, I'm taken to the house's page with it's pertinent data.

3. As a user, I want to be able to search for Characters' information using either a search bar or a list, so that when hit enter or click on them I am provided with the character's pertinent information.

4. As a user, I want to be able to access information for each of the Orders in GoT, so that when I click on the Orders tab of the nav bar, I'm presented with a search bar that yields a card displaying information about the Order I searched for.

5. As a user, I want to hear music play when I arrive at the home screen or when I attempt to duel characters.

6. Quirky Feature: As a user, I want to be able to compare characters in battle using either a random character generation or a drop down list, so that when I "battle" 2 characters, one is declared the victor.

### Installation

To get the app running: 

1. Fork and clone the repo into your development space

2. Cd into the front sofi-front-end directory and run npm start to initiate the react app in your browser on local host 3000. 

3. To ensure that application is populated with information, ensure that the express server is up and running on local host 3001 by node starting index.js in the related project Game-Of-Thrones-Backend. 

4. From there, the site should be set to use, happy searching! 


### Related Repositories: 

Game-Of-Thrones-Backend [Link](https://github.com/LindsayFarias/Game-Of-Thrones-Backend.git)

### Road Map

If this project were to continue, the two areas that the team would to finish implementing the family tree page, which would list out a character's siblings, parents, grandparents, and children. In addition, the implementation of an add characters/houses/orders option would be great. It would operate like Wikipedia, where if a user wanted to add a new character/house/order, that request would have to go through a verification system to ensure that it was a legitimate request. 



