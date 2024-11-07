import { useState } from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {ItemRepo} from "../components/ItemRepo";
import { Container,GithubIcon } from "./styles";
import {api} from '../services/api'

function App() {
  const [currentRepo,setCurrentRepo] = useState('')
  const [repos,setRepos] = useState([]) 


  const handleSearchRepo = async () =>{
   
    const {data} = await api.get(`repos/${currentRepo}`)
  
    if(data.id){
      setRepos(prev => [...prev, data])
      setCurrentRepo('')

    }
  
  }


  return (
    <Container> 
      <GithubIcon />
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo  repo={repo} key={repos}/>)}
    </Container>
  )
}

export default App
