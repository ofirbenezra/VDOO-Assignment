# VDOO Assignment

## Demo

Demo can be viewed here https://vdoo-assignment.web.app/

## Instructions

1. git clone https://github.com/ofirbenezra/VDOO-Assignment.git
2. run 'npm install'
3. run 'ng serve' and navigate to `http://localhost:4200/`

## Spotify authorization instructions

Since the app is using Temporary user authorization the token need to refreshed.
In order to get a new token paste this on a browser:
https://accounts.spotify.com/authorize?client_id=15df9c09fd4b4d8c8240f4a230e6a90a&redirect_uri=http://testsite.com/callback&scope=user-read-private%20user-read-email&response_type=token&state=123

and then copy the token from the address line:
http://testsite.com/callback#access_token=[this will the token will be]&token_type=Bearer&expires_in=3600&state=123
