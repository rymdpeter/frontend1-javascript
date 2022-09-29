# Instructions for group assignment 3
The goal of this weeks assignment is to setup a repo where everyone has a solid base for developing their examination-projects. 

## Personal info
The subject of this exercise is your own personal information. The first Assignment is to discuss in groups what kind of information your comfortable sharing. Within the class and publicly.

Everyone that has answered the questions after running npm start has created a file in data/dev. Sit down and consider what kind of information you think should be included. The data you share will be the data you all have available.

## 1. Modify your personal info by parsing the JSON file from /data/dev and add info of your own

Fill your person-objects with whatever you can think of. The files can describe your personality, your skills, your opinions and preferences. The goal of the course is to introduce a wide array of skills that you will be expected to talk confidently about in your role as fullstack developer. 

```
const fs = require("fs")

const rawData = fs.readFileSync(__dirname + "data/dev/username.json")
const parsedInfo = JSON.parse(rawData)
...
parsedInfo.yourOwnProperty = yourOwnValue
```

## Start collecting samples of your work and think of ways to present them.
Please don't present anything this week. Plan for a solid distribution of your knowledge. 

This doesn't have to mean code. Comments, explanations, translations and innovative use of technology is the goal here. When you start working independatly you will have great use your collective experience and different perspectives.

Get in the habit of reviewing each other's code. Your personal projects will be graded by teachers, but reviewed by collegues. Hopefully you will all supply enough information so that I can pair you up with someone who is suited to understand the types of problems you're trying to solve.

## Stop thinking about graphical design, layout and CSS. Think about data-structures instead.
Anyone who tries to push css-rules will have their ability to follow written instructions affected.

## On wednesday, each group presents:

1. A page structure for personal presentations. An empty html-page that can work as a template is enough. 
2. What kind of data that would be useful for you to know about your fellow students. Use the json-file in your data/dev folder and present new information, or removal of anything you find inapproproiate.
3. Something fun. No one can make a living writing code if they don't enjoy it. 
4. Code that you don't understand or can't make work. Take your time, and present both the problem as well as the reason it's worth solving. Each group will have at least 30 minutes of the class' time. Everyone doesn't have to present a problem, but each group should be able to present an interesting case. If your group is stuck on point 3, a good problem qualifies as fun.

## Grading Criteria
For a passing grade, each groups accounts for all of their members to have an up and running dev environment by the end of the day.

