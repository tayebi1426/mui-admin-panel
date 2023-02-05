import axios from 'axios'
class ProjectService {

    newProject = (project) => {
        axios.post("http://localhost:2010/projects",project,{headers:{"content-type":"application/json"}}).then(res=>{
        })
    }
}

export default ProjectService