import DefaultLayout from '@components/Layouts/Default/index.jsx'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <body suppressHydrationWarning={true}>
            <DefaultLayout lng={lng}>
                {children}</DefaultLayout></body>
    )
}

export default layout