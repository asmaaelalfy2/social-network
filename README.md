# social-network

install server dependencies
npm install
Install client dependencies
cd client
npm install
Run both Express & React from root
npm run dev
Build for production
cd client
npm run build
Test production before deploy
After running a build in the client point_up_2, cd into the root of the project.
And run...

NODE_ENV=production node server.js
Check in browser on http://localhost:5000/

Deploy to Heroku
If you followed the sensible advice above and included config/default.json and config/production.json in your .gitignore file, then pushing to Heroku will omit your config files from the push.
However, Heroku needs these files for a successful build.
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create a local only branch, lets call it production.

git checkout -b production
We can use this branch to deploy from, with our config files.

Add the config file...

git add -f config/production.json
This will track the file in git on this branch only. DON'T PUSH THE PRODUCTION BRANCH TO GITHUB

Commit...

git commit -m 'ready to deploy'
Create your Heroku project

heroku create
And push the local production branch to the remote heroku master branch.

git push heroku production:master
Now Heroku will have the config it needs to build the project.

Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.

After deployment you can delete the production branch if you like.

git checkout master
git branch -D production
Or you can leave it to merge and push updates from another branch.
Make any changes you need on your master branch and merge those into your production branch.

git checkout production
git merge master
Once merged you can push to heroku as above and your site will rebuild and be updated.

