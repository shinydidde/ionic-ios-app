
# Horse Valley Resort App

## Overview

The Horse Valley Resort app provides a convenient way for users to explore and engage with the services and amenities offered by the Horse Valley Resort. Whether users are planning a vacation, booking a stay, or seeking information about the resort's facilities, the app serves as a comprehensive guide.

## App Structure and Functionality

### 1. Homepage (Rooms Listing):
- Display a list of rooms available at the Horse Valley Resort.
- Each room listing includes basic information like name, price, and a thumbnail image.
- Users can click on a room to view its details.

### 2. Room Detail Page:
- Displays comprehensive details of a selected room, including images, videos, description, price, and amenities.
- Allows users to view multiple images and videos of the room.
- Includes a button to navigate back to the homepage.
- Includes a button to navigate to the add review page.

### 3. Review Page:
- Allows users to add reviews for specific rooms.
- Includes a form where users can enter their comments and upload a picture as part of their review.

### 4. Contact Us Page:
- Provides information about the resort, including an about us section.
- Includes a contact form where users can send inquiries or messages to the resort.
- Displays customer reviews and testimonials, including user comments and pictures.
- Shows the resort's address and contact details.

## Technology Stack

### Frontend: Ionic Framework with React and TypeScript
- **Ionic Framework**: A UI toolkit for building cross-platform mobile, web, and desktop applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing and other features.

### Data: JSON Files
- A JSON file is used to store and manage app details such as room listings, room details, reviews, etc.

## App Icon

- Added the app Icon.

## Plugins

### Splashscreen
- Customizes the splash screen that appears when the app is launched.

### Toast
- Shows customizable toast messages to users.

### Camera
- Provides access to the device's camera for capturing images/videos.

### Clipboard
- Interacts with the device's clipboard for copying/pasting text.

## App Flow

1. **Homepage**:
   - Displays a list of available rooms.
   
2. **Room Details Page**:
   - Provides detailed information about a selected room.
   
3. **Add Review Page**:
   - Allows users to add reviews for specific rooms.
   
4. **Contact Us Page**:
   - Provides information about the resort and allows users to contact the resort.


## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/shinydidde/ionic-ios-app
   ```
2. Navigate to the folder:

   ```bash
   cd ionic-ios-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ionic serve
   ```
5. Build the application:

   ```bash
   ionic build
   ```
6. Adding ios build and opening Xcode:

   ```bash
   npx cap add ios
   ionic cap sync ios
   npx cap open ios
   ```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for any enhancements or bug fixes.
