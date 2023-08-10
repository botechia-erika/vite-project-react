import React from 'react';

import { CardVideo } from './components/CardVideo/CardVideo';
import { Header } from './components/Header/Header';
import GlobalStyle from './globals/globalStyle';
import './index.css';
export function App() {
  const imagemVideo =
    'https://e7.pngegg.com/pngimages/532/820/png-clipart-shovel-knight-gif-pixel-art-sprite-knight-game-maker.png';
  const card1 = {
    titulo: 'Título do vídeo',
    imagemDoVideo: imagemVideo,
    textoAlternativo: 'descrição da imagem',
  };

  return (
    <div>
      <GlobalStyle />
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              image1={imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
