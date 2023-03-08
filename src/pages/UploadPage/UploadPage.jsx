import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
    const [upload, setUpload] = useState(false);
    const timerId = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (upload) {
            timerId.current = setTimeout(() => {
                // setUpload(false); //this i need to change to navigate
                navigate("/");
            }, 5000);
        }
        console.log(upload);
        return () => {
            clearTimeout(timerId.current);
        };
    }, [upload, navigate]);

    const handleUploadClick = () => {
        // setUpload(`Thank you for your upload. Redirecting you to the main page...`);
        // console.log(setTimeout(() => <Navigate to="/" />, 5000));

        setUpload(true);
    };
    // return (
    //     <div>
    //         <p>Redirecting</p>
    //         {setTimeout(
    //             () => (
    //                 <Navigate to="/" />
    //             ),
    //             1000
    //         )}
    //     </div>
    // );

    // return (
    //     <div>
    //         {alert("Thank you for your upload!")}
    //         <Navigate to="/" />;
    //     </div>
    // );
    console.log("whats happening");
    return (
        <main>
            <section className="upload">
                <h1 className="upload__page-title">Upload Video</h1>
                {/* no action in form as per sprint-2 requirements, functionality of the form not required */}
                <form action="" className="upload__form">
                    <div className="upload__thumbnail-container">
                        <h3 className="upload__thumbnail-label">Video Thumbnail</h3>
                        <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview" />
                    </div>
                    <div className="upload__inputs-container">
                        <label className="upload__input-label" htmlFor="videoTitle">
                            Title Your Video
                        </label>
                        <input
                            className="upload__title-input"
                            type="text"
                            name="videoTitle"
                            id="videoTitle"
                            placeholder="Add a title to your video"
                        />
                        <label className="upload__input-label" htmlFor="videoDesc">
                            Add a Video Description
                        </label>
                        <textarea
                            className="upload__desc-input"
                            name="videoDesc"
                            id="videoDesc"
                            placeholder="Add a description to your video"
                        ></textarea>
                    </div>
                    <div onClick={handleUploadClick}>
                        {!upload ? (
                            <button type="" className="button button__publish">
                                <img src={publishIcon} alt="publish icon" className="button__publish-icon" />
                                Publish
                                <div className="button__publish-icon button--hidden"></div>
                            </button>
                        ) : (
                            "Loading"
                        )}
                        {console.log("whats happening")}
                    </div>
                </form>
                <Link className="upload__cancel" to="/">
                    <p>Cancel</p>
                </Link>
            </section>
        </main>
    );
}

export default UploadPage;
