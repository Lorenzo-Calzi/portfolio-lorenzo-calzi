import * as React from "react";
import {BarLoader} from "react-spinners";

function LoaderSpinner(props) {

    return (
        <>
            {
                props.loading.background && (
                    <div className="loader-container">
                        {
                            props.loading.bar && (
                                <BarLoader color={'#6D56E9'} loading={props.loading.bar} className="loader-spinner" height={15} width={200} speedMultiplier={1}/>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default LoaderSpinner;