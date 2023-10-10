import Footer from "./footer/Footer";
import Nav from "./nav/Nav";


const Layout = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;