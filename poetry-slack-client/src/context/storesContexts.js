import React from 'react'
import HaikuStore from '../stores/HaikuStore'
import SessionStore from '../stores/SessionStore'

export const storesContext = React.createContext({
   haiku: HaikuStore,
   session: SessionStore,
})
