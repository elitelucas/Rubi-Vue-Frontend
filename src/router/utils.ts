/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
export const TOKEN_KEY = '@rubi.ai/token'
export const TOKEN_TYPE = '@rubi.ai/token_type'
export const MYUUID = '@rubi.ai/uuid'
export const MYUSERNAME = '@rubi.ai/username'
export const MYEMAIL = '@rubi.ai/email'
export const isUserLoggedIn = () => !!(localStorage.getItem(TOKEN_KEY) && localStorage.getItem(TOKEN_TYPE))