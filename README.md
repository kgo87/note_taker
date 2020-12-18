# Note Taker [![MIT license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://lbesson.mit-license.org/)

## Table of Contents
1. [ Description ](#desc)
2. [ Task ](#task)
3. [ Link to Heroku deployment ](#link)
4. [ Structure ](#structure)
5. [ Finished product ](#final)


## 1. Description<a name="desc"></a>
This repository contains code for the application that allows user to view add, save, and delete notes that are being stored in the database.  

## 2. Task<a name="task"></a>
Task is to build a test-driven application that takes in information about employees and dynamically generates an HTML webpage that displays summaries for each person.
This application is designed to allow user to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file. A db.json file on the backend is used to store and retrieve notes using the fs module.




The following routes have been created:
GET /notes - Returns the notes.html file.
GET * - Returns the index.html file
GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
POST /api/notes - Receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete.


## 3. Link to Heroku deployment <a name="link"></a>
The project is deployed on Heroku and available for view using this link:
https://kgo87.github.io/portfolio_profile/ 

## 4. Structure<a name="structure"></a>
The following routes have been created:
* GET /notes - Returns the notes.html file.
* GET * - Returns the index.html file
* GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
* POST /api/notes - Receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete.
The screenshot below show __________.

![Screenshot](./media/employee.png)
![Screenshot](./media/engineer.png)


## 5. Finished product<a name="final"></a>
The developed *.html* file is located in the root of this folder: [Link](./output/team.html).

Here are the screenshots of how the page looks like for 3 and 5 team memebers:
![Screenshot](./media/team5.png)
![Screenshot](./media/team3.png)