
const defaultData = {
  current: 'home', //second field: editing on or off
  tags: [['react', 'on'],['redux','on'],['d3', 'on'],['jquery', 'on'],['node','on'],['express','on'],['wordpress', 'on']],
  projects: [
    {
      title: "BoldPointStudio.com",
      image: "./images/portfolio/boldpoint.jpg",
      description: "Responsive single page website for Boldpoint Studio, a design and marketing firm based in Toronto. Website built from scratch using only jQuery.",
      tags: ['jquery'],
      link: "http://www.boldpointstudio.com",
      github: ""
    },
    {
      title: "Recipe Box",
      image: "./images/portfolio/recipe.jpg",
      description: "An editable recipe box created with React, Redux and Material Design. Add and edit recipes, with functionality to quickly add and delete ingredients one by one.",
      tags: ['react','redux'],
      link: "http://stevebanton.com/recipe-box",
      github: "https://github.com/SteveGBanton/recipe-box"
    },
    {
      title: "Animated Link Graph: All Countries Sharing A Border",
      image: "./images/portfolio/force-directed.jpg",
      description: "A D3.js force directed graph of states that share a land or water border. WARNING: Slow on most mobile devices.",
      tags: ['d3'],
      link: "http://stevebanton.com/force-graph-countries",
      github: "https://github.com/SteveGBanton/force-graph-countries"
    },
    {
      title: "Instant Markdown Previewer",
      image: "./images/portfolio/markdown.jpg",
      description: "An instant markdown previewer built in React.js. When you type markdown, the formatted version is instantly printed to the screen.",
      tags: ['react'],
      link: "http://stevebanton.com/markdown-previewer",
      github: "https://github.com/SteveGBanton/markdown-previewer"
    },
    {
      title: "Responsive Simon Game",
      image: "./images/portfolio/simon.jpg",
      description: "A Simon game built using jQuery and the AudioContext API for button tones.",
      tags: ['jquery'],
      link: "http://stevebanton.com/simon-responsive",
      github: "https://github.com/SteveGBanton/simon-responsive"
    },
    {
      title: "Wikipedia Search Page",
      image: "./images/portfolio/wikipedia.jpg",
      description: "A Wikipedia search page that uses the Wikipedia API to call search results before leaving the site.",
      tags: ['jquery'],
      link: "https://codepen.io/stevesacct/pen/OWdaGe",
      github: ""
    },
    {
      title: "Heatmap Graph: Global Land Surface Temperatures",
      image: "./images/portfolio/heatmap.jpg",
      description: "An reuasable, animated D3.js heatmap graph of monthly land surface temperature data graphed from 1753 - 2015, with data tooltip on hover.",
      tags: ['d3'],
      link: "http://stevebanton.com/heatmaps-global-temps",
      github: "https://github.com/SteveGBanton/heatmaps-global-temps"
    },
    {
      title: "Dynamic Bar Graph: US GDP By Quarter",
      image: "./images/portfolio/bar-graph.jpg",
      description: "An reuasable, animated D3.js bar graph of the US GDP by quarter since 1947, with data tooltip on hover.",
      tags: ['d3'],
      link: "http://stevebanton.com/bar-graph-us-gdp",
      github: "https://github.com/SteveGBanton/bar-graph-us-gdp"
    },
    {
      title: "Pomodoro Clock",
      image: "./images/portfolio/pomodoro.jpg",
      description: "A simple pomodoro clock that allows you to add minutes on the fly.",
      tags: ['jquery'],
      link: "https://codepen.io/stevesacct/pen/jBqyOz",
      github: ""
    },
    {
      title: "Dynamic Scatterplot Graph: Doping in Pro Cycling",
      image: "./images/portfolio/scatter.jpg",
      description: "An reuasable, animated D3.js scatterplot graph of doping in pro cycling, with tooltip on hover.",
      tags: ['d3'],
      link: "http://stevebanton.com/scatterplot-cycling",
      github: "https://github.com/SteveGBanton/scatterplot-cycling"
    },
    {
      title: "Reusable Vector Map: Meteorite Landings Mapped",
      image: "./images/portfolio/world-map.jpg",
      description: "A visualization of all meteorites that have every been recorded, mapped to their landing location. Zoomable map & tooltip on hover shows extra data about each meteorite.",
      tags: ['d3'],
      link: "http://stevebanton.com/world-plot",
      github: "https://github.com/SteveGBanton/world-plot"
    },
    {
      title: "Timestamp Service",
      image: "./images/portfolio/timestamp.jpg",
      description: "A simple timestamp service that returns a time in unix and standard format when either are supplied.",
      tags: ['node', 'express'],
      link: "https://simple-timestamp-service.herokuapp.com/",
      github: "https://github.com/SteveGBanton/timestamp-service"
    },
    {
      title: "AlbionLandscaping.Net",
      image: "./images/portfolio/albion.jpg",
      description: "A website for a local landscaping business in the Toronto area, built using Wordpress.",
      tags: ['wordpress'],
      link: "http://AlbionLandscaping.Net",
      github: ""
    }
  ],
  menuDisplayed: false
}

export default defaultData;
