import React from 'react'
import { storesContext } from '../context/storesContexts'

export const useStores = () => React.useContext(storesContext)
