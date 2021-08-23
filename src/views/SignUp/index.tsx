import React, { useState, useCallback, FormEvent } from "react";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Container } from "./style";
import { api } from "../../services/api";

interface IData {
    registro: string;
    name: string;
    email:string;
    telefone: string;
    celular: string;
    senha: string;
    profissao: string;
}

const SignUp: React.FC = () => {
    const [ data, setData ] = useState<IData>({} as IData);
    const [ load, setLoad ] = useState(false);

    const history = useHistory()

    const hadleSumit = useCallback ( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post('', data).then(
            response => {
                setLoad(false)
                console.log(response.data)
                toast.success('Cadastro realizado com sucesso!', {
                    hideProgressBar: false,
                    onClose: () => history.push('/signin')             
                })
            }
        ).catch(e => { 
            toast.error('Oops, algo deu errado')
            setLoad(false)
            })
    }, [data, history])

    if(load){
        return(
            <div>
                <h1>Aguarde Carregando!</h1>
            </div>
        )
    }

    return (
        <Container>
            <div className="card">
                <h5>Cadastre-se</h5>
            <form onSubmit={ hadleSumit}>
                <input 
                type="text" 
                placeholder= "Informe seu registro" 
                onChange={e => setData({...data, registro: e.target.value})}
                />
                <input 
                type="text" 
                placeholder= "Informe seu nome" 
                onChange={e => setData({...data, name: e.target.value})}
                />
                <input 
                type="text" 
                placeholder= "Informe seu telefone" 
                onChange={e => setData({...data, telefone: e.target.value})}
                />
                <input 
                type="text" 
                placeholder= "Informe seu numero de celular" 
                onChange={e => setData({...data, celular: e.target.value})}
                />
                <input 
                type="text" 
                placeholder= "Informe seu email" 
                onChange={e => setData({...data, email: e.target.value})}
                />
                <input 
                type="password" 
                placeholder= "Informe seu senha" 
                onChange={e => setData({...data, senha: e.target.value})}
                />
                <input 
                type="text" 
                placeholder= "Informe seu profissão" 
                onChange={e => setData({...data, profissao: e.target.value})}
                />                
                <input type="submit" value= "Cadastrar" />
            </form>
            </div>
        </Container>
    );
}
export default SignUp;