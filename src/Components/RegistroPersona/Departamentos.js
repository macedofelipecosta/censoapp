
import Departamento from './Departamento';
import { useDispatch, useSelector } from 'react-redux';
import { guardarDepartamento} from '../Features/departamentoSlice'

const Departamentos = ({}) => {
    const dispatch = useDispatch();
    

    
    const obtenerDepartamento=(event)=>{
        let selected=event.target.value;
        dispatch(guardarDepartamento(selected))
    }
    
    const departamentos = useSelector(state => state.departamentos.departamentos)

        return (
            <div className="form-floating">
                <select id="floatingDepartamento" className="form-control" required onChange={obtenerDepartamento}>
                    <option key={'defaultDep'} > Departamentos</option>
                    {departamentos.map(dep => <Departamento key={dep['id']}  {...dep} ></Departamento>)}
                </select>
                <label htmlFor="floatingDepartamento">Departamento</label>
            </div>
        )
    }

    export default Departamentos