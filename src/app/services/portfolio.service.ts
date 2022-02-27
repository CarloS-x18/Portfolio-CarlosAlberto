import { Injectable } from '@angular/core';
import { Project, Skill } from '../interfaces/porfolio.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  themeDark: boolean = true;

  projects: Project[] = [
    {
      name: 'RickAndMortyWiki',
      description: 'Brinda todo un glosario de personajes de la serie Rick and Morty los cuales pueden ser buscados en la misma web.',
      repository_URL: 'https://github.com/CarloS-x18/RickAndMortyWikiApp',
      demo_URL: 'https://rick-and-morty-wiki-app.netlify.app/'
    },
    {
      name: 'WeatherApp',
      description: 'Devuelve el clima de la ciudad indicada o ubicación actual consumiendo una API.',
      repository_URL: 'https://github.com/CarloS-x18/weatherApp',
      demo_URL: 'https://weatherapp-angular.netlify.app/'
    },
    {
      name: 'TodoApp',
      description: 'Gestor de tareas que permite agregarlas y borrarlas, junto con la coleccion de  tareas completadas.',
      repository_URL: 'https://github.com/CarloS-x18/todoApp',
      demo_URL: 'https://appangular-todo.netlify.app/'
    }
  ]

  skills: Skill[] = [
    {
      technology: 'html',
      img_URL: './assets/icons/skills/html5.svg'
    },
    {
      technology: 'css',
      img_URL: './assets/icons/skills/css3.svg'
    },
    {
      technology: 'sass',
      img_URL: './assets/icons/skills/sass.svg'
    },
    {
      technology: 'bootstrap',
      img_URL: './assets/icons/skills/bootstrap.svg'
    },
    {
      technology: 'javascript',
      img_URL: './assets/icons/skills/javascript.svg'
    },
    {
      technology: 'typescript',
      img_URL: './assets/icons/skills/typescript.svg'
    },
    {
      technology: 'angular',
      img_URL: './assets/icons/skills/angular.svg'
    },
    {
      technology: 'nodejs',
      img_URL: './assets/icons/skills/node-js.svg'
    },
    {
      technology: 'webpack',
      img_URL: './assets/icons/skills/webpack.svg'
    },
    {
      technology: 'mongodb',
      img_URL: './assets/icons/skills/mongodb.svg'
    },
    {
      technology: 'postman',
      img_URL: './assets/icons/skills/postman.svg'
    },
    {
      technology: 'git',
      img_URL: './assets/icons/skills/git.svg'
    },
    {
      technology: 'github',
      img_URL: './assets/icons/skills/github.svg'
    },
    {
      technology: 'netlify',
      img_URL: './assets/icons/skills/netlify.svg'
    },
  ];

  constructor() { }
}
