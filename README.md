# Altimetrik Game Finder App



## Game Finder Features

Connected to RAWG.io API. 

-Fake login screen (no register yet), with front-end e-mail verification (with regular expression) and back-end json-server (with json-server-auth as middleware). 

-Main page displays a list of the most rated games. 

-Search for games, results filtered by rating (>0), sorted by ratings count.

-Check for a game detailed information by clicking its card. 

-Mobile, tablet and desktop responsiveness. 



## Starting testing login server

Requirements:

Node.js ([download link](https://nodejs.org/en/download/))



1. Download the code. 

2. Open Game Finder/server folder, and run `start.bat`.  Terminal alternative: `npm start` (within the server folder)

3. The server will start at port 3000. This is required in order for the code to work. If not, please close any other applications that are using port 3000 and restart the server.

   

#### Available users for testing:

`E-mail: furrutia@altimetrik.com`

`Password: test`



## To do

##### HTML:

- Header logo links to home page
- Add favicons

##### CSS:

- CSS cards from flex to grid
- Search bar pseudo classes
- CSS selected text to green

##### JS:

- Search bar suggestions
- Consider infinite scrolling (now limited to 12 results in main view)
- Derivate function responsibilities as much as possible
- Make new releases functionality (sort by release date from /games)
- Fetch catch error display
- Register functionality in login page

- Consider class components reformat

