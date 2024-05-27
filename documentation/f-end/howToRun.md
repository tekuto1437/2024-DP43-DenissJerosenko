````markdown
# Running a Next.js Application

This guide will walk you through the steps to run a Next.js application on your local machine. Additionally, it will cover how to set up environment variables using an `.env` file, including configuration for a development environment and integrating PayPal.

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- Node.js and npm (Node Package Manager)

## Step 1: Navigate to the Project Directory

Open a terminal or command prompt and navigate to the directory of your Next.js project:

```bash
cd f-end
```

Replace `<project_directory>` with the path to your Next.js project directory.

## Step 2: Install Dependencies

Install the project dependencies using npm. Run the following command:

```bash
npm install
```

## Step 3: Create an `.env` File

Create a new file named `.env` in the root directory of your project. Add the following environment variables to the file:

```plaintext
NEXT_PUBLIC_DEV_API_URL="http://127.0.0.1:8000"
NEXT_PUBLIC_DEV_IMAGE_HOSTNAME="127.0.0.1"
PROTOCOL="http"

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID="Your Public key"
```

Replace `"Your Public key"` with your actual PayPal client ID.

[How to set up Paypal Sandbox](https://www.youtube.com/watch?v=yqTWcayeIdI)

## Step 4: Run the Application

Once you've set up the environment variables, you can now run your Next.js application. Use the following command:

```bash
npm run build
npm run start
```

This command starts the development server, and you should see output indicating that the server is running.

## Step 5: Access Your Application

Open a web browser and navigate to the following URL:

```
http://localhost:3000
```

You should see your Next.js application running locally. Any changes you make to your code will be automatically reflected in the browser.

That's it! You've successfully set up and run your Next.js application locally, including configuring environment variables and integrating PayPal.
````
