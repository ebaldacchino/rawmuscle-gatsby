import React from "react"
import useForm from "../functions/useForm"
import SubmittedForm from "./SubmittedForm"
import validateEnquiry from "../functions/validateEnquiry"

export default ({ name, onScreen }) => {
  const startValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    phone: "",
    message: "",
  }

  const {
    serverState,
    setServerState,
    values,
    errors,
    handleSubmit,
    handleChange,
  } = useForm(validateEnquiry, startValues)
  return (
    <>
      <section className={`slide-in ${onScreen ? "on-screen" : ""}`}>
        <h2 className="glow">check my availability</h2>
        <p className="text-center">Everything we need to book {name}</p>
        <form onSubmit={handleSubmit} className="form">
          {serverState.submitting && errors.name && (
            <small>{errors.name}</small>
          )}
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={
              !serverState.submitting ? "" : errors.name ? "error" : "success"
            }
          />
          {serverState.submitting && errors.email && (
            <small>{errors.email}</small>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={
              !serverState.submitting ? "" : errors.email ? "error" : "success"
            }
          />
          {serverState.submitting && errors.date && (
            <small>{errors.date}</small>
          )}
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            className={
              !serverState.submitting ? "" : errors.date ? "error" : "success"
            }
          />
          {serverState.submitting && errors.time && (
            <small>{errors.time}</small>
          )}
          <input
            type="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            className={
              !serverState.submitting ? "" : errors.time ? "error" : "success"
            }
          />
          {serverState.submitting && errors.phone && (
            <small>{errors.phone}</small>
          )}
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className={
              !serverState.submitting ? "" : errors.phone ? "error" : "success"
            }
          />
          {serverState.submitting && errors.message && (
            <small>{errors.message}</small>
          )}
          <textarea
            name="message"
            placeholder="Enquiry"
            id=""
            cols="30"
            rows="10"
            value={values.message}
            onChange={handleChange}
            className={
              !serverState.submitting
                ? ""
                : errors.message
                ? "error"
                : "success"
            }
          ></textarea>
          <button className="btn">send</button>
        </form>
      </section>
      {serverState.submitted && (
        <SubmittedForm
          closeSection={() =>
            setServerState({ ...serverState, submitted: false })
          }
        />
      )}
    </>
  )
}
