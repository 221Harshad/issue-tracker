'use client'

import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
interface IssueForm {
  title: string
  description: string
}

const NewIssuePage = () => {
  const { register, control,handleSubmit } = useForm<IssueForm>()
  const router = useRouter()
  // console.log(register('title'))
  return (
    <form className="max-w-xl p-5 space-y-3" onSubmit={handleSubmit(async(data)=>{
     await axios.post('/api/issues', data)
     router.push('/issues')
    } )}>
      <TextField.Root
        placeholder="Title"
        {...register('title')}
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit</Button>
    </form>
  )
}

export default NewIssuePage
