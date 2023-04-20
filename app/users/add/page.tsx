"use client"

import { IUser } from '@/types'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function AddUser() {

  const [user, setUser] = useState<IUser>({ name: "", password: "", number: 0 })

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // call api
    const data = await axios.post("/api/users", user)

    console.log(data)
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const name = e.target.name as keyof IUser
    const value = e.target.value as string | number

    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder='name' />
      <input onChange={handleChange} type="number" placeholder='number' />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
