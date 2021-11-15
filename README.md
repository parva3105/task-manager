# task-manager

A REST - Task Manager API on which we can perform CRUD Application .

It uses MongoDB to save your DATA.

It's production link is : `https://taskmanager-first.herokuapp.com/`.

To Use this , You can install POSTMAN which is used for API Testing Purpose. 
Here's a link to download Postman application :https://www.postman.com/downloads/


**To run this on Postman , you need to create several requests .**
![image](https://user-images.githubusercontent.com/65123773/141778787-a1fdad38-1a95-4b0e-9a77-8e9693b46b85.png)

You would have to use `https://taskmanager-first.herokuapp.com/` in the URL Section of your request in Postman.
 
Following are the diff requests you can use :-

  • To Perform Operations on User
  
    1. https://taskmanager-first.herokuapp.com/users to Create a User. (POST)
    2. https://taskmanager-first.herokuapp.com/users/login to login with your credentials. (GET) 
    3. https://taskmanager-first.herokuapp.com/users/logout to logout. (POST)
    
    *-> These are applicable after a User logs in.*
    
    4. https://taskmanager-first.herokuapp.com/users/me to look at your profile.(GET)
    5. https://taskmanager-first.herokuapp.com/users/me to update your user profile. (PATCH)
    6. https://taskmanager-first.herokuapp.com/users/me to delete your user profile. (DELETE)
    7. https://taskmanager-first.herokuapp.com/users/me/avatar to upload your avatar. (POST)
    8. https://taskmanager-first.herokuapp.com/users/me/avatar to delete your avatar. (DELETE)
  • To perform operations on Tasks after login.
  
    1. https://taskmanager-first.herokuapp.com/tasks to create a task (POST)
    2. https://taskmanager-first.herokuapp.com/tasks to read all the tasks (GET)
    3. https://taskmanager-first.herokuapp.com/tasks/:id to update a task with its ID (PATCH)
    4. https://taskmanager-first.herokuapp.com/tasks/:id to delete a task with its ID (DELETE)
    
    
    
To locally run this on your computer :

-> Use `git clone https://github.com/parva3105/task-manager.git` to get a copy of this code.

-> Change directory in either powershell or terminal using `cd task-manager` .

-> Install the following node dependencies -
        
          1. npm i @sendgrid/mail
          2. npm i mongoose
          3. npm i express
          4. npm i sharp 
          5. npm i multer
          6. npm i validator 
          7. npm i bcrypt
          8. npm i jsonwebtoken
          
-> Genrate your own API token from `https://sendgrid.com/`

-> Create a config folder and create Enviorment Variables 

-> Install Robo3t from `https://robomongo.org/` to locally test your data.

-> use `npm run dev` to locally start the server .

-> Open postman and create requests as mentioned above.