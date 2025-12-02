# Raycast extension for e-mail.love
 Generate and manage your e-mail.love aliases from your keyboard.

# How to Run Raycast Extension Locally

This guide explains how to install and run the Raycast extension.

## Prerequisites

Before you begin, ensure you have the following installed on your macOS:
1.  **Raycast App**: The launcher itself.
2.  **Node.js & npm**: Required to run the extension code (Version 16 or higher is recommended).
3.  **Git**: To clone the repository.

---

## Step-by-Step Guide

### 1. Clone the Repository
Open your **Terminal** and run the following command to download the code to your local machine:

```bash
git clone [https://github.com/loveuemail/raycast_extension.git](https://github.com/loveuemail/raycast_extension.git)
```

### 2. Navigate to the Directory
Enter the folder you just downloaded:

```bash
cd raycast_extension
```

### 3. Install Dependencies
Install the required libraries to make the extension work:
```
npm install
```

### 4. Run in Development Mode
Start the local server. This connects the code on your computer directly to the Raycast app.
```
npm run dev
```
**Success Indicators:**

* The terminal will show a message like `Watching for changes...`.
* The Raycast window may open automatically.

### 5. Configure in Raycast

* Open Raycast (Press ⌥ + Space).

* Search for e-mail.love (the name of the extension).

* Look for the command labeled (Developer) or with a green lightning icon (⚡️) next to it.

* Configure API: Enter your Access Token.
