import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Table = props => (
  <table className="striped">
    <thead>
      <tr>
        <th>NOME</th>
        <th>CNPJ</th>
        <th>NOME FANTASIA</th>
        <th>ALTERAR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.nome}</td>
        <td>{props.cnpj}</td>
        <td>{props.fantasia}</td>
        <td>
          <Button
            color={'waves-effect waves-light btn amber darken-3'}
            name={'EDITAR'}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

Table.prototype = {
  nome: PropTypes.string.isRequired,
  cnpj: PropTypes.number,
  fantasia: PropTypes.string,
};

Table.defaultProps = {
  cnpj: null,
  fantasia: null,
};

export default Table;
