import { Injectable } from '@angular/core';
import { Project, Skill, Data } from '../interfaces/porfolio.interfaces';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private usersDataCollection!: AngularFirestoreCollection<Data>;
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
    },
    {
      name: 'WikiSearchApp',
      description: 'Buscador de definiciones o palabras que retorna artículos de wikipedia como respuestas.',
      repository_URL: 'https://github.com/CarloS-x18/wikiSearchApp',
      demo_URL: 'https://search-wiki-app.netlify.app/'
    },
    {
      name: 'AuthFireApp',
      description: 'Autenticación integrada con Firebase, permite hacer registro con email y password e iniciar sesion con Google.',
      repository_URL: 'https://github.com/CarloS-x18/authFireApp',
      demo_URL: 'https://authfireapp.netlify.app/auth/login'
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

  constructor( private readonly afs: AngularFirestore ) {
    this.usersDataCollection = afs.collection<Data>('usersData');
  }

  onSaveData( userData: Data ) {
    return new Promise( async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...userData };
        const result = this.usersDataCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err)
      }
    });
  }

}
