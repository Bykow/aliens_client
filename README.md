#GITHUB ALIENS
This is a project realized for the TWEB course of the HEIG-VD. The goal is very simple: display an ordered list of the most popular GitHub contributors that are __hireable__ !

The website is looking great thanks to a [Creative Tim Template](https://www.creative-tim.com/).

The purpose of this small project is to get familiar with web design, this website gets its data from an [_agent_](https://github.com/Bykow/aliens_agent) crawling through the [GitHub v3 API](https://developer.github.com/v3/).
That agent runs thanks to [Heroku](https://www.heroku.com) and has a task scheduled every hour to push a text file containing the result of its work. 

The website is hosted thanks to GitHub Pages and can be found [here](https://bykow.github.io/aliens_client/).

##Client
This repo is for the client, it uses basic HTLM/CSS to display the website. Of course the content is added through a JS script (aliens.js)
I also used some Ajax injections to get queries and variables.