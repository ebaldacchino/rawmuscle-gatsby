import validateInfo from "./validateInfo"

export default ({ name, email, phone, message, date, time }) => {
  let errors = {}
  if (!date.trim()) errors.date = "Date required"

  if (!time.trim()) errors.time = "Time required"
  return {
    ...validateInfo({ name, email, phone, message }),
    ...errors,
  }
}
