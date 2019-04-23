import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />

    <div
      style={{
        minHeight: 200,
        backgroundColor: "#0058a9",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f8f8f8' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }}
    />

    <section style={{ backgroundColor: "#f8f8f8" }}>
      <div
        style={{
          display: "flex",
          padding: `4rem 1rem`,
          flexDirection: "column",
          maxWidth: 1080,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>About</h2>
        <p>
          Apex Refrigeration and Air Conditioning Limited was established in
          2003. The business is located in Nairobi with a branch in Nakuru, We
          are one of the best refrigeration and air conditioning businesses in
          the region. We have a very talented and dedicated staff working with
          us. They are well trained and committed to the goals of the enterprise
          and they share the same enthusiasm as the entrepreneurs. Till now, we
          have received a great response from our customers and with their
          continued support and encouragement, we are confident of achieving all
          our goals and objectives. So, no matter what your requirements are
          pertaining to refrigeration and air conditioning,Apex Refrigeration
          and Air Conditioning is the place to visit
        </p>
        <h4 style={{ fontWeight: 700, marginTop: 50 }}>Our vision</h4>
        <p>
          Our vision is simple, to be a leading refrigeration and air
          conditioning company in the region and render an excellent Service to
          all Small, Medium and large Size Enterprises
        </p>
        <h4 style={{ fontWeight: 700, marginTop: 50 }}>Our mission</h4>
        <p>
          Our Mission is to be the preferred service provider in this line of
          work and be able to cater to a much larger customer base. .To always
          be professional &amp; ethical in all our business dealings and to add
          value to our clients
        </p>
        <h4 style={{ fontWeight: 700, marginTop: 50 }}>Our values</h4>
        <p>
          <ul>
            <li>Friendly customer care</li>
            <li>Deliver professional services</li>
            <li>Good quality products and spares</li>
            <li>Good quality maintenance and service</li>
            <li>Cost effective systems</li>
          </ul>
        </p>

        <h4 style={{ fontWeight: 700, marginTop: 50 }}>Services</h4>
        <p>
          We offer the following range of services for all small to large size
          Enterprises
          <ul style={{ marginTop: 32 }}>
            <li>New equipment supply and installation</li>
            <li>Good quality after sale service</li>
            <li>Existing equipment scheduled and breakdown maintenance</li>
            <li>Retail, wholesale and bulk supply of related parts</li>
          </ul>
        </p>
      </div>
    </section>
  </Layout>
)

export default SecondPage
