import React from 'react';
import Scroll from 'react-scroll';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';

const Element = Scroll.Element;

const projects = [
  {
    title: 'Nova',
    image: 'images/portfolio/nova.jpg',
    description: 'Design thinking tool library & realtime collaboration tool.',
    tags: ['meteor', 'react', 'mongodb'],
    link: 'https://www.novatools.org/',
  },
  {
    title: 'LearnMap',
    image: 'images/portfolio/learn-map-2.gif',
    description: 'Project Manager for a remote app project. LearnMap is website allowing experts to post the best learning resources for any topic and allowing learners to track their progress. Currently hosted at Heroku and mLab.',
    tags: ['meteor', 'react', 'mongodb'],
    link: 'https://learnmap.herokuapp.com/',
    github: 'https://github.com/SteveGBanton/Voyage2-Bears-13',
  },
  {
    title: 'Yago URL Shortener',
    image: 'images/portfolio/yago.jpg',
    description: 'A simple URL shortener service with OAuth. Built using Meteor, React & MongoDB, hosted at Heroku and mLab.',
    tags: ['meteor', 'react', 'mongodb'],
    link: 'https://yagosite.herokuapp.com/',
    github: 'https://github.com/SteveGBanton/yago',
  },
  {
    title: 'Animated Link Graph: All Countries Sharing A Border',
    image: 'images/portfolio/force-directed.jpg',
    description: 'A D3.js force directed graph of states that share a land or water border.',
    tags: ['d3'],
    link: 'http://stevebanton.com/force-graph-countries',
    github: 'https://github.com/SteveGBanton/force-graph-countries',
  },
  {
    title: 'Recipe Box',
    image: 'images/portfolio/recipe.jpg',
    description: 'An editable recipe box created with React, Redux and Material Design. Add and edit recipes, with functionality to quickly add and delete ingredients one by one.',
    tags: ['react', 'redux'],
    link: 'http://stevebanton.com/recipe-box',
    github: 'https://github.com/SteveGBanton/recipe-box',
  },
  {
    title: 'Instant Markdown Previewer',
    image: 'images/portfolio/markdown.jpg',
    description: 'An instant markdown previewer built in React.js. When you type markdown, the formatted version is instantly printed to the screen.',
    tags: ['react'],
    link: 'http://stevebanton.com/markdown-previewer',
    github: 'https://github.com/SteveGBanton/markdown-previewer',
  },
  {
    title: 'Responsive Simon Game',
    image: 'images/portfolio/simon.jpg',
    description: 'A Simon game built using jQuery and the AudioContext API for button tones.',
    tags: ['jquery'],
    link: 'http://stevebanton.com/simon-responsive',
    github: 'https://github.com/SteveGBanton/simon-responsive',
  },
  {
    title: 'Heatmap Graph: Global Land Surface Temperatures',
    image: 'images/portfolio/heatmap.jpg',
    description: 'An reuasable, animated D3.js heatmap graph of monthly land surface temperature data graphed from 1753 - 2015, with data tooltip on hover.',
    tags: ['d3'],
    link: 'http://stevebanton.com/heatmaps-global-temps',
    github: 'https://github.com/SteveGBanton/heatmaps-global-temps',
  },
  {
    title: 'Dynamic Bar Graph: US GDP By Quarter',
    image: 'images/portfolio/bar-graph.jpg',
    description: 'An reuasable, animated D3.js bar graph of the US GDP by quarter since 1947, with data tooltip on hover.',
    tags: ['d3'],
    link: 'http://stevebanton.com/bar-graph-us-gdp',
    github: 'https://github.com/SteveGBanton/bar-graph-us-gdp',
  },
  {
    title: 'Dynamic Scatterplot Graph: Doping in Pro Cycling',
    image: 'images/portfolio/scatter.jpg',
    description: 'An reuasable, animated D3.js scatterplot graph of doping in pro cycling, with tooltip on hover.',
    tags: ['d3'],
    link: 'http://stevebanton.com/scatterplot-cycling',
    github: 'https://github.com/SteveGBanton/scatterplot-cycling',
  },
  {
    title: 'Vector Map: Meteorite Landings Mapped',
    image: 'images/portfolio/world-map.jpg',
    description: 'A visualization of all meteorites that have every been recorded, mapped to their landing location. Zoomable map & tooltip on hover shows extra data about each meteorite.',
    tags: ['d3'],
    link: 'http://stevebanton.com/world-plot',
    github: 'https://github.com/SteveGBanton/world-plot',
  },
  {
    title: 'StallionMotorSports.Com',
    image: 'images/portfolio/stallion.jpg',
    description: 'A website for a Top Sportsman drag racing team specializing in Pontiacs.',
    tags: ['wordpress'],
    link: 'http://StallionMotorSports.com',
    github: '',
  },
  {
    title: 'BoldPointStudio.com',
    image: 'images/portfolio/boldpoint.jpg',
    description: 'Responsive single page website for Boldpoint Studio, a design and marketing firm based in Toronto. Website built from scratch using jQuery.',
    tags: ['jquery'],
    link: 'http://www.boldpointstudio.com',
    github: '',
  },
];

const styles = {
  card: {
    width: 375,
    margin: 30,
  },
  media: {
    height: 200,
  },
  chip: {
    margin: 4,
  },
};

const Portfolio = () => (
  <div id="portfolio" className="app-padding">
    <Element name="portfolio" className="element" />
    <h1>Portfolio</h1>
    <div id="portfolio-items">
      {projects.map(item => (
        <Card style={styles.card} key={item.image}>
          {(item.link) ?
            <a href={item.link} target="new">
              <CardMedia
                image={`../../${item.image}`}
                style={styles.media}
                title={item.title}
                className="darken"
              />
            </a>
            :
            <CardMedia
              image={`../../${item.image}`}
              style={styles.media}
              title={item.title}
              className="darken"
            />
          }
          <CardContent>
            <Typography type="headline" component="h2">
              {item.title}
            </Typography>
            <Typography component="p">
              {item.description}
            </Typography>
            <div style={{ display: 'flex', flexFlow: 'row nowrap', width: '100%', justifyContent: 'center', marginTop: 15 }}>
              {item.tags.map(tag => (
                <Chip
                  key={`${item.title}-${tag}`}
                  style={{ margin: 4 }}
                  label={tag}
                />
              ),
              )}
            </div>
          </CardContent>
          <CardActions>
            {(item.github) ?
              <a href={item.github} target="new">
                <Button dense color="primary">
                    Github
                </Button>
              </a>
              : ''
            }
            {(item.link) ?
              <a href={item.link} target="new">
                <Button dense color="primary">
                  View Project
                </Button>
              </a>
              :
              <Button dense color="primary">
                - In Progress -
              </Button>
            }

          </CardActions>
        </Card>
      ))}

    </div>

  </div>
);

export default Portfolio;
