# stock-quote-server

I build this web app ([LIVE SITE HERE](https://stock-quote-server.justinmemphis.repl.co/)) to display the last twenty years of closing prices from a stock on a graph, for the stock symbol provided.  Also includes a stock symbol lookup function.  Data pulled from [Alpha Vantage](https://www.alphavantage.co/).

This is the back-end repo of this project.  Most of the code is in [the other repo for the front-end](https://github.com/Justinmemphis/stock-quote-webpage).  This repo is mainly just the API call.

## How It's Made:
Front-end is React, back-end is Node, visualization is using D3, API connection is using axios and RapidAPI as an intermediary, using React-Router for moving between "pages".  The stock symbol lookup is a flat CSV filed from NASDAQ and the function just searches that local file for the text provided.

## Optimizations:
Using axios gave me better error handling than fetch.

## Lessons Learned:
I enjoyed building a full stack web application.  Working through connecting everything and deploying the project was very useful experience.

## Future Changes:
- Move deployment to AWS EC2 (replit has changed how sites are hosted).
- Move stock symbol lookup to an API call (so can keep up-to-date)
- Integrate lookup using either stock symbol or description of stock (maybe a picker to choose between multiple options)
