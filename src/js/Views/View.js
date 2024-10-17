import icons from '../../img/icons.svg';
// import SearchView from './Searchview';

export default class View {
    _data;
    
    /**
     * Render the received object to the DOM
     * @param {object | object[]} data The data to be rendered (e.g recipe)
     * @param {boolean} [render=true]  If false create markup string instead of rendering to the DOM
     * @returns {undefined | String} A markup string is returned if render is false
     * @this {object} View instance
     * @author Owolabi Samuel
     * @todo Finish Implementation
     */
    render(data, render = true){
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        // console.log(markup)

        if(!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data){
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElement = Array.from(newDom.querySelectorAll('*'));
        const curElement = Array.from(this._parentElement.querySelectorAll('*'));
       

        newElement.forEach((newEl, i) => {
          const curEl = curElement[i];
        

          // Update changed TEXT
          if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
            curEl.textContent = newEl.textContent;
          }

          // Update changed ATTRIBITES
          if(!newEl.isEqualNode(curEl))
            Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
        })
    }

    _clear (){
        this._parentElement.innerHTML = '';
    }

    renderspinner() {
        const markup = `
              <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
      }

    renderError (message = this._errorMessage){
      const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    renderMessage (message = this._message){
      const markup = `
          <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

}