# Marketplace App

## Features
##### 1. Show list of banners
##### 2. Show list of categories
##### 3. Show list of products (infinite scroll)

## How To Install
- clone the repository `git clone https://github.com/ddikodroid/marketplace-app.git`
- install all dependecies `npm install` or `yarn` *i use `yarn` so you better use `yarn` too
- set `BASE_URL` on `.env` file
- for iOS, you need to do pod install `cd ios && pod install && cd ..` and some extra configuration ✌️

## How To Run The Project
### Android
- `npx react-native run-android`
### iOS
- `npx react-native run-ios`

### P.S
Still facing `VirtualizedList: You have a large list that is slow to update...` on AllProductScreen