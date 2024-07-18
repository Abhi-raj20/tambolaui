import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <>
      <section className='admin-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="admin-heading">
                        <h3>ADMIN DASHBOARD</h3>
                    </div>
                    <div className="admin-card">
                        <div className="col-md-10 mx-auto">
                            <h3>GAME SETTINGS</h3>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6 px-1">
                                        <div className="heading-label">
                                            <label htmlFor="">Settings type </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <div className="heading-label">
                                            <label htmlFor="">Settings value </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Game date-time </label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <input type="datetime-local" name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Total ticket limit (within 600)</label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <input type="number" value={600} name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Ticket price</label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <input type="number" value={300} name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Settings type</label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <select name="" id="">
                                            <option value="">INR</option>
                                            <option value="">USD</option>
                                            <option value="">EURO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Website status</label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <select name="" id="">
                                            <option value="">WE ARE OPEN</option>
                                            <option value="">WE ARE CLOSED</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Booking status</label>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <select name="" id="">
                                            <option value="">BOOKING OPEN</option>
                                            <option value="">BOOKING CLOSED</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 px-1 text-center">
                                        <button className='btn btn-danger'>SAVE GAME SETTINGS</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="admin-card">
                        <div className="col-md-10 mx-auto">
                            <h3>DIVIDENT SETTINGS</h3>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6 px-1">
                                        <div className="heading-label">
                                            <label htmlFor="">Divident type </label>
                                        </div>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <div className="heading-label">
                                            <label htmlFor="">Prize amount </label>
                                        </div>
                                    </div>
                                    <div className="col-md-1 px-1">
                                        <div className="heading-label text-center">
                                            <label htmlFor="">X</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">First Full House </label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={7000} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Second Full House</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={1200} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Third Full House</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={750} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Full Sheet Bonus</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={1500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Half Sheet Bonus</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={1000} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Top Line</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Middle Line</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Middle Line</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Bottom Line</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Box Bonus</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Corner</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={300} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Star</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Early 5</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={150} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Quick 6</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number" value={500} name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1">
                                        <label htmlFor="">Quick 7</label>
                                    </div>
                                    <div className="col-md-5 px-1">
                                        <input type="number"  name="" id="" />
                                    </div>
                                    <div className="col-md-1 px-1 text-center">
                                        <input type="checkbox"  name="" id="" />
                                    </div>
                                    <div className="col-md-6 px-1 text-center">
                                        <button className='btn btn-danger'>SAVE DIVIDENTS</button>
                                    </div>
                                    <div className="col-md-6 px-1 text-center">
                                        <button className='btn btn-dark'>SAVE DIVIDENTS</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Admin
