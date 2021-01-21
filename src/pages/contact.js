import React from "react"
import Layout from "../components/Layout"
import useForm from "../functions/useForm"
import validateInfo from "../functions/validateInfo"
import SubmittedForm from "../components/SubmittedForm"
import useApp from "../functions/useApp"
export default () => {
    const { isHalfShown } = useApp() 
  const startValues = {
    name: "",
    email: "",
    message: "",
    phone: "",
    subscribe: false,
  }
  const {
    serverState,
    setServerState,
    values,
    errors,
    handleSubmit,
    handleChange,
  } = useForm(validateInfo, startValues) 
  return (
    <Layout title="Contact Us" footerOnScreen={isHalfShown[0]}>
      <h1 className="glow">get in touch</h1>
      <section className="no-margin-top">
        <p className="text-center">
          You're more than welcome to ask 'anything'!
        </p>
        <form className="form" noValidate onSubmit={handleSubmit}>
          {serverState.submitting && errors.name && (
            <small>{errors.name}</small>
          )}
          <input
            className={
              !serverState.submitting ? "" : errors.name ? "error" : "success"
            }
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {serverState.submitting && errors.email && (
            <small>{errors.email}</small>
          )}
          <input
            type="email"
            name="email"
            className={
              !serverState.submitting ? "" : errors.email ? "error" : "success"
            }
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {serverState.submitting && errors.phone && (
            <small>{errors.phone}</small>
          )}
          <input
            type="phone"
            name="phone"
            className={
              !serverState.submitting ? "" : errors.phone ? "error" : "success"
            }
            value={values.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
          {serverState.submitting && errors.message && (
            <small>{errors.message}</small>
          )}
          <textarea
            name="message"
            className={
              !serverState.submitting
                ? ""
                : errors.message
                ? "error"
                : "success"
            }
            value={values.message}
            placeholder="Please type your message here..."
            onChange={handleChange}
            rows="5"
          ></textarea>

          <label htmlFor="subscribe">
            <input
              type="checkbox"
              name="subscribe"
              value={values.subscribe}
              onChange={handleChange}
            />{" "}
            I would like to subscribe to your mailing list
          </label>
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
    </Layout>
  )
}
