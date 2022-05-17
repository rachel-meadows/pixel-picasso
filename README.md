# Pixel Picasso

## Origins and Future Plans

This project started life as a one-day hackathon, where I worked with four other students to plan and build a working MVP in less than 24 hours.

I have since cloned the project to this repo and made some adjustments, such as:
- Adding the ability to use a 'shading' brush with cumulative opacity
- Ability to clear the canvas
- Ability to resize the canvas

Most of these improvements have been adapted from [my existing Etch a Sketch project](https://github.com/rachel-meadows/etch-a-sketch). In the future I would like to add more features, such as:
- Ability to 'fork' or remix an image from the gallery
- Ability to edit or delete an image
- Testing using Jest and React Testing Library
- Deployment to Heroku

## Using this project

I plan to deploy this project to a hosting service soon.

In the meantime, you can run it locally using these commands:

```
git clone https://github.com/rachel-meadows/pixel-picasso
cd pixel-picasso
npm install # to install dependencies
npm run knex migrate:latest # to create the database
npm run knex seed:run # to insert the seed data
npm run dev # to start the dev server
```

The server will then be running on [http://localhost:3000](http://localhost:3000).
