import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
    const [upload, setUpload] = useState(false);
    // const timerId = useRef(null);
    const navigate = useNavigate();

    //Triggers if upload is set to true; Displays a msg and then navigates to main page after a delay
    useEffect(() => {
        if (upload) {
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
        console.log(upload);
    }, [upload, navigate]);

    //Sets upload to true when the publish button is clicked
    const handleUploadClick = () => {
        setUpload(true);
    };
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
                            <p>Thank you for your upload. Redirecting you to the home page...</p>
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
