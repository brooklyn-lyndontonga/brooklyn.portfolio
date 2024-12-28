import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProject, Project } from '../apis/apiClient.ts';

const AddProjectForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (projects: Project) => addProject(projects),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['projects']})
    },
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    addMutation.mutate({
      id: 0,
      date: '',
      title,
      description,
      link,
    })
  }
  
  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <label htmlFor="title">Title</label>
      <input 
      type="text" 
      placeholder="Edit Title..." 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="description">Description</label>
      <input 
      type="text" 
      placeholder="Edit Description..." 
      value={description} 
      onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor="link">Link</label>
      <input 
      type="text" 
      placeholder="Edit Link..." 
      value={link} 
      onChange={(e) => setLink(e.target.value)} />
      <button type="submit" disabled={addMutation.isPending}>
        {addMutation.isPending ? 'Adding...' : 'Submit'}
        </button>
    </form>
  )
}

export { AddProjectForm };