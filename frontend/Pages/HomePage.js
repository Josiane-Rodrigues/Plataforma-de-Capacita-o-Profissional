import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo à Plataforma de Capacitação Profissional!</h1>
      <p>Aqui você pode encontrar cursos gratuitos, vagas de emprego e muito mais.</p>
      <div>
        <Link to="/courses">Explore Cursos</Link>
        <Link to="/jobs">Veja as Vagas</Link>
      </div>
    </div>
  );
};

export default HomePage;
