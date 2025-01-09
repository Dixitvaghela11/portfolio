import laravel from '../app/assets/svg/skills/laravel.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import shopify from '../app/assets/svg/skills/shopify.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import github from '../app/assets/svg/skills/github.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nodeJs from '../app/assets/svg/skills/nodejs.svg';
import php from '../app/assets/svg/skills/php.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';
import netlify from '../app/assets/svg/skills/netlify.svg';
import powerbi from '../app/assets/svg/skills/microsoft-power-bi.svg';
import canva from '../app/assets/svg/skills/canva.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'laravel':
      return laravel;
    case 'bootstrap':
      return bootstrap;
    case 'shopify':
      return shopify;
    case 'c#':
      return csharp;
    case 'css':
      return css;
    case 'dotnet':
      return dotnet;
    case 'dotnet core':
      return dotnetcore;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'html':
      return html;
    case 'javascript':
      return javascript;
    case 'kotlin':
      return kotlin;
    case 'microsoft office':
      return microsoftoffice;
    case 'mysql':
      return mysql;
    case 'node js':
      return nodeJs;
    case 'php':
      return php;
    case 'postgresql':
      return postgresql;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'wordpress':
      return wordpress;
    case 'netlify':
      return netlify;
    case 'power bi':
      return powerbi;
    case 'canva':
      return canva;
    default:
      return null;
  }
};