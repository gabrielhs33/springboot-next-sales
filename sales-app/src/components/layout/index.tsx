import { Menu } from './menu'
import { ReactNode } from 'react'
import { Message } from 'components'
import { Alert } from 'components/common/messages'

interface LayoutProps{

    title?:string;
    children?: ReactNode;
    messages?: Array<Alert>;
}

export const Layout: React.FC<LayoutProps> = (props:LayoutProps) =>{

    return(
        <div className="app">
            <section className="main-content columns is/fullheight">
                <Menu/>
                <div className="container column is-10">
                    <div className="section">
                        <div className="Card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    {props.title}
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {props.messages &&
                                        props.messages.map(msg => <Message  key={msg.text} {...msg}/>)
                                    }
                    
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

