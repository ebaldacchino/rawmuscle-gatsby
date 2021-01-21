import React from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export const testimonials = [
  {
    review:
      "Amazing shows, lots of fun and the guys are amazing. Thanks for an amazing 8 yrs and many more to come.",
    author: "Belinda",
    location: "Melbourne, VIC",
  },
  {
    review:
      "Awesome entertainment and really nice, genuine guys. Plus, they aren't bad to look at? I love you guys! xx",
    author: "Nadia",
    location: "Melbourne, VIC",
  },
  {
    review:
      "Fantastic show! Was a good night with everything going on the world at the moment. Nice night out for the ladies!",
    author: "Gina",
    location: "Palmerston North, NZ",
  },
  {
    review:
      "First time going to a Raw Muscle show. I loved it. Thanks to the boys at Raw Muscle for putting on a good show.",
    author: "Kayla",
    location: "Geelong, VIC",
  },
  {
    review: `Raw Muscle have the best male strippers. They never disappoint, and you'll have the most amazing time!`,
    author: "Sammi",
    location: "Inglewood, VIC",
  },
  {
    review: `Absolutely amazeballs! Started late but was worth the wait. Wow, you guys rocked my daughters world.`,
    author: "Tania",
    location: "Booval, QLD",
  },
  {
    review: `I saw them on Saturday night in Forbes, and 'OH-MY-GOD'! It's not my first Raw Muscle show and definitely not my last!`,
    author: "Saffie",
    location: "Rockhampton, QLD",
  },
  {
    review: `The guys definitely know how to put on a show for us ladies. All I can say is, "freaking amazing guys"!`,
    author: "Bec",
    location: "Devonport, TAS",
  },
]
export default () => {
  return (
    <>
      {testimonials.map((t, id) => {
        return (
          <div key={id} className="testimonial">
            <div className="quote-box">
              <FaQuoteLeft className="quotes left" />
              <p>{t.review}</p>
              <FaQuoteRight className="quotes right" />
            </div>
            <div className="quote-arrow"></div>
            <div className="author-details">
              <p>{t.author}</p>
              <p>{t.location}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
