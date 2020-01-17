import React from 'react'
import HaikuStore from '../stores/HaikuStore'
import SessionStore from '../stores/SessionStore'
import KitchenPoemStore from '../stores/KitchenPoemStore'

export const storesContext = React.createContext({
   haiku: HaikuStore,
   session: SessionStore,
   kitchen: KitchenPoemStore
})
