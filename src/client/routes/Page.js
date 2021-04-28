import React from 'react';
import Helmet from 'react-helmet';

export default function Page(props) {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            {props.children}
        </>
    )
}
