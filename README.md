# Lanceme Up Express / Nest Internship Program Task

## Document Management Platform Backend

==>This backend system is designed for a document management platform that allows users to upload HTML files, converts them to PDFs, and sends a confirmation email with the generated PDF attached.

## Prerequisites

1. Install nodejs: [Node.js](https://nodejs.org/en)

2. Nodemon setup  `npm install -g nodemon`

## Dependencies

`cors : "^2.8.5"`

`dotenv : "^16.3.1"`

`express : "^4.18.2"`

`fs : "^0.0.1-security"`

`html-pdf : "^3.0.1"`

`mongoose : "^8.0.3"`

`multer : "^1.4.5-lts.1`

`nodemailer : "^6.9.7"`

`path : "^0.12.7"`

## How to clone and Run the Project

1. Clone the repository:
`git clone https://github.com/kcanjan2020/Lanceme-Up-Express-Nest-Internship-Program-Task.git`

2. Navigate to the project directory:
`cd Lanceme-Up-Express-Nest-Internship-Program-Task`

3. Install dependencies: `npm install
`
4. Set up your environment variables:

    ==>Create a .env file in the root directory with the following content:

```js
PORT=8000
USER= your-email@gmail.com
PASS= your-email-password
```

  ==> Replace your-email@gmail.com, and your-email-password with your actual email address, and password.


5. Run the application: `npm run start`

    ==>The server will be running at `http://localhost:8000` by default.

6. API Endpoints


    ==>Upload an HTML file and provide an email address for confirmation using Postman:

    ==>Open Postman and create a new request with the method set to POST.

    ==>Set the request URL to `http://localhost:8000/htmltopdf` 
    
    ==>Select the Body tab, choose form-data, and add two fields:

      + htmlFile (Type: File) -> Upload your HTML file.
      + email (Type: Text) -> Enter the email address where you want to receive the confirmation.

    [Note : keys names [fields] must be `document` and `email` for htmlFile and Email adress respectively  ]

    ==> And then hit the API. You will received confirmatiom message ` "Your Html file is successfully converted to pdf. Please check your email for  Confirmation !"`
