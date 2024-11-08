import React from 'react'

class FormApp extends React.Component {
  

  constructor(args){
    super(args)
    this.state = {
      name: '',
      lastname: '',
      age: '',
      genero: '',
      destino: '',
      acept: false,
      message: ''
    }
  }

  convertir() {
    var valor = parseInt(this.state.valor, 0)
    if (this.state.lo == "cm" && this.state.ld == "m") {
      this.setState({
        message: valor / 100  
      })
    } else if (this.state.lo == "cm" && this.state.ld == "km") {
      this.setState({
        message: valor / 100000
      })
    } else if (this.state.lo == "m" && this.state.ld == "km") {
      this.setState({
        message: valor / 1000
      })
    } else if (this.state.lo == "m" && this.state.ld == "cm") {
      this.setState({
        message: valor * 100
      })
    } else if (this.state.lo == "km" && this.state.ld == "m") {
      this.setState({
        message: valor * 1000
      })
    } else if (this.state.lo == "km" && this.state.ld == "cm") {
      this.setState({
        message: valor * 100000
      })
    }
  }

  onChange(e){
 
    const { name, value } = e.target
    this.setState({ [name]: value })

    if(e.target.name === 'acept'){
      this.setState({
        [e.target.name]: e.target.checked
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  save(e){

    if(!this.validate()){
      return;
    }

    this.setState({
      message: 'Guardado correctamente'
    })
  }

  validate(){
    if(this.state.acept != true){
      this.setState({
        message: 'Acepte los terminos y condiciones'
      })

      return  false
    }

    return true
  }

  render(){
    return(
      <div>
      <div>
        <h1>Conversor de Longitud</h1>
        <label htmlFor="valor">Valor</label>
        <input
          onChange={this.onChange.bind(this)}
          value={this.state.value}
          name="valor" id="valor" type="number" placeholder="Valor" />

        <label htmlFor="lo" >Longitud de Origen</label>
        <select value={this.state.lo} id="lo" name="lo"
          onChange={this.onChange.bind(this)}>
          <option value="" >Seleccione un valor</option>
          <option value="cm" >cm</option>
          <option value="m" >m</option>
          <option value="km" >km</option>
        </select>

        <label htmlFor="ld" >Longitud de Destino</label>
        <select value={this.state.ld} id="ld" name="ld"
          onChange={this.onChange.bind(this)}>
          <option value="" >Seleccione un valor</option>
          <option value="cm" >cm</option>
          <option value="m" >m</option>
          <option value="km" >km</option>
        </select>

        <div>
          <button onClick={this.convertir.bind(this)}>CONVERSION</button><br />
          <span>Resultado: {this.state.message}</span>
        </div>

      </div>
      
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          value={this.state.name}
          onChange={this.onChange.bind(this)}
          name="name" id="name" type="text" placeholder="Nombre" />

        <label htmlFor="lastname">Apellido</label>
        <input
          value={this.state.lastname}
          onChange={this.onChange.bind(this)}
          name="lastname" id="lastname" type="text" placeholder="Apellido"/>

        <label htmlFor="age">Edad</label>
        <input
          value={this.state.age}
          onChange={this.onChange.bind(this)}
          name="age" id="age" type="number" placeholder="Edad" />

        <div>
          <label htmlFor="genero" >Genero</label>
          <input type="radio" name="genero"
            value="m"
            onChange={this.onChange.bind(this)}
            checked={this.state.genero === 'm'}/>Masculino
          <input type="radio" name="genero" value="f"
            onChange={this.onChange.bind(this)}
            checked={this.state.genero === 'f'}
          />Femenino
        </div>

        <label htmlFor="destino" >Destino</label>
        <select id="destino" name="destino"
          value={this.state.destino}
          onChange={this.onChange.bind(this)}>
          <option value="" >Seleccione un valor</option>
          <option value="noruega" >Noruega</option>
          <option value="españa" >España</option>
          <option value="alemania" >Alemania</option>
        </select>

        <div>
        <label htmlFor="Dietary">Dietary Restrictions</label>
        <input id="vegan" name="vegan" type="checkbox"
            value={this.state.vegan}
            onChange={this.onChange.bind(this)}
            /> Vegan <br></br>
        <input id="kosher" name="Kosher" type="checkbox"
            value={this.state.kosher}
            onChange={this.onChange.bind(this)}
            /> Kosher <br></br>
        <input id="lactosefree" name="lactosefree" type="checkbox"
            value={this.state.lactosefree}
            onChange={this.onChange.bind(this)}
            /> Lactose Free
        </div>

        <label htmlFor="about">Cuentanos algo de tí</label>
        <textarea id="about" name="about"
          value={this.state.about}
          onChange={this.onChange.bind(this)} placeholder="Hablanos de ti..."/>

        <div>
          <input id="acept" name="acept" type="checkbox"
            value={this.state.acept}
            onChange={this.onChange.bind(this)}
            checked={this.state.acept}/> Aceptas terminos y condiciones
        </div>

        <div>
          <button onClick={this.save.bind(this)}>Guardar</button>
          <span style={{color: 'green'}}>{this.state.message}</span>
        </div>

      
        <div class="final"> <h3>Enterd information</h3>
          <span>Name: {JSON.stringify(this.state.name)}</span><br></br>
          <span>LastName: {JSON.stringify(this.state.lastname)}</span><br></br>
          <span>Age: {JSON.stringify(this.state.age)}</span><br></br>
          <span>Genero: {JSON.stringify(this.state.genero)}</span><br></br>
          <span>Destino: {JSON.stringify(this.state.destino)}</span><br></br>
          <span>about: {JSON.stringify(this.state.about)}</span><br></br>
          <span>acept: {JSON.stringify(this.state.acept)}</span><br></br>
        </div>
        

      </div>
      </div>
    )
  }   
}

export default FormApp
