
import React from 'react'; // Importa a biblioteca React
import Button from './stories/Button'; // Importa o componente Button

// Define o componente HomePage
const HomePage = () => {
  // Função que será chamada quando um botão for clicado
  const handleClick = () => {
    alert('Botão clicado!'); // Exibe um alerta
  };

  // Retorna o JSX que será renderizado
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo à Home Page com tokens</h1> {/* Título da página */}
      <p>Este é um exemplo de página que utiliza o componente de botão.</p> {/* Descrição da página */}

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* Renderiza vários botões com diferentes variantes */}
        <Button label="Primary" variant="primary" onClick={handleClick} />
        <Button label="Secondary" variant="secondary" onClick={handleClick} />
        <Button label="Success" variant="success" onClick={handleClick} />
        <Button label="Danger" variant="danger" onClick={handleClick} />
        <Button label="Warning" variant="warning" onClick={handleClick} />
        <Button label="Info" variant="info" onClick={handleClick} />
        <Button label="Disabled" variant="primary" disabled /> {/* Botão desabilitado */}
      </div>
    </div>
  );
};

export default HomePage; // Exporta o componente HomePage como padrão




