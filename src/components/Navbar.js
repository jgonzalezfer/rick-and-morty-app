import React from 'react'

const  Navbar = ({brand}) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
         <a class="navbar-brand" href="#">{brand}</a>
        </div>
    </nav>
  )
}

export default Navbar


