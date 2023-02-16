### v. 1.0.18 (December 2, 2022)
- Profile: Changed the profile picture to preview list type
- Profile: Modified the input placements and removed the role dropdown
- Changed the APIs used for the login, logout and change password
- Profile: Applied the change profile picture API
- Profile: Applied the disable conditions for the update profile picture button
- Profile: Adjusted the profile picture dimensions
- Profile: Fixed the update profile

### v. 1.0.17 (December 1, 2022)
- Profile: Applied the change password API
- Profile: Applied the get user API
- Profile: Applied the audit trail API
- Summary Page: Refactored the components for parent-child structure

### v. 1.0.16 (November 30, 2022)
- Audit Trail: Applied the audit trail for the user activies for the Clients, Accounts, Terms, sidebar and top nav components/pages
- Audit Trail: Applied the audit trail for the user activies for the Transactions and Miscellaneous, transaction types, client types, organizations, states, cities components/pages
- Clients: Changed the order for the phone number
- Transactions: Fixed the setting of the transaction type in the update modal
- Added the maxlength to the textarea inputs based on the DB table columns

### v. 1.0.15 (November 29, 2022)
- Modified chart in Dashboard
- Make Month chart load default.
- Modified date to string
- Router: Applied the middleware to all pages
- Applied the access token to all requests
- WIP: Clients: Audit trail for clicks and search

### v. 1.0.14 (November 28, 2022)
- Users: Fixed the sort and filter parameters
- Users: Added the created at column to the user list
- Users: Fixed the stats for the active records
- Users: Applied the export API
- Clients: Fixed the resetting of the client type, organization, state and city inputs after adding new data
- Add Sample chart in Dashboard

### v. 1.0.13 (November 25, 2022)
- Audit Trail: Transferred the pagination to the upper right section
- Audit Trail: Applied the stats API
- Roles: Applied the get API
- WIP: Users: Applied the add/edit API
- Roles: Applied the add/edit API
- Roles: Fixed the passing/setting of the permissions data
- Roles: Refactored the action buttons to the list data component
- Roles: Applied the export API

### v. 1.0.12 (November 24, 2022)
- Miscellaneous: Applied the edit/delete APIs for the city and state
- Miscellaneous: Applied the delete APIs for the client type and organization
- Transferred the pagination to the upper right section
- Clients: Added the tag input to the add/edit modals
- Clients: Changed the flow for the usage of the edit data modal for parent-child structure
- Audit Trail: Applied the get/export APIs
- Users: Applied the get API
- WIP: Users: Applied the edit API
- Clients: Fixed the add organization, state and city modals for the edit data modal

### v. 1.0.11 (November 23, 2022)
- Terms: Fixed the add/edit
- Terms: Applied the delete API
- Transactions: Applied the get/add/update/delete APIs
- Transactions: Applied the export API
- Transactions: Applied the get previous transaction API
- Miscellaneous: Fixed the reloading of data after adding the client type, organization, city and state
- Miscellaneous: Applied the API for deleting the transaction type
- Miscellaneous: Applied the edit API for the client type and organization

### v. 1.0.10 (November 22, 2022)
- Accounts: Refactored the action buttons to the list data component
- Accounts: Applied the export API
- Accounts: Fixed the editing of accounts
- Accounts: Changed the flow for the usage of the edit data modal for parent-child structure
- Miscellaneous: Applied the get/add APIs for the Transaction Types, Organizations, States and Cities
- Terms: Refactored the action buttons to the list data component
- Terms: Applied the get API
- WIP: Terms: Applied the add API

### v. 1.0.9 (November 21, 2022)
- Clients: Fixed the export issue
- Accounts: Applied the API for adding the accounts
- Accounts: Applied the API for showing the total account records
- Clients: Fixed the getting of client type data after adding a new record

### v. 1.0.8 (November 18, 2022)
- Clients and Accounts: Scroll to top when changing the page number
- Clients: Applied the delete API
- Adjusted the z-index of sticky table cells
- Clients: Add/edit: Added the change events for setting the ID and label values of the form data
- Clients: Refactored the action buttons to the list data component
- Clients: Applied the export API
- Clients: Set the export_to parameter to empty string on regular search/page change
- Applied the API for adding client types

### v. 1.0.7 (November 17, 2022)
- Clients and Accounts: Used the page size options from the .env instead
- Clients: Enabled the filter for the dropdown options
- WIP: Clients: Applied the get, update client APIs

### v. 1.0.6 (November 16, 2022)
- Clients: Adjusted the notes column width
- Accounts: Applied the API for getting the Accounts and added the custom pagination
- Accounts: Added the status color conditions
- Clients: Added the per page parameter for the get data functions (client types, organization, states, cities)
- Accounts: Add/edit: Changed the default form data to null

### v. 1.0.5 (November 15, 2022)
- Clients: Fixed the disable conditions for the next buttons
- Clients: Displayed the statistics
- Clients: Fixed the per page change event
- Clients: Added the other columns to the listing, filter and sort
- Clients: Fixed the format of the statistics (bold and comma separated)
- Clients: Set the ID to asc as default sort
- Clients: Added the wildcard subfilter checkbox

### v. 1.0.4 (November 14, 2022)
- Clients: Applied the API for adding clients
- Clients: Changed the flow for pagination, added the custom pagination

### v. 1.0.3 (November 11, 2022)
- Clients: Applied the sort parameters
- Clients: Set the data to empty when no results are found
- Clients: Add/edit: Set the default form data to null

### v. 1.0.2 (November 9, 2022)
- Clients: Applied the search parameters and pagination
- Clients: Added the filter for all columns

### v. 1.0.1 (November 8, 2022)
- Added the axios package
- Applied the API for getting the clients

### v. 1.0.0 (October 10, 2022 - November 7, 2022)
- Initial Commit