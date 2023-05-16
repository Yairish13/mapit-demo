import DefaultLayout from '@components/layouts/DefaultLayout.jsx'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <DefaultLayout lng={lng}>{children}</DefaultLayout>
    )
}

export default layout