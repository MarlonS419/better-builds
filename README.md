# BETTER BUILDS
This React website is for users to submit and review PC builds that will be posted to PostgreSQL database. Users can also edit their reviews and vote on the reviews of other users with Express backend, running on a NodeJS environment.
## Contributors: 
Nick DeRis - github.com/dericholas
Nick Kwiatkowski - github.com/nickkwiat
Robert Le - github.com/fuzzyphantasm
Corey Pierce - github.com/cornfrog
Marlon Sanchez - github.com/MarlonS419 
## Installation
```
git clone https://github.com/MarlonS419/better-builds
```
then Navigate to <localhost:3000/> in your browser
## Development
```
# opens directory
cd better-builds
# installs dependencies
yarn install
# to create the database
createdb better-builds_development 
# to create tables
yarn migrate:latest
# starts the program
yarn start
```
## TODO
* Create build index page
* Create build and user show page
* Develop 'builds' form
* Develop reviews form
* Develop reviews rating system to allow one vote per user
## How to Contribute
Bug reports and pull requests are welcome on GitHub at https://github.com/MarlonS419/better-builds. Use the fork-and-branch workflow to contribute.