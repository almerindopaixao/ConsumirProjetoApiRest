import React, { useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Seu sobrenome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="idade">
          Idade:
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Sua idade"
          />
        </label>

        <label htmlFor="peso">
          Peso:
          <input
            id="peso"
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Seu peso"
          />
        </label>

        <label htmlFor="altura">
          Altura:
          <input
            id="altura"
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Sua altura"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
