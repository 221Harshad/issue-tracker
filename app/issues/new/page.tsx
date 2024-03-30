'use client'

import React, { useState } from 'react'
import { TextField, TextArea, Button, Callout } from '@radix-ui/themes'
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
  const [error, setError] = useState('')
  const { register, control, handleSubmit } = useForm<IssueForm>()
  const router = useRouter()
  // console.log(register('title'))
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color="red" className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form
        className=" p-5 space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data)
            router.push('/issues')
          } catch (error) {
            setError('An unexpected Error occoured')
          }
        })}
      >
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
    </div>
  )
}

export default NewIssuePage