import { Recipe, Category } from './definitions';
import data from '../json/data.json';

export async function getCategories() {
  return data.categories;
}

export async function getRecipes() {
  return data.recipes;
}

export async function getRemoteUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}
