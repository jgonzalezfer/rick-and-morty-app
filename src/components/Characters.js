import React from 'react'

export const Characters = ({characters = []}) => {
  return (
    <div className="row">
        {
            characters.map((item, index) =>(
                <div key={index} className="col">
                    <div className="card" style={{minwidth: "200px"}}>
                        <img src={item.image} alt=""/>
                        <div className="card-boby">
                            <h5>{item.name}</h5>

                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Characters