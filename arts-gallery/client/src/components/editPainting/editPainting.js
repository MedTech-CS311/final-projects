import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './editPainting.css'
const EditPainting = () => {
  const { id } = useParams()
  console.log(id)
  const history = useHistory()
  const [data, setData] = useState({
    name: '',
    artist: '',
    year: '',
    paintingImg: '',
  })

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/painting/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const handleChange = (name, artist, year) => (e) => {
    const value = name === 'paintingImg' ? e.target.files[0] : e.target.value
    setData({ ...data, [name]: value, [artist]: value, [year]: value })
  }

  const handleSubmit = async () => {
    try {
      let formData = new FormData()
      formData.append('paintingImg', data.paintingImg)
      formData.append('name', data.name)
      formData.append('artist', data.artist)
      formData.append('year', data.year)

      const res = await fetch(`http://localhost:8000/api/v1/painting/${id}`, {
        method: 'PUT',
        body: formData,
      })
      if (res.ok) {
        setData({ name: '', paintingImg: '', artist: '', year: '' })
        history.replace('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='create'>
      <h2>Edit a Painting</h2>
      <label>Painting Name </label>
      <input
        className='form-control'
        placeholder='Enter name'
        type='text'
        name='name'
        value={data.name}
        onChange={handleChange('name')}
      />
      <label>Artist Name </label>
      <input
        className='form-control'
        placeholder='Enter artist'
        type='text'
        name='artist'
        value={data.artist}
        onChange={handleChange('artist')}
      />
      <label>Painting Year</label>
      <input
        className='form-control'
        placeholder='Enter year'
        type='text'
        name='year'
        value={data.year}
        onChange={handleChange('year')}
      />
      <label>Painting Image</label>
      <input
        className='form-control'
        type='file'
        accept='image/*'
        name='paintingImg'
        onChange={handleChange('paintingImg')}
      />
      <button className='btn btn-primary' onClick={handleSubmit}>
        Edit
      </button>
    </div>
  )
}

export default EditPainting
