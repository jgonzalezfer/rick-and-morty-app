import React from 'react'

export const Characters = ({characters = []}) => {
  return (
    <div className="row">
        {
            characters.map((item, index) =>(
                <div key={index} className="col mb-4">
                    <div className="card" style={{minwidth: "200px"}}>
                        <img src={item.image} alt=""/>
                        <div className="card-boby">
                            <h5 className="card-title">{item.name}</h5>
                            <hr/>
                            <p>Species: {item.species}</p>
                            <p>Location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Characters