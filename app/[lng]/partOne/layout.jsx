import DefaultLayout from '@components/Layouts/Default/index.jsx'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <>
            <DefaultLayout lng={lng}>
                {children}
            </DefaultLayout>
        </>
    )
}

export default layout;