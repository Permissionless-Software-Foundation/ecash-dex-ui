/*
  Load <script> libraries
*/

import useScript from '../hooks/use-script'

function LoadScripts () {
  // useScript('https://unpkg.com/minimal-slp-wallet')

  // Load the libraries from the local directory.
  useScript(`${process.env.PUBLIC_URL}/minimal-ecash-wallet.min.js`)

  return true
}

export default LoadScripts
