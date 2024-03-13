import Header from "../components/Header";
function HeaderOnly( {children} ) {
    return ( 
        <div>
            <Header />
            <h2>Upload Page</h2>
        </div>
     );
}

export default HeaderOnly;