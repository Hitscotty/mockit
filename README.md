<h1 align="center">
  <br>
  <a href="https://github.com/Hitscotty/mockit"><img src="https://raw.githubusercontent.com/Hitscotty/mockit/main/public/wordmark.svg" alt="MockIT Logo" width="400"></a>
  <br>
  MockIT <img src="https://raw.githubusercontent.com/Hitscotty/mockit/main/public/icon.svg" width="30">
  <br>
</h1>

<h4 align="center">An application that allows users to both conduct and participate in mock interviews.</h4> 

<p align="center">
  <a href="#this-project">This Project</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## This Project

MockIT transforms how mock interviews are held. This application connects the user to a live interviewer to practice interview questions created by the interviewer. Student users are able to search for an interview by the topic or company. 

A bright shade of blue and yellow were used as a color theme for this application, as the majority of the user base is students.
- ![#efb206](https://via.placeholder.com/15/efb206/000000?text=+) `#efb206`
- ![#00aed6](https://via.placeholder.com/15/00aed6/000000?text=+) `#00aed6`

By creating an interactive platform for students to conduct interviews, this project aims to encourage inclusivity in the educational environment.

## Development

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your terminal:

```bash
# Clone this repository
$ git clone https://github.com/Hitscotty/mockit.git 

# Go into the repository
$ cd mockit

# Install dependencies
$ npm install

# Start the development server
$ npm run build
$ npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

```bash
# First, build your app for production:
$ npm run build

# Then run the app in production mode:
$ npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```bash
$ cd ..
# create a new project, and pick a pre-configured host
$ npx create-remix@latest
$ cd my-new-remix-app
# remove the new project's app (not the old one!)
$ rm -rf app
# copy your app over
$ cp -R ../my-old-remix-app/app app
```

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [tailwindcss](https://tailwindcss.com/)
- [Remix Docs](https://remix.run/docs)

## License

MIT