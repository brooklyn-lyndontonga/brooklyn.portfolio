import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProject, getProjects, Project } from '../apis/apiClient.ts';

const GetProjects = () => {
  const queryClient = useQueryClient()
  const {
    data, 
    isError,
    isPending,
     
    error
    } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  if (isError) {
    return <p>There was an error: {error.message}</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  const handleDelete = (id: number) => {
    deleteProject(id)
    queryClient.invalidateQueries({queryKey: ['projects']})
  }

  return (
    <div>
      <h2>Projects</h2>
      {data?.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.link}</p>
          <button onClick={() => handleDelete(project.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default GetProjects