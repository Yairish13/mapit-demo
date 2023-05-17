import LoginLayout from '@components/Layouts/Login/index.jsx'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <LoginLayout lng={lng}>{children}</LoginLayout>
    )
}

export default layout;