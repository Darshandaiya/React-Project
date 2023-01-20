import '../App.css';
import React from 'react';

class Footer extends React.Component {



    render() {
        return (
            <div>
                <footer id="main-footer" className="text-center p-4 ">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>Copyright &copy;
                                    <span id="year"></span> Rays Technology
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        );
    }
}


export default Footer;