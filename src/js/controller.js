import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './Views/recipeView.js';
import resultView from './Views/resultView.js';
import SearchView from './Views/Searchview.js';
import paginationView from './Views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './Views/addRecipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';



// const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);

    if(!id) return
    recipeView.renderspinner()

    // 0) Update result view to mark search result
    resultView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks)

    // 1) Loading recipe
  await model.loadRecipe(id);

  // 2) Rendering recipe
  recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

const controlSearch = async function(){
  try{
    resultView.renderspinner()

    // 1) Get search query
    query = SearchView.getQuery();
    console.log(query)
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResult(query);

    // 3) Render results
    // console.log(model.state.search.results)
    // resultView.render(model.state.search.results)
    resultView.render(model.getSearchResultsPage())

    //4) Render initial pagination button
    paginationView.render(model.state.search)
    // paginationView.update(model.state.search)
  } catch (err){
    console.log(err)
  }
}

const controlPagination = function(goToPage){
  console.log(goToPage)
    //1) Render New results
    resultView.render(model.getSearchResultsPage(goToPage));

    //2) Render New pagination button
    paginationView.render(model.state.search);
    // console.log('Pagination Rendered')
}

const controlServings = function(newServings){
  // Update the servings (in state)
  model.updateServings(newServings)

  // Update the recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function (){
  // Add/remove bookmarks
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)

  // Update recipe view
  recipeView.update(model.state.recipe)

  // Render Bookmarks
  bookmarksView.render(model.state.bookmarks)
}

const controlBookmark = function(){
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe){
 try { 
  // Show loading spinner
  addRecipeView.renderspinner()

  // Upload the new recipe data
 await model.uploadRecipe(newRecipe);
 console.log(model.state.recipe)

//  Render recipe
  recipeView.render(model.state.recipe)

  // Success Message
  addRecipeView.renderMessage();

  // Render bookmark view
  bookmarksView.render(model.state.bookmarks);

  // Change id in the url
  window.history.pushState(null, '', `#${model.state.recipe.id}`)

  // close form window
  setTimeout(function(){
    addRecipeView.toggleWindow()
  }, MODAL_CLOSE_SEC * 1000)

} catch (err){
  console.error('🎆', err)
  addRecipeView.renderError(err.message)
}

}

const newFeature = function(){
  console.log('Welcome to the Application!')
}

const init = function(){
bookmarksView.addHandlerRender(controlBookmark)
recipeView.addHandlerrender(controlRecipes);
recipeView.addHandlerUpdateServings(controlServings);
recipeView.addHandlerBookmark(controlAddBookmark);
SearchView.addHandlerSearch(controlSearch);
paginationView.addHandlerClick(controlPagination);
addRecipeView.addHandlerUpload(controlAddRecipe)
newFeature();
};
init();