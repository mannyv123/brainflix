import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import axios from "axios";
import { API_URL } from "../VideoPage/VideoPage";

function UploadPage() {
    const [videoTitle, setVideoTitle] = useState(""); //tracks video title input
    const [videoDesc, setVideoDesc] = useState(""); //tracks video description input
    const [file, setFile] = useState(null); //tracks uploaded image files
    const [fileDataUrl, setFileDataUrl] = useState(null); //tracks data url for uploaded image file
    const [filename, setFilename] = useState("Select an Image"); //tracks file name of uploaded file
    const [isTitleBlank, setIsTitleBlank] = useState(false); //used in form validation to render error scss if input is blank
    const [isDescBlank, setIsDescBlank] = useState(false); //used in form validation to render error scss if input is blank
    const [imageMissing, setImageMissing] = useState(false);
    const [upload, setUpload] = useState(false); //used to trigger navigate when upload button is clicked
    const navigate = useNavigate();

    //Monitors title input field
    const handleTitleChange = (event) => {
        setVideoTitle(event.target.value);
    };

    //Monitors description input field
    const handleDescChange = (event) => {
        setVideoDesc(event.target.value);
    };

    //Monitors image input field
    const handleImageUpload = (event) => {
        setFile(event.target.files[0]); //updates file state with the File object which represents the selected file
    };

    //useEffect to read the selected file and set the file data url;
    useEffect(() => {
        let fileReader,
            isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (event) => {
                //onload event occurs when the file is finished loading / fileReader is done reading the file
                const { result } = event.target;
                if (result && !isCancel) {
                    setFileDataUrl(result); //sets the file data url to the result; which allows the image element to set source to this url
                    setFilename(file.name); //sets file name so that it is displayed once the is loaded
                }
            };
            fileReader.readAsDataURL(file); //FileReader object starts reading the file; once complete, onload above is called
        }
        return () => {
            //cleanup function; return stmnt needed if component is unmounted before loading is finished
            isCancel = true; //first sets isCancel to true to ensure the onload function above does not set the file data url
            if (fileReader && fileReader.readyState === 1) {
                //checks to see if fileReader object created and if its state is in the loading state
                fileReader.abort(); //if the above two are true, aborts the file read
            }
        };
    }, [file]);

    //Triggers if upload is set to true; Displays a msg and then navigates to main page after a delay
    useEffect(() => {
        if (upload) {
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    }, [upload, navigate]);

    //Runs validation on upload form; initially resets any previous errors before checking errors again
    const isFormValid = () => {
        setIsTitleBlank(false);
        setIsDescBlank(false);
        setImageMissing(false);
        if (videoTitle === "" && videoDesc === "" && !file) {
            setIsTitleBlank(true);
            setIsDescBlank(true);
            setImageMissing(true);
            return false;
        } else if (videoTitle === "") {
            setIsTitleBlank(true);
            return false;
        } else if (videoDesc === "") {
            setIsDescBlank(true);
            return false;
        } else if (!file) {
            setImageMissing(true);
            return false;
        } else {
            return true;
        }
    };

    /*Handles form submission if validation is passed; if validation passed, 
    provides confirmation msg and redirects to main page*/
    const handleUploadSubmit = (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            return console.error("Form is not valid; missing information");
        }

        const formData = new FormData();
        formData.append("title", videoTitle);
        formData.append("description", videoDesc);
        formData.append("file", file);

        axios
            .post(`${API_URL}/videos`, formData)
            .then(() => {
                setIsTitleBlank(false);
                setIsDescBlank(false);
                setImageMissing(false);
                setUpload(true);
                setVideoTitle("");
                setVideoDesc("");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //When cancel button clicked, navigate back home
    const handleCancel = () => navigate("/");

    console.log(file);
    return (
        <main>
            <section className="upload">
                <h1 className="upload__page-title">Upload Video</h1>
                <form
                    action="submit"
                    className="upload__form"
                    encType="multipart/form-data"
                    onSubmit={(event) => handleUploadSubmit(event)}
                >
                    <div className="upload__details-container">
                        <div>
                            <h3 className="upload__thumbnail-label">Video Thumbnail</h3>
                            <img
                                className={`upload__thumbnail-img ${
                                    !imageMissing ? "" : "upload__thumbnail-img--error"
                                }`}
                                src={fileDataUrl ? fileDataUrl : uploadPreview}
                                alt="upload preview"
                            />
                            <label
                                htmlFor="file"
                                className={`button button__image 
                                ${!imageMissing ? "" : "button__image--error"}`}
                            >
                                {filename}
                            </label>
                            <input
                                className="upload__file-input"
                                type="file"
                                name="file"
                                id="file"
                                onChange={handleImageUpload}
                                accept=".jpg, .jpeg, .png"
                            />
                        </div>
                        <div className="upload__inputs-container">
                            <label className="upload__input-label" htmlFor="videoTitle">
                                Title Your Video
                            </label>
                            <input
                                className={`upload__input upload__input--title 
                                ${!isTitleBlank ? "" : "upload__input--error"}`}
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
                                className={`upload__input upload__input--desc 
                                ${!isDescBlank ? "" : "upload__input--error"}`}
                                name="videoDesc"
                                id="videoDesc"
                                placeholder="Add a description to your video"
                                value={videoDesc}
                                onChange={handleDescChange}
                            ></textarea>
                        </div>
                    </div>
                    {isTitleBlank || isDescBlank || imageMissing ? (
                        <p className="upload__input--error-msg">Input fields cannot be missing</p>
                    ) : (
                        ""
                    )}
                    {!upload ? (
                        <div className="upload__form-actions">
                            <button type="submit" className="button button__publish">
                                <img src={publishIcon} alt="publish icon" className="button__publish-icon" />
                                Publish
                                <div className="button__publish-icon button--hidden"></div>
                            </button>
                            <button type="button" className="upload__cancel" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <p className="upload__success">
                            Thank you for your upload. Redirecting you to the home page...
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}

export default UploadPage;
