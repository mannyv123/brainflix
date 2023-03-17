import { useNavigate, Link } from "react-router-dom";
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
    const [isTitleBlank, setIsTitleBlank] = useState(false); //used in form validation to render error scss if input is blank
    const [isDescBlank, setIsDescBlank] = useState(false); //used in form validation to render error scss if input is blank
    const [upload, setUpload] = useState(false); //used to trigger navigate when upload button is clicked
    const navigate = useNavigate();

    // const imageMimeType = /image\/(png|jpg|jpeg)/i;

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
        setFile(event.target.files[0]);
        // if (file !== null && !file.type.match(imageMimeType)) {
        //     alert("Image file type not accepted. Only PNG, JPG, or JPEG accepted.");
        //     setFile(null);
        //     console.log("I ran");
        //     return;
        // }
        console.log(file);
    };

    useEffect(() => {
        let fileReader,
            isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (event) => {
                const { result } = event.target;
                console.log(event.target);
                if (result && !isCancel) {
                    setFileDataUrl(result);
                }
            };
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
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
        if (videoTitle === "" && videoDesc === "") {
            setIsTitleBlank(true);
            setIsDescBlank(true);
            return false;
        } else if (videoTitle === "") {
            setIsTitleBlank(true);
            return false;
        } else if (videoDesc === "") {
            setIsDescBlank(true);
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

        console.log(file);
        const formData = new FormData();
        formData.append("title", videoTitle);
        formData.append("description", videoDesc);
        formData.append("file", file);
        console.log(formData);

        axios
            .post(`${API_URL}/videos`, formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        setIsTitleBlank(false);
        setIsDescBlank(false);
        setUpload(true);
        setVideoTitle("");
        setVideoDesc("");
    };
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
                                className="upload__thumbnail-img"
                                src={fileDataUrl ? fileDataUrl : uploadPreview}
                                alt="upload preview"
                            />
                            <input
                                type="file"
                                name="file"
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
                    {isTitleBlank || isDescBlank ? (
                        <p className="upload__input--error-msg">Input fields cannot be blank</p>
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
                            <Link className="upload__cancel" to="/">
                                <p>Cancel</p>
                            </Link>
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
