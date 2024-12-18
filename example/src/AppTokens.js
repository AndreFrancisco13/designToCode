import React from 'react';
import Button from './stories/Button';

const HomePage = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo à Home Page com tokens</h1>
      <p>Este é um exemplo de página que utiliza o componente de botão.</p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button label="Primary" variant="primary" onClick={handleClick} />
        <Button label="Secondary" variant="secondary" onClick={handleClick} />
        <Button label="Success" variant="success" onClick={handleClick} />
        <Button label="Danger" variant="danger" onClick={handleClick} />
        <Button label="Warning" variant="warning" onClick={handleClick} />
        <Button label="Info" variant="info" onClick={handleClick} />
        <Button label="Disabled" variant="primary" disabled />
      </div>
    </div>
  );
};

export default HomePage;