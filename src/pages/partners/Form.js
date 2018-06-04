import React, { Component } from 'react';
import { Input, Button, Breadcrums } from '../../components';
import { connect } from 'react-redux';
import * as partnerActions from '../../store/partners/actions';
import { bindActionCreators } from 'redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias: '',
      cnpj: '',
      msg: 'ESTADO INICIAL',
    };
  }

  submit = async event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      alias: this.state.alias,
      cnpj: this.state.cnpj,
    };
    this.register(data);
  };

  register = async data => {
    const response = await this.props.registerPartner(data);
    if (response.error) {
      this.setState({
        msg: `Parceiro não cadastrado, ${response.payload.message}`,
      });
    } else {
      this.setState({ msg: 'Parceiro Cadastrado com sucesso' });
    }
  };

  handleInputChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div className="main">
        <Breadcrums
          color={'blue lighten-2'}
          src={'/partners'}
          last={'Home'}
          current={'Form'}
        />
        <form className="col s12" onSubmit={this.submit}>
          <div className="card">
            <div className="row">
              <Input
                icon={'user'}
                label={'Nome'}
                name={'name'}
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <Input
                icon={'user'}
                label={'CNPJ'}
                name={'cnpj'}
                value={this.state.cnpj}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div>{this.state.msg}</div>
          <div className="row">
            <div className="col s6 offset-s10">
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...partnerActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Form);
