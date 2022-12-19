import React from 'react'
import { Provider } from 'react-redux'
import {store} from '@company/core'

export function Layout({children}: React.PropsWithChildren) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}