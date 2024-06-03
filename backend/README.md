### .env.example

Create a `.env` file at the root of your project with the following content:

```plaintext
# Server Configuration
SERVER_URL=http://localhost
SERVER_PORT=5443

# Client Configuration
FRONT_URL=https://localhost
FRONT_PORT=3000

# SSL Key and Certificate
SSL_PRIVATE_KEY_PATH=./key.pem
SSL_CERTIFICATE_PATH=./cert.pem

# MongoDB
mongoDB_username=db_user
mongoDB_password=db_password
mongoDB_URI_FIRST_PART=mongodb+srv://
mongoDB_DB=db_name
mongoDB_CLUSTER=@your_cluster/
mongoDB_OPTIONS01=?retryWrites=true&w=majority&appName=Cluster0

# Email configuration (for nodemailer)
SMTP_HOST=smtp.example.com
SMTP_HOST_PORT=587
EMAIL_USERNAME=test@example.com
EMAIL_PASSWORD=email_password

# JWT Configuration
JWT_SECRET=your_jwt_secret

# Node Environment
NODE_ENV=development
word

# JWT Configuration
JWT_SECRET=your_jwt_secret

# Node Environment
NODE_ENV=development

```

### Full Documentation

#### Project Overview

This project is a full-stack web application for managing email marketing campaigns. It includes features for user registration and login, creating and managing email campaigns, managing contacts and contact groups, and tracking campaign statistics.

#### Table of Contents

