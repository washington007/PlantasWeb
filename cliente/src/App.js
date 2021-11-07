import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';
import CrearCita from './components/rutas/CrearCita';
import CotizarPlanta from './components/rutas/CotizarPlanta';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

//console.log(process.env.REACT_APP_BACKEND_URL);

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                    <RutaPrivada exact path="/proyectos" component={Proyectos} />
                    <Route exact path="/crear-cita" component={CrearCita} />
                    <Route exact path="/cotizar-planta" component={CotizarPlanta} />
                </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
