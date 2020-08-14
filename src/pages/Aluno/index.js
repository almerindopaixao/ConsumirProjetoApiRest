import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture } from './styled';
import Loading from '../../components/Loading';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);

        const Foto = get(data, 'Fotos[0].url', '');

        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
      } catch (err) {
        const status = get(err, 'response.status', 0);

        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = [];

    if (nome.length < 3 || nome.length > 255) {
      formErrors.push('Nome precisa ter entre 3 e 255 caractéres');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors.push('Sobrenome precisa ter entre 3 e 255 caractéres');
    }

    if (!isEmail(email)) {
      formErrors.push('E-mail Inválido');
    }

    if (!isInt(String(idade))) {
      formErrors.push('Idade Inválida');
    }

    if (!isFloat(String(peso))) {
      formErrors.push('Peso Inválido');
    }

    if (!isFloat(String(altura))) {
      formErrors.push('Altura Inválida');
    }

    if (formErrors.length > 0) {
      formErrors.map((error) => toast.error(error));
      return;
    }

    try {
      setIsLoading(true);
      if (id) {
        // Editadno
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso!');
      } else {
        // criando
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso!');
        history.push(`/aluno/${data[1].id}/edit`);
      }
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.lenght > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

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
