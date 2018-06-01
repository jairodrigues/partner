import React, { Component } from 'react';
import { Input, Button, Breadcrums } from '../../components';

export default class Form extends Component {
  render() {
    return (
      <div className="main">
        <Breadcrums
          color={'blue lighten-2'}
          src={'/partners'}
          last={'Home'}
          current={'Form'}
        />
        <form class="col s12">
          <div className="card">
            <div class="row">
              <Input icon={'user'} label={'Nome'} />
              <Input icon={'user'} label={'Nome Fantasia'} />
              <Input icon={'user'} label={'CNPJ'} />
            </div>
          </div>
          <div className="row">
            <div class="col s6 offset-s10">
              <Button
                icon={'save'}
                name={'SALVAR'}
                color={'waves-effect waves-light btn amber darken-3'}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
