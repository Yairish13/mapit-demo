import SideLayout from '@components/Layouts/Side/index.jsx'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <SideLayout lng={lng}>{children}</SideLayout>
    )
}

export default layout;