1. [Installation and Setup](#installation-and-setup)
2. [API Documentation](#api-documentation)
   - [User Routes](#user-routes)
   - [Campaign Routes](#campaign-routes)
   - [Template Routes](#template-routes)
   - [Contact Routes](#contact-routes)
   - [Contact Group Routes](#contact-group-routes)
   - [Tracking Routes](#tracking-routes)
3. [Frontend Components](#frontend-components)
4. [Backend Models](#backend-models)
5. [Redux Setup](#redux-setup)
6. [Directory Structure](#directory-structure)

### Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/akalofas/005-Email-Campaign-App.git
   ```
2. **Install server dependencies**:

   ```bash
   cd backend
   npm install
   ```
3. **Setup environment variables**:

   - Create a `.env` file in the backend folder of your project and copy the contents of `.env.example` into it.
   - Update the variables with your actual configuration.
4. **Install client dependencies**:

   ```bash
   npm install
   ```
5. **Start the development server**:

   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend client:
     ```bash
     npm start
     ```

### API Documentation

#### User Routes

**Base URL: `/api/users`**

- **POST `/register`**

  - Description: Register a new user and send a verification email.
  - Request Body:
    ```json
    {
    	"email": "user@example.com",
    	"password": "password123"
    }
    ```
  - Response:
    ```json
    {
    	"message": "User registered, verification email sent"
    }
    ```
- **POST `/login`**

  - Description: Login a user.
  - Request Body:
    ```json
    {
    	"email": "user@example.com",
    	"password": "password123"
    }
    ```
  - Response:
    ```json
    {
    	"message": "Login successful",
    	"userId": "user_id"
    }
    ```
- **POST `/logout`**

  - Description: Logout a user.
  - Response:
    ```json
    {
    	"message": "Logout successful"
    }
    ```
- **GET `/verify-email`**

  - Description: Verify a user's email.
  - Query Parameters:
    - `token`: Verification token sent to the user's email.
  - Response:
    ```json
    {
    	"message": "Email verified successfully"
    }
    ```

#### Campaign Routes

**Base URL: `/api/campaigns`**

- **POST `/`**

  - Description: Create a new campaign.
  - Request Body:
    ```json
    {
    	"userId": "user_id",
    	"name": "Campaign Name",
    	"subject": "Email Subject",
    	"content": "Email Content",
    	"selectedContacts": ["contact_id1", "contact_id2"],
    	"selectedContactGroups": ["group_id1", "group_id2"],
    	"scheduleDate": "2023-01-01T00:00:00.000Z"
    }
    ```
  - Response:
    ```json
    {
    	"campaign": {
    		"id": "campaign_id",
    		"name": "Campaign Name",
    		"subject": "Email Subject",
    		"content": "Email Content"
    	}
    }
    ```
- **GET `/`**

  - Description: Get all campaigns for the authenticated user.
  - Response:
    ```json
    {
    	"campaigns": [
    		{
    			"id": "campaign_id",
    			"name": "Campaign Name",
    			"subject": "Email Subject",
    			"content": "Email Content"
    		}
    	]
    }
    ```
- **POST `/duplicate`**

  - Description: Duplicate an existing campaign.
  - Request Body:
    ```json
    {
    	"id": "campaign_id"
    }
    ```
  - Response:
    ```json
    {
    	"campaign": {
    		"id": "new_campaign_id",
    		"name": "Campaign Name (Copy)",
    		"subject": "Email Subject",
    		"content": "Email Content"
    	}
    }
    ```
- **DELETE `/:id`**

  - Description: Delete a campaign.
  - Response:
    ```json
    {
    	"message": "Campaign deleted"
    }
    ```

#### Template Routes

**Base URL: `/api/templates`**

- **POST `/`**

  - Description: Create a new template.
  - Request Body:
    ```json
    {
    	"name": "Template Name",
    	"content": "Template Content",
    	"userId": "user_id"
    }
    ```
  - Response:
    ```json
    {
    	"template": {
    		"id": "template_id",
    		"name": "Template Name",
    		"content": "Template Content"
    	}
    }
    ```
- **GET `/`**

  - Description: Get all templates for the authenticated user.
  - Response:
    ```json
    {
    	"templates": [
    		{
    			"id": "template_id",
    			"name": "Template Name",
    			"content": "Template Content"
    		}
    	]
    }
    ```

#### Contact Routes

**Base URL: `/api/contacts`**

- **POST `/`**

  - Description: Create a new contact.
  - Request Body:
    ```json
    {
    	"name": "Contact Name",
    	"email": "contact@example.com",
    	"userId": "user_id"
    }
    ```
  - Response:
    ```json
    {
    	"contact": {
    		"id": "contact_id",
    		"name": "Contact Name",
    		"email": "contact@example.com"
    	}
    }
    ```
- **GET `/`**

  - Description: Get all contacts for the authenticated user.
  - Response:
    ```json
    {
    	"contacts": [
    		{
    			"id": "contact_id",
    			"name": "Contact Name",
    			"email": "contact@example.com"
    		}
    	]
    }
    ```
- **PUT `/:contactId`**

  - Description: Update a contact.
  - Request Body:
    ```json
    {
    	"name": "Updated Contact Name",
    	"email": "updated_contact@example.com"
    }
    ```
  - Response:
    ```json
    {
    	"contact": {
    		"id": "contact_id",
    		"name": "Updated Contact Name",
    		"email": "updated_contact@example.com"
    	}
    }
    ```
- **DELETE `/:contactId`**

  - Description: Delete a contact.
  - Response:
    ```json
    {
    	"message": "Contact deleted"
    }
    ```

#### Contact Group Routes

**Base URL: `/api/contact-groups`**

- **POST `/`**

  - Description: Create a new contact group.
  - Request Body:
    ```json
    {
    	"name": "Group Name",
    	"contacts": ["contact_id1", "contact_id2"],
    	"userId": "user_id"
    }
    ```
  - Response:
    ```json
    {
    	"contactGroup": {
    		"id": "group_id",
    		"name": "Group Name",
    		"contacts": ["contact_id1", "contact_id2"]
    	}
    }
    ```
- **GET `/`**

  - Description: Get all contact groups for the authenticated user.
  - Response:
    ```json
    {
    	"contactGroups": [
    		{
    			"id": "group_id",
    			"name": "Group Name",
    			"contacts": ["contact_id1", "contact_id2"]
    		}
    	]
    }
    ```
- **PUT `/:groupId`**

  - Description: Update a contact group.
  - Request Body:
    ```json
    {
    	"name": "Updated Group Name",
    	"contacts": ["contact_id1", "contact_id2"]
    }
    ```
  - Response:
    ```json
    {
    	"contactGroup": {
    		"id": "group_id",
    		"name": "Updated Group Name",
    		"contacts": ["contact_id1", "contact_id2"]
    	}
    }
    ```
- **DELETE `/:groupId`**

  - Description: Delete a contact group.
  - Response:
    ```json
    {
    	"message": "Contact group deleted"
    }
    ```

#### Tracking Routes

**Base URL: `/api/tracking`**

- **GET `/track-open/:campaignId/:contactId`**

  - Description: Track email open events.
  - Response: Returns a 1x1 transparent pixel.
- **GET `/track-click/:campaignId/:contactId`**

  - Description: Track email click events.
  - Response: Redirects to a specified URL.

### Frontend Components

The frontend components follow CSS modularization and the Container-Presentational Pattern. Each component consists of three files:

1. The presentational component file (JS or JSX).
2. The CSS module file (CSS).
3. The container component file (JS or JSX).

#### RegisterForm

- **Presentational Component:** `src/components/RegisterForm.js`
- **CSS Module:** `src/styles/RegisterForm.module.css`
- **Container Component:** `src/containers/RegisterFormContainer.js`

#### LoginForm

- **Presentational Component:** `src/components/LoginForm.js`
- **CSS Module:** `src/styles/LoginForm.module.css`
- **Container Component:** `src/containers/LoginFormContainer.js`

#### Dashboard

- **Presentational Component:** `src/components/Dashboard.js`
- **CSS Module:** `src/styles/Dashboard.module.css`
- **Container Component:** `src/containers/DashboardContainer.js`

#### EditContactModal

- **Presentational Component:** `src/components/EditContactModal.js`
- **CSS Module:** `src/styles/EditContactModal.module.css`
- **Container Component:** `src/containers/EditContactModalContainer.js`

#### DraggableList

- **Presentational Component:** `src/components/DraggableList.js`
- **CSS Module:** `src/styles/DraggableList.module.css`
- **Container Component:** `src/containers/DraggableListContainer.js`

#### CreateCampaignModal

- **Presentational Component:** `src/components/CreateCampaignModal.js`
- **CSS Module:** `src/styles/CreateCampaignModal.module.css`
- **Container Component:** `src/containers/CreateCampaignModalContainer.js`

#### SelectTemplateStep

- **Presentational Component:** `src/components/SelectTemplateStep.js`
- **CSS Module:** `src/styles/SelectTemplateStep.module.css`
- **Container Component:** `src/containers/SelectTemplateStepContainer.js`

#### EditEmailStep

- **Presentational Component:** `src/components/EditEmailStep.js`
- **CSS Module:** `src/styles/EditEmailStep.module.css`
- **Container Component:** This component is used directly in `CreateCampaignModal`.

#### ContactList

- **Presentational Component:** `src/components/ContactList.js`
- **CSS Module:** `src/styles/ContactList.module.css`
- **Container Component:** `src/containers/ContactListContainer.js`

#### ContactGroupList

- **Presentational Component:** `src/components/ContactGroupList.js`
- **CSS Module:** `src/styles/ContactGroupList.module.css`
- **Container Component:** `src/containers/ContactGroupListContainer.js`

#### CampaignList

- **Presentational Component:** `src/components/CampaignList.js`
- **CSS Module:** `src/styles/CampaignList.module.css`
- **Container Component:** `src/containers/CampaignListContainer.js`

#### CampaignStatistics

- **Presentational Component:** `src/components/CampaignStatistics.js`
- **CSS Module:** `src/styles/CampaignStatistics.module.css`
- **Container Component:** `src/containers/CampaignStatisticsContainer.js`

#### Summary

Each component in the frontend is organized to maintain a clean separation between logic and presentation. The container components handle the state and logic, while the presentational components focus on rendering the UI. This approach makes the code more maintainable and reusable. The CSS modules ensure that styles are scoped locally to the component, avoiding conflicts and making it easier to manage styles.

### Backend MongoDB Models

- **User**
- **Template**
- **Campaign**
- **Contact**
- **ContactGroup**

### Redux Setup

#### Features

- **contact**
  - `contactSlice.js`
  - `contactActions/createContact.js`
  - `contactActions/deleteContact.js`
  - `contactActions/fetchContacts.js`
  - `contactActions/updateContactService.js`
- **template**
  - `templateSlice.js`
  - `templateActions/createTemplate.js`
  - `templateActions/fetchTemplates.js`
- **user**
  - `userSlice.js`
  - `userActions/logoutUser.js`
  - `userActions/loginUser.js`
  - `userActions/registerUser.js`
  - `userActions/verifyEmail.js`
- **contactGroup**
  - `contactGroupSlice.js`
  - `contactGroupActions/createContactGroup.js`
  - `contactGroupActions/deleteContactGroup.js`
  - `contactGroupActions/fetchContactGroups.js`
  - `contactGroupActions/updateContactGroup.js`
- **campaign**
  - `campaignSlice.js`
  - `campaignActions/createCampaign.js`
  - `campaignActions/deleteCampaign.js`
  - `campaignActions/duplicateCampaign.js`
  - `campaignActions/fetchCampaigns.js`
  - `campaignActions/fetchCampaignStatisticsService.js`

#### Services

- **contact**
  - `createContactService.js`
  - `deleteContactService.js`
  - `fetchContactsService.js`
  - `updateContactService.js`
- **template**
  - `fetchTemplates.js`
  - `createTemplate.js`
- **contactGroup**
  - `fetchContactGroupsService.js`
  - `deleteContactGroupService.js`
  - `createContactGroupService.js`
  - `updateContactGroupService.js`
- **users**
  - `logout.js`
  - `register.js`
  - `login.js`
  - `verifyEmailService.js`
- **campaign**
  - `createCampaignService.js`
  - `duplicateCampaignService.js`
  - `fetchCampaignsService.js`
  - `deleteCampaignService.js`
  - `fetchCampaignStatisticsService.js`

### Directory Structure

```plaintext
.
├── README.md
├── backend
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── README.md
│   ├── cert.pem
│   ├── key.pem
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── controllers
│   │   ├── campaignController
│   │   │   ├── createCampaign.js
│   │   │   ├── deleteCampaign.js
│   │   │   ├── duplicateCampaign.js
│   │   │   ├── getCampaignStatistics.js
│   │   │   └── getCampaigns.js
│   │   ├── contactController
│   │   │   ├── createContact.js
│   │   │   ├── deleteContact.js
│   │   │   ├── getContacts.js
│   │   │   └── updateContact.js
│   │   ├── contactGroupController
│   │   │   ├── createContactGroup.js
│   │   │   ├── deleteContactGroup.js
│   │   │   ├── getContactGroups.js
│   │   │   └── updateContactGroup.js
│   │   ├── templateController
│   │   │   ├── createTemplate.js
│   │   │   └── getTemplates.js
│   │   ├── trackingController
│   │   │   ├── trackClick.js
│   │   │   └── trackOpen.js
│   │   └── userController
│   │       ├── login.js
│   │       ├── logout.js
│   │       ├── register.js
│   │       └── verifyEmail.js
│   ├── models
│   │   ├── Campaign.js
│   │   ├── Contact.js
│   │   ├── ContactGroup.js
│   │   ├── Template.js
│   │   └── User.js
│   ├── routes
│   │   ├── campaigns
│   │   │   ├── campaignRoutes.js
│   │   │   └── trackingRoutes.js
│   │   ├── contacts
│   │   │   ├── contactGroupRoutes.js
│   │   │   └── contactRoutes.js
│   │   ├── template
│   │   │   └── templateRoutes.js
│   │   ├── users
│   │   │   └── userRoutes.js
│   │   └── index.js
│   ├── utils
│   │   ├── dbConnect.js
│   │   └── emailSender.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── setupTests.js
│   ├── app
│   │   └── store.js
│   ├── components
│   │   ├── CampaignList.js
│   │   ├── CampaignStatistics.js
│   │   ├── ContactGroupList.js
│   │   ├── ContactList.js
│   │   ├── CreateCampaignModal.js
│   │   ├── Dashboard.js
│   │   ├── DraggableList.js
│   │   ├── EditContactModal.js
│   │   ├── EditEmailStep.js
│   │   ├── LoginForm.js
│   │   ├── RegisterForm.js
│   │   └── SelectTemplateStep.js
│   ├── containers
│   │   ├── CampaignListContainer.js
│   │   ├── CampaignStatisticsContainer.js
│   │   ├── ContactGroupListContainer.js
│   │   ├── ContactListContainer.js
│   │   ├── CreateCampaignModalContainer.js
│   │   ├── DashboardContainer.js
│   │   ├── DraggableListContainer.js
│   │   ├── EditContactModalContainer.js
│   │   ├── LoginFormContainer.js
│   │   └── RegisterFormContainer.js
│   ├── features
│   │   ├── campaign
│   │   │   ├── campaignActions
│   │   │   │   ├── createCampaign.js
│   │   │   │   ├── deleteCampaign.js
│   │   │   │   ├── duplicateCampaign.js
│   │   │   │   ├── fetchCampaigns.js
│   │   │   │   └── fetchCampaignStatisticsService.js
│   │   │   └── campaignSlice.js
│   │   ├── contact
│   │   │   ├── contactActions
│   │   │   │   ├── createContact.js
│   │   │   │   ├── deleteContact.js
│   │   │   │   ├── fetchContacts.js
│   │   │   │   └── updateContactService.js
│   │   │   └── contactSlice.js
│   │   ├── contactGroup
│   │   │   ├── contactGroupActions
│   │   │   │   ├── createContactGroup.js
│   │   │   │   ├── deleteContactGroup.js
│   │   │   │   ├── fetchContactGroups.js
│   │   │   │   └── updateContactGroup.js
│   │   │   └── contactGroupSlice.js
│   │   ├── template
│   │   │   ├── templateActions
│   │   │   │   ├── createTemplate.js
│   │   │   │   └── fetchTemplates.js
│   │   │   └── templateSlice.js
│   │   ├── user
│   │   │   ├── userActions
│   │   │   │   ├── loginUser.js
│   │   │   │   ├── logoutUser.js
│   │   │   │   ├── registerUser.js
│   │   │   │   └── verifyEmail.js
│   │   │   └── userSlice.js
│   ├── services
│   │   ├── campaign
│   │   │   ├── createCampaignService.js
│   │   │   ├── deleteCampaignService.js
│   │   │   ├── duplicateCampaignService.js
│   │   │   ├── fetchCampaignsService.js
│   │   │   └── fetchCampaignStatisticsService.js
│   │   ├── contact
│   │   │   ├── createContactService.js
│   │   │   ├── deleteContactService.js
│   │   │   ├── fetchContactsService.js
│   │   │   └── updateContactService.js
│   │   ├── contactGroup
│   │   │   ├── createContactGroupService.js
│   │   │   ├── deleteContactGroupService.js
│   │   │   ├── fetchContactGroupsService.js
│   │   │   └── updateContactGroupService.js
│   │   ├── template
│   │   │   ├── fetchTemplates.js
│   │   │   └── createTemplate.js
│   │   └── users
│   │       ├── login.js
│   │       ├── logout.js
│   │       ├── register.js
│   │       └── verifyEmailService.js
│   ├── styles
│   │   ├── CampaignList.module.css
│   │   ├── CampaignStatistics.module.css
│   │   ├── ContactGroupList.module.css
│   │   ├── ContactList.module.css
│   │   ├── CreateCampaignModal.module.css
│   │   ├── Dashboard.module.css
│   │   ├── DraggableList.module.css
│   │   ├── EditContactModal.module.css
│   │   ├── EditEmailStep.module.css
│   │   ├── LoginForm.module.css
│   │   └── RegisterForm.module.css

```

### Conclusion

This documentation covers the installation and setup process, API routes, frontend components, backend models, and Redux setup for the email campaign application. Use this documentation to guide you through the development, testing, and deployment of the application.

If you need further assistance or additional features, please feel free to ask!
