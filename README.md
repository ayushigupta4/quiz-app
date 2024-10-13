***Online Quiz Application***

A simple RESTful API for managing and taking quizzes, built with Node.js, Express.js, and Sequelize. This project allows users to register, log in, create quizzes, and take quizzes while receiving feedback on their performance.

# Features
1. User authentication (registration and login)
2. Quiz management (create, view, take quizzes)
3. Calculate user scores based on quiz responses
4. Use of JWT for secure authentication

## Technologies Used
1. Node.js
2. Express.js
3. Sequelize
4. MySQL
5. jsonwebtoken

### Installation

1. Clone the repository:

    git clone https://github.com/ayushigupta4/quiz-app.git
    cd quiz-app

2. Install the required packages:

    npm install

3. Set up MySQL database

4. Create a .env.local file in the root of the project directory and add the following variables: 

    DBNAME=name_of_your_database
    USER=your_database_username
    PASSWORD=your_database_password
    HOST=your_database_host
    DIALECT=mysql
    PORT=your_database_port

Replace the placeholders with your actual database.

5. Start the server:

    node app.js

6. The server will be running at: 

    http://localhost:3000

#### API Endpoints

1. User Authentication: 
    
    ➤ *Register User*
        • POST /auth/register
        • Request Body: 
            {
                "username": "testuser",
                "password": "testpassword"
            }
        • Response: A success message.

    ➤ *Login User*
        • POST /auth/login
        • Request Body:
            {
                "username": "testuser",
                "password": "testpassword"
            }
        •Response: JWT token and success message.
    
2. Quiz Management

    ➤ *Create Quiz*
        • POST /quizzes
        • Request Body: 
            {
                "title": "Quiz Title",
                "questions": [
                    {
                        "text": "Question? A. Option1, B. Option2, C. Option3, D. Option4",
                        "correctAnswer": 3
                    },
                    {
                        "text": "Question? A. Option1, B. Option2, C. Option3, D. Option4",
                        "correctAnswer": 2
                    },
                    {
                        "text": "Question? A. Option1, B. Option2, C. Option3, D. Option4",
                        "correctAnswer": 1
                    }
                ]
            }
        • Response: Created quiz object and success message.

    ➤ *Get All Quizzes*
        • GET /quizzes
        • Response: Array of all quizzes.

    ➤ *Get Quiz Details*
        • GET /quizzes/quiz
        • Query Parameters:
            quizId: The ID of the quiz you want ro retrieve details for. 
        • Response: Details of the specified quiz.

    ➤ *Take Quiz*
        • POST /quizzes/quiz/submit
        • Request Body:
            {
                "answer": [
                    1,
                    2,
                    3
                ]
            }
        • Response: Score and total questions.


##### Usage
After starting the server, you can test the API endpoints using tools like Postman. Make sure to include the JWT token in the Authorization header for protected routes.