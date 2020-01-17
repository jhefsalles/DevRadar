import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">User do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/39282384?s=460&v=4" alt="Jeferson Macedo"> </img>
              <div className="user-info">
                <strong>Jeferson Macedo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Entusiasta e apaixonado por tecnologia.</p>
            <a href="https://github.com/jhefsalles">Acessar perfil</a>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/39282384?s=460&v=4" alt="Jeferson Macedo"> </img>
              <div className="user-info">
                <strong>Jeferson Macedo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Entusiasta e apaixonado por tecnologia.</p>
            <a href="https://github.com/jhefsalles">Acessar perfil</a>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/39282384?s=460&v=4" alt="Jeferson Macedo"> </img>
              <div className="user-info">
                <strong>Jeferson Macedo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Entusiasta e apaixonado por tecnologia.</p>
            <a href="https://github.com/jhefsalles">Acessar perfil</a>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/39282384?s=460&v=4" alt="Jeferson Macedo"> </img>
              <div className="user-info">
                <strong>Jeferson Macedo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Entusiasta e apaixonado por tecnologia.</p>
            <a href="https://github.com/jhefsalles">Acessar perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
