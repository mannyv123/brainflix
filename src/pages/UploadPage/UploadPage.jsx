import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDesc, setVideoDesc] = useState("");
    const [isTitleBlank, setIsTitleBlank] = useState(false);
    const [isDescBlank, setIsDescBlank] = useState(false);
    const [upload, setUpload] = useState(false);
    const navigate = useNavigate();

    //Monitors title input field
    const handleTitleChange = (event) => {
        setVideoTitle(event.target.value);
        console.log(videoTitle);
    };

    //Monitors description input field
    const handleDescChange = (event) => {
        setVideoDesc(event.target.value);
        console.log(videoDesc);
    };

    //Triggers if upload is set to true; Displays a msg and then navigates to main page after a delay
    useEffect(() => {
        if (upload) {
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
        console.log(upload);
    }, [upload, navigate]);

    console.log("whats happening");

    //Runs validation on upload form; initially resets any previous errors before checking errors again
    const isFormValid = () => {
        setIsTitleBlank(false);
        setIsDescBlank(false);
        if (videoTitle === "" && videoDesc === "") {
            setIsTitleBlank(true);
            setIsDescBlank(true);
        } else if (videoTitle === "") {
            setIsTitleBlank(true);
        } else if (videoDesc === "") {
            setIsDescBlank(true);
        } else {
            return true;
        }
    };

    //Handles form submission if validation is passed; if validation passed, provides confirmation msg and redirects to main page
    const handleUploadSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            setIsTitleBlank(false);
            setIsDescBlank(false);
            setUpload(true);
            setVideoTitle("");
            setVideoDesc("");
        }
    };

    return (
        <main>
            <section className="upload">
                <h1 className="upload__page-title">Upload Video</h1>

                <form
                    action="submit"
                    className="upload__form"
                    onSubmit={(event) => handleUploadSubmit(event)}
                >
                    <div className="upload__details-container">
                        <div className="upload__thumbnail-container">
                            <h3 className="upload__thumbnail-label">Video Thumbnail</h3>
                            <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview" />
                        </div>
                        <div className="upload__inputs-container">
                            <label className="upload__input-label" htmlFor="videoTitle">
                                Title Your Video
                            </label>
                            <input
                                // className="upload__title-input"
                                className={`upload__input upload__input--title ${
                                    !isTitleBlank ? "" : "upload__input--error"
                                }`}
                                type="text"
                                name="videoTitle"
                                id="videoTitle"
                                placeholder="Add a title to your video"
                                value={videoTitle}
                                onChange={handleTitleChange}
                            />
                            <label
                                className="upload__input-label upload__input-label--desc"
                                htmlFor="videoDesc"
                            >
                                Add a Video Description
                            </label>
                            <textarea
                                // className="upload__desc-input"
                                className={`upload__input upload__input--desc ${
                                    !isDescBlank ? "" : "upload__input--error"
                                }`}
                                name="videoDesc"
                                id="videoDesc"
                                placeholder="Add a description to your video"
                                value={videoDesc}
                                onChange={handleDescChange}
                            ></textarea>
                        </div>
                    </div>
                    {isTitleBlank || isDescBlank ? (
                        <p className="upload__input--error-msg">Input fields cannot be blank</p>
                    ) : (
                        ""
                    )}
                    {!upload ? (
                        <div className="upload__form-actions">
                            <button type="" className="button button__publish">
                                <img src={publishIcon} alt="publish icon" className="button__publish-icon" />
                                Publish
                                <div className="button__publish-icon button--hidden"></div>
                            </button>
                            <Link className="upload__cancel" to="/">
                                <p>Cancel</p>
                            </Link>
                        </div>
                    ) : (
                        <p className="upload__success">
                            Thank you for your upload. Redirecting you to the home page...
                        </p>
                    )}
                    {console.log("whats happening")}
                </form>
            </section>
        </main>
    );
}

export default UploadPage;
