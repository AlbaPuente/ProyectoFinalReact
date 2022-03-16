import React,  {Fragment, useEffect, useState} from 'react';
import Alert from './Alert';
import LetraCancion from './LetraCancion';

const Formulario = () => {
    const baseURL = 'https://api.lyrics.ovh/v1/'

    const[buscar, setBuscar] = useState ({
        artista: '',
        cancion: ''
    })

    const [LyricSong, setLyricSong] = useState('')
    const[Lyric, setLyric] = useState([])

    let buscarCancion = (artista, cancion) => {
        fetch (baseURL.concat(artista,'/', cancion))
            .then(response => {
                if (response){
                    return response.json()
                } else {
                    throw new Error('No es posible encontrar la canción')
                }
            })
            .then(responseAsJSON =>{
                setLyricSong(responseAsJSON.lyrics)
            })
            .catch (error => {
                console.log(error.message)
            })
    }

    const handleSubmit = e => {
        e.preventDefault ()

        if (Object.values(buscar).includes('')){
            Alert('Indica el artista y la canción')
            return //REVISAR
        } else {
            buscarCancion(buscar.artista, buscar.cancion)
            console.log(LyricSong);
        }
    }

    useEffect(() =>{
        setLyric(<LetraCancion letra={LyricSong}/>)
    },[LyricSong])

  return (
    <Fragment>
    {localStorage.getItem('modo') === true ? (
        <Fragment> 
        <form onSubmit={handleSubmit}>
            <legend className='bg-superior'> BUSCA EL ARTISTA Y SU LETRA</legend>
            <div className='form-formulario'>
                <div className='artista'>
                    <label>
                        <p>Artista</p>
                        <input 
                            type="text" 
                            name="artista" 
                            placeholder='Nombre del artista'
                            value= {buscar.artista}
                            onChange= {e => setBuscar({
                                ...buscar,
                                artista : e.target.value
                            })}
                        />
                    </label>
                </div>
                <div className='cancion'>
                    <label>
                        <p>Canción</p>
                        <input 
                            type="text" 
                            name="cancion" 
                            placeholder='Nombre de la canción'
                            value= {buscar.cancion}
                            onChange= {e => setBuscar({
                                ...buscar,
                                cancion : e.target.value
                            })}
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='boton-buscar'
                >Buscar
                </button>

            </div>

        </form>
        {Lyric}
    </Fragment>
    ) : (
        <Fragment> 
        <form onSubmit={handleSubmit}>
            <legend className='bg-superior-noche'> BUSCA EL ARTISTA Y SU LETRA</legend>
            <div className='form-formulario-noche'>
                <div className='artista-noche'>
                    <label>
                        <p>Artista</p>
                        <input 
                            type="text" 
                            name="artista" 
                            placeholder='Nombre del artista'
                            value= {buscar.artista}
                            onChange= {e => setBuscar({
                                ...buscar,
                                artista : e.target.value
                            })}
                        />
                    </label>
                </div>
                <div className='cancion-noche'>
                    <label>
                        <p>Canción</p>
                        <input 
                            type="text" 
                            name="cancion" 
                            placeholder='Nombre de la canción'
                            value= {buscar.cancion}
                            onChange= {e => setBuscar({
                                ...buscar,
                                cancion : e.target.value
                            })}
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='boton-buscar-noche'
                >Buscar
                </button>

            </div>

        </form>
        {Lyric}
    </Fragment>
    )}
    </Fragment>

    // <Fragment> 
    //     <form onSubmit={handleSubmit}>
    //         <legend className='bg-superior'> BUSCA EL ARTISTA Y SU LETRA</legend>
    //         <div className='form-formulario'>
    //             <div className='artista'>
    //                 <label>
    //                     <p>Artista</p>
    //                     <input 
    //                         type="text" 
    //                         name="artista" 
    //                         placeholder='Nombre del artista'
    //                         value= {buscar.artista}
    //                         onChange= {e => setBuscar({
    //                             ...buscar,
    //                             artista : e.target.value
    //                         })}
    //                     />
    //                 </label>
    //             </div>
    //             <div className='cancion'>
    //                 <label>
    //                     <p>Canción</p>
    //                     <input 
    //                         type="text" 
    //                         name="cancion" 
    //                         placeholder='Nombre de la canción'
    //                         value= {buscar.cancion}
    //                         onChange= {e => setBuscar({
    //                             ...buscar,
    //                             cancion : e.target.value
    //                         })}
    //                     />
    //                 </label>
    //             </div>
    //             <button
    //                 type='submit'
    //                 className='boton-buscar'
    //             >Buscar
    //             </button>

    //         </div>

    //     </form>
    //     {Lyric}
    // </Fragment>
  )
}

export default Formulario