# BETTER BUILDS

This React website is for users to submit and review PC builds that will be posted to PostgreSQL database. Users can also edit their reviews and vote on the reviews of other users with Express backend, running on a NodeJS environment.

## Contributors

Nick DeRis - github.com/dericholas
Nick Kwiatkowski - github.com/nickkwiat
Robert Le - github.com/fuzzyphantasm
Corey Pierce - github.com/cornfrog
Marlon Sanchez - github.com/MarlonS419 

## Installation

```shell
git clone https://github.com/MarlonS419/better-builds
```

## Development

open directory
```shell
cd better-builds
```
install dependencies
```shell
yarn install
```
create the database
```shell
createdb better-builds_development 
```
create tables
```shell
yarn migrate:latest
```
start the program
```shell
yarn start
```
then Navigate to <localhost:3000/> in your browser

## How to Contribute

Bug reports and pull requests are welcome on GitHub at https://github.com/MarlonS419/better-builds. Use the fork-and-branch workflow to contribute.