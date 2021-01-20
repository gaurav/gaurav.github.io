/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 const React = require("react")

 exports.onRenderBody = ({
   setHeadComponents
 }, pluginOptions) => {
   setHeadComponents([
     <script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
   ])
 }
