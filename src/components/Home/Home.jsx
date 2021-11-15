import React, {useState}from 'react'
import Header from '../../layout/Header'
import Form from './form/Form'
import '../Home/Home.styles.css'


import Card from '../Card/Card.jsx'

const Home = () => {

    const [searchValue, setSearchValue] = useState("")
    const [dataApi, setDataApi] = useState([])

    const handlerValue = ({value}) =>{
        setSearchValue(value)
        

    }

    const handlerSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${searchValue}`)
        const result = await response.json()
        setDataApi(result)
        console.log(dataApi)
        
    }

    return (
        <div className="header">
            
        <Header />
            <Form 
                handlerValue={handlerValue}
                handlerSubmit={handlerSubmit}

            />
            {
                searchValue === "" ?  <h3>Please, Input the user</h3> :
                searchValue !== dataApi.login ? <h4>No encontrado</h4> :
            
                    <Card
                        
                            key={dataApi?.id }
                            userName={dataApi?.login}
                            image={dataApi?.avatar_url}
                            followers={dataApi?.followers_url}
                            following={dataApi?.following_url}
                            repositories={dataApi?.repos_url}


                    />
              
                
            }
        </div>
    )
}

export default Home
