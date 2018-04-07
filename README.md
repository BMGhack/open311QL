# Open311QL

This project exposes the Open311 API as a GraphQL server. It is an Node.js Express application that fetches data using Axios. The project is currently hosted on an AWS EC2 instance at http://open311ql.pw/graphql .

## Open311

Open311 is a solution for cities to allow for reporting and monitoring requests that need performed throughout the city. This project uses the GeoReport API v2 spec, which the website has the following to say about it.

> The GeoReport API v2 allows developers to build applications to both view and report issues which government entities like cities are responsible for addressing. These interactions are often referred to as “service requests” or “calls for service” and have traditionally been handled by custom web forms or phone based call centers (sometimes using the 311 phone number or other short-code). The GeoReport API is designed to allow both government and third party developers to create new applications and technologies that can integrate directly with these same official contact centers in any government that supports the standard. The current specification is focused on location-based non-emergency issues such as graffiti, potholes, and street cleaning.

More info about Open311 can be found at their website http://www.Open311.org

I would also recommend looking over the documentation for the GeoReport API v2 spec at https://wiki.open311.org/GeoReport_v2/

## GraphQL

GraphQL is a technology to make getting data for client-side applications easier. It is developed by Facebook and is often paired with a React front end because that's how the Zuck does things. According to their site:

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

More info and tutorials are available on their site http://graphql.org

## Axios

Axios is a promise based library that can be used in Javascript for making HTTP requests. One of my favorite features about the library is that is functions in both client side code and in node.js.

For documentation and further explanations, visit the github page for the project at https://github.com/axios/axios