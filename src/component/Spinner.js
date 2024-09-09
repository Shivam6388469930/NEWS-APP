import React, { Component } from 'react'
import loading from"./loading.gif"

export default class Spinner extends Component {

  render() {
    // adding the loading spinner
    return (
      <div className='text-center mt-3'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
