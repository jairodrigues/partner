import React, { Component } from 'react';
import { Breadcrums, Table, Button } from '../../components';

export default class Partners extends Component {
  render() {
    return (
      <div className="main">
        <Breadcrums color={'blue lighten-2'} current={'Home'} />
        <div className="row">
          <div className="col s6 offset-s10">
            <Button
              icon={'add'}
              name={'NOVO CONTATO'}
              color={'waves-effect waves-light btn amber darken-3'}
              src={'/partners/form'}
            />
          </div>
        </div>
        <div className="card">
          <Table nome={2323423423} cnpj={1234567890} fantasia={'Acesso'} />
        </div>
      </div>
    );
  }
}
