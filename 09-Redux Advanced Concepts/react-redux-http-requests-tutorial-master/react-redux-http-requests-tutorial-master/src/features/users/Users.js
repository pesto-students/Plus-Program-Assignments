import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './usersSlice'

const Cards = ({ user }) => {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={user.id}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

function Users() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  let content

  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (loading === 'idle') {
    content = data.map((item) => {
      return <Cards user={item} key={item.id} />
    })
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return <div className="row">{content}</div>
}

export default Users